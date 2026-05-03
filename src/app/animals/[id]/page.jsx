// 'use client';
import SuccessButton from "@/components/SuccessButton";
import Image from "next/image";
import Link from "next/link";
const allCowDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://qurbani-hat-project.vercel.app/cowdata.json', { cache: 'no-store' });
    const cows = await res.json();
    const cow = cows.find(c => c.id == id);

    return (
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 container mx-auto my-10 px-5 lg:px-10'>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <Image
                    src={cow.image}
                    width={350}
                    height={350}
                    className='w-full h-auto rounded-xl shadow-md object-contain'
                    alt={cow.title}
                />
            </div>
            <div className='w-full lg:w-1/2 space-y-6 lg:mt-25'>



                <div>
                    <span className='px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold uppercase'>
                        {cow.name}
                    </span>
                    <h1 className='text-4xl font-bold text-[#0B1C30] mt-3'>{cow.description}</h1>
                    <p className='text-gray-500 mt-2 font-medium'>Location: <span className='text-indigo-600'>{cow.location}</span></p>
                </div>


                <div className='flex items-center gap-2'>
                    <span className='text-yellow-500 font-bold text-lg'>$ {cow.price}</span>
                    <div className='flex text-yellow-400'> ★ ★ ★ ★ ★ </div>
                    <span className='text-gray-400 text-sm'>({cow.age}k reviews)</span>
                </div>


                <p className='text-gray-600 leading-7 text-justify border-b pb-6'>
                    {cow.type} : {cow.name}
                </p>


                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 bg-gray-100 rounded-lg'>{cow.breed}</div>
                        <div>
                            <p className='text-xs text-gray-400 uppercase'>weight</p>
                            <p className='font-semibold'>{cow.weight}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='p-2 bg-gray-100 rounded-lg'>Category</div>
                        <div>
                            <p className='text-xs text-gray-400 uppercase'>Age</p>
                            <p className='font-semibold'>{cow.age}</p>
                        </div>
                    </div>
                </div>


                <div className='flex items-center justify-between pt-6'>
                    <div>
                        <p className='text-sm text-gray-400'>Course Price</p>
                        <p className='text-3xl font-bold text-[#0B1C30]'>${cow.price}</p>
                    </div>
                    <div>
                        <SuccessButton></SuccessButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default allCowDetailsPage;