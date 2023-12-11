import PropTypes from 'prop-types';

const HeaderTitle = ({title, subTitle}) => {
    return (
        <div className=" text-center space-y-2">
            <h2 className="font-bold text-3xl text-[#55E6A5]">{ title}</h2>
            <h3 className="font-medium text-lg text-[#a2a2a2] max-w-sm mx-auto">{ subTitle}</h3>
        </div>
    );
};
HeaderTitle.propTypes = {
    title: PropTypes.node,
    subTitle: PropTypes.node,
}
export default HeaderTitle;