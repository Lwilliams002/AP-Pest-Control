import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Region = "miami" | "arizona";

type ContactFormProps = {
  defaultRegion?: Region;
  lockRegion?: boolean;
};

const REGION_LABELS: Record<Region, string> = {
  miami: "South Florida",
  arizona: "Arizona Valley",
};

const REGION_EMAILS: Record<Region, string> = {
  miami: import.meta.env.VITE_EMAILJS_MIAMI_TO_EMAIL ?? "Appestmiami2026@gmail.com",
  arizona: import.meta.env.VITE_EMAILJS_ARIZONA_TO_EMAIL ?? "hello@ap-pest-control.com",
};

const emailJsConfig = {
  defaultPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  defaultServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  defaultTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  regionPublicKeys: {
    miami: import.meta.env.VITE_EMAILJS_MIAMI_PUBLIC_KEY,
    arizona: import.meta.env.VITE_EMAILJS_ARIZONA_PUBLIC_KEY,
  } satisfies Partial<Record<Region, string | undefined>>,
  regionServiceIds: {
    miami: import.meta.env.VITE_EMAILJS_MIAMI_SERVICE_ID,
    arizona: import.meta.env.VITE_EMAILJS_ARIZONA_SERVICE_ID,
  } satisfies Partial<Record<Region, string | undefined>>,
  regionTemplateIds: {
    miami: import.meta.env.VITE_EMAILJS_MIAMI_TEMPLATE_ID,
    arizona: import.meta.env.VITE_EMAILJS_ARIZONA_TEMPLATE_ID,
  } satisfies Partial<Record<Region, string | undefined>>,
};

export function ContactForm({ defaultRegion = "miami", lockRegion = false }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    region: defaultRegion,
    pest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const schema = z.object({
      name: z.string().trim().min(1, "Name required").max(100),
      email: z.string().trim().email("Valid email required").max(255),
      phone: z.string().trim().max(30).optional().or(z.literal("")),
      region: z.enum(["miami", "arizona"]),
      pest: z.string().trim().max(100).optional().or(z.literal("")),
      message: z.string().trim().min(1, "Tell us a bit about the issue").max(1000),
    });
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    const values = result.data;
    const region = values.region;
    const regionLabel = REGION_LABELS[region];
    const toEmail = REGION_EMAILS[region];
    const subject = encodeURIComponent(`New estimate request — ${regionLabel}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nRegion: ${regionLabel}\nPest: ${values.pest}\n\n${values.message}`,
    );
    const fallbackHref = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    const publicKey = emailJsConfig.regionPublicKeys[region] ?? emailJsConfig.defaultPublicKey;
    const serviceId = emailJsConfig.regionServiceIds[region] ?? emailJsConfig.defaultServiceId;
    const templateId = emailJsConfig.regionTemplateIds[region] ?? emailJsConfig.defaultTemplateId;

    if (!publicKey || !serviceId || !templateId) {
      window.location.href = fallbackHref;
      toast.success("Opening your email — we'll reply fast.");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: toEmail,
          to_name: regionLabel,
          from_name: values.name,
          from_email: values.email,
          reply_to: values.email,
          phone: values.phone || "Not provided",
          region,
          region_label: regionLabel,
          pest: values.pest || "Not specified",
          message: values.message,
          subject: `New estimate request — ${regionLabel}`,
          source_page: window.location.pathname,
          submitted_at: new Date().toLocaleString(),
        },
        { publicKey },
      );

      toast.success("Request sent — we'll reply fast.");
      setForm({
        name: "",
        email: "",
        phone: "",
        region,
        pest: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS send failed", error);
      toast.error("We couldn't send that automatically. Opening your email instead.");
      window.location.href = fallbackHref;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border p-6 md:p-8 rounded-sm shadow-md space-y-4"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-brand">Request a free quote</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name">
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={100}
            required
          />
        </Field>
        <Field label="Email">
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
            required
          />
        </Field>
        <Field label="Phone">
          <Input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            maxLength={30}
          />
        </Field>
        <Field label="Region">
          {lockRegion ? (
            <div className="flex h-9 w-full items-center rounded-sm border border-input bg-muted/40 px-3 py-1 text-base text-foreground md:text-sm">
              {REGION_LABELS[form.region]}
            </div>
          ) : (
            <select
              value={form.region}
              onChange={(e) => setForm({ ...form, region: e.target.value as Region })}
              className="flex h-9 w-full rounded-sm border border-input bg-transparent px-3 py-1 text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
            >
              <option value="miami">South Florida</option>
              <option value="arizona">Arizona Valley</option>
            </select>
          )}
        </Field>
      </div>
      <Field label="Pest (optional)">
        <Input
          value={form.pest}
          onChange={(e) => setForm({ ...form, pest: e.target.value })}
          placeholder="Roaches, scorpions, termites…"
          maxLength={100}
        />
      </Field>
      <Field label="What's going on?">
        <Textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          maxLength={1000}
          rows={4}
          required
        />
      </Field>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-brand text-brand-foreground font-bold uppercase tracking-widest text-sm rounded-sm hover:opacity-90 transition"
      >
        {isSubmitting ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">
        {label}
      </span>
      {children}
    </label>
  );
}
