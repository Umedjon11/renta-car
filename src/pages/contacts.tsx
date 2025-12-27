import { Select } from "react-day-picker"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link, useLocation } from "react-router"
import { FormControl, InputLabel, MenuItem } from "@mui/material"
import Img1 from "../assets/Img 4.png"
import Img2 from "../assets/Img 1.png"
import Img3 from "../assets/Img 2.png"
import Img4 from "../assets/Img 3.png"
import Logo1 from '../assets/Vector.png'
import Logo2 from '../assets/Logo 1.png'
import Logo3 from '../assets/Logo (1).png'
import Logo4 from '../assets/Logo (2).png'
import Logo5 from '../assets/Logo (3).png'
import Logo6 from '../assets/Logo (4).png'
import { Clock, Mail, MapPin, Phone } from "lucide-react"

const Contacts = () => {
  return (
    <div className="flex flex-col gap-[15vh] w-[90%] m-[0_auto]">
        <Header />
        <section className="flex flex-col gap-[4vh]">
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
            <p className="text-center"><Link to="/">Home /</Link> Contact Us</p>
        </section>
        <section className="flex flex-col sm:flex-row gap-y-[4vh] w-full justify-between">
            <aside className="p-[5vh_30px] sm:w-100 rounded-2xl bg-[#5937E0] text-white">
            <h2 className="text-center font-bold text-2xl">Book your car</h2>
            <aside className="flex flex-col gap-[2vh] mt-[5vh]">
              <FormControl className="bg-[#FAFAFA] rounded-2xl">
                <InputLabel id="demo-select-small-labell">Car type</InputLabel>
                <Select
                  value=""
                  className="p-[2vh_0]"
                >
                  <MenuItem value="">
                    <em>Car type</em>
                  </MenuItem>
                  <MenuItem value="Buggati">Ten</MenuItem>
                  <MenuItem value="Mersedes">Twenty</MenuItem>
                  <MenuItem value="AUDI">Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="bg-[#FAFAFA] rounded-2xl">
                <InputLabel id="demo-select-small-labell">Place of rental</InputLabel>
                <Select
                  value=""
                  className="p-[2vh_0]"
                >
                  <MenuItem value="">
                    <em>Place of rental</em>
                  </MenuItem>
                  <MenuItem value="Buggati">Ten</MenuItem>
                  <MenuItem value="Mersedes">Twenty</MenuItem>
                  <MenuItem value="AUDI">Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="bg-[#FAFAFA] rounded-2xl">
                <InputLabel id="demo-select-small-labell">Place of return</InputLabel>
                <Select
                  value=""
                  className="p-[2vh_0]"
                >
                  <MenuItem value="">
                    <em>Place of return</em>
                  </MenuItem>
                  <MenuItem value="Buggati">Ten</MenuItem>
                  <MenuItem value="Mersedes">Twenty</MenuItem>
                  <MenuItem value="AUDI">Thirty</MenuItem>
                </Select>
              </FormControl>
              <input type="date" className="p-[1.5vh_20px] rounded-xl text-black bg-[#FAFAFA]" />
              <input type="date" className="p-[1.5vh_20px] rounded-xl text-black bg-[#FAFAFA]" />
              <button className="bg-[#FF9E0C] text-white font-semibold p-[1.5vh_40px] rounded-xl">Book now</button>
            </aside>
          </aside>
          <img src={Img1} className="sm:w-[68%]" />
        </section>
        <section className="flex flex-col gap-[4vh] sm:flex-row justify-between">
            <div className="flex gap-3 items-center">
                <div className="p-3 rounded-4xl bg-[#FF9E0C] text-white">
                    <MapPin />
                </div>
                <div className="flex flex-col">
                    <p>Address</p>
                    <h3 className="font-bold">Oxford Ave. Cary, NC 27511</h3>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="p-3 rounded-4xl bg-[#FF9E0C] text-white">
                    <Mail />
                </div>
                <div className="flex flex-col">
                    <p>Email</p>
                    <h3 className="font-bold">nwiger@yahoo.com</h3>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="p-3 rounded-4xl bg-[#FF9E0C] text-white">
                    <Phone />
                </div>
                <div className="flex flex-col">
                    <p>Phone</p>
                    <h3 className="font-bold">+537 547-6401</h3>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <div className="p-3 rounded-4xl bg-[#FF9E0C] text-white">
                    <Clock />
                </div>
                <div className="flex flex-col">
                    <p>Opening hours</p>
                    <h3 className="font-bold">Sun-Mon: 10am - 10pm</h3>
                </div>
            </div>
        </section>
        <section className="flex flex-col gap-[5vh]">
            <h1 className="font-bold text-3xl text-center">Latest blog posts & news</h1>
            <aside className="flex flex-wrap gap-[4vh] justify-between">
                <div className="flex sm:w-[31%] flex-col gap-[2vh]">
                    <img src={Img2} className="rounded-2xl" />
                    <h2 className="font-bold text-xl">How to choose the right car</h2>
                    <p className="font-semibold text-[#00000099]">News / 12April 2024</p>
                </div>
                <div className="flex sm:w-[31%] flex-col gap-[2vh]">
                    <img src={Img3} className="rounded-2xl" />
                    <h2 className="font-bold text-xl">Which plan is right for me?</h2>
                    <p className="font-semibold text-[#00000099]">News / 12April 2024</p>
                </div>
                <div className="flex sm:w-[31%] flex-col gap-[2vh]">
                    <img src={Img4} className="rounded-2xl" />
                    <h2 className="font-bold text-xl">Enjoy Speed, Choice & Total Control</h2>
                    <p className="font-semibold text-[#00000099]">News / 12April 2024</p>
                </div>
            </aside>
        </section>
        <section className='flex flex-col sm:flex-row items-center sm:items-start gap-[4vh] justify-between rounded-3xl bg-[#FAFAFA] p-[8vh_6%]'>
            <img src={Logo1} />
            <img src={Logo2} />
            <img src={Logo3} />
            <img src={Logo4} />
            <img src={Logo5} />
            <img src={Logo6} />
        </section>
        <Footer />
    </div>
  )
}

export default Contacts