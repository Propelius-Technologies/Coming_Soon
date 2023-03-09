import BackgroundImages from '@/components/BackgroundImages';
import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
      <div className='h-screen w-full relative'>
         <BackgroundImages/>
        <div className='absolute top-[30%] left-[15%]  lg:top-[26%] md:top-[30%]'>
          <h1 className='text-left text-[60px] min-[2560px]:text-[100px] min-[425px]:text-[50px] leading-[55px]  xl:text-[80px] leading text-white w-[100px]  lg:text-[80px] lg:w-[400px] lg:leading-[80px] md:text-[70px] md:w-[300px] md:leading-[60px] sm:leading-[60px] '>We're coming soon</h1>
        </div>
        <div className=' absolute top-[50%] md:top-[60%] md:left-[18%] 2xl:top-[35%] 2xl:left-[14%] xl:top-[46%] xl:left-[15%] lg:top-[58%] md:top-[50%] md:left-[15%] left-0 mx-10 mt-[120px] lg:mt-[20px] md:mt-[40px] 2xl:mt-12 flex flex-col md:flex-row md:w-[100px] mx-5 w-full max-w-[100%] min-[2560px]:left-[14%]'>
          <EmailForm/>
        </div>
      </div>
  )
}
