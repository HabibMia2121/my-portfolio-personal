import myPhoto from '../../../assets/image/banner/myPhoto.png'
import Container from '../../container/Container';
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative '>
            <div className="hero min-h-screen overflow-hidden bannerImage">
                <Container>
                    <div className="hero min-h-screen overflow-hidden">
                        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                            <div className='flex-2' data-aos="fade-up ">
                                <img src={myPhoto} className="max-w-sm md:max-w-6xl -mb-6 mt-20  " />

                            </div>
                            <div className=' mt-28 lg:mt-0 flex-1 ' data-aos="fade-down">
                                <h1 className="text-xl font-bold mb-4">Welcome to <span className=' text-[#b675f6ec]'></span></h1>
                                <h2 className="text-5xl font-bold ">The Best Online Courses You'll Find</h2>
                                <p className="py-6 max-w-lg">Etiam interdum arcu metus, eget ultricies eros euismod ut. Aenean fermentum vestibulum risus, et volutpat elit. Suspendisse potenti amatug.</p>
                                {/* <div>
                            <Button
                                label={'Get Started'}
                            />
                        </div> */}
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </div>
        </div>
    );
};

export default Banner;