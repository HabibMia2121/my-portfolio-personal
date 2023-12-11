import { Link } from "react-router-dom";
import Container from "../container/Container";
import HeaderTitle from "../headerTitle/HeaderTitle";
import Button from "../button/Button";
import { TiStarburst } from "react-icons/ti";

const MyProject = () => {
    return (
        <div className=" mt-10">
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
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="  w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3  rounded-lg inline-block" />
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
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="  w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3  rounded-lg inline-block" />
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
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="  w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3 rounded-lg inline-block" />
                                </div>
                                <div className="carousel-item h-full justify-center">
                                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className="w-80  my-3  rounded-lg inline-block" />
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