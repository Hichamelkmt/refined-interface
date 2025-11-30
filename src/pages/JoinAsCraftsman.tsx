import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JoinAsCraftsman = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سنتواصل معك قريباً لاستكمال عملية التسجيل",
      });
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "زيادة في الدخل",
      description: "احصل على المزيد من العملاء وزد دخلك بشكل ملحوظ"
    },
    {
      icon: Clock,
      title: "مرونة في العمل",
      description: "اختر مواعيد عملك وحدد أسعارك بنفسك"
    },
    {
      icon: Shield,
      title: "حماية ودعم",
      description: "نحن نوفر لك الحماية والدعم الكامل في جميع المعاملات"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              انضم إلينا
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              انضم كحرفي محترف
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              انضم إلى منصتنا وابدأ في الحصول على المزيد من العملاء والفرص
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">لماذا تنضم إلينا؟</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <Card 
                      key={index}
                      className="border-0 shadow-card hover:shadow-elegant transition-all bg-gradient-card animate-fade-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                            <benefit.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <Card className="border-0 shadow-elegant bg-gradient-hero text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">احصائياتنا</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl font-bold mb-2">500+</div>
                      <div className="text-white/80">حرفي نشط</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-2">3000+</div>
                      <div className="text-white/80">خدمة شهرياً</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <Card className="border-0 shadow-elegant animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">سجل الآن</CardTitle>
                <CardDescription>
                  املأ البيانات التالية وسنتواصل معك قريباً
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="أدخل اسمك الكامل"
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال</Label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="05xxxxxxxx"
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">المدينة</Label>
                    <div className="relative">
                      <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="location"
                        placeholder="اختر مدينتك"
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">نوع الخدمة</Label>
                    <div className="relative">
                      <Briefcase className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="service"
                        placeholder="مثال: سباكة، كهرباء، نجارة"
                        className="pr-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">الخبرة</Label>
                    <Textarea
                      id="experience"
                      placeholder="أخبرنا عن خبرتك وأعمالك السابقة..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all font-bold group h-12"
                    disabled={isLoading}
                  >
                    {isLoading ? "جاري الإرسال..." : "إرسال الطلب"}
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinAsCraftsman;
