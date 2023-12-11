import Container from "../container/Container";
import HeaderTitle from "../headerTitle/HeaderTitle";
import Comfortable from "./comfortableSkill/Comfortable";
import Expert from "./expertSkill/Expert";
import FamiliarDeploy from "./familiar-Deploy/FamiliarDeploy";
import Tools from "./tools/Tools";

const MySkill = () => {
    return (
        <div>
            {/* headerTitle section here */}
            <HeaderTitle
                title={'My Skills'}
                subTitle={'Some of my skills shared in this website.'}
            />
            <Container>
                <div className=" mt-10">
                    {/* expert skill here */}
                    <div>
                        <h2 className="font-bold text-xl text-[#55E6A5]">Expert:</h2>
                        <Expert />
                    </div>
                    {/* Comfortable */}
                    <div className="mt-4">
                        <h2 className="font-bold text-xl text-[#55E6A5]">Comfortable:</h2>
                        <Comfortable/>
                    </div>
                    {/* Familiar and Deploy here */}
                    <div className="mt-4">
                        <h2 className="font-bold text-xl text-[#55E6A5]">Familiar and Deploy:</h2>
                        <FamiliarDeploy/>
                    </div>

                    {/* Tools */}
                    <div className="mt-4">
                        <h2 className="font-bold text-xl text-[#55E6A5]">Tools:</h2>
                        <Tools/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MySkill;