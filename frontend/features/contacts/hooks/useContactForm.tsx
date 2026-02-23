'use client'

import { toast } from "sonner";
import { sendContactForm } from "../services/contacts.service";
import { contactSchema } from "@nudeproject/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormValues } from "@nudeproject/schemas/dist/contact.schema";

export const useContactForm = () => {
    const form = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            await sendContactForm(data);

            toast.success('Message send successfully!');
            form.reset();
        } catch(error) {
            toast.error('Network error');
            console.log(error);
        }
    };

    return { ...form, onSubmit };
}