import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MapPin, Briefcase, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Craftsmen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(location.state?.search || "");

  const craftsmen = [
    {
      id: 1,
      name: "أحمد محمد",
      service: "سباكة",
      rating: 4.8,
      reviews: 127,
      location: "الرياض",
      verified: true,
      price: "150 ريال/ساعة"
    },
    {
      id: 2,
      name: "محمد علي",
      service: "كهرباء",
      rating: 4.9,
      reviews: 215,
      location: "جدة",
      verified: true,
      price: "180 ريال/ساعة"
    },
    {
      id: 3,
      name: "خالد أحمد",
      service: "نجارة",
      rating: 4.7,
      reviews: 98,
      location: "الدمام",
      verified: true,
      price: "160 ريال/ساعة"
    },
    {
      id: 4,
      name: "سعيد محمود",
      service: "دهان",
      rating: 4.6,
      reviews: 145,
      location: "الرياض",
      verified: true,
      price: "140 ريال/ساعة"
    },
    {
      id: 5,
      name: "عبدالله يوسف",
      service: "تكييف",
      rating: 4.9,
      reviews: 189,
      location: "جدة",
      verified: true,
      price: "200 ريال/ساعة"
    },
    {
      id: 6,
      name: "فهد سليمان",
      service: "نقل",
      rating: 4.5,
      reviews: 76,
      location: "الرياض",
      verified: true,
      price: "300 ريال/رحلة"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              تصفح الحرفيين
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              أفضل الحرفيين المحترفين
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              تصفح مئات الحرفيين المعتمدين في جميع المجالات
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="ابحث عن حرفي أو خدمة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-12"
                />
              </div>
              <Button size="lg" variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                تصفية
              </Button>
            </div>
          </div>

          {/* Craftsmen Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftsmen.map((craftsman, index) => (
              <Card 
                key={craftsman.id}
                className="group cursor-pointer border-0 shadow-card hover:shadow-elegant transition-all hover:scale-105 bg-gradient-card animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate(`/craftsman/${craftsman.id}`)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {craftsman.name}
                        </h3>
                        {craftsman.verified && (
                          <Badge variant="default" className="text-xs">
                            موثق
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">{craftsman.service}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="font-bold">{craftsman.rating}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          ({craftsman.reviews} تقييم)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{craftsman.location}</span>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-primary font-bold text-lg">{craftsman.price}</p>
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

export default Craftsmen;
