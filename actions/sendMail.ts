"use server";

import ContactFormEmail from "@/email/ContactFormEmail";
import getErrorMessage from "@/helpers/getErrorMessage";
import validateString from "@/helpers/validateString";
import { createElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const snedMail = async (formData: FormData) => {
    const sender = formData.get("sender");
    const message = formData.get("message");

    if (!validateString(sender, 256)) {
        return { error: "Invalid sender email" };
    }
    if (!validateString(message, 512)) {
        return { error: "Invalid message" };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "muhamadhaspin@gmail.com",
            subject: "New message from contact form of portfolio",
            replyTo: sender as string,
            react: createElement(ContactFormEmail, {
                sender: sender as string,
                message: message as string,
            }),
        });
    } catch (error: unknown) {
        return { error: getErrorMessage(error) };
    }

    return { data };
};
