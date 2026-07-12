import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

type ContentPageLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const ContentPageLayout = ({ title, subtitle, children }: ContentPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative z-10 pt-36 md:pt-44 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/"
              className="relative z-20 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>

            <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground font-body text-lg mb-12 leading-relaxed">
                {subtitle}
              </p>
            )}

            <div className="prose-content space-y-8 text-foreground/85 font-body leading-relaxed">
              {children}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContentPageLayout;
