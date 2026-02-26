'use client';

import { Button } from "@/shared/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { useRegisterForm } from "../hooks/useRegister";

export const RegisterForm = () => {
    const { 
        register,
        handleSubmit,
        onSubmit,
        formState: { errors, isSubmitting }
    } = useRegisterForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-screen h-full flex justify-center">
            <FieldSet className="bg-white/70 p-5 w-[30%] h-[90%] flex justify-center text-[#492a23] rounded-lg">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="username" className="font-bold ml-1" aria-required>Full Name</FieldLabel>
                        <Input 
                            type="name" 
                            { ...register('username')}
                            placeholder="Nude Project" 
                            required 
                            className="border-2 border-[#492a23] placeholder:text-[#492a23]"
                        />
                        { errors.username && (
                            <FieldError>
                                {errors.username.message}
                            </FieldError>
                        )}
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="email" className="font-bold ml-1" aria-required>Email</FieldLabel>
                        <Input 
                            type="email" 
                            { ...register('email')}
                            placeholder="nudeproject@example.com" 
                            required 
                            className="border-2 border-[#492a23] placeholder:text-[#492a23]"
                        />
                        { errors.email && (
                            <FieldError>
                                {errors.email.message}
                            </FieldError>
                        )}
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="password" className="font-bold ml-1">Password</FieldLabel>
                        <Input 
                            type="password"
                            { ...register('password')}
                            placeholder="Enter your password" 
                            required 
                            className="border-2 border-[#492a23] placeholder:text-[#492a23]"
                        />
                        { errors.password && (
                            <FieldError>
                                {errors.password.message}
                            </FieldError>
                        )}
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="confirmPassword" className="font-bold ml-1">Confirm Password</FieldLabel>
                        <Input 
                            type="password"
                            { ...register('confirmPassword')}
                            placeholder="Confirm your password" 
                            required 
                            className="border-2 border-[#492a23] placeholder:text-[#492a23]"
                        />
                        { errors.confirmPassword && (
                            <FieldError>
                                {errors.confirmPassword.message}
                            </FieldError>
                        )}
                    </Field>
                </FieldGroup>
                <Button type="submit" className="w-[30%] m-auto my-2  font-bold bg-[#492a23] text-white py-2  rounded-lg hover:bg-[#492a23]/80" disabled={isSubmitting}>{isSubmitting? 'REGISTERING...': 'REGISTER'}</Button>
            </FieldSet>
        </form>
    );
};