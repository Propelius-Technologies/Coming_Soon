import CustomButton from "./CustomButton"
import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EmailForm = () => {
    const [loading, setLoading] = useState(false);
    const [email,setEmail]=useState('')
    const [error,setError]=useState(null)

    const onClickHandler = async (e:React.FormEvent<HTMLInputElement>) => {
        e?.preventDefault();
        setLoading(true)
        let regEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if(regEmail.test(email)){
            const data = await fetch('/api/subscribe');
            const response = await data.json();
            toast.success(response.message, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
            })
        }
        else{
           toast.error('Please Check your email',{
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
           })
        }
        setLoading(false)

    }
    return (
        <div>
            <ToastContainer />
            <form >
            <div className=' flex flex-col items-center mx-10 mt-[-55px] 2xl:mt-[8rem] sm:items-start  lg:mt-[14px]  md:mt-[-5rem] ml-[3px] 2xl:mt-[5rem] gap-5  md:flex-col gap-5 items-start min-[1440px]:mt-[5rem] w-fit max-w-[100%] min-[2560px]:ml-[25px] '>
                <input required onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Your Email Address' className='shadow-lg shadow-indigo-500/80 rounded-md p-4 2xl:text-2xl hover:border-none w-full md:w-auto focus:outline-none' />
                <CustomButton loading={loading} onClickHandler={onClickHandler}/>
            </div>
            <p>{error}</p>
            </form>
        </div>
    )
}

export default EmailForm