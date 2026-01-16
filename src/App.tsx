import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Craftsmen from "./pages/Craftsmen";
import Companies from "./pages/Companies";
import CraftsmenMap from "./pages/CraftsmenMap";
import AllServices from "./pages/AllServices";
import Auth from "./pages/Auth";
import HowItWorks from "./pages/HowItWorks";
import JoinAsCraftsman from "./pages/JoinAsCraftsman";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/craftsmen" element={<Craftsmen />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/map" element={<CraftsmenMap />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/join" element={<JoinAsCraftsman />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
