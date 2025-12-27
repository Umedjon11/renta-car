import { useFormik } from "formik"
import { useEffect } from "react"
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { ApiSignUp } from "../api/request/auth";
import { TextField } from "@mui/material";
import Logo from '../assets/Logo.png'

const SignUp = () => {

  const navigate = useNavigate()

  const formSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid Email")
    .required("Fill Your Email"),
    password: Yup.string()
    .required("Fill Password"),
    confirmPassword: Yup.string()
    .required("Fill Password")
  })

  const {handleSubmit, handleChange, resetForm, errors, touched, values} = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
     const result = await ApiSignUp(values)
     if(result) {
      navigate("/LogIn")
     }
    }
  })

  useEffect(() => {
    resetForm()
  }, [])

  return ( 
    <div className="flex LogIn h-screen items-center gap-[10%]">
      <form className='bg-[#FFFFFF90] h-full p-[30vh_2%] flex flex-col gap-[2vh] sm:w-[30%] w-[80%]' onSubmit={handleSubmit}>
        <img width={200} className='m-[0_auto] fixed top-[1vh]' src={Logo} />
        <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
        <TextField name='email' value={values.email} onChange={handleChange} label="Email" variant="standard" />
        {errors.email && touched.email ? (<p className='text-[red]'>{errors.email}</p>) : null}
        <TextField name='password' value={values.password} onChange={handleChange} label="Password" variant="standard" />
        {errors.password && touched.password ? (<p className='text-[red]'>{errors.password}</p>) : null}
        <TextField name='confirmPassword' value={values.confirmPassword} onChange={handleChange} label="Confirm Password" variant="standard" />
        {errors.confirmPassword && touched.confirmPassword ? (<p className='text-[red]'>{errors.confirmPassword}</p>) : null}
        <button className="bg-white w-full p-[1.5vh_0] rounded-[10px] cursor-pointer font-semibold text-[#1976DB]" type='submit'>Sign Up</button>
        <p className='flex gap-3'>Already have an account? <button className='pointer text-[#1b84f5] cursor-pointer' type='button' onClick={() => navigate("/logIn")}>Log In</button></p>
      </form>
    </div>
  )
}

export default SignUp