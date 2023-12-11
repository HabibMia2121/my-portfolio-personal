import MyProject from "../../components/myProject/MyProject";
import MySkill from "../../components/mySkill/MySkill";

const Home = () => {
    return (
        <div className=" py-10">
            {/* my skill section here */}
            <MySkill />
            {/* my recent project here */}
            <MyProject/>
        </div>
    );
};

export default Home;