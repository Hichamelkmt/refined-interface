import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Star, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: "شركة الأمانة للمقاولات",
      category: "مقاولات عامة",
      rating: 4.8,
      reviews: 156,
      location: "الرياض",
      phone: "+966 50 123 4567"
    },
    {
      id: 2,
      name: "مؤسسة البناء الحديث",
      category: "بناء وتشييد",
      rating: 4.9,
      reviews: 203,
      location: "جدة",
      phone: "+966 50 234 5678"
    },
    {
      id: 3,
      name: "شركة الصيانة المتقدمة",
      category: "صيانة عامة",
      rating: 4.7,
      reviews: 128,
      location: "الدمام",
      phone: "+966 50 345 6789"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              الشركات المتعاونة
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              شركات معتمدة
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              تعرف على الشركات المعتمدة في المنصة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {companies.map((company, index) => (
              <Card 
                key={company.id}
                className="border-0 shadow-card hover:shadow-elegant transition-all hover:scale-105 bg-gradient-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{company.name}</h3>
                      <p className="text-muted-foreground text-sm">{company.category}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-bold">{company.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        ({company.reviews} تقييم)
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{company.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{company.phone}</span>
                    </div>
                  </div>
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

export default Companies;
