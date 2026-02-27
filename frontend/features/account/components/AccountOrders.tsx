import { Orders } from "../types/ordersType";

interface Props {
    orders: Orders[],
}

export const AccountOrders = ({ orders }: Props) => {
    return(
        <div>
            <h2 className="font-bold text-lg">My Orders</h2>
            <hr />
            {orders?.length === 0 || !orders && <p>No orders yet.</p>}

            {orders?.map((order) => (
                <div key={order.id}>
                    <p>Order: #{order.id}</p>
                    <p>Total: ${order.total}</p>
                    <p>Status: ${order.status}</p>
                </div>
            ))}
        </div>
    );
};