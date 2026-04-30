'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const links = <>
        <li>
            <Link href="/"
                className={`text-sm font-bold ${pathname === '/' ? 'text-[#FD2951]' : ''}`}>
                Home
            </Link>
        </li>
        <li>
            <Link href="/animals"
                className={`text-sm font-bold ${pathname === '/animals' ? 'text-[#FD2951]' : ''}`}>
                AllAnimals
            </Link>
        </li>
        <li>
            <Link href="/profile"
                className={`text-sm font-bold ${pathname === '/profile' ? 'text-[#FD2951]' : ''}`}>
                Profile
            </Link>

        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold text-[#FD2951]">
                    <Image src={"/images.png"}
                        alt="logo"
                        loading="eager"
                        width={35}
                        height={35}
                        className="object-cover h-auto w-auto"></Image>
                    Qurbanihat</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link href={'/singin'}>
                    <button className="btn bg-[#FD2951] text-white rounded-xl font-bold">singIn</button>
                </Link>
                <Link href={'/registration'}>
                    <button className="btn bg-[#FD2951] text-white rounded-xl font-bold">registration</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;