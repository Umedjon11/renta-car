import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Link } from 'react-router'
import { Check, ChevronUp } from 'lucide-react'
import Img from "../assets/Img.png"
import BMW from "../assets/Frame 130.png"
import Phone from "../assets/Group 9.png"
import Apple from "../assets/Icon (3).png"
import Google from "../assets/Icon (2).png"
import Avatar1 from "../assets/Img (10 (1).png"
import Avatar2 from "../assets/Img (10 (2).png"
import Avatar3 from "../assets/Img (10 (3).png"

const About = () => {
  return (
    <div className="flex flex-col gap-[15vh] w-[90%] m-[0_auto]">
        <Header />
        <section className="flex flex-col gap-[4vh]">
            <h1 className="text-4xl font-bold text-center">About Us</h1>
            <p className="text-center"><Link to="/">Home /</Link> About Us</p>
        </section>
        <section className='flex flex-col sm:flex-row gap-[4vh] justify-between'>
            <h1 className='sm:w-[20%] text-center sm:text-start text-4xl font-bold'>Where every drive feels extraordinary</h1>
            <aside className='flex flex-col gap-[2vh] text-center sm:text-start sm:w-[30%]'>
                <h1 className='font-semibold text-2xl'>Variety Brands</h1>
                <p className='font-semibold'>Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio</p>
                <h1 className='font-semibold text-2xl'>Maximum Freedom</h1>
                <p className='font-semibold'>Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in</p>
            </aside>
            <aside className='flex flex-col gap-[2vh] text-center sm:text-start sm:w-[30%]'>
                <h1 className='font-semibold text-2xl'>Awesome Suport</h1>
                <p className='font-semibold'>Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit</p>
                <h1 className='font-semibold text-2xl'>flexibility on the go</h1>
                <p className='font-semibold'>Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl</p>
            </aside>
        </section>
        <iframe className='w-full h-[90vh] rounded-3xl' src="https://www.youtube.com/embed/WEO0w-4f-ls" title="The Comprehensive Rental Car Sizes 🚗 Chart &amp; Comparison to Make the Right Choice" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <section className='flex w-[90%] flex-col gap-[3vh] items-center sm:items-start text-center sm:text-start sm:flex-row m-[0_auto] justify-between'>
            <div className='flex flex-col'>
                <h3 className='text-7xl font-bold text-[#5937E0]'>20k+</h3>
                <p className='font-bold'>Happy customers</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-7xl font-bold text-[#5937E0]'>540+</h3>
                <p className='font-bold'>Count of cars</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-7xl font-bold text-[#5937E0]'>25+</h3>
                <p className='font-bold'>Years of experince</p>
            </div>
        </section>
        <section className='flex flex-col gap-[7vh] sm:flex-row justify-between items-center'>
            <aside className='flex flex-col gap-[4vh] sm:w-[45%]'>
                <h1 className='text-2xl text-center sm:text-start sm:text-4xl font-bold sm:w-[70%]'>Unlock unforgettable memories on the road</h1>
                <p className='text-[#00000099] text-center sm:text-start font-semibold'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                <div className='flex flex-col gap-[3vh] sm:flex-row justify-between'>
                    <div className='flex sm:w-[46%] items-start gap-3'>
                        <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                            <Check />
                        </div>
                        <p className='line-clamp-3 text-[#00000099] font-semibold w-[90%]'>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                    </div>
                    <div className='flex sm:w-[46%] items-start gap-3'>
                        <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                            <Check />
                        </div>
                        <p className='line-clamp-3 text-[#00000099] font-semibold w-[90%]'>Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum </p>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-[3vh] justify-between'>
                    <div className='flex sm:w-[46%] items-start gap-3'>
                        <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                            <Check />
                        </div>
                        <p className='line-clamp-3 text-[#00000099] font-semibold w-[90%]'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor </p>
                    </div>
                    <div className='flex sm:w-[46%] items-start gap-3'>
                        <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                            <Check />
                        </div>
                        <p className='line-clamp-3 text-[#00000099] font-semibold w-[90%]'>Quis nunc interdum gravida ullamcorper</p>
                    </div>
                </div>
            </aside>
            <img src={Img} />
        </section>
        <section className='rounded-2xl mt-[20vh] p-[8vh_5%] bg-[#5937E0] text-white flex flex-col sm:flex-row gap-[4vh] justify-between'>
            <img className='mt-[-30vh]' src={Phone} />
            <aside className='flex text-center sm:text-start items-center sm:items-start flex-col gap-[4vh] sm:w-[50%]'>
                <p>Download our app</p>
                <h1 className='text-3xl sm:text-5xl font-bold mt-[-3vh]'>Download our app</h1>
                <p className='w-[85%]'>Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam eget urna fusce vulputate at risus</p>
                <div className="flex flex-col sm:flex-row gap-[3vh]">
                    <div className="bg-white text-black flex items-center p-[12px_50px_12px_30px] gap-3 rounded-xl">
                        <img src={Apple} />
                        <div className="flex flex-col">
                            <p className="p-0 m-0">Download on the</p>
                            <h3 className="font-bold p-0 m-0 text-2xl">App Store</h3>
                        </div>
                    </div>
                    <div className="bg-white text-black flex items-center p-[12px_30px] gap-3 rounded-xl">
                        <img src={Google} />
                        <div className="flex flex-col">
                            <p className="p-0 m-0">Get it on</p>
                            <h3 className="font-bold p-0 m-0 text-2xl">Google Play</h3>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
        <section className='flex flex-col gap-[8vh] items-center'>
            <h1 className='font-bold text-3xl sm:text-5xl'>Reviews from our customers</h1>
            <aside className='flex w-full flex-wrap gap-y-[4vh] justify-between'>
                <div className='flex flex-col sm:w-[32%] pt-[9vh] gap-[15vh] items-center bg-[#F9F9F9] rounded-3xl'>
                    <p className='font-semibold text-xl w-[70%] text-center'> Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque </p>
                    <div className='w-full flex flex-col gap-[1vh] items-center bg-[#5937E0] p-[3vh_5%] rounded-b-3xl'>
                        <img className='mt-[-9vh]' src={Avatar1} />
                        <p className='text-[#FFFFFF99]'>Kuphal LLC</p>
                        <h3 className='text-2xl text-white font-bold'>Emanuel Boyle</h3>
                    </div>
                </div>
                <div className='flex flex-col sm:w-[32%] pt-[9vh] gap-[19vh] items-center bg-[#F9F9F9] rounded-3xl'>
                    <p className='font-semibold text-xl w-[70%] text-center'> Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula</p>
                    <div className='w-full flex flex-col gap-[1vh] items-center bg-[#5937E0] p-[3vh_5%] rounded-b-3xl'>
                        <img className='mt-[-9vh]' src={Avatar2} />
                        <p className='text-[#FFFFFF99]'>Glover - Orn</p>
                        <h3 className='text-2xl text-white font-bold'>River Graves</h3>
                    </div>
                </div>
                <div className='flex flex-col sm:w-[32%] pt-[9vh] gap-[15vh] items-center bg-[#F9F9F9] rounded-3xl'>
                    <p className='font-semibold text-xl w-[70%] text-center'> Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et</p>
                    <div className='w-full flex flex-col gap-[1vh] items-center bg-[#5937E0] p-[3vh_5%] rounded-b-3xl'>
                        <img className='mt-[-9vh]' src={Avatar3} />
                        <p className='text-[#FFFFFF99]'>Haag LLC</p>
                        <h3 className='text-2xl text-white font-bold'>Ryder Malone</h3>
                    </div>
                </div>
            </aside>
        </section>
        <section className='flex flex-col gap-[4vh] items-center'>
            <h1 className='font-bold text-4xl'>Top Car Rental Questions</h1>
            <aside className='flex flex-col gap-[4vh] w-full p-6 rounded-3xl border-2 border-[#ADB5BD]'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>How does it works?</h3>
                    <ChevronUp />
                </div>
            <p className='text-xl font-semibold text-[#00000099]'>Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla</p>
            </aside>
            <aside className='flex flex-col gap-[4vh] w-full p-6 rounded-3xl border-2 border-[#ADB5BD]'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Can I rent a car without a credit card?</h3>
                    <ChevronUp />
                </div>
            </aside>
            <aside className='flex flex-col gap-[4vh] w-full p-6 rounded-3xl border-2 border-[#ADB5BD]'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>What are the requirements for renting a car?</h3>
                    <ChevronUp />
                </div>
            </aside>
            <aside className='flex flex-col gap-[4vh] w-full p-6 rounded-3xl border-2 border-[#ADB5BD]'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?</h3>
                    <ChevronUp />
                </div>
            </aside>
            <aside className='flex flex-col gap-[4vh] w-full p-6 rounded-3xl border-2 border-[#ADB5BD]'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold'>Does Car Rental offer coverage products for purchase with my rental?</h3>
                    <ChevronUp />
                </div>
            </aside>
        </section>
        <section className='bg-[#5937E0] rounded-2xl p-[5vh_5%] flex flex-col gap-[5vh] sm:flex-row text-white justify-between items-center'>
            <aside className='flex flex-col text-center sm:text-start gap-[2vh]'>
                <h1 className='text-4xl font-bold'>Looking for a car?</h1>
                <h2 className='text-3xl font-semibold'>+537 547-6401</h2>
                <p className='line-clamp-2 w-[90%]'>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis elit magna magna at. Fames etiam quis diam nunc. Gravida auctor fermentum morbi vulputate ac egestas orci. Pretium convallis id diam sed commodo vestibulum lobortis volutpat praesent. Cras nulla semper tellus enim malesuada ornare curabitur dui.</p>
                <button className='bg-[#FF9E0C] m-[0_auto] sm:m-0 rounded-xl font-semibold p-[1vh_20px] w-fit'>Book now</button>
            </aside>
            <img src={BMW} />
        </section>
        <Footer />
    </div>
  )
}

export default About