import { CheckoutForm } from "@/features/checkout/components/CheckoutForm";

export function CheckoutPage () {
    return (
        <main className="min-h-screen bg-[#f5f2ef] px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                <section className="lg:col-span-2 bg-white p-8 shadow-sm">
                    <CheckoutForm />
                </section>

                <aside className="bg-white p-8 shadow-sm h-fit sticky top-10">
                    <OrderSummary />
                </aside>
            </div>
        </main>
    );
};