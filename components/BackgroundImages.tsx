const BackgroundImages=()=>{
    return(
        <div>
          <img src='/images/background.png' alt="bg" className='w-full h-screen object-cover' />
          <img src='/images/man.png' className='absolute top-[19em] right-9 xl:top-[19rem] 2xl:block xl:block lg:block  xl:right-[11rem] xl:w-[300px] 2xl:top-[20rem] 2xl:right-[20rem] lg:w-[250px] lg:right-0 md:w-[200px] hidden min-[2560px]:right-[26rem] min-[2560px]:w-[400px] min-[2560px]:top-[26rem] min-[2560px]:right-[] ' />
          <img src='/images/tick-mark.png' className='absolute top-[12em] right-[12em] w-[80px] lg:w-[50px] md:w-[50px] md:right-[5rem] 2xl:block xl:block lg:block md:block hidden' />
          <img src='/images/photo.png' className='absolute bottom-[8em] right-[16em] lg:w-[50px] md:w-[50px] md:right-[5rem] 2xl:block xl:block lg:block md:block hidden' />
          <img src='/images/search-bar.png' className='absolute bottom-[12em] w-[70px] right-[45%] lg:bottom-[10em] lg:w-[50px] md:w-[50px] 2xl:block xl:block lg:block md:block hidden' />
        </div>
    )
}

export default BackgroundImages