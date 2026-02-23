'use client';

import { Button } from "@/shared/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import Link from "next/link";
import { useLoginForm } from "../hooks/useLogin";

export const LoginForm = () => {
    const { 
        register,
        handleSubmit,
        onSubmit,
        formState: { errors, isSubmitting }
    } = useLoginForm();

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="w-screen h-full flex justify-center">
            <FieldSet className="bg-white/70 p-5 w-[30%] h-[90%] flex justify-center text-[#492a23] rounded-lg">
                <FieldGroup>
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
                    <p className="text-center">Don´t have an account? <Link href={'/register'} className="border-b border-[#492a23] rounded-none]">Create one.</Link></p>
                </FieldGroup>
                <Button type="submit" className="w-[30%] m-auto my-2  font-bold bg-[#492a23] text-white py-2  rounded-lg hover:bg-[#492a23]/80" disabled={isSubmitting}>{isSubmitting? 'LOGGING IN...': 'LOGIN'}</Button>
            </FieldSet>
        </form>
    );
};