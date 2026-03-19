import Link from "next/link";

export default function PartnershipPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Partnership</h1>

      <p className="mb-4">
        For now, we have paused online booking submissions. Please reach out to
        us directly so we can assist with your project.
      </p>

      <div className="space-y-3">
        <p>
          • Visit our <Link href="/contact" className="text-primary underline">Contact</Link> page.
        </p>
        <p>
          • Learn more about our <Link href="/services" className="text-primary underline">Services</Link>.
        </p>
      </div>
    </div>
  );
}
