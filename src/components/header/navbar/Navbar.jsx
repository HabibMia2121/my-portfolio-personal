import { NavLink } from "react-router-dom";
import Container from "../../container/Container";
import './Navbar.css'
import logo from '../../../assets/image/logo.png'
import { FaBars } from "react-icons/fa6";



const Navbar = () => {
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/skills'>Skills</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    return (
        <div className="bg-[#080D13] fixed w-full top-0 z-10 ">
            <Container>
                <div className="lg:navbar text-white py-4 ">
                    <div className="lg:navbar-start lg:flex-row flex flex-row-reverse justify-between ">
                        <div className="dropdown dropdown-end mr-2">
                            <label tabIndex={0} className="btn-ghost lg:hidden">
                                <FaBars className="text-xl"/>
                            </label>
                            <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1C1E2A] rounded-box w-52">
                                {navLink}
                            </ul>
                        </div>
                        {/* logo and website name here */}
                        <div className=" flex items-center justify-start gap-1">
                            <img src={logo} className=" w-[70px] " alt="not found" />
                            <a className="text-2xl text-[#55E6A5] font-bold ">Portfolio</a>
                        </div>
                    </div>

                    <div className="navbar-end gap-16">
                        <div className="hidden lg:flex">
                            <ul className="gap-4 text-lg menu-horizontal px-1 font-medium">
                                {navLink}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;