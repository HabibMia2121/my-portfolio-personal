import Container from "../container/Container";
import HeaderTitle from "../headerTitle/HeaderTitle";

const About = () => {
    return (
        <div className="mt-10">
            {/* headerTitle section here */}
            <HeaderTitle
                title={'About Me'}
                subTitle={'Some of my about me shared in this website.'}
            />
            <Container>
                <div className=" mt-14 flex gap-5 flex-col lg:flex-row">
                    {/* about me here */}
                    <div className=" flex-1">
                        <img src="https://i.ibb.co/W55GvxJ/2.jpg" className=" ,md:max-w-md  h-auto rounded-xl ml-3 md:ml-40 lg:ml-20" alt="not found" />
                        <p className=" mt-5 font-medium text-xl leading-7 text-[#a4a4a4]">Hi, I’m Habib, I am Front end developer and MERN Stack developer.some of my technology use  HTML,CSS, Bootstrap, Tailwindcss, Javascript, React and Node js comfortably and easily handling and there are many projects developed using MERN stack technology. finally share my future goal is to become a senior developer.</p>
                        <h2 className="mt-7 font-medium text-lg"><span className="text-[#55E6A5]">Email : </span> habibmia21021@gmail.com</h2>
                    </div>
                    {/* education and experience here */}
                    <div className=" flex-1">
                        <div>
                            <h2 className="font-bold text-xl text-[#55E6A5]">My Education: </h2>
                            <div className=" mt-3">
                                <p className="font-medium text-lg text-[#a4a4a4]">Diploma</p>
                                <p className="font-medium text-lg text-[#a4a4a4]">Model Institute Of Science And Technology</p>
                                <p className="font-medium text-lg text-[#a4a4a4]">Completed in 30,12,2023</p>
                            </div>
                                
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold text-xl text-[#55E6A5]">My Experience:</h2>
                            <div className=" mt-3">
                                <p className="font-medium text-lg text-[#a4a4a4]">Web Development | MERN Stack Development</p>
                                <p className="font-medium text-lg text-[#a4a4a4]">Programming Hero</p>
                                <p className="font-medium text-lg text-[#a4a4a4]">6 Month of Experiance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;