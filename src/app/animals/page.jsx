import AnimalsCard from "@/components/AnimalsCard";

const allAnimalsPage = async () => {
    const res = await fetch('https://qurbani-hat-project.vercel.app/cowdata.json');
    const cows = await res.json();
    return (
        <div className="max-w-7xl mx-auto p-5">
            <h2 className="text-5xl font-bold text-center p-5 text-[#FD2951] mt-5">Online Qurbanihat Market</h2>
            <p className="text-center text-gray-400 mb-5">A large collection of indigenous and farm-bred cattle and goats
                Guarantee of halal and healthy animals</p>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
                {
                    cows.map(cow => <AnimalsCard key={cow.id} cow={cow}></AnimalsCard>)
                }
            </div>
        </div>
    );
};

export default allAnimalsPage;