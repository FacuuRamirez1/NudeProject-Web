import { Button } from "@/shared/ui/button"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { useContactForm } from "../hooks/useContactForm"


export const ContactForm = () => {
    const {handleSubmit, isPending} = useContactForm();

    return (
        <form className="w-[50%] h-full bg-[#D9D9D9]/80 border-2 border-[#492A23] rounded-2xl p-5 flex justify-center" onSubmit={handleSubmit}>
            <FieldSet className="w-full text-[#492A23]">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="name" className="font-bold" aria-required>Full Name</FieldLabel>
                        <Input id="name" name="name" type="text" placeholder="Nude Project" required className="border-2 border-[#492A23] placeholder:text-[#492A23]"/>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email" className="font-bold">Email</FieldLabel>
                        <Input id="email" name="email" type="email" placeholder="example@gmail.com" required className="border-2 border-[#492A23] placeholder:text-[#492A23]"/>
                    </Field>
                </FieldGroup>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="feedback" className="font-bold">Message</FieldLabel>
                        <Textarea
                            id="feedback"
                            name="message"
                            required
                            placeholder="Leave your message here..."
                            rows={4}
                            className="border-2 border-[#492A23] placeholder:text-[#492A23] h-[20vh]"
                            />
                    </Field>
                </FieldGroup>
                <Button type="submit" className="font-bold bg-[#392A23] text-white py-2" disabled={isPending}>{isPending ? "Sending..." : "Send Message"}</Button>
            </FieldSet>
        </form>
    );
}