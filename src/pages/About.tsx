import ContentPageLayout from "@/components/landing/ContentPageLayout";

const About = () => {
  return (
    <ContentPageLayout
      title="About Us"
      subtitle="We're building the operating system for fashion design—where inspiration, research, and collection development finally live in one intelligent workspace."
    >
      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">Our mission</h2>
        <p>
          Fashion moves in weeks. Traditional design tools still move in seasons. The Fashion OS
          exists to close that gap—helping designers capture a feeling, research the market, shape
          direction, and ship a collection without leaving their creative flow.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">What we build</h2>
        <p>
          Moodboards, trendboards, designboards, and product catalogs—connected by contextual AI
          that learns your aesthetic. Visual-first interfaces. Seamless project memory. A workspace
          that thinks more like a designer and less like a spreadsheet.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">Who it's for</h2>
        <p>
          Independent designers, brand teams, and studios who want to move from inspiration to
          production-ready visuals faster—without sacrificing creative control.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">Get in touch</h2>
        <p>
          Questions, partnerships, or a walkthrough of Fashion OS? Reach us at{" "}
          <a
            href="mailto:info@thefashionos.com"
            className="text-blue hover:underline underline-offset-4"
          >
            info@thefashionos.com
          </a>
          .
        </p>
      </section>
    </ContentPageLayout>
  );
};

export default About;
