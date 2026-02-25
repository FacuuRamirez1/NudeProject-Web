import { Orders } from "../types/ordersType";

interface Props {
    orders: Orders[],
}

export const AccountOrders = ({ orders }: Props) => {
    return(
        <div>
            <h2>My Orders</h2>
            <hr />
            {orders.length === 0 && <p>No orders yet.</p>}

            {orders.map((order) => (
                <div key={order.id}>
                    <p>Order: #{order.id}</p>
                    <p>Total: ${order.total}</p>
                    <p>Status: ${order.status}</p>
                </div>
            ))}
        </div>
    );
};