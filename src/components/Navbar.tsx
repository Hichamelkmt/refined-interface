import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  User, 
  LogIn,
  Home,
  Briefcase,
  MapPin,
  HelpCircle,
  UserPlus,
  LogOut,
  Shield
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  const menuItems = [
    { label: "الرئيسية", path: "/", icon: Home },
    { label: "الحرفيون", path: "/craftsmen", icon: Briefcase },
    { label: "الشركات", path: "/companies", icon: Briefcase },
    { label: "الخريطة", path: "/map", icon: MapPin },
    { label: "كيف يعمل", path: "/how-it-works", icon: HelpCircle },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavigation("/")}
          >
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all group-hover:scale-110">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">
                خدمة سريع
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">منصة الحرفيين</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="text-foreground hover:text-primary transition-colors font-semibold relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                {isAdmin && (
                  <Button 
                    variant="outline"
                    className="font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => handleNavigation("/admin")}
                  >
                    <Shield className="w-4 h-4" />
                    لوحة التحكم
                  </Button>
                )}
                <Button 
                  variant="ghost"
                  className="font-semibold hover:bg-destructive/10 hover:text-destructive"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4 ml-2" />
                  خروج
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost"
                  className="font-semibold hover:bg-primary/10"
                  onClick={() => handleNavigation("/auth")}
                >
                  <LogIn className="w-4 h-4 ml-2" />
                  دخول
                </Button>
                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-all font-bold"
                  onClick={() => handleNavigation("/join")}
                >
                  <UserPlus className="w-4 h-4 ml-2" />
                  انضم كحرفي
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-right">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        خدمة سريع
                      </h2>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              
              <div className="mt-8 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-right"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                {user ? (
                  <>
                    {isAdmin && (
                      <Button 
                        variant="outline"
                        className="w-full justify-start gap-3 h-12 font-semibold border-primary text-primary"
                        onClick={() => handleNavigation("/admin")}
                      >
                        <Shield className="w-5 h-5" />
                        لوحة التحكم
                      </Button>
                    )}
                    <Button 
                      variant="outline"
                      className="w-full justify-start gap-3 h-12 font-semibold text-destructive border-destructive hover:bg-destructive hover:text-white"
                      onClick={handleSignOut}
                    >
                      <LogOut className="w-5 h-5" />
                      تسجيل خروج
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="outline"
                      className="w-full justify-start gap-3 h-12 font-semibold"
                      onClick={() => handleNavigation("/auth")}
                    >
                      <LogIn className="w-5 h-5" />
                      دخول
                    </Button>
                    <Button 
                      className="w-full justify-start gap-3 h-12 bg-gradient-primary font-bold"
                      onClick={() => handleNavigation("/join")}
                    >
                      <UserPlus className="w-5 h-5" />
                      انضم كحرفي
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
