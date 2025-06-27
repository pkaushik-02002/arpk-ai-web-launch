
import { CTASection } from '@/components/ui/cta-with-rectangle';

const CTA = () => {
  return (
    <div className="py-20 bg-black">
      <CTASection
        badge={{
          text: "Start building today"
        }}
        title="Ready to build your dream website?"
        description="Join thousands of creators who are already building amazing websites with ARPK. Start your free trial today and see the magic happen."
        action={{
          text: "Start Free Trial",
          href: "#",
          variant: "default"
        }}
        className="bg-black text-white"
      />
    </div>
  );
};

export default CTA;
