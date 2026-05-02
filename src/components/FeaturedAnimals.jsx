import Image from "next/image";
const data = [
    {
        "id": 1,
        "name": "Deshi Shahi Cow",
        "breed": "Local Deshi",
        "location": "Bogura",
        "description": "Healthy deshi cow suitable for Qurbani. Well fed with natural.",
        "image": "https://i.ibb.co.com/bMWZwmLP/images-1.jpg",
        "category": "Large Animal"
    },
    {
        "id": 2,
        "name": "Black Bengal Goat",
        "breed": "Black Bengal",
        "location": "Rajshahi",
        "description": "Popular Black Bengal goat, খুব সুস্থ এবং কুরবানির জন্য উপযুক্ত।",
        "image": "https://i.ibb.co.com/VYc95SCv/images-2.jpg",
        "category": "Small Animal"
    },
    {
        "id": 3,
        "name": "Sahiwal Cross Cow",
        "breed": "Sahiwal Cross",
        "location": "Dhaka",
        "description": "High quality cross breed cow with ভালো মাংস উৎপাদন ক্ষমতা।",
        "image": "https://i.ibb.co.com/nNFVDMnN/download.jpg",
        "category": "Large Animal"
    },
    {
        "id": 4,
        "name": "Jamuna Pari Goat",
        "breed": "Jamunapari",
        "location": "Kushtia",
        "description": "Large size goat, দেখতে সুন্দর এবং কুরবানির জন্য পারফেক্ট।",
        "image": "https://i.ibb.co.com/P3MLNYJ/images.jpg",
        "category": "Medium Animal"
    }
]

const FeaturedAnimals = () => {
    return (
        <div className="max-w-7xl mx-auto p-5">

            <h2 className="text-4xl font-bold text-center p-5 text-[#FD2951] mt-5">
                Featured animals
            </h2>
            <p className="text-center text-gray-400 mb-5">Preparing for Qurbani According to the Sunnah Join Us in the Joy of Worship Halal, Pure and Reliable Animals The Best Choice for the Pleasure of Allah</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    data.map(d => <div key={d.id}>
                        <div className="flex justify-center">

                            <div className="card bg-base-100 w-full shadow-lg">

                                <figure className="relative w-full h-60">
                                    <Image
                                        src={d.image}
                                        fill
                                        sizes="(max-width:668px) 100vw, (max-width:1200px)50vw,33vw"
                                        alt={d.name}
                                        className='rounded-xl'
                                    />
                                </figure>

                                <div className="card-body">
                                    <h2 className="card-title">{d.name}</h2>
                                    <p>
                                        {d.description}
                                    </p>
                                </div>

                            </div>



                        </div>
                    </div>)
                }
            </div>


        </div>
    );
};

export default FeaturedAnimals;