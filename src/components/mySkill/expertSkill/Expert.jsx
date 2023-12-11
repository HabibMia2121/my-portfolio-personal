import html from '../../../assets/image/skills-photo/html.png'
import css from '../../../assets/image/skills-photo/css-logo.png'
import bootstrap from '../../../assets/image/skills-photo/bootstrap.png'
import tailwind from '../../../assets/image/skills-photo/Tailwind.png'
import js from '../../../assets/image/skills-photo/js.png'
import react from '../../../assets/image/skills-photo/react.png'

const Expert = () => {
    return (
        <div className=" mt-4 flex gap-4 flex-wrap justify-center">
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={html} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">HTML</h2>
                </div>
            </div>
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={css} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">CSS</h2>
                </div>
            </div>
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={bootstrap} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Bootstrap</h2>
                </div>
            </div>
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={tailwind} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Tailwind CSS</h2>
                </div>
            </div>
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={js} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">JavaScript,</h2>
                </div>
            </div>
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={react} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">ReactJs</h2>
                </div>
            </div>
        </div>
    );
};

export default Expert;
