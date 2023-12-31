import PropTypes from 'prop-types';

const Container = ({children}) => {
    return (
        <div className=' max-w-6xl mx-auto  px-4 md:px-6 lg:px-0'>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node,
}

export default Container;