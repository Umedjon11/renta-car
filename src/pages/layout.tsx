import { useEffect } from "react"
import { Outlet } from "react-router"
import { ToastContainer } from 'react-toastify'
import { GetToken, SetNewTokenTime } from "../../utils/axios"

const Layout = () => {

  useEffect(() => {
    const token = GetToken()
    const ThelastActive = localStorage.getItem("last_active")
    if (ThelastActive) {
      const nowTime = Date.now()

      if (nowTime-3300000 >= +ThelastActive) {
        localStorage.clear()
      }
    }
    if (token) {
      setInterval(() => {
        SetNewTokenTime()
      }, 1000)
    }
  }, [])

  return (
    <div className="max-w-400 m-[0_auto]">
      <ToastContainer />
      <Outlet />
    </div>
  )
}

export default Layout