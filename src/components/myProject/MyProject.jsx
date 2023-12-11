import HeaderTitle from "../headerTitle/HeaderTitle";

const MyProject = () => {
    return (
        <div className=" mt-10">
            {/* headerTitle section here */}
            <HeaderTitle
                title={'My Recent Project'}
                subTitle={'Some of my project shared in this website.'}
            />
        </div>
    );
};

export default MyProject;