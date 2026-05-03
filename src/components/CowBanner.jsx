

const CowBanner = () => {
    return (
        <div className='max-w-7xl mx-auto p-5'>
            <h2 className="animate__animated animate__fadeIn text-4xl font-bold text-center p-5 text-[#FD2951] mt-5 animate__animated animate__bounce">Book your favorite animal.</h2>
            <p className='text-center text-gray-400 mb-5 animate__fadeIn'>A reliable market for premium sacrificial animals Quality is our commitment
                Transparency, trust and fair prices</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-10 mb-10'>

                <div className="card bg-base-100 w-full shadow-lg hover-3d">
                    <div className='text-center p-5 space-y-5 text-[#FD2951]'>
                        <h2 className='text-4xl font-bold'>12</h2>
                        <p className='text-2xl'>Total Animal Cow</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-full shadow-lg hover-3d">
                    <div className='text-center p-10 space-y-5 text-[#FD2951]'>
                        <p className='text-2xl'>Transparency, trust and the right price</p>
                    </div>
                </div>

                <div className="card bg-base-100 w-full shadow-lg hover-3d">
                    <div className='text-center p-5 space-y-5 text-[#FD2951]'>
                        <p className='text-2xl'>Guaranteeing healthy and halal animals</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-lg hover-3d">
                    <div className='text-center p-5 space-y-5 text-[#FD2951]'>
                        <p className='text-2xl'>Buy now, sacrifice with peace of mind</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default CowBanner;