"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const comment = formData.get("comment") as string;

  if (!fullName || !email || !comment) {
    return { success: false, error: "Please fill out all required fields." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  try {
    const data = await resend.emails.send({
      from: "PEMS Website <onboarding@resend.dev>", // Or a verified domain
      to: "info@pems.com.pk",
      replyTo: email,
      subject: `Website Inquiry: ${subject || "General Contact"}`,
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}

Message:
${comment}
      `,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    return { success: false, error: errMessage };
  }
}
