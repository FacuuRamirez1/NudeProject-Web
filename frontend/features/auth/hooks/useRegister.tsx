'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@nudeproject/schemas';
import { RegisterInput } from '@nudeproject/schemas/dist/auth.schemas';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { login } from '../services/auth.service';

export const useRegisterForm = () => {
    cons router = useRouter();

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