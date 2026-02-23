import { LoginForm } from "@/features/auth/components/LoginForm";

const LoginPage = () => {
    return(
        <main className="w-full min-h-[calc(100vh-9.4rem)] h-full bg-black/50 flex flex-col items-center justify-start gap-6 md:gap-4 lg:gap-2 pt-5">
            <h1 className="font-bold text-5xl mb-[4%] mt-5 lg:mt-3 text-white">LOGIN</h1>
            <LoginForm/>
        </main>
    );
};

export default LoginPage;