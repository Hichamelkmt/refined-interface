import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Wind,
  Truck,
  Home,
  Droplet,
  Lightbulb,
  Scissors,
  Settings,
  Package
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AllServices = () => {
  const navigate = useNavigate();

  const services = [
    { name: "سباكة", icon: Wrench, color: "from-blue-500 to-blue-600", count: 45 },
    { name: "كهرباء", icon: Zap, color: "from-yellow-500 to-orange-500", count: 62 },
    { name: "نجارة", icon: Hammer, color: "from-amber-600 to-amber-700", count: 38 },
    { name: "دهان", icon: Paintbrush, color: "from-green-500 to-emerald-600", count: 51 },
    { name: "تكييف وتبريد", icon: Wind, color: "from-cyan-500 to-blue-500", count: 34 },
    { name: "نقل وتوصيل", icon: Truck, color: "from-purple-500 to-purple-600", count: 28 },
    { name: "تنظيف منازل", icon: Home, color: "from-pink-500 to-rose-600", count: 42 },
    { name: "صيانة عامة", icon: Settings, color: "from-gray-600 to-gray-700", count: 55 },
    { name: "سباكة طوارئ", icon: Droplet, color: "from-blue-600 to-indigo-600", count: 23 },
    { name: "إضاءة", icon: Lightbulb, color: "from-yellow-400 to-yellow-600", count: 31 },
    { name: "حلاقة منازل", icon: Scissors, color: "from-teal-500 to-teal-600", count: 19 },
    { name: "تغليف ونقل", icon: Package, color: "from-orange-500 to-red-500", count: 27 }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              جميع الخدمات
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              استكشف خدماتنا المتنوعة
            </h1>
            <p className="text-muted-foreground text-lg">
              تصفح جميع الخدمات المتوفرة على المنصة واختر ما يناسب احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group cursor-pointer border-0 shadow-card hover:shadow-elegant transition-all hover:scale-110 hover:-translate-y-2 bg-gradient-card animate-fade-up"
                style={{ animationDelay: `${index * 0.03}s` }}
                onClick={() => navigate('/craftsmen')}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center transition-all shadow-lg group-hover:shadow-glow group-hover:scale-110`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {service.count} حرفي
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllServices;
