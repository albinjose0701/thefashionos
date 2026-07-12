import ContentPageLayout from "@/components/landing/ContentPageLayout";

const TermsOfService = () => {
  return (
    <ContentPageLayout
      title="Terms of Service"
      subtitle="Last updated: July 12, 2026. By accessing The Fashion OS website or platform, you agree to these terms."
    >
      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">1. Acceptance of terms</h2>
        <p>
          These Terms of Service (“Terms”) govern your use of thefashionos.com, related sites, and
          the Fashion OS platform. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">2. Accounts & access</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          for activity under your account. You must provide accurate information and notify us of
          any unauthorized use. We may suspend or terminate access for violations of these Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
          <li>Misuse the platform, attempt unauthorized access, or disrupt service</li>
          <li>Upload unlawful, infringing, or harmful content</li>
          <li>Reverse engineer or resell the service except as expressly permitted</li>
          <li>Use Fashion OS to violate intellectual property or third-party rights</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">4. Intellectual property</h2>
        <p>
          Fashion OS, including software, branding, and site content, is owned by us or our
          licensors. You retain rights to content you create; by using the platform you grant us a
          limited license to host and process that content solely to provide the service.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">5. Credits, billing & trials</h2>
        <p>
          Certain features may consume credits or require a paid subscription. Pricing, allowances,
          and renewal terms will be shown at purchase or in your workspace. Unused credits may
          expire according to your plan. Fees are non-refundable except where required by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">6. Disclaimers & liability</h2>
        <p>
          The service is provided “as is” without warranties of uninterrupted or error-free
          operation. To the fullest extent permitted by law, we are not liable for indirect,
          incidental, or consequential damages arising from your use of Fashion OS.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">7. Changes</h2>
        <p>
          We may update these Terms from time to time. Continued use after changes take effect
          constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl font-medium text-foreground">8. Contact</h2>
        <p>
          Questions about these Terms? Email{" "}
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

export default TermsOfService;
