import Container from "../container/Container";
import HeaderTitle from "../headerTitle/HeaderTitle";
import aboutPhoto from '../../assets/image/about-photo.jpg'

const About = () => {
    return (
        <div className="mt-10">
            {/* headerTitle section here */}
            <HeaderTitle
                title={'About Me'}
                subTitle={'Some of my about me shared in this website.'}
            />
            {/* <img src={aboutPhoto} className=" max-w-sm md:max-w-md h-2/3 rounded-xl ml-2 md:ml-40 lg:ml-20" alt="not found" /> */}
            <Container>
                <div className=" mt-14 justify-center items-center flex gap-8 flex-col lg:flex-row">
                    {/* photo here */}
                    <div className="">
                        <img src={aboutPhoto} className="max-w-sm md:max-w-md h-[450px]  object-cover rounded-xl" alt="not found" />
                        
                    </div>
                    {/* content  here */}
                    <div className="max-w-xl">
                        <p className=" mt-5 font-medium text-xl leading-7 text-[#a4a4a4]">Hi, I’m Habib, I am Front end developer and MERN Stack developer.some of my technology use  HTML,CSS, Bootstrap, Tailwindcss, Javascript, React and Node js comfortably and easily handling and there are many projects developed using MERN stack technology. finally share my future goal is to become a senior developer.</p>
                        <h2 className="mt-7 font-medium text-lg"><span className="text-[#55E6A5]">Email : </span> habibmia21021@gmail.com</h2>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;