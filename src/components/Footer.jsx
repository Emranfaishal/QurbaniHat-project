import Image from "next/image";
import { MdOutlineMailOutline, MdOutlineAddIcCall, MdCoPresent } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { compareAsc, format } from "date-fns";
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black text-base-content p-10">
                <nav className="text-white space-y-3">

                    <div className="text-3xl font-bold text-[#FD2951] flex justify-center items-center gap-3">
                        <div><Image src={"/images.png"}
                            alt="logo"
                            loading="eager"
                            width={35}
                            height={35}
                            className="object-cover h-auto w-auto"></Image></div>
                        <div>
                            Qurbanihat
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 text-xl font-bold">
                        <p><MdOutlineMailOutline /></p>
                        <p>emranfaishal@gamil.com</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 text-xl font-bold">
                        <p><MdOutlineAddIcCall /></p>
                        <p>+8801745-002857</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 text-xl font-bold">
                        <p><FaHome /></p>
                        <p>Trishal,Mymensingh</p>
                    </div>

                </nav>
                <nav className="text-white space-y-3">
                    <h6 className="footer-title text-xl font-bold">USEFUL LINKS</h6>
                    <div className="flex justify-center items-center gap-4 text-xl font-bold">
                        <p><FaHome /></p>
                        <p>Home</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 text-xl font-bold">
                        <p><GiCow /></p>
                        <p>All Animals</p>
                    </div>
                    <div className="flex justify-center items-center gap-4 text-xl font-bold">
                        <p><MdCoPresent /></p>
                        <p>Your Profile</p>
                    </div>
                </nav>
                <nav className="text-white space-y-3">
                    <h6 className="footer-title text-xl font-bold ">Social</h6>
                    <div className="text-3xl space-y-3">
                        <p><RiFacebookFill /></p>
                        <p><FaLinkedin /></p>
                    </div>
                </nav>
            </footer>
            <hr className=" text-white" />
            <footer className="footer sm:footer-horizontal footer-center bg-black pt-10 pb-10 text-white">
                <aside>
                    <p>Qurbanihat © {format(new Date(), "EEEE,MMM dd,yyyy")} - Festival of peace, faith and sacrifice—we are by your side</p>
                </aside>
            </footer>
        </div>

    );
};

export default Footer;