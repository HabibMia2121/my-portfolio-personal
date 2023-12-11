import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import EducationExperience from "../../components/educationExperience/EducationExperience";
import MyProject from "../../components/myProject/MyProject";
import MySkill from "../../components/mySkill/MySkill";

const Home = () => {
    return (
        <div className=" py-10">
            {/* about me section here */}
            <About />
            {/* education and experience here */}
            <EducationExperience/>
            {/* my skill section here */}
            <MySkill />
            {/* my recent project section here */}
            <MyProject />
            {/* contact section here */}
            <Contact/>
        </div>
    );
};

export default Home;