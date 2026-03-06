import { Button } from "@/shared/ui/button";

interface Props {
    user: {
        username: string,
        email: string,
    };
};

export const AccountInfo = ({ user }: Props) => {
    return (
        <div className="flex flex-col w-[50%] items-center border-2 border-[#492A23] rounded-xl p-6 pt-4 space-y-2">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <div className=" w-full flex justify-between items-center">
                <div>
                    <p><strong>Name:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                <Button className="bg-[#492A23] hover:bg-[#492A23]/80 text-white font-bold text-xl">Logout</Button>
            </div>
        </div>
    );
};