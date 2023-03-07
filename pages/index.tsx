import BackgroundImages from '@/components/BackgroundImages';
import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
      <div className='h-screen w-full relative'>
         <BackgroundImages/>
        <div className='absolute top-[30%] left-[20%]'>
          <h1 className='text-left text-[60px] 2xl:text-[140px] xl:text-[100px] xl:leading-[6rem] leading-[4rem] text-white w-[100px] leading-[100px]  lg:text-[80px] lg:w-[400px] lg:leading-[80px] md:text-[70px] md:w-[300px] md:leading-[60px] '>We're coming soon</h1>
        </div>
        <div className=' absolute top-[50%] md:top-[60%] md:left-[18%] 2xl:top-[60%] 2xl:left-[18%] xl:top-[65%] lg:top-[58%] md:top-[50%] md:left-[15%] left-0 mx-10 mt-[80px] lg:mt-[20px] md:mt-[40px] 2xl:mt-12 flex flex-col md:flex-row md:w-[100px] mx-5 w-full max-w-[80%] min-[2560px]:left-[18%]'>
          <EmailForm/>
        </div>
      </div>
  )
}
