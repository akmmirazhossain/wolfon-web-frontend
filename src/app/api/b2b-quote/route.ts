import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const form = await request.json();

    const {
      company,
      name,
      email,
      phone,
      serviceType,
      moq,
      gsmPreference,
      fabricType,
      fabricColor,
      notes,
    } = form;

    if (!company || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Wolfon B2B Inquery <inquery@wolfonstyle.com>", // swap once your domain is verified on Resend
      to: (process.env.RESEND_TO_EMAILS || "ahad@wolfonstyle.com").split(","),
      replyTo: email,
      subject: `New B2B Inquiry: ${company}`,
      html: `
        <h2>New Wholesale & Manufacturing Inquiry</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Contact Person:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Estimated MOQ:</strong> ${moq}</p>
        <p><strong>Fabric GSM:</strong> ${gsmPreference}</p>
        <p><strong>Fabric Type:</strong> ${fabricType}</p>
        <p><strong>Fabric Color:</strong> ${fabricColor}</p>
        <p><strong>Notes:</strong> ${notes || "N/A"}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 },
    );
  }
}
