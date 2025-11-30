import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CraftsmenMap = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              الخريطة التفاعلية
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              ابحث بالقرب منك
            </h1>
            <p className="text-muted-foreground text-lg">
              اعثر على الحرفيين القريبين من موقعك الحالي
            </p>
          </div>

          <Card className="border-0 shadow-elegant max-w-5xl mx-auto animate-fade-up">
            <CardContent className="p-0">
              <div className="relative w-full h-[600px] bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-2">الخريطة التفاعلية</h3>
                    <p className="text-muted-foreground mb-6">
                      سيتم إضافة خريطة تفاعلية هنا قريباً
                    </p>
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all">
                      <Navigation className="w-4 h-4 ml-2" />
                      تحديد موقعي
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CraftsmenMap;
