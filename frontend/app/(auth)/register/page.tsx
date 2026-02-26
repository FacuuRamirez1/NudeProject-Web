import { RegisterForm } from "@/features/auth/components/RegisterForm";


const RegisterPage = () => {
    return(
        <main className="w-full min-h-[calc(100vh-9.4rem)] h-full bg-black/50 flex flex-col items-center justify-start gap-0 py-10">
            <h1 className="font-bold text-5xl mb-[3%] text-white">REGISTER</h1>
            <RegisterForm/>
        </main>
    );
};

export default RegisterPage;