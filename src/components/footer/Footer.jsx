import { Link } from "react-router-dom";
import Container from "../container/Container";
import { MdCall, MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/image/logo.png'
import { FaAddressCard } from "react-icons/fa6";
import moment from 'moment';

const Footer = () => {
    return (
        <>
            <div className=" bg-[#080D13] relative">
                <Container>
                    <footer className="footer justify-center md:px-5 md:justify-normal lg:px-0 py-20  font-fontRoboto ">
                        <aside >
                            <div className="ml-20">
                                <img
                                    src={logo}
                                    alt="not found"
                                    className=" w-20 md:w-24 h-auto"
                                />
                            </div>
                            <p className=" font-medium text-base text-[#a2a2a2]">
                                This website private is made for me,<br /> where I will have all the information.
                            </p>
                            

                        </aside>
                        <nav>
                            <header className=" footer-title text-xl mb-4 text-white  opacity-100 ">
                                Contact Info
                            </header>
                            <div className=" space-y-3 text-[#a2a2a2]">
                                <div className=" flex gap-2 text-[#a2a2a2]">
                                    <MdEmail className=" text-xl" />
                                    habibmia21021@gmail.com
                                </div>
                                <div className=" flex gap-2 text-[#a2a2a2]">
                                    <MdCall className=" text-xl" />
                                    Phone: +8801969440721
                                </div>
                                <div className=" flex gap-2 text-[#a2a2a2]">
                                    <FaAddressCard className=" text-xl" />
                                    Comilla, Dhaka, Bangladesh
                                </div>
                            </div>
                        </nav>
                        <nav>
                            <header className="footer-title text-xl mb-4 text-white  opacity-100">
                                Social Icon
                            </header>
                             <div className="flex gap-4">
                                <Link to="https://www.facebook.com/" target="_blank" className="bg-[#504f4f] p-2 rounded-full hover:bg-[#55E6A5] ">
                                    <GrFacebookOption className="text-2xl " />
                                </Link>
                                <Link to="https://www.linkedin.com/in/habib2121/" target="_blank" className="bg-[#504f4f] p-2 rounded-full hover:bg-[#55E6A5] ">
                                    <FaLinkedinIn className="text-2xl " />
                                </Link>

                                <Link to="https://github.com/HabibMia2121" target="_blank" className="bg-[#504f4f] p-2 rounded-full hover:bg-[#55E6A5] ">
                                    <FaGithub className="text-2xl " />
                                </Link>
                                
                            </div>
                        </nav>
                    </footer>
                </Container>
            </div>
            {/* copyright section here  */}
            <div className="bg-[#080D13] text-white">
                <Container>
                    <div className=" text-center  py-9">
                        <span className=" text-[#a2a2a2] ">
                            Copyright © {moment().format('YYYY')}. All rights reserved by Habib.
                        </span>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;