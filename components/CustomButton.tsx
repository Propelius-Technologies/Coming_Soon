import {FormEvent} from "react";

interface ButtonInterface{
    loading:boolean;
    onClickHandler:()=> FormEvent<HTMLInputElement>
}

const CustomButton:React.FC<ButtonInterface>=({loading,onClickHandler})=>{
    return(
        <>
        <button className='shadow-lg shadow-indigo-500/80 hover:bg-[#4E60E4] mt-[15px]  flex gap-1 bg-[#30B47A] text-white p-4 rounded-lg  2xl:text-2xl md:mt-[15px] md:w-[180px] text-center' type={'button'} onClick={() => onClickHandler()}>{loading ? <div className="flex items-center justify-center w-[180px] ">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span>
            </div>
          </div>: <p className="text-center w-full">SUBSCRIBE</p> }</button>
        </>
    )
}


export default CustomButton