import Image from "next/image";
import { Orders } from "../types/ordersType";

interface Props {
    orders: {
        data: Orders[];
    };
}

export const AccountOrders = ({ orders }: Props) => {

    return (
        <div className="flex flex-col w-[50%] items-center border-2 border-[#492A23] rounded-xl p-6 pt-4 space-y-2">
        <h2 className="font-bold text-lg">My Orders</h2>
        <hr />

        {!orders?.data || orders.data.length === 0 ? (
        <p>No orders yet.</p>
        ) : (
            orders.data.map((order) => {

                const address = `${order?.checkoutData?.address1}, ${order.checkoutData?.address2}, ${order.checkoutData?.city}, Postal Code:${order.checkoutData?.postalCode}, ${order.checkoutData?.country}`
                

                return(
                    <div key={order.id} className="w-full border-b-2 border-t-2 border-[#492A23] text-[#492A23] font-semibold my-6 py-4">
                        <p>Address: {address}</p>
                        {order?.checkoutData?.comments ? <p>Commet: {order?.checkoutData?.comments}</p> : ''}
                        <p>Total: ${order.total}</p>
                        <p>Your Items</p>

                        <div className="flex flex-col gap-4 border border-[#492A23] rounded-xl p-2 mt-4">
                            {order.items?.map((item) => (
                                <div key={item.id} className="flex flex-col w-full md:flex-row items-center gap-4 last:border-0 text-white bg-[#492A23]">
                                    <div className="relative w-32 h-32 bg-[#F5F5F5] flex items-start justify-center p-4 overflow-hidden">
                                        <Image
                                            src={item?.images?.[0]?.url ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.images[0].url}` : "/no-image-icon-23485.png"}
                                            alt={item?.name ? item?.name : 'Nude Project Product'}
                                            fill
                                            unoptimized
                                            className="object-cover mix-blend-multiply"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-start gap-2 w-full">
                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold leading-tight">{item.name}</h3>
                                            <p className="font-light text-sm">{item.selectedSize}</p>
                                            <p className="text-[11px] font-semibold mt-1">${item.price?.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })
        )}
        </div>
    );
};