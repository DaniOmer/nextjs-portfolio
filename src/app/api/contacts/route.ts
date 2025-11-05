import { NextRequest, NextResponse } from "next/server";
import * as SibApiV3Sdk from "@sendinblue/client";
import { getEmailTemplate } from "@/lib/utils";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const htmlContent = getEmailTemplate(body.templateName, body.data);
    const client = new SibApiV3Sdk.TransactionalEmailsApi();

    const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
    if (!apiKey) throw new Error("Brevo API KEY not found!");

    client.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey);

    const emailData = {
      sender: { email: "ddaniomer95@gmail.com", name: "Portfolio" },
      to: [{ email: "ddaniomer@gmail.com" }],
      subject: "I want to work with you",
      htmlContent: htmlContent,
    };

    const response = await client.sendTransacEmail(emailData);
    return NextResponse.json({ success: true, response });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      {
        error: "An error occurred while sending the email",
      },
      { status: 500 }
    );
  }
}
