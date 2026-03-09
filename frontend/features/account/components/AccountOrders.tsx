import { Orders } from "../types/ordersType";

interface Props {
    orders: {
        data: Orders[]
    },
}

export const AccountOrders = ({ orders }: Props) => {
    console.log(orders)
    return(
        <div>
            <h2 className="font-bold text-lg">My Orders</h2>
            <hr />
            {orders.data?.length === 0 || !orders && <p>No orders yet.</p>}

            {orders.data?.map((order) => (
                <div key={order.id}>
                    <p>Order: #{order.id}</p>
                    <p>Total: ${order.total}</p>
                </div>
            ))}
        </div>
    );
};