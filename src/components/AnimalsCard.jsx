
import Image from 'next/image';
import Link from 'next/link';

const AnimalsCard = ({ cow }) => {

    return (
        <div className="card bg-base-100 w-full shadow-lg p-5">
            <div className='relative w-full aspect-square'>
                <Image
                    src={cow.image}
                    fill
                    sizes="(max-width:668px) 100vw, (max-width:1200px)50vw,33vw"
                    alt={cow.name}
                    className='rounded-xl'
                />
                <div className="badge border-none text-white bg-gray-400 absolute right-2 top-2">Age : {cow.age}</div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                    {cow.name}
                </h2>
                <div className="card-actions">
                    <div className="badge badge-outline text-red-500">Breed : {cow.breed}</div>  
                    <div className="badge badge-outline text-pink-400">Weight : {cow.weight}</div>
                    <div className="badge badge-outline text-green-600">Price : ${cow.price}</div>
                    <div className="badge badge-outline text-blue-600">Location : {cow.location}</div>

                </div>
                <p className='text-gray-500'>{cow.description}</p>

            </div>
            <Link href={`/animals/${cow.id}`}>
                <button className='btn bg-[#FD2951] text-white w-full rounded-xl'>Buy Now</button>
            </Link>
        </div>
    );
};

export default AnimalsCard;