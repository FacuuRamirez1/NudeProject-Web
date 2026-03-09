import { AccountInfo } from "@/features/account/components/AccountInfo";
import { AccountOrders } from "@/features/account/components/AccountOrders";
import { getCurrentUser } from "@/features/account/services/account.service";
import { getUserOrders } from "@/features/account/services/order.service";

const AccountPage = async () => {
    const user = await getCurrentUser();
    console.log('USER ID', user.id);

    const orders = await getUserOrders(user.id);
    console.log('USER ORDERS', orders);

    return (
        <main className="w-full min-h-[calc(100vh-9.4rem)] m-0 p-0 bg-white text-[#492A23] flex flex-col items-center justify-start gap-8">
            <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3">MY ACCOUNT</h1>

            <AccountInfo user={user}/>
            <AccountOrders orders={orders} />
        </main>
    );
};

export default AccountPage;