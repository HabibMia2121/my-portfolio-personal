import Container from "../container/Container";
import HeaderTitle from "../headerTitle/HeaderTitle";

const Contact = () => {
    return (
        <div className="mt-16 mb-5">
            {/* headerTitle section here */}
            <HeaderTitle
                title={'Contact Me'}
            />
            {/* content here */}
            <Container>
                <div className="mt-10  flex lg:items-start flex-col-reverse lg:flex-row gap-8 ">
                    {/* form here */}
                    <div className="lg:flex-1">
                        {/* onSubmit={handleSignIn} */}
                        <form className=" max-w-lg mx-auto lg:w-full">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold text-[#55E6A5]">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name "
                                    className="input input-bordered text-black"
                                    required
                                />
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold text-[#55E6A5]">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    className="input input-bordered w-full text-black"
                                    required
                                />
                            </div>
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold text-[#55E6A5]">Message</span>
                                </label>
                                <textarea name="message" className="textarea textarea-bordered text-black" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    className="btn bg-[#55E6A5] text-white normal-case text-lg hover:bg-[#41cb8d] border-0"
                                    value="Send"
                                />
                            </div>
                        </form>
                    </div>
                    {/* map here */}
                    <div className="lg:flex-1 text-center">
                        <iframe
                            className=" rounded-xl inline-block h-[350px] w-[400px] md:w-[600px]"
                            src="https://maps.google.com/maps?q=23%C2%B036'24.8%22N%2090%C2%B044'38.3%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;