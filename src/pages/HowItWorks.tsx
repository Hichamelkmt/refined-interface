import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  UserCheck, 
  Calendar, 
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: Search,
      title: "ابحث عن الحرفي المناسب",
      description: "استخدم محرك البحث للعثور على الحرفي المناسب لاحتياجاتك من بين مئات الحرفيين المعتمدين",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: UserCheck,
      title: "اختر الحرفي واطلع على ملفه",
      description: "راجع تقييمات العملاء السابقين، صور الأعمال، والأسعار قبل اتخاذ قرارك",
      color: "from-secondary to-emerald-600"
    },
    {
      icon: Calendar,
      title: "احجز موعداً مناسباً",
      description: "اختر الوقت والتاريخ المناسبين لك وتواصل مباشرة مع الحرفي",
      color: "from-accent to-orange-500"
    },
    {
      icon: CheckCircle2,
      title: "احصل على الخدمة",
      description: "استمتع بخدمة احترافية عالية الجودة مع ضمان كامل للرضا",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "جميع الحرفيين معتمدون ومراجعون بعناية"
    },
    {
      icon: Clock,
      title: "خدمة سريعة",
      description: "احجز واحصل على الخدمة في نفس اليوم"
    },
    {
      icon: Award,
      title: "أفضل الأسعار",
      description: "أسعار تنافسية وشفافة بدون رسوم خفية"
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
              كيف يعمل
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              كيف تحصل على الخدمة؟
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              عملية بسيطة وسريعة للحصول على أفضل الحرفيين المحترفين
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <Card 
                  key={index}
                  className="group border-0 shadow-card hover:shadow-elegant transition-all hover:scale-105 bg-gradient-card animate-fade-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${step.color}`}></div>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">لماذا خدمة سريع؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="text-center border-0 shadow-card hover:shadow-elegant transition-all hover:scale-105 bg-gradient-card animate-fade-up"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-3xl mx-auto bg-gradient-hero rounded-3xl p-12 shadow-elegant animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              جاهز للبدء؟
            </h2>
            <p className="text-xl text-white/90 mb-8">
              ابدأ الآن في البحث عن الحرفي المناسب لك
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all px-8 py-6 text-lg font-bold rounded-xl group"
                onClick={() => navigate("/craftsmen")}
              >
                ابحث عن حرفي
                <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all px-8 py-6 text-lg font-bold rounded-xl backdrop-blur-sm bg-white/10"
                onClick={() => navigate("/join")}
              >
                انضم كحرفي
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
