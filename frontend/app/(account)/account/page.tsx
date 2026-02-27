import { AccountInfo } from "@/features/account/components/AccountInfo";
import { AccountOrders } from "@/features/account/components/AccountOrders";
import { getCurrentUser } from "@/features/account/services/account.service";

const AccountPage = async () => {
    const user = await getCurrentUser();

    return (
        <main className="w-full min-h-[calc(100vh-9.4rem)] m-0 p-0 bg-black/50 text-white flex flex-col items-center justify-start gap-8">
            <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3">MY ACCOUNT</h1>

            <AccountInfo user={user}/>
            <AccountOrders orders={user.orders} />
        </main>
    );
};

export default AccountPage;