interface Props {
    user: {
        username: string,
        email: string,
    };
};

export const AccountInfo = ({ user }: Props) => {
    return (
        <div className="border rounded-xl p-6 space-y-2">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
};