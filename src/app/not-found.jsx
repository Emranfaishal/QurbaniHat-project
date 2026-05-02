import Link from 'next/link';
const notFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-2">Page Not Found</p>
            <Link href="/" className="mt-4 text-blue-500 underline">
                Go Back Home
            </Link>
        </div>
    );
};

export default notFound;