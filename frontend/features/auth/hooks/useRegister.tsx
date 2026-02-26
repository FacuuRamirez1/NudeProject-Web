'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@nudeproject/schemas';
import { RegisterInput } from '@nudeproject/schemas/dist/auth.schemas';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { register } from '../services/auth.service';
import { useForm } from 'react-hook-form';

export const useRegisterForm = () => {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterInput) => {
        try {
            await register(data);
            toast.success('Account created successfully!');
            router.push('/account');

        } catch(error) {
            toast.error('Error creating account');
            console.log(error);
        }
    };

    return { ...form, onSubmit };
};