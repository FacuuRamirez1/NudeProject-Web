import { Button } from "@/shared/ui/button";

interface Props {
    user: {
        username: string,
        email: string,
    };
};

export const AccountInfo = ({ user }: Props) => {
    return (
        <div className="flex flex-col border-2 border-[#492A23] rounded-xl p-6 space-y-2">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <Button className="self-center m-auto bg-[#492A23] hover:bg-[#492A23]/80 text-white font-bold text-xl py-1 mt-4">Logout</Button>
        </div>
    );
};