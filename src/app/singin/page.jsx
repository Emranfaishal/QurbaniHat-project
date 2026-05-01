"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            toast("All fields are required!");
            return;
        }
        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            toast.error("error.message");
            return;
        }

        if (data) {
            toast.success("Login successful!");
            router.push("/");
        }
    };
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    };

    return (
        <div className="p-4 flex justify-center items-center">
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h2 className="text-2xl font-bold text-[#FD2951]">Sign In</h2>

                    <label className="label">Email</label>
                    <input name="email" type="email" required className="input border-none" placeholder="Your Email" />

                    <label className="label">Password</label>
                    <input
                        name="password"
                        type="password"
                        required
                        minLength={8}
                        className="input border-none"
                        placeholder="Password"
                    />

                    <button type="submit" className="btn w-full bg-[#FD2951] rounded-xl text-white mt-4">
                        Sign In
                    </button>

                    <p className="text-center text-xl font-bold">or</p>
                    <button onClick={handleGoogleSignIn} className="btn w-full bg-[#FD2951] rounded-xl text-white"><FaGoogle /> sing in with google</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;