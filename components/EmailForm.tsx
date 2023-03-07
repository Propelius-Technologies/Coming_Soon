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
            <div className=' absolute top-[50%] md:top-[60%] md:left-[-25%] 2xl:top-[60%] 2xl:left-[0%] xl:top-[65%] lg:top-[58%] md:top-[50%] md:left-[15%] left-0 mx-10 mt-[80px] lg:mt-[20px] md:mt-[40px] 2xl:mt-12 flex flex-col md:flex-row md:w-[100px]  w-full max-w-[80%] min-[2560px]:left-[0%] '>
                <input required onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Your Email Address' className='rounded-md p-4 2xl:text-2xl hover:border-none w-full md:w-[512px] focus:outline-none' />
                <CustomButton loading={loading} onClickHandler={onClickHandler}/>
            </div>
            <p>{error}</p>
            </form>
        </div>
    )
}

export default EmailForm