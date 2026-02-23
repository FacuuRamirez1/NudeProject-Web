import { Button } from "@/shared/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useContactForm } from "../hooks/useContactForm";


export const ContactForm = () => {
    const { 
        register,
        handleSubmit,
        onSubmit,
        formState: { errors, isSubmitting }
    } = useContactForm();

    return (
        <form className="w-[50%] h-full bg-[#D9D9D9]/80 border-2 border-[#492A23] rounded-2xl p-5 flex justify-center" onSubmit={handleSubmit(onSubmit)}>
            <FieldSet className="w-full text-[#492A23]">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="name" className="font-bold" aria-required>Full Name</FieldLabel>
                        <Input 
                            type="text" 
                            { ...register('name')}
                            placeholder="Nude Project" 
                            required 
                            className="border-2 border-[#492A23] placeholder:text-[#492A23]"
                        />
                        { errors.name && (
                            <FieldError>{errors.name.message}</FieldError>
                        )}
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email" className="font-bold">Email</FieldLabel>
                        <Input 
                            type="email" 
                            { ...register('email')}
                            placeholder="example@gmail.com" 
                            required 
                            className="border-2 border-[#492A23] placeholder:text-[#492A23]"
                        />
                        { errors.email && (
                            <FieldError>{errors.email.message}</FieldError>
                        )}
                    </Field>
                </FieldGroup>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="feedback" className="font-bold">Message</FieldLabel>
                        <Textarea
                            { ...register('message')}
                            required
                            placeholder="Leave your message here..."
                            rows={4}
                            className="border-2 border-[#492A23] placeholder:text-[#492A23] h-[20vh] resize-none"
                        />
                        { errors.message && (
                            <FieldError>{errors.message.message}</FieldError>
                        )}
                    </Field>
                </FieldGroup>
                <Button type="submit" className="w-[30%] m-auto py-4 font-bold bg-[#492a23] hover:bg-[#492a23]/80 text-white" disabled={isSubmitting}>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</Button>
            </FieldSet>
        </form>
    );
}