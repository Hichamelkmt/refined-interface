import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Briefcase, 
  Calendar, 
  Star, 
  Shield, 
  LogOut,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Home
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardStats {
  totalUsers: number;
  totalCraftsmen: number;
  totalBookings: number;
  pendingBookings: number;
}

interface Craftsman {
  id: string;
  full_name: string;
  phone: string;
  specialty: string;
  is_verified: boolean;
  is_available: boolean;
  rating: number;
  created_at: string;
}

interface Booking {
  id: string;
  service_description: string;
  booking_date: string;
  status: string;
  total_price: number;
  created_at: string;
  craftsman_id: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();
  const { toast } = useToast();
  
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalCraftsmen: 0,
    totalBookings: 0,
    pendingBookings: 0,
  });
  const [craftsmen, setCraftsmen] = useState<Craftsman[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
      return;
    }

    if (!loading && user && !isAdmin) {
      toast({
        title: "غير مصرح",
        description: "ليس لديك صلاحية الوصول لهذه الصفحة",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    if (isAdmin) {
      fetchDashboardData();
    }
  }, [user, isAdmin, loading, navigate]);

  const fetchDashboardData = async () => {
    setLoadingData(true);
    try {
      // Fetch stats
      const [usersRes, craftsmenRes, bookingsRes] = await Promise.all([
        supabase.from('profiles').select('id', { count: 'exact', head: true }),
        supabase.from('craftsmen').select('*'),
        supabase.from('bookings').select('*'),
      ]);

      const pendingBookings = bookingsRes.data?.filter(b => b.status === 'pending').length || 0;

      setStats({
        totalUsers: usersRes.count || 0,
        totalCraftsmen: craftsmenRes.data?.length || 0,
        totalBookings: bookingsRes.data?.length || 0,
        pendingBookings,
      });

      setCraftsmen(craftsmenRes.data || []);
      setBookings(bookingsRes.data || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: "خطأ",
        description: "حدث خطأ في جلب البيانات",
        variant: "destructive",
      });
    } finally {
      setLoadingData(false);
    }
  };

  const handleVerifyCraftsman = async (craftsmanId: string, verified: boolean) => {
    const { error } = await supabase
      .from('craftsmen')
      .update({ is_verified: verified })
      .eq('id', craftsmanId);

    if (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ في تحديث حالة التوثيق",
        variant: "destructive",
      });
    } else {
      toast({
        title: "تم التحديث",
        description: verified ? "تم توثيق الحرفي بنجاح" : "تم إلغاء توثيق الحرفي",
      });
      fetchDashboardData();
    }
  };

  const handleUpdateBookingStatus = async (bookingId: string, status: string) => {
    const { error } = await supabase
      .from('bookings')
      .update({ status })
      .eq('id', bookingId);

    if (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ في تحديث حالة الحجز",
        variant: "destructive",
      });
    } else {
      toast({
        title: "تم التحديث",
        description: "تم تحديث حالة الحجز بنجاح",
      });
      fetchDashboardData();
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background" dir="rtl">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="gap-1"><Clock className="w-3 h-3" />قيد الانتظار</Badge>;
      case 'confirmed':
        return <Badge className="gap-1 bg-blue-500"><CheckCircle className="w-3 h-3" />مؤكد</Badge>;
      case 'completed':
        return <Badge className="gap-1 bg-green-500"><CheckCircle className="w-3 h-3" />مكتمل</Badge>;
      case 'cancelled':
        return <Badge variant="destructive" className="gap-1"><XCircle className="w-3 h-3" />ملغي</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  لوحة تحكم المدير
                </h1>
                <p className="text-sm text-muted-foreground">خدمة سريع</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => navigate("/")} className="gap-2">
                <Home className="w-4 h-4" />
                الرئيسية
              </Button>
              <Button variant="destructive" onClick={handleSignOut} className="gap-2">
                <LogOut className="w-4 h-4" />
                تسجيل خروج
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">المستخدمين</CardTitle>
              <Users className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground mt-1">إجمالي المستخدمين المسجلين</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الحرفيين</CardTitle>
              <Briefcase className="w-5 h-5 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalCraftsmen}</div>
              <p className="text-xs text-muted-foreground mt-1">إجمالي الحرفيين المسجلين</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الحجوزات</CardTitle>
              <Calendar className="w-5 h-5 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalBookings}</div>
              <p className="text-xs text-muted-foreground mt-1">إجمالي الحجوزات</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant hover:shadow-glow transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">قيد الانتظار</CardTitle>
              <TrendingUp className="w-5 h-5 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-500">{stats.pendingBookings}</div>
              <p className="text-xs text-muted-foreground mt-1">حجوزات تحتاج مراجعة</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="craftsmen" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="craftsmen" className="gap-2">
              <Briefcase className="w-4 h-4" />
              الحرفيين
            </TabsTrigger>
            <TabsTrigger value="bookings" className="gap-2">
              <Calendar className="w-4 h-4" />
              الحجوزات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="craftsmen">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  إدارة الحرفيين
                </CardTitle>
              </CardHeader>
              <CardContent>
                {craftsmen.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>لا يوجد حرفيين مسجلين حالياً</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {craftsmen.map((craftsman) => (
                      <div key={craftsman.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                            {craftsman.full_name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold flex items-center gap-2">
                              {craftsman.full_name}
                              {craftsman.is_verified && (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              )}
                            </h3>
                            <p className="text-sm text-muted-foreground">{craftsman.specialty}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm">{craftsman.rating || 0}</span>
                              <span className="text-sm text-muted-foreground">• {craftsman.phone}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {craftsman.is_available ? (
                            <Badge className="bg-green-500">متاح</Badge>
                          ) : (
                            <Badge variant="secondary">غير متاح</Badge>
                          )}
                          {craftsman.is_verified ? (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleVerifyCraftsman(craftsman.id, false)}
                            >
                              إلغاء التوثيق
                            </Button>
                          ) : (
                            <Button 
                              size="sm"
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => handleVerifyCraftsman(craftsman.id, true)}
                            >
                              توثيق
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  إدارة الحجوزات
                </CardTitle>
              </CardHeader>
              <CardContent>
                {bookings.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>لا يوجد حجوزات حالياً</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div>
                          <h3 className="font-semibold">{booking.service_description}</h3>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span>📅 {new Date(booking.booking_date).toLocaleDateString('ar-SA')}</span>
                            {booking.total_price && (
                              <span>💰 {booking.total_price} ر.س</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {getStatusBadge(booking.status)}
                          {booking.status === 'pending' && (
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                className="bg-green-500 hover:bg-green-600"
                                onClick={() => handleUpdateBookingStatus(booking.id, 'confirmed')}
                              >
                                تأكيد
                              </Button>
                              <Button 
                                size="sm" 
                                variant="destructive"
                                onClick={() => handleUpdateBookingStatus(booking.id, 'cancelled')}
                              >
                                إلغاء
                              </Button>
                            </div>
                          )}
                          {booking.status === 'confirmed' && (
                            <Button 
                              size="sm" 
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => handleUpdateBookingStatus(booking.id, 'completed')}
                            >
                              إكمال
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
