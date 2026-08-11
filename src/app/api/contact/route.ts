import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const emailHtml = `
<!DOCTYPE html>
<html>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: 'Helvetica Neue', Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border:1px solid #e0e0e0; max-width:600px; width:100%;">

            <!-- Header / Logo -->
            <tr>
              <td style="background-color:#121212; padding:28px 32px; text-align:center;">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeuJ2t8fkzP3pklIbMxjkzphh8dkXIuYUUBTsa5OXGR_LXmb7qhhpZoN6J-APM_SBcqeGERWV7KWQbXsINeQWPGEmovJ8EleM5XAEFW2rCaP4IonwFW7G1LQB3ZYGDUqbTCrBWTnhJtIaEBvvjUrgmxCRA0aGAwNXzDdKzAxpRGpo08OkTxzvg-YcyeCsYgcKYZkD6C5E_CNcdMjJcOrS4KeH-PT8ZDyqn_dfcyK9FzB4T10aVDyVJvUNU_lUGwUyGlA"
                  alt="WOLFON"
                  width="160"
                  style="display:block; margin:0 auto; height:auto;"
                />
              </td>
            </tr>

            <!-- Accent bar -->
            <tr>
              <td style="background-color:#FFB800; height:4px; font-size:0; line-height:0;">&nbsp;</td>
            </tr>

            <!-- Title -->
            <tr>
              <td style="padding:32px 32px 8px 32px;">
                <p style="margin:0 0 4px 0; font-size:11px; font-weight:700; letter-spacing:2px; color:#FFB800; text-transform:uppercase;">
                  Website Contact Form
                </p>
                <h2 style="margin:0; font-size:24px; font-weight:800; color:#121212; text-transform:uppercase;">
                  New Contact Message
                </h2>
              </td>
            </tr>

            <!-- Info Table -->
            <tr>
              <td style="padding:24px 32px 32px 32px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${[
                    ["Name", name],
                    ["Email", email],
                    ["Subject", subject || "N/A"],
                  ]
                    .map(
                      ([label, value], i) => `
                    <tr style="background-color:${i % 2 === 0 ? "#f9f9f9" : "#ffffff"};">
                      <td style="padding:12px 16px; font-size:12px; font-weight:700; color:#9e8f78; text-transform:uppercase; letter-spacing:0.5px; width:30%; border-bottom:1px solid #ececec;">
                        ${label}
                      </td>
                      <td style="padding:12px 16px; font-size:14px; color:#121212; border-bottom:1px solid #ececec;">
                        ${value}
                      </td>
                    </tr>`,
                    )
                    .join("")}

                  <!-- Message -->
                  <tr style="background-color:#ffffff;">
                    <td style="padding:12px 16px; font-size:12px; font-weight:700; color:#9e8f78; text-transform:uppercase; letter-spacing:0.5px; vertical-align:top; border-bottom:1px solid #ececec;">
                      Message
                    </td>
                    <td style="padding:12px 16px; font-size:14px; color:#121212; line-height:1.6; border-bottom:1px solid #ececec; white-space:pre-wrap;">
                      ${message}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Reply CTA -->
            <tr>
              <td style="padding:0 32px 32px 32px;">
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#FFB800; border-radius:2px;">
                      <a href="mailto:${email}" style="display:inline-block; padding:12px 24px; font-size:12px; font-weight:800; letter-spacing:1px; color:#121212; text-decoration:none; text-transform:uppercase;">
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#121212; padding:20px 32px; text-align:center;">
                <p style="margin:0; font-size:10px; color:#9e8f78; letter-spacing:1px; text-transform:uppercase;">
                  Strength In Every Stitch &nbsp;•&nbsp; Wolfon Style, Bangladesh
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

    await resend.emails.send({
      from: "Wolfon Website <contact@wolfonstyle.com>", // TODO: swap to your verified sending domain
      to: "ahad@wolfonstyle.com",
      replyTo: email,
      subject: `New Contact Message: ${subject || "General Inquiry"} — ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
