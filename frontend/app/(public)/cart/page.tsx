import { CartList } from "@/features/cart/components/CartList";
import { CartSummary } from "@/features/cart/components/CartSummary";

const CartPage = () => {
    return (
        <main className="w-full min-h-screen flex flex-col md:flex-row gap-8 p-6">
            <section className="flex-1">
                <h1 className="text-3xl font-bold mb-4">YOUR CART</h1>
                <CartList/>
            </section>

            <aside className="w-full md:w-[350px]">
                <CartSummary buttonText="Checkout" path="/checkout"/>
            </aside>
        </main>
    );
}

export default CartPage;