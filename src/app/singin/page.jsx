"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            alert("All fields are required!");
            return;
        }
        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (data) {
            alert("Login successful!");
            router.push("/");
        }
    };
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }

    return (
        <div className="p-4 flex justify-center items-center">
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <h2 className="text-2xl font-bold">Sign In</h2>

                    <label className="label">Email</label>
                    <input name="email" type="email" required className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input
                        name="password"
                        type="password"
                        required
                        minLength={8}
                        className="input"
                        placeholder="Password"
                    />

                    <button type="submit" className="btn btn-neutral mt-4">
                        Login
                    </button>

                    <p className="text-center text-xl font-bold">or</p>
                    <button onClick={handleGoogleSignIn} className="btn w-full">sing in with google</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;