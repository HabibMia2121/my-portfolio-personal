import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";

const Headers = () => {
    return (
        <div>
            {/* navbar section here */}
            <Navbar />
            {/* banner */}
            <Banner/>
            
        </div>
    );
};

export default Headers;