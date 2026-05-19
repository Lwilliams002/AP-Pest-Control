import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm({ defaultRegion = "miami" as "miami" | "arizona" }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", region: defaultRegion, pest: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const schema = z.object({
      name: z.string().trim().min(1, "Name required").max(100),
      email: z.string().trim().email("Valid email required").max(255),
      phone: z.string().trim().max(30).optional().or(z.literal("")),
      region: z.string(),
      pest: z.string().trim().max(100).optional().or(z.literal("")),
      message: z.string().trim().min(1, "Tell us a bit about the issue").max(1000),
    });
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const subject = encodeURIComponent(`New estimate request — ${form.region === "miami" ? "Miami" : "Arizona"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nRegion: ${form.region}\nPest: ${form.pest}\n\n${form.message}`);
    window.location.href = `mailto:hello@ap-pest-control.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email — we'll reply fast.");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border p-6 md:p-8 rounded-sm shadow-md space-y-4">
      <p className="text-xs uppercase tracking-[0.3em] text-brand">Request a free quote</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name"><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required /></Field>
        <Field label="Email"><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required /></Field>
        <Field label="Phone"><Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={30} /></Field>
        <Field label="Region">
          <select
            value={form.region}
            onChange={(e) => setForm({ ...form, region: e.target.value as "miami" | "arizona" })}
            className="flex h-9 w-full rounded-sm border border-input bg-transparent px-3 py-1 text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
          >
            <option value="miami">South Florida</option>
            <option value="arizona">Arizona Valley</option>
          </select>
        </Field>
      </div>
      <Field label="Pest (optional)">
        <Input value={form.pest} onChange={(e) => setForm({ ...form, pest: e.target.value })} placeholder="Roaches, scorpions, termites…" maxLength={100} />
      </Field>
      <Field label="What's going on?">
        <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={4} required />
      </Field>
      <button type="submit" className="w-full px-8 py-4 bg-brand text-brand-foreground font-bold uppercase tracking-widest text-sm rounded-sm hover:opacity-90 transition">
        Send Request
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">{label}</span>
      {children}
    </label>
  );
}
