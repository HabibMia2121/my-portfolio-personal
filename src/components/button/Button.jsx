import PropTypes from 'prop-types';

const Button = ({ label, icon }) => {
    return (
        <button
            className='btn border-none hover:bg-[#40bd85] text-white bg-[#4bd597] text-lg'
        >
            <div className=' flex items-center gap-2'>
                {label}
                {icon}    
            </div>
        </button>
        
    );
};

Button.propTypes = {
    label: PropTypes.node,
    icon: PropTypes.node,
}
export default Button;
