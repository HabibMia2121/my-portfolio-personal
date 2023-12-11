import firebase from '../../../assets/image/skills-photo/firebase.png'
import reactRouter from '../../../assets/image/skills-photo/react-router.png'
import mongodb from '../../../assets/image/skills-photo/mongodb.png'

const Comfortable = () => {
    return (
        <div className=" mt-4 flex gap-4 flex-wrap justify-center">
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={firebase} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">Firebase</h2>
                </div>
            </div>
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={reactRouter} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">React Router</h2>
                </div>
            </div>
            <div className="flex items-center flex-row w-60 h-14 glass rounded-2xl">
                <figure><img src={mongodb} className=" w-16  h-16 rounded-full p-2" alt="not found" /></figure>
                <div className=" flex-1">
                    <h2 className="card-title ">MongoDB</h2>
                </div>
            </div>
        </div>
    );
};

export default Comfortable;