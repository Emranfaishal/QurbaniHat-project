'use client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SuccessButton = () => {
    const router = useRouter();

    const handleClick = () => {
        toast.success("Booking Successful!");
        router.push('/animals');
    };
    return (
        <button onClick={handleClick} className='btn bg-[#FD2951] text-white w-full rounded-xl'>Success</button>
    );
};

export default SuccessButton;