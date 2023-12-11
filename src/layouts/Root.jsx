import { Outlet } from "react-router-dom";
import Headers from "../components/header/Headers";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <div className="bg-[#04040F] text-[#ddddddef] font-fontRoboto">
            {/* Header section here */}
            <Headers/>

            {/* outlet here */}
            <Outlet />

            {/*footer section here  */}
            <Footer/>
        </div>
    );
};

export default Root;