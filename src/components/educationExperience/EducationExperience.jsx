import Container from "../container/Container";

const EducationExperience = () => {
    return (
        <div className="my-20">
            <Container>
                <div className=" flex flex-col gap-10 lg:gap-0 md:flex-row md:items-center md:justify-evenly" data-aos="zoom-in">
                    <div>
                        {/* title here */}
                        <h2 className="font-bold text-xl text-[#55E6A5]">My Education: </h2>
                        {/* content here */}
                        <div className=" mt-3 border-b-2 pb-3">
                            <p className="font-medium text-lg text-[#a4a4a4]">Diploma</p>
                            <p className="font-medium text-lg text-[#a4a4a4]">Model Institute Of Science And Technology</p>
                            <p className="font-medium text-lg text-[#a4a4a4]">Completed in 30,12,2023</p>
                        </div>

                    </div>
                    <div >
                        {/* tile here */}
                        <h2 className="font-bold text-xl text-[#55E6A5]">My Experience:</h2>

                        {/* content here */}
                        <div className=" mt-3 border-b-2 pb-3">
                            <p className="font-medium text-lg text-[#a4a4a4]">Web Development | MERN Stack Development</p>
                            <p className="font-medium text-lg text-[#a4a4a4]">Programming Hero</p>
                            <p className="font-medium text-lg text-[#a4a4a4]">6 Month of Experiance</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EducationExperience;