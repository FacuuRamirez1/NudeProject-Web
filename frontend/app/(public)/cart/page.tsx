import { CartList } from "@/features/cart/components/CartList";
import { CartSummary } from "@/features/cart/components/CartSummary";

const CartPage = () => {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <main className="max-w-7xl mx-auto py-4 px-6">
                <h1 className="text-4xl font-bold mb-8 text-center tracking-tighter text-[#492A23]">YOUR CART</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 items-start">

                    <section className="lg:col-span-7 space-y-8">
                        <h2 className="text-xl text-[#492A23] font-bold uppercase tracking-tight mb-6 border-b-2 border-[#492A23] pb-2 inline-block">
                            Products
                        </h2>
                        <CartList/>
                    </section>

                    <aside className="lg:col-span-5">
                        <div className="sticky top-10 bg-[#492A23] text-white p-6  rounded-2xl shadow-2xl">
                            <h2 className="text-xl font-bold uppercase tracking-widest">
                                Order Data
                            </h2>
                            <CartSummary buttonText="Checkout" path="/checkout"/>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}

export default CartPage;