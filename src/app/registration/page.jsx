"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";

const RegistrationPage = () => {
    const router = useRouter();

    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: 'google'
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!name || !email || !image || !password) {
            alert("All fields are required!");
            return;
        }

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password,
        });

        if (error) {
            toast.error("Not Registration!");
            return;
        }

        if (data) {
            toast.success("Registration successful!");
            router.push('/');
        }
    };

    return (
        <div className="p-4 flex justify-center items-center">
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h2 className="text-2xl text-[#FD2951] font-bold">Register</h2>

                    <label className="label">Name</label>
                    <input name="name" type="text" required className="input border-none" placeholder="Your Name" />

                    <label className="label">Email</label>
                    <input name="email" type="email" required className="input border-none" placeholder="Your Email" />

                    <label className="label">Image URL</label>
                    <input name="image" type="text" required className="input border-none" placeholder="Your image" />

                    <label className="label">Password</label>
                    <input name="password" type="password" required minLength={8} className="input border-none" placeholder="Password" />

                    <button type="submit" className="btn w-full bg-[#FD2951] rounded-xl text-white mt-4">
                        Register
                    </button>

                    <p className="text-center text-xl font-bold">or</p>

                    <button type="button" onClick={handleGoogle} className="btn w-full rounded-xl">
                       <FaGoogle /> Sign in with Google
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default RegistrationPage;