import Link from "next/link";

const Banner = () => {
    return (
        <div
            className="hero min-h-[60vh]"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co.com/r2DDxPsz/shutterstock-2482086361-1200x630.avif)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">All Cow the</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link href={'/animals'}>
                        <button className="btn border-none text-white bg-[#FD2951]">All Cow</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;