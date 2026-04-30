"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegistrationPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // ✅ validation
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
            alert(error.message);
            return;
        }

        if (data) {
            alert("Registration successful!");
            router.push('/');
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Register</legend>

                    <label className="label">Name</label>
                    <input name="name" type="text" required className="input" placeholder="Your Name" />

                    <label className="label">Email</label>
                    <input name="email" type="email" required className="input" placeholder="Email" />

                    <label className="label">Image URL</label>
                    <input name="image" type="text" required className="input" placeholder="Your image" />

                    <label className="label">Password</label>
                    <input name="password" type="password" required minLength={8} className="input" placeholder="Password" />

                    <button type="submit" className="btn btn-neutral mt-4">
                        Register
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default RegistrationPage;