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
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Make your Qurbani easy, safe and reliable.</h1>
                    <p className="mb-5">
                        We are making the preparation of Qurbani easy, reliable and hassle-free during this holy time of Eid-ul-Azha.
                        Every animal in our market is carefully raised, completely healthy and suitable for Qurbani according to Sharia.
                    </p>
                    <Link href={'/animals'}>
                        <button className="btn btn-outline btn-secondary text-white bg-[#FD2951]">All Animals</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;