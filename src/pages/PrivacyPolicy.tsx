import ContentPageLayout from "@/components/landing/ContentPageLayout";

const PrivacyPolicy = () => {
  return (
    <ContentPageLayout
      title="Privacy Policy"
      subtitle="Last updated: July 12, 2026. This policy explains how The Fashion OS (“we”, “us”) collects, uses, and protects your information."
    >
      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">1. Information we collect</h2>
        <p>
          We may collect information you provide directly—such as name, email address, company
          details, and messages submitted through contact forms—as well as account and usage data
          when you use the Fashion OS platform (workspace activity, feature usage, and technical
          logs needed to operate the service).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">2. How we use information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li>Provide, maintain, and improve Fashion OS</li>
          <li>Respond to inquiries and deliver product updates</li>
          <li>Personalize your creative workspace experience</li>
          <li>Monitor security, prevent abuse, and meet legal obligations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">3. Sharing</h2>
        <p>
          We do not sell your personal information. We may share data with trusted service providers
          who help us operate the product (hosting, analytics, customer support), under contracts
          that require them to protect your data. We may also disclose information when required by
          law or to protect our rights and users.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">4. Data retention & security</h2>
        <p>
          We retain information only as long as needed for the purposes described above, unless a
          longer period is required by law. We use industry-standard safeguards to protect data in
          transit and at rest; no method of transmission is 100% secure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">5. Your choices</h2>
        <p>
          You may request access, correction, or deletion of your personal information by contacting
          us. Depending on your location, you may have additional rights under applicable privacy
          laws.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">6. Contact</h2>
        <p>
          For privacy questions, email{" "}
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

export default PrivacyPolicy;
