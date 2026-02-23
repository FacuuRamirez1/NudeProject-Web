import { Button } from "@/shared/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";

export const RegisterForm = () => {
    return (
        <form className="w-screen h-full flex justify-center">
            <FieldSet className="bg-white/70 p-5 w-[30%] h-[90%] flex justify-center text-[#492a23] rounded-lg">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="name" className="font-bold ml-1" aria-required>Name</FieldLabel>
                        <Input 
                            type="Name" 
                            placeholder="Nude Project" 
                            required 
                            className="border-2 border-[#492a23] placeholder:text-[#492a23]"
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email" className="font-bold ml-1" aria-required>Email</FieldLabel>
                        <Input 
                            type="email" 
                            placeholder="nudeproject@example.com" 
                            required 
                            className="border-2 border-[#492a23] placeholder:text-[#492a23]"
                        />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="password" className="font-bold ml-1">Password</FieldLabel>
                        <Input 
                            type="password"
                            placeholder="Enter your password" 
                            required 
                            className="border-2 border-[#492a23] placeholder:text-[#492a23]"
                        />
                    </Field>
                </FieldGroup>
                <Button type="submit" className="w-[30%] m-auto my-2  font-bold bg-[#492a23] text-white py-2  rounded-lg hover:bg-[#492a23]/80" >{/*isSubmitting? 'LOGGING IN...': 'LOGIN'*/}</Button>
            </FieldSet>
        </form>
    );
};