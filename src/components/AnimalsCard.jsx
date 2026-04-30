
import Image from 'next/image';
import Link from 'next/link';

const AnimalsCard = ({ cow }) => {

    return (
        <div className="card bg-base-100 w-96 shadow-lg p-5">
            <div className='relative w-full aspect-square'>
                <Image
                    src={cow.image}
                    fill
                    sizes="(max-width:668px) 100vw, (max-width:1200px)50vw,33vw"
                    alt={cow.name}
                    className='rounded-xl'
                />
                <p className='btn btn-outline border-none text-[#FD2951] font-bold absolute right-2 top-2'>{cow.breed}</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
            <Link href={`/animals/${cow.id}`}>
                <button className='btn bg-[#FD2951] text-white w-full rounded-xl'>all cow</button>
            </Link>
        </div>
    );
};

export default AnimalsCard;