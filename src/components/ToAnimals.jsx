import Link from "next/link";
import AnimalsCard from "./AnimalsCard";
import Marquee from "react-fast-marquee";


const ToAnimals = async () => {
    const res = await fetch('https://qurbani-hat-project.vercel.app/cowdata.json');
    const cowsAll = await res.json();
    // console.log(cows);
    const cows = cowsAll.slice(0, 3);
    return (
        <div className="max-w-7xl mx-auto">

            <h2 className="text-4xl font-bold text-center p-5 text-[#FD2951] mt-5 animate__animated animate__bounce">Book your favorite animal.</h2>
            <div className="flex justify-between gap-4 items-center rounded-2xl p-5">
                <button className="btn bg-[#FD2951] text-white">Breed Name</button>
                <Marquee pauseOnHover={true}>
                    {
                        cowsAll.map(m=>{
                            return<span key={m.id} className="pr-5"> {m.breed} </span>
                        })
                    }
                </Marquee>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                {
                    cows.map(cow => <AnimalsCard key={cow.id} cow={cow}></AnimalsCard>)
                }
            </div>
            {/* <div className="text-center p-5">
                <Link href={'/animals'}>
                    <button className="btn btn-wide bg-[#FD2951] rounded-xl text-white">All Animals</button>
                </Link>
            </div> */}
        </div>
    );
};

export default ToAnimals;