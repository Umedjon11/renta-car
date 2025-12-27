import Footer from '../components/footer'
import Header from '../components/header'
import CarI from '../assets/Img (1).png'
import { Link, useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GetCarById, GetCars, Reserve } from '../api/request/car'
import type { RootState } from '../store/store'
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { ArrowRight, Car, Check, Codesandbox, Fuel, MapPinned, Snowflake, User } from 'lucide-react';
import { Axios, GetToken } from '../../utils/axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'react-day-picker/dist/style.css'
import type { ICar } from '../reducers/carsSlice'
import  { DayPicker, type DateRange } from 'react-day-picker';

const Info = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch() as any
    const { carById, isLoading, cars } = useSelector((state: RootState) => state.cars)
    const [reserve, setReserve] = useState<DateRange>()
    const [Dates, setDates] = useState<any>([])
    useEffect(() => {
        const Info = async () => {
              const token = GetToken()
            if (!token) {
              navigate("/logIn")
              return ;
            }
            try {
              const result = await Axios.get("/api/reservations")
              const datas: Date[] = [];
              result.data.filter((res: any) => res.carId == id).forEach((res: any) => {
                let startDate = new Date(res.startDate);
                let endDate = new Date(res.endDate);
                for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {
                  datas.push(new Date(day));
                }
              });
              setDates(datas);
              dispatch(GetCars())
              dispatch(GetCarById(id))
            } catch (error) {
              console.error(error);
            }
        };
        Info()
      }, [])

      const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setReserve({from: undefined, to: undefined})
      };

      const reserveCar = async () => {
        const result = await Reserve({carId: id, startDate: reserve?.from, endDate: reserve?.to})
        if (result) {
          handleClose()
          navigate("/cars")
        }
      }

  return (
    <div className="flex flex-col gap-[15vh] w-[90%] m-[0_auto]">
        <Header />

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Car Reservation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
            <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 8 }}>
              <DayPicker
                mode="range"
                selected={reserve}
                onSelect={setReserve}
                disabled={Dates}
                modifiersClassNames={{
                  start: 'start-day',
                  end: 'end-day',
                  range: 'in-range',
                }}
              />
              <style>
                {`
                   .start-day { background-color: #ff5722 !important; color: white; }
                   .end-day { background-color: #ff5722 !important; color: white; }
                   .in-range { background-color: #ffccbc !important; }
                 `}
              </style>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={reserveCar}>
            Reserve
          </Button>
        </DialogActions>
      </Dialog>

            {!isLoading && (
                <section className='flex flex-col sm:flex-row gap-[5vh] justify-between'>
                    <aside className='flex flex-col m-[0_auto] sm:m-0 sm:w-[45%] gap-[3vh]'>
                        <h1 className='font-bold text-2xl'>{carById?.title}</h1>
                        <p className='flex gap-3 text-[#00000099] items-center'><span className='font-bold text-xl text-[#5937E0]'>${carById?.pricePerHour}</span>/ day</p>
                        <img className='w-full' src={CarI} />
                        <div className='flex justify-between'>
                            <img className='w-[26%]' src={CarI} />
                            <img className='w-[26%]' src={CarI} />
                            <img className='w-[26%]' src={CarI} />
                        </div>
                    </aside>
                    <aside className='flex flex-col sm:w-[50%] gap-[6vh]'>
                        <h1 className='font-bold text-2xl'>Technical Specification</h1>
                        <div className='flex flex-wrap gap-[2vh_3%]'>
                            <div className='w-[48%] sm:w-[31%] p-[2vh_3%] rounded-2xl bg-[#FAFAFA] flex flex-col gap-[1vh]'>
                                <Codesandbox size={40} />
                                <h3 className='font-bold'>Gear Box</h3>
                                <p className='text-[#00000099]'>{carById?.tinting ? "Automat" : "Mechanic"}</p>
                            </div>
                            <div className='w-[48%] sm:w-[31%] p-[2vh_3%] rounded-2xl bg-[#FAFAFA] flex flex-col gap-[1vh]'>
                                <Fuel size={40} />
                                <h3 className='font-bold'>Fuel</h3>
                                <p className='text-[#00000099]'>Petrol</p>
                            </div>
                            <div className='w-[48%] sm:w-[31%] p-[2vh_3%] rounded-2xl bg-[#FAFAFA] flex flex-col gap-[1vh]'>
                                <Car size={40} />
                                <h3 className='font-bold'>Doors</h3>
                                <p className='text-[#00000099]'>{carById?.seats}</p>
                            </div>
                            <div className='w-[48%] sm:w-[31%] p-[2vh_3%] rounded-2xl bg-[#FAFAFA] flex flex-col gap-[1vh]'>
                                <Codesandbox size={40} />
                                <h3 className='font-bold'>Air Condationer</h3>
                                <p className='text-[#00000099]'>Yes</p>
                            </div>
                            <div className='w-[48%] sm:w-[31%] p-[2vh_3%] rounded-2xl bg-[#FAFAFA] flex flex-col gap-[1vh]'>
                                <User size={40} />
                                <h3 className='font-bold'>Seats</h3>
                                <p className='text-[#00000099]'>{carById?.seats}</p>
                            </div>
                            <div className='w-[48%] sm:w-[31%] p-[2vh_3%] rounded-2xl bg-[#FAFAFA] flex flex-col gap-[1vh]'>
                                <MapPinned size={40} />
                                <h3 className='font-bold'>Distance</h3>
                                <p className='text-[#00000099]'>500</p>
                            </div>
                        </div>
                        <button onClick={handleClickOpen} className='bg-[#5937E0] p-[1vh_0] sm:w-[40%] cursor-pointer rounded-xl font-semibold text-xl text-white'>Rent a car</button>
                        <div className='flex flex-wrap sm:w-[60%] gap-[3vh_5%]'>
                            <div className='sm:w-[47.5%] flex gap-3 items-center'>
                                <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                                    <Check />
                                </div>
                                <p className='text-[#00000099] font-semibold'>ABS</p>
                            </div>
                            <div className='sm:w-[47.5%] flex gap-3 items-center'>
                                <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                                    <Check />
                                </div>
                                <p className='text-[#00000099] font-semibold'>ABS</p>
                            </div>
                            <div className='sm:w-[47.5%] flex gap-3 items-center'>
                                <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                                    <Check />
                                </div>
                                <p className='text-[#00000099] font-semibold'>Air Bags</p>
                            </div>
                            <div className='sm:w-[47.5%] flex gap-3 items-center'>
                                <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                                    <Check />
                                </div>
                                <p className='text-[#00000099] font-semibold'>Air BAgs</p>
                            </div>
                            <div className='sm:w-[47.5%] flex gap-3 items-center'>
                                <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                                    <Check />
                                </div>
                                <p className='text-[#00000099] font-semibold'>Cruise Control</p>
                            </div>
                            <div className='sm:w-[47.5%] flex gap-3 items-center'>
                                <div className='p-1 bg-[#5937E0] text-white rounded-4xl'>
                                    <Check />
                                </div>
                                <p className='text-[#00000099] font-semibold'>Air Conditioner</p>
                            </div>
                        </div>
                    </aside>
                </section>
            )}
            {isLoading && (<CircularProgress size={150} className='m-[5vh_auto]' />)}
            <section className="flex flex-col gap-[7vh]">
          <aside className="flex justify-between items-end">
            <h1 className="sm:w-[25%] text-4xl font-bold">Other cars</h1>
            <Link className="font-semibold flex items-center gap-3" to="/cars">View All <ArrowRight /></Link>
          </aside>
          <aside className="flex gap-[3vh_3%] flex-wrap">
            {
              cars?.slice(0, 6).map((car: ICar) => {
                return <div className="bg-[#FAFAFA] w-[98%] sm:w-[31%] p-7.5 flex flex-col gap-[5vh] rounded-2xl" key={car.id}>
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
        <Footer />
    </div>
  )
}

export default Info