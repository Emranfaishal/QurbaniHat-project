'use client';
import { UpDateUserModal } from "@/components/UpDateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";



const profilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    return (
        <div className="p-10">
            <Card className="max-w-96 mx-auto flex flex-col items-center border p-5">
                <Avatar className="h-25 w-25">
                    <Avatar.Image
                        alt="John Doe"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className="text-xl font-bold">{user?.name}</h2>
                <p className="text-muted">{user?.email}</p>
                <UpDateUserModal></UpDateUserModal>
            </Card>
        </div>
    );
};

export default profilePage;