import { useEffect } from "react"
import { GetToken } from "../../utils/axios"
import { Link, useNavigate } from "react-router"
import Header from "../components/header"
import Footer from "../components/footer"
import car1 from "../assets/Imgs.png"
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { ArrowRight, CalendarCheck2, Car, CarFront, Codesandbox, Fuel, Gauge, MapPin, Snowflake, UsersRound, Wallet } from "lucide-react"
import Img from "../assets/Img.png"
import Img1 from "../assets/Img (3).png"
import { useDispatch, useSelector } from "react-redux"
import { GetCars } from "../api/request/car"
import type { RootState } from "../store/store"
import type { ICar } from "../reducers/carsSlice"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import CarI from '../assets/Img (1).png'
import Car1 from '../assets/car(3) 1.png'
import 'swiper/css';
import Apple from "../assets/Icon.png"
import Google from "../assets/Icon (1).png"
import Phone1 from '../assets/Group 11.png'
import Phone2 from '../assets/Group 9.png'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch() as any

  useEffect(() => {
    const token = GetToken()

    if (!token) {
      navigate("/logIn")
    }
    else {
      dispatch(GetCars())
    }
  }, [])

  const { cars, isLoading } = useSelector((state: RootState) => state.cars)

  return (
    <div className="flex flex-col gap-[15vh] w-[90%] m-[0_auto]">
      <Header />
        <section className="bg-[#5937E0] mt-[-10vh] w-full p-[13vh_4%] section1 rounded-3xl flex flex-col gap-[3vh] sm:flex-row justify-between items-center">
          <img className="mt-auto mr-auto ml-auto" src={car1} />
          <aside className="flex sm:absolute sm:w-[30%] text-white flex-col gap-[3vh] items-start">
            <h1 className="font-bold text-2xl text-center sm:text-start sm:text-5xl">Experience the road like never before</h1>
            <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
            <button className="bg-[#FF9E0C] m-[0_auto] sm:m-0 p-[1.5vh_40px] rounded-xl">View all cars</button>
          </aside>
          <aside className="sm:absolute p-[5vh_30px] w-full sm:w-100 rounded-2xl bg-white sm:ml-210">
            <h2 className="text-center font-bold text-2xl">Book your car</h2>
            <aside className="flex flex-col gap-[2vh] mt-[5vh]">
              <FormControl className="bg-[#FAFAFA]">
                <InputLabel id="demo-select-small-label">Car type</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  value=""
                  label="Car type"
                >
                  <MenuItem value="">
                    <em>Car type</em>
                  </MenuItem>
                  <MenuItem value="Buggati">Ten</MenuItem>
                  <MenuItem value="Mersedes">Twenty</MenuItem>
                  <MenuItem value="AUDI">Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="bg-[#FAFAFA]">
                <InputLabel id="demo-select-small-label">Place of rental</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  value=""
                  label="Place of rental"
                >
                  <MenuItem value="">
                    <em>Place of rental</em>
                  </MenuItem>
                  <MenuItem value="Buggati">Ten</MenuItem>
                  <MenuItem value="Mersedes">Twenty</MenuItem>
                  <MenuItem value="AUDI">Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="bg-[#FAFAFA]">
                <InputLabel id="demo-select-small-label">Place of return</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  value=""
                  label="Place of return"
                >
                  <MenuItem value="">
                    <em>Place of return</em>
                  </MenuItem>
                  <MenuItem value="Buggati">Ten</MenuItem>
                  <MenuItem value="Mersedes">Twenty</MenuItem>
                  <MenuItem value="AUDI">Thirty</MenuItem>
                </Select>
              </FormControl>
              <input type="date" className="p-[1.5vh_20px] rounded-xl bg-[#FAFAFA]" />
              <input type="date" className="p-[1.5vh_20px] rounded-xl bg-[#FAFAFA]" />
              <button className="bg-[#FF9E0C] text-white font-semibold p-[1.5vh_40px] rounded-xl">Book now</button>
            </aside>
          </aside>  
        </section>
        <section className="flex flex-col gap-[3vh] sm:flex-row justify-between">
          <aside className="flex flex-col text-center sm:w-[25%] gap-[2vh] items-center">
            <MapPin className="m-[0_auto]" size={150} />
            <h1 className="text-2xl font-bold">Availability</h1>
            <p className="font-semibold">Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
          </aside>
          <aside className="flex flex-col text-center sm:w-[25%] gap-[2vh] items-center">
            <Car className="m-[0_auto]" size={150} />
            <h1 className="text-2xl font-bold">Comfort</h1>
            <p className="font-semibold">Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis</p>
          </aside>
          <aside className="flex flex-col text-center sm:w-[25%] gap-[2vh] items-center">
          <Wallet className="m-[0_auto]" size={150} />
            <h1 className="text-2xl font-bold">Savings</h1>
            <p className="font-semibold">Pretium convallis id diam sed commodo vestibulum lobortis volutpat</p>
          </aside>
        </section>
        <section className="flex flex-col gap-[3vh] sm:flex-row items-center sm:gap-[8%]">
          <img src={Img} />
          <aside className="flex text-center sm:text-start sm:w-[40%] flex-col gap-[4vh]">
            <div className="flex flex-col gap-[1vh]">
              <p className="text-2xl font-bold flex flex-col sm:flex-row m-[0_auto] items-center gap-4 sm:items-end"><span className="bg-[#5937E0] text-white p-[5px_14px] rounded-4xl">1</span> Erat at semper</p>
              <p className="line-clamp-2 font-semibold text-[#00000099]">Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum  dui ornare praesent. Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero at nulla nibh quis. Quis neque donec est scelerisque lectus bibendum. Ut a a donec ante in venenatis. Risus tortor adipiscing eget enim.</p>
            </div>
            <div className="flex flex-col gap-[1vh]">
              <p className="text-2xl font-bold flex flex-col sm:flex-row m-[0_auto] items-center gap-4 sm:items-end"><span className="bg-[#5937E0] text-white p-[5px_14px] rounded-4xl">2</span> Urna nec vivamus risus duis arcu</p>
              <p className="line-clamp-2 font-semibold text-[#00000099]">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
            </div>
            <div className="flex flex-col gap-[1vh]">
              <p className="text-2xl font-bold flex flex-col sm:flex-row m-[0_auto] items-center gap-4 sm:items-end"><span className="bg-[#5937E0] text-white p-[5px_14px] rounded-4xl">3</span> Lobortis euismod imperdiet tempus</p>
              <p className="line-clamp-2 font-semibold text-[#00000099]">Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi</p>
            </div>
            <div className="flex flex-col gap-[1vh]">
              <p className="text-2xl font-bold flex flex-col sm:flex-row m-[0_auto] items-center gap-4 sm:items-end"><span className="bg-[#5937E0] text-white p-[5px_14px] rounded-4xl">4</span> Cras nulla aliquet nam eleifend amet et</p>
              <p className="line-clamp-2 font-semibold text-[#00000099]">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero </p>
            </div>
          </aside>
        </section>
        <section className="flex flex-col gap-[7vh]">
          <aside className="flex flex-col items-center sm:flex-row justify-between gap-[3vh] sm:gap-0 text-center sm:text-start sm:items-end">
            <h1 className="sm:w-[25%] text-4xl font-bold">Choose the car that suits you</h1>
            <Link className="font-semibold flex items-center gap-3" to="/cars">View All <ArrowRight /></Link>
          </aside>
          <aside className="flex gap-[3vh_3%] flex-wrap">
            {
              cars?.slice(0, 6).map((car: ICar) => {
                return <div className="bg-[#FAFAFA] w-full sm:w-[31%] p-7.5 flex flex-col gap-[5vh] rounded-2xl" key={car.id}>
                  <Swiper
                    className="w-full h-60 rounded-2xl"
                    slidesPerView={1}
                    spaceBetween={10}
                    keyboard={{
                      enabled: true,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    autoplay={{delay: 2000}}
                    modules={[Keyboard, Autoplay]}
                  >
                    {car.images.length == 0 && (
                      <SwiperSlide className="bg-[#FAFAFA] w-full h-full"><img className="w-full h-full" src={CarI} /></SwiperSlide>
                    )}
                  </Swiper>
                  <div className="flex justify-between">
                    <h1 className="font-bold text-[18px]">{car.title}</h1>
                    <h1 className="text-[19px] font-bold text-[#5937E0]">${car.pricePerHour}</h1>
                  </div>
                  <div className="flex justify-between mt-[-6vh]">
                    <p className="text-[17px] font-semibold text-[#00000099]">Sedan</p>
                    <p className="text-[#00000099]">per day</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2.5">
                      <Codesandbox />
                      <p className="text-[13px] sm:text-[16px] text-[#00000099]">{car.tinting ? "Automat" : "Mechanic"}</p>
                    </div>
                    <div className="flex gap-2.5">
                      <Fuel />
                      <p className="text-[13px] sm:text-[16px] text-[#00000099]">PB 95</p>
                    </div>
                    <div className="flex gap-2.5">
                      <Snowflake />
                      <p className="text-[13px] sm:text-[16px] text-[#00000099]">Air Conditioner</p>
                    </div>
                  </div>
                  <button onClick={() => navigate(`/info/${car.id}`)} className="bg-[#5937E0] font-semibold text-xl text-white p-[1.5vh_0] rounded-xl cursor-pointer">View Details</button>
                </div>
              })
            }
          </aside>
          {isLoading && (<CircularProgress className="m-[5vh_auto]" size={150} />)}
        </section>
        <section className="flex flex-col rounded-2xl p-[5vh_30px_2vh_30px] bg-[#5937E0] text-white gap-[2vh] text-center">
          <h1 className="text-2xl sm:text-5xl font-bold">Facts in numbers</h1>
          <p className="sm:w-[60%] m-[0_auto]">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum</p>
          <img className="sm:w-[60%] m-[0_auto]" src={Img1} />
          <aside className="flex justify-between flex-wrap gap-y-[3vh] sm:w-[85%] sm:absolute sm:mt-[47vh]">
            <div className="bg-white w-full sm:w-fit p-[2vh_3%] sm:p-[2vh_90px_2vh_2vh] rounded-2xl flex gap-5 items-center">
              <div className="bg-[#FF9E0C] p-3.5 rounded-2xl">
                <CarFront size={40} />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-xl text-black">540+</h3>
                <p className="text-[#00000099] font-semibold">Cars</p>
              </div>
            </div>
            <div className="bg-white w-full sm:w-fit p-[2vh_3%] sm:p-[2vh_70px_2vh_2vh] rounded-2xl flex gap-5 items-center">
              <div className="bg-[#FF9E0C] p-3.5 rounded-2xl">
                <UsersRound size={40} />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-xl text-black">20k+</h3>
                <p className="text-[#00000099] font-semibold">Customers</p>
              </div>
            </div>
            <div className="bg-white w-full sm:w-fit p-[2vh_3%] sm:p-[2vh_110px_2vh_2vh] rounded-2xl flex gap-5 items-center">
              <div className="bg-[#FF9E0C] p-3.5 rounded-2xl">
                <CalendarCheck2 size={40} />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-xl text-black">25+</h3>
                <p className="text-[#00000099] font-semibold">Years</p>
              </div>
            </div>
            <div className="bg-white w-full sm:w-fit p-[2vh_3%] sm:p-[2vh_90px_2vh_2vh] rounded-2xl flex gap-5 items-center">
              <div className="bg-[#FF9E0C] p-3.5 rounded-2xl">
                <Gauge size={40} />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-xl text-black">20m+</h3>
                <p className="text-[#00000099] font-semibold">Miles</p>
              </div>
            </div>
          </aside>
        </section>
        <section className="flex flex-col sm:flex-row justify-between items-center">
          <aside className="flex sm:w-[40%] flex-col items-center text-center sm:text-start sm:items-start gap-[3vh]">
            <h1 className="font-bold text-2xl sm:text-5xl sm:w-[60%]">Download mobile app</h1>
            <p>Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna</p>
            <div className="flex flex-col sm:flex-row gap-6 mt-[8vh]">
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
          <aside className="hidden sm:flex">
            <img className="absolute ml-[-22%] mt-[7vh]" src={Phone1} />
            <img src={Phone2} />
          </aside>
        </section>
        <section className="rounded-2xl bg-[#5937E0] text-white p-[4vh_5%] flex flex-col-reverse sm:flex-row justify-between items-center">
          <aside className="flex flex-col sm:w-[50%] gap-[5vh]">
            <h1 className="text-2xl text-center sm:text-start sm:text-5xl font-bold">Enjoy every mile with adorable companionship.</h1>
            <p className="sm:w-[70%] text-center sm:text-start">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat</p>
            <div className="bg-white sm:w-[68%] rounded-2xl flex justify-between p-[2vh]">
              <input className="font-semibold text-black outline-0" placeholder="City" />
              <button className="bg-[#FF9E0C] rounded-2xl w-[30%] font-semibold h-[6vh]">Search</button>
            </div>
          </aside>
          <img src={Car1} />
        </section>
      <Footer />
    </div>
  )
}

export default Home