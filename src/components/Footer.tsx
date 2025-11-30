import { useNavigate } from "react-router-dom";
import { 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "الرئيسية", path: "/" },
    { label: "الحرفيون", path: "/craftsmen" },
    { label: "الشركات", path: "/companies" },
    { label: "كيف يعمل", path: "/how-it-works" },
  ];

  const services = [
    { label: "سباكة", path: "/services" },
    { label: "كهرباء", path: "/services" },
    { label: "نجارة", path: "/services" },
    { label: "دهان", path: "/services" },
  ];

  const support = [
    { label: "الدعم الفني", path: "/support" },
    { label: "الأسئلة الشائعة", path: "/how-it-works" },
    { label: "سياسة الخصوصية", path: "/" },
    { label: "الشروط والأحكام", path: "/" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">خدمة سريع</h2>
                <p className="text-sm text-gray-400">منصة الحرفيين</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              منصة متكاملة توصلك بأفضل الحرفيين المحترفين في جميع المجالات. نوفر لك خدمات عالية الجودة بأسعار منافسة وضمان كامل.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg">اشترك في نشرتنا البريدية</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="بريدك الإلكتروني"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-gradient-primary hover:shadow-glow transition-all font-bold">
                  اشترك
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">الخدمات</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <button
                    onClick={() => navigate(service.path)}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">الدعم</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-400">البريد الإلكتروني</p>
              <p className="font-semibold">info@khidmasaraa.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-gray-400">الهاتف</p>
              <p className="font-semibold">+966 50 123 4567</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-gray-400">الموقع</p>
              <p className="font-semibold">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm flex items-center gap-2">
              جميع الحقوق محفوظة © {currentYear} خدمة سريع
              <span className="inline-flex items-center gap-1">
                صنع بـ <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
