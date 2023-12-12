import vercel from '../../../assets/image/skills-photo/vercel-logo.png'
import chrome from '../../../assets/image/skills-photo/chrome_devtools.png'
import VSCode from '../../../assets/image/skills-photo/Visual_Studio_Cod.png'
import git from '../../../assets/image/skills-photo/git.png'
import github from '../../../assets/image/skills-photo/GitHub.png'

const Tools = () => {
    return (
        <div className=" mt-4 flex gap-4 flex-wrap justify-center">
            <div data-aos="fade-up"
                data-aos-duration="3000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={git} className=" w-16  h-16 rounded-full p-2 object-cover" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Git</h2>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="4000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={github} className=" w-16  h-16 rounded-full p-2 object-cover" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Github</h2>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="5000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={VSCode} className=" w-16  h-16 rounded-full p-2 object-cover" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">VSCode</h2>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="6000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={chrome} className=" object-cover w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Chrome Dev-tool</h2>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="7000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={vercel} className=" w-16  h-16 rounded-full p-2 object-cover" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Vercel</h2>
                </div>
            </div>
        </div>
    );
};

export default Tools;