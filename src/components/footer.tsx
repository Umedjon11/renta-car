import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import Logo from "../assets/Logo.png"
import Apple from "../assets/Icon.png"
import Google from "../assets/Icon (1).png"
import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-[3vh] p-[3vh_0]">
        <section className="flex flex-wrap gap-y-[4vh] items-center sm:items-start w-full justify-between">
            <aside className="flex items-start flex-col gap-[4vh]">
                <img src={Logo} />
                <h3 className="font-bold text-xl line-clamp-4 w-67">Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem turpis euismod. Purus at quisque integer sit. Libero quis sapien tempus pellentesque netus leo feugiat augue ut. Sollicitudin vitae dictum sed vulputate.</h3>
                <div className="flex items-center gap-5">
                    <div className="p-1.5 bg-black text-white rounded-4xl">
                        <Facebook />
                    </div>
                    <div className="p-1.5 bg-black text-white rounded-4xl">
                        <Instagram />
                    </div>
                    <div className="p-1.5 bg-black text-white rounded-4xl">
                        <Twitter />
                    </div>
                    <div className="p-1.5 bg-black text-white rounded-4xl">
                        <Youtube />
                    </div>
                </div>
            </aside>
            <aside className="flex items-start flex-col gap-[4vh]">
                <div className="flex gap-3 items-center">
                    <div className="p-3 rounded-4xl bg-[#FF9E0C] text-white">
                        <MapPin />
                    </div>
                    <div className="flex flex-col">
                        <p>Address</p>
                        <h3 className="font-bold">Oxford Ave. Cary, NC 27511</h3>
                    </div>
                </div>
                <div className="flex ml-15 flex-col gap-[1vh]">
                    <h3 className="font-bold text-xl">Useful links</h3>
                    <Link to="/about" className="mt-[2vh] text-[17px]">About us</Link>
                    <Link to="/contacts" className="text-[17px]">Contact us</Link>
                    <Link to="/" className="text-[17px]">Gallery</Link>
                    <Link to="/" className="text-[17px]">Blog</Link>
                    <Link to="/" className="text-[17px]">F.A.Q</Link>
                </div>
            </aside>
            <aside className="flex items-start flex-col gap-[4vh]">
                <div className="flex gap-3 items-center">
                    <div className="p-3 rounded-4xl bg-[#FF9E0C] text-white">
                        <Mail />
                    </div>
                    <div className="flex flex-col">
                        <p>Email</p>
                        <h3 className="font-bold">nwiger@yahoo.com</h3>
                    </div>
                </div>
                <div className="flex ml-15 flex-col gap-[1vh]">
                    <h3 className="font-bold text-xl">Vehicles</h3>
                    <Link to="/" className="mt-[2vh] text-[17px]">Sedan</Link>
                    <Link to="/" className="text-[17px]">Cabriolet</Link>
                    <Link to="/" className="text-[17px]">Pickup</Link>
                    <Link to="/" className="text-[17px]">Minivan</Link>
                    <Link to="/" className="text-[17px]">SUV</Link>
                </div>
            </aside>
            <aside className="flex items-start flex-col gap-[4vh]">
                <div className="flex gap-3 items-center">
                    <div className="p-3 rounded-4xl bg-[#FF9E0C] text-white">
                        <Phone />
                    </div>
                    <div className="flex flex-col">
                        <p>Phone</p>
                        <h3 className="font-bold">+537 547-6401</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-[3vh]">
                    <h3 className="font-bold text-xl">Download App</h3>
                    <div className="bg-black text-white flex items-center p-[12px_30px] gap-3 rounded-xl">
                        <img src={Apple} />
                        <div className="flex flex-col">
                            <p className="p-0 m-0">Download on the</p>
                            <h3 className="font-bold p-0 m-0 text-2xl">App Store</h3>
                        </div>
                    </div>
                    <div className="bg-black text-white flex items-center p-[12px_30px] gap-3 rounded-xl">
                        <img src={Google} />
                        <div className="flex flex-col">
                            <p className="p-0 m-0">Get it on</p>
                            <h3 className="font-bold p-0 m-0 text-2xl">Google Play</h3>
                        </div>
                    </div>
                </div>
            </aside>
        </section>
    </footer>
  )
}

export default Footer