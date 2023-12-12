import netlify from '../../../assets/image/skills-photo/netlify.png'
import surge from '../../../assets/image/skills-photo/surge.png'
import nodeJs from '../../../assets/image/skills-photo/node.js-logo.png'
import expressJs from '../../../assets/image/skills-photo/express.png'

const FamiliarDeploy = () => {
    return (
        <div className=" mt-4 flex gap-4 flex-wrap justify-center">
            <div data-aos="fade-up"
                data-aos-duration="3000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={nodeJs} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Node JS</h2>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="4000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={expressJs} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Express JS</h2>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="5000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={netlify} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Netlify</h2>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="6000" className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={surge} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Surge</h2>
                </div>
            </div>
        </div>
    );
};

export default FamiliarDeploy;