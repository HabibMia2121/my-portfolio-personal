// import { NavLink } from "react-router-dom";
import Container from "../../container/Container";
import './Navbar.css'
import logo from '../../../assets/image/logo.png'
import { FaBars } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from 'react'



const Navbar = () => {
    const [active, setActive] = useState('');

    const handleHome = clickMenu => {
        setActive(clickMenu);
    }
    console.log(active);
    const navLink = <>
        <AnchorLink href='#home'
            onClick={() => handleHome('home')}
            className={(active === 'home' || active == '') && 'active' }

        >Home</AnchorLink>
        <AnchorLink href='#about'
            onClick={() => handleHome('about')}
            className={active === 'about' && 'active'}
        >About</AnchorLink>
        <AnchorLink href='#skills'
            onClick={() => handleHome('skills')}
            className={active === 'skills' && 'active'}
        >Skills</AnchorLink>
        <AnchorLink href='#project'
            onClick={() => handleHome('project')}
            className={active === 'project' && 'active'}
        >My Project</AnchorLink>
        <AnchorLink href='#contact'
            onClick={() => handleHome('contact')}
            className={active === 'contact' && 'active'}
        >Contact</AnchorLink>
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
                        <div >
                            <img src={logo} className=" w-[70px] " alt="not found" />
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