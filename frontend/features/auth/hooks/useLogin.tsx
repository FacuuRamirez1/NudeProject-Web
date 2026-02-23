'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from "@nudeproject/schemas";
import { LoginInput } from '@nudeproject/schemas/dist/auth.schemas';
import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { login } from '../services/auth.service';

export const useLoginForm = () => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginInput) => {
        try {
            await login(data);
            toast.success('Welcome Back!');
            router.push('/');
            
        } catch(error) {
            toast.error('Invalid credentials');
            console.log(error);
        }
    };

    return { ...form, onSubmit };
};