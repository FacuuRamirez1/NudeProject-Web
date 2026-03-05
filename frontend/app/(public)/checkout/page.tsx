import { CheckoutForm } from "@/features/checkout/components/CheckoutForm";
import { OrderSummary } from "@/features/checkout/components/OrderSummary";

const CheckoutPage = () => {
    return (
        <main className="w-full min-h-screen flex flex-col gap-6 justify-start items-center bg-[#f5f2ef] px-6 py-10">
            <h1 className="text-[#492A23] font-bold text-3xl">CHECKOUT</h1>
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
                <section className="lg:col-span-2 bg-white p-8 shadow-sm rounded-xl">
                    <CheckoutForm />
                </section>

                <aside className="h-fit lg:sticky lg:top-10">
                    <OrderSummary />
                </aside>
            </div>
        </main>
    );
};

export default CheckoutPage;