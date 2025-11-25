import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CartDrawer />
    </main>
  );
}

