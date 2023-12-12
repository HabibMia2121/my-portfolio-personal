import myPhoto from '../../../assets/image/banner/myPhoto.png'
import Button from '../../button/Button';
import Container from '../../container/Container';
import './Banner.css'
import { MdDownload } from "react-icons/md";
import { useEffect } from 'react';
import AOS from 'aos';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    return (
        <div className='relative ' id='home'>
            <div className="hero min-h-screen overflow-hidden bannerImage">
                <Container>
                    <div className="hero min-h-screen overflow-hidden">
                        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                            <div className='flex-2'>
                                <img src={myPhoto} className="max-w-sm md:max-w-6xl h-auto -mb-10 lg:mt-20 " data-aos="fade-right" />

                            </div>
                            <div className=' mt-28 lg:mt-0 flex-1 ' data-aos="fade-down">
                                <h1 className="text-2xl font-bold mb-4">Hello  <span className=' text-[#55E6A5]'>I'm Habib!</span></h1>
                                <h2 className="text-5xl font-bold leading-[55px] font-fontRoboto">As a front-end developer and MERN stack developer. </h2>
                                <p className="py-6 max-w-xl font-medium text-base leading-7 text-[#a2a2a2]">My expertise in front-end development involves creating visually appealing and user-friendly interfaces using technologies like HTML, CSS, and JavaScript. As a MERN stack developer, you specialize in building full-stack applications using MongoDB, Express.js, React.js, and Node.js, covering both the front-end and back-end components.</p>
                                {/* resume download here */}
                                <a href='/public/Resume-of-Habib.pdf' download='resume-of-Habib'>
                                    <Button
                                        label={'Download Resume'}
                                        icon={<MdDownload className=' text-2xl'/>}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </div>
        </div>
    );
};

export default Banner;