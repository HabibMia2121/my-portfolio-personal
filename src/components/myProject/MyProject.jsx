import { Link } from "react-router-dom";
import Container from "../container/Container";
import HeaderTitle from "../headerTitle/HeaderTitle";
import Button from "../button/Button";
import { TiStarburst } from "react-icons/ti";

// byteSkill photo here
import byteSkll1 from '../../assets/image/byteSkill-photo/photo1.png'
import byteSkll2 from '../../assets/image/byteSkill-photo/photo2.png'
import byteSkll3 from '../../assets/image/byteSkill-photo/photo3.png'
import byteSkll4 from '../../assets/image/byteSkill-photo/photo4.png'

// food-donation photo here
import foodDonation1 from '../../assets/image/food-donation-photo/photo1.png'
import foodDonation2 from '../../assets/image/food-donation-photo/photo2.png'
import foodDonation3 from '../../assets/image/food-donation-photo/photo3.png'
import foodDonation4 from '../../assets/image/food-donation-photo/photo4.png'

// techno-stor photo here
import technoStor1 from '../../assets/image/techno-stor-photo/photo1.png'
import technoStor2 from '../../assets/image/techno-stor-photo/photo2.png'
import technoStor3 from '../../assets/image/techno-stor-photo/photo3.png'
import technoStor4 from '../../assets/image/techno-stor-photo/photo4.png'

const MyProject = () => {
    return (
        <div className=" mt-16">
            {/* headerTitle section here */}
            <HeaderTitle
                title={'My Recent Project'}
                subTitle={'Some of my project shared in this website.'}
            />
            <Container>
                <div className=" mt-10 space-y-10">
                    {/* project-1 byteSkill here */}
                    <div className="card flex-col md:flex-row card-side  border border-[#55E6A5]">
                        {/* image here */}
                        <figure className="flex-1 lg:flex-initial">
                            <div className="h-72 max-w-lg pl-2 carousel carousel-vertical rounded-lg">
                                <div className="carousel-item h-full justify-center">
                                    <img src={byteSkll1} className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={byteSkll2} className="  w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={byteSkll3} className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={byteSkll4} className="w-80  my-3  rounded-lg inline-block" />
                                </div>
                            </div>
                            
                            </figure>

                        {/* content here */}
                        <div className="card-body flex-1 lg:flex-initial ">
                            <h2 className="font-bold text-2xl text-[#55E6A5]">ByteSkill Website</h2>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p> This is a full-stack skills learning website</p>
                            </div>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p>User need to login via Google (also can create new Account).</p>
                            </div>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p>Users can complete her/his payment using online payment
                                (stripe).</p>
                            </div>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p>
                                    <span className="text-[#55E6A5]">Technology:</span> HTML, CSS, Tailwind css, React.js, MongoDB,Express.js, Node.js, React route, Firebase Authentication, Stripe
                                </p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to='https://byteskill-ce962.web.app/' target="_blank">
                                    <Button
                                        label={'Live Preview'}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* project-2 foodDonation here */}
                    <div className="card flex-col md:flex-row card-side  border border-[#55E6A5]">
                        {/* image here */}
                        <figure className="flex-1 lg:flex-initial">
                            <div className="h-72  max-w-lg pl-2 carousel carousel-vertical rounded-lg">
                                <div className="carousel-item h-full justify-center">
                                    <img src={foodDonation1} className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={foodDonation2} className="  w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={foodDonation3} className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={foodDonation4} className="w-80  my-3  rounded-lg inline-block" />
                                </div>
                            </div>
                            
                            </figure>

                        {/* content here */}
                        <div className="card-body flex-1 lg:flex-initial ">
                            <h2 className="font-bold text-2xl text-[#55E6A5]">FoodDonation Website</h2>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst /> 
                                <p> This is a full-stack food donation website</p>
                            </div>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p>User need to login via Google (also can create new Account).</p>
                            </div>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p>Users can food share and take food in website.</p>
                            </div>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p>
                                    <span className="text-[#55E6A5]">Technology:</span> HTML, CSS, Tailwind css, React.js, MongoDB,Express.js, Node.js, React route, Firebase Authentication, Stripe
                                </p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to='https://food-donation-project-3e8c9.web.app/' target="_blank">
                                    <Button
                                        label={'Live Preview'}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* project-3 TechnoStore here */}
                    <div className="card flex-col md:flex-row card-side  border border-[#55E6A5]">
                        {/* image here */}
                        <figure className="flex-1 lg:flex-initial">
                            <div className="h-72 max-w-lg pl-2 carousel carousel-vertical rounded-lg">
                                <div className="carousel-item h-full justify-center">
                                    <img src={technoStor1} className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={technoStor2} className="  w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={technoStor3} className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src={technoStor4} className="w-80  my-3  rounded-lg inline-block" />
                                </div>
                            </div>
                            
                            </figure>

                        {/* content here */}
                        <div className="card-body flex-1 lg:flex-initial ">
                            <h2 className="font-bold text-2xl text-[#55E6A5]">TechnoStore Website</h2>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p> The main purpose of this technoStore website is electronic device related.</p>
                            </div>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p>User need to login via Google (also can create new Account).</p>
                            </div>
                            <div className=" flex items-center gap-1 font-medium text-lg text-[#a2a2a2]">
                                <TiStarburst />
                                <p>
                                    <span className="text-[#55E6A5]">Technology:</span> HTML, CSS, Tailwind css, React.js, MongoDB,Express.js, Node.js, React route, Firebase Authentication, Stripe
                                </p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to='https://techno-store-514ba.web.app/' target="_blank">
                                    <Button
                                        label={'Live Preview'}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyProject;