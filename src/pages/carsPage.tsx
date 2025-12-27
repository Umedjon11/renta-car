import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { GetToken } from '../../utils/axios'
import { GetCars } from '../api/request/car'
import { useNavigate } from 'react-router'
import Header from '../components/header'
import Footer from '../components/footer'
import { CircularProgress } from '@mui/material'
import { Fuel, Snowflake } from 'lucide-react'
import { Codesandbox } from 'lucide-react';
import type { ICar } from '../reducers/carsSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import CarI from '../assets/Img (1).png'
import Logo1 from '../assets/Vector.png'
import Logo2 from '../assets/Logo 1.png'
import Logo3 from '../assets/Logo (1).png'
import Logo4 from '../assets/Logo (2).png'
import Logo5 from '../assets/Logo (3).png'
import Logo6 from '../assets/Logo (4).png'

const carsPage = () => {
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

  const [select, setSelect] = useState("all")

  return (
    <div className="flex flex-col gap-[15vh] w-[90%] m-[0_auto]">
        <Header />
        <section className='flex flex-col items-center gap-[5vh]'>
            <h1 className='font-bold text-2xl sm:text-5xl'>Select a vehicle group</h1>
            <div className='sm:w-[80%] flex flex-col sm:flex-row gap-[2vh] justify-between'>
                <button onClick={() => setSelect("all")} className={select == "all" ? 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#5937E0] text-white' : 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#F9F9F9]'}>All vehicles</button>
                <button onClick={() => setSelect("BMW")} className={select == "BMW" ? 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#5937E0] text-white' : 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#F9F9F9]'}>BMW</button>
                <button onClick={() => setSelect("Mersedes")} className={select == "Mersedes" ? 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#5937E0] text-white' : 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#F9F9F9]'}>Mersedes</button>
                <button onClick={() => setSelect("AUDI")} className={select == "AUDI" ? 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#5937E0] text-white' : 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#F9F9F9]'}>AUDI</button>
                <button onClick={() => setSelect("Bugatti")} className={select == "Bugatti" ? 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#5937E0] text-white' : 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#F9F9F9]'}>Bugatti</button>
                <button onClick={() => setSelect("Lambargini")} className={select == "Lambargini" ? 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#5937E0] text-white' : 'font-semibold text-[16px] p-[1.5vh_30px] rounded-4xl bg-[#F9F9F9]'}>Lambargini</button>
            </div>
            <aside className="flex gap-[3vh_3%] flex-wrap">
            {
              cars?.filter((car: ICar) => select == "all" || car.title.includes(select)).map((car: ICar) => {
                return <div className="bg-[#FAFAFA] w-[97%] sm:w-[31%] p-7.5 flex flex-col gap-[5vh] rounded-2xl" key={car.id}>
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
        <section className='flex flex-col gap-[3vh] sm:flex-row items-center sm:items-start justify-between rounded-3xl bg-[#FAFAFA] p-[8vh_6%]'>
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

export default carsPage