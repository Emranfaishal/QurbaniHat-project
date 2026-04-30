'use client';
import ModelPage from "@/components/Model";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";



const profilePage = () => {
    const userData = authClient.useSession();
    // console.log(userData);
    const user = userData.data?.user;
    console.log(user);
    return (
        <div className="flex justify-center items-center p-5">
            <div className="card bg-base-400 w-96 shadow-lg ">
                <figure>
                    <Image src={user?.image}
                        alt="logo"
                        loading="eager"
                        width={35}
                        height={35}
                        className="object-cover h-auto w-auto"></Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user?.name}</h2>
                    <p>{user?.email}</p>
                    <ModelPage></ModelPage>
                </div>
                
            </div>
        </div>
    );
};

export default profilePage;