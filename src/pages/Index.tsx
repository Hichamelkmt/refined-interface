import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  Award,
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Wind,
  Truck,
  CheckCircle2,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    { name: "سباكة", icon: Wrench, color: "from-blue-500 to-blue-600", hover: "hover:from-blue-600 hover:to-blue-700" },
    { name: "كهرباء", icon: Zap, color: "from-yellow-500 to-orange-500", hover: "hover:from-yellow-600 hover:to-orange-600" },
    { name: "نجارة", icon: Hammer, color: "from-amber-600 to-amber-700", hover: "hover:from-amber-700 hover:to-amber-800" },
    { name: "دهان", icon: Paintbrush, color: "from-green-500 to-emerald-600", hover: "hover:from-green-600 hover:to-emerald-700" },
    { name: "تكييف", icon: Wind, color: "from-cyan-500 to-blue-500", hover: "hover:from-cyan-600 hover:to-blue-600" },
    { name: "نقل", icon: Truck, color: "from-purple-500 to-purple-600", hover: "hover:from-purple-600 hover:to-purple-700" }
  ];

  const stats = [
    { value: "500+", label: "حرفي معتمد", icon: Users, color: "text-primary" },
    { value: "3000+", label: "خدمة مكتملة", icon: CheckCircle2, color: "text-secondary" },
    { value: "2500+", label: "عميل سعيد", icon: Star, color: "text-accent" }
  ];

  const features = [
    {
      icon: Shield,
      title: "حرفيون موثوقون",
      description: "جميع الحرفيين معتمدون وموثقون مع تقييمات حقيقية من العملاء",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "خدمة سريعة",
      description: "احصل على الخدمة في أسرع وقت ممكن مع إمكانية الحجز الفوري",
      color: "from-secondary to-emerald-600"
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "نضمن لك أعلى مستويات الجودة في تنفيذ جميع الخدمات",
      color: "from-accent to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      rating: 5,
      text: "خدمة ممتازة! وجدت سباك محترف خلال دقائق وأنجز العمل بشكل احترافي.",
      service: "سباكة"
    },
    {
      name: "سارة علي",
      rating: 5,
      text: "تطبيق رائع وسهل الاستخدام. الحرفيون محترفون والأسعار مناسبة جداً.",
      service: "كهرباء"
    },
    {
      name: "محمد خالد",
      rating: 5,
      text: "أفضل منصة للعثور على الحرفيين. التعامل سريع والجودة ممتازة.",
      service: "دهان"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-glow/20 via-transparent to-transparent"></div>
        
        <div className="relative container mx-auto px-4 pt-24 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all animate-fade-in">
              <Sparkles className="w-4 h-4 ml-2 inline" />
              المنصة الأولى للخدمات المنزلية في المملكة
            </Badge>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-fade-up">
              اعثر على الحرفي
              <span className="block bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent animate-pulse-glow">
                المثالي لخدمتك
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              منصة متكاملة توصلك بأفضل الحرفيين المحترفين في جميع المجالات
              <br />
              بجودة عالية وأسعار منافسة
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl shadow-elegant p-2">
                  <div className="flex items-center gap-2">
                    <Search className="w-6 h-6 text-muted-foreground mr-3" />
                    <Input
                      placeholder="ابحث عن حرفي، خدمة، أو مهنة..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-0 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                      onKeyPress={(e) => e.key === 'Enter' && searchTerm && navigate('/craftsmen', { state: { search: searchTerm } })}
                    />
                    <Button 
                      size="lg"
                      className="bg-gradient-primary hover:shadow-glow transition-all px-8 rounded-xl"
                      onClick={() => searchTerm && navigate('/craftsmen', { state: { search: searchTerm } })}
                    >
                      بحث
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all px-8 py-6 text-lg font-bold rounded-xl shadow-elegant group"
                onClick={() => navigate('/craftsmen')}
              >
                تصفح الحرفيين
                <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all px-8 py-6 text-lg font-bold rounded-xl backdrop-blur-sm bg-white/10"
                onClick={() => navigate('/join')}
              >
                انضم كحرفي
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center border-0 shadow-card hover:shadow-elegant transition-all hover:scale-105 bg-gradient-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-primary mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-5xl font-extrabold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-lg font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              خدماتنا المتوفرة
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              جميع الخدمات التي تحتاجها
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نوفر لك مجموعة متكاملة من الخدمات المنزلية والحرفية بأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group cursor-pointer border-0 shadow-card hover:shadow-elegant transition-all hover:scale-110 hover:-translate-y-2 bg-gradient-card animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate('/services')}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} ${service.hover} flex items-center justify-center transition-all shadow-lg group-hover:shadow-glow group-hover:scale-110`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              لماذا تختارنا
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ميزات تجعلنا الأفضل
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group border-0 shadow-card hover:shadow-elegant transition-all hover:scale-105 bg-gradient-card animate-fade-up overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:shadow-glow transition-all`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              آراء العملاء
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ماذا يقول عملاؤنا
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-0 shadow-card hover:shadow-elegant transition-all hover:scale-105 bg-gradient-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.service}</div>
                    </div>
                    <Badge variant="secondary">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-glow/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              جاهز للبدء؟
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              انضم إلى آلاف العملاء السعداء واحصل على أفضل الخدمات الآن
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all px-10 py-7 text-xl font-bold rounded-xl shadow-elegant group"
                onClick={() => navigate('/auth')}
              >
                ابدأ الآن
                <ArrowRight className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all px-10 py-7 text-xl font-bold rounded-xl backdrop-blur-sm bg-white/10"
                onClick={() => navigate('/how-it-works')}
              >
                كيف يعمل
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
