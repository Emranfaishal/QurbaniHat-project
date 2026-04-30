import React from 'react';

const ModelPage = () => {
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button>
            <dialog id="my_modal_4" className="modal">
                <div className="p-4 flex justify-center items-center">
                    <form>
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
                            <button className="btn w-full">sing in with google</button>
                        </fieldset>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ModelPage;