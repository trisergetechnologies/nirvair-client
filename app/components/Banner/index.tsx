
const Banner = () => {

    return (
        <div className='bg-header pt-10'>
            <div className="mx-auto max-w-7xl sm:pb-24 px-6 pt-[85px]">

                <div className='grid grid-cols-1 lg:grid-cols-12'>


                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        {/* <Image src="/assets/banner/star.svg" alt="star-image" width={90} height={93} className='opacity-50 absolute top-[-79px] right-[42px]' /> */}
                        {/* <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} className='absolute top-[-74px] right-[51px]' /> */}
                        <h1 className='text-midnightblue text-2xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'>Wertegeleitet, technologiebasiert, wirkungsorientiert.</h1>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Nirvair entwickelt zukunftssichere digitale Lösungen mit Präzision, Qualität und modernster Technologie - deutsche Ingenieurexzellenz für Ihre digitale Transformation.</h3>
                        <div className='pt-8 mx-auto lg:mx-0'>
                            <a href='#contactSection'><button className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue">
                            Kontakt
                            </button></a>
                        </div>
                    </div>

                     {/* <div className='col-span-5 flex justify-end xl:-mb-25 xl:-mr-30  pt-10 lg:pt-0'>  
                        <Image src="/assets/banner/banner01.jpg" alt="nothing" width={700} height={500} className='rounded-full'/>
                    </div>  */}
                </div>
            </div>

        </div>

    )
}

export default Banner;
