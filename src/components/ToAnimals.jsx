"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AnimalsCard from "./AnimalsCard";
import Marquee from "react-fast-marquee";
import { HashLoader } from "react-spinners";

const ToAnimals = () => {
    const [cowsAll, setCowsAll] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://qurbani-hat-project.vercel.app/cowdata.json")
            .then(res => res.json())
            .then(data => {
                setCowsAll(data);
                setLoading(false);
            },1000);
    }, []);

    const cows = cowsAll.slice(0, 3);


    return (
        <div className="max-w-7xl mx-auto">

            <div className="flex justify-between gap-4 items-center rounded-2xl p-5">
                <button className="btn bg-[#FD2951] text-white">Breed Name</button>

                <Marquee pauseOnHover={true}>
                    {
                        cowsAll.map(m => (
                            <span key={m.id} className="pr-5">{m.breed}</span>
                        ))
                    }
                </Marquee>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    loading ? (
                        <div className="col-span-3 flex justify-center items-center py-10">
                            <HashLoader color="#FD2951" />
                        </div>
                    ) : (
                        cows.map(cow => (
                            <AnimalsCard key={cow.id} cow={cow} />
                        ))
                    )
                }
            </div>

            <div className="text-center p-5">
                <Link href="/animals">
                    <button className="btn btn-wide bg-[#FD2951] rounded-xl text-white">
                        All Animals
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ToAnimals;