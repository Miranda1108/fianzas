import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "finanzifyfianzas@gmail.com";

const esc = (s?: string) =>
  (s ?? "").replace(/[<>&"]/g, (c) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
  }[c]!));

const row = (label: string, value?: string) =>
  `<tr>
    <td style="padding:6px 12px;color:#64748B;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
    <td style="padding:6px 12px;color:#0B1F3A;font-size:14px;font-weight:600;">${esc(value) || "—"}</td>
  </tr>`;

export async function POST(req: Request) {
  let data: Record<string, string> = {};
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot anti-spam: hidden field bots tend to fill
  if (data.website) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No API key configured yet — don't break the form; the WhatsApp flow still works.
    console.warn("[lead] RESEND_API_KEY not set; skipping email");
    return NextResponse.json({ ok: false, error: "Email not configured" }, { status: 200 });
  }

  const subject = `Nuevo lead · ${data.tipoFianza || "Sin especificar"}${data.nombre ? ` · ${data.nombre}` : ""}`;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;background:#F2F4F7;padding:24px;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #E2E8F0;">
        <div style="background:#0B1F3A;padding:18px 24px;color:#fff;">
          <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.7;">Fianzify · Nuevo lead</div>
          <div style="font-size:18px;font-weight:700;margin-top:4px;">${esc(data.nombre) || "Solicitud de cotización"}</div>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          ${row("Nombre", data.nombre)}
          ${row("Empresa", data.empresa)}
          ${row("Teléfono / WhatsApp", data.telefono)}
          ${row("Email", data.email)}
          ${row("Tipo de fianza", data.tipoFianza)}
          ${row("Monto del contrato", data.monto)}
          ${row("Mensaje", data.mensaje)}
          ${row("Origen", data.source)}
        </table>
        <div style="padding:14px 24px;background:#F8FAFC;color:#64748B;font-size:12px;">
          Recibido el ${new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" })}
        </div>
      </div>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Fianzify Leads <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: data.email || undefined,
      subject,
      html,
    });
    if (error) {
      console.error("[lead] resend error:", error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 200 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[lead] send failed:", e);
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 200 });
  }
}
