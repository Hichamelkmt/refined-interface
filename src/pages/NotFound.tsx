import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/50 to-background" dir="rtl">
      <div className="text-center px-4 max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8 animate-fade-in">
          <div className="text-9xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-pulse-glow">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground animate-fade-up">
          عذراً! الصفحة غير موجودة
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
          يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all px-8 py-6 text-lg font-bold rounded-xl group"
            onClick={() => navigate("/")}
          >
            <Home className="w-5 h-5 ml-2" />
            العودة للرئيسية
            <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-bold rounded-xl hover:bg-muted"
            onClick={() => navigate("/craftsmen")}
          >
            <Search className="w-5 h-5 ml-2" />
            تصفح الحرفيين
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
