import Image from 'next/image';
import Link from 'next/link';

const People = () => {

    return (
        <div id="product">
            <div className="mx-auto max-w-7xl px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-32 lg:mt-20'>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/people/aboutus.png" alt="nothing" width={1000} height={805} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Technologie vereinfachen, Wirkung für die Welt verstärken.</h1>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0'>Nirvair ist ein zukunftsorientiertes Unternehmen für Softwareentwicklung und digitale Transformation, das sich der Aufgabe verschrieben hat, Ideen in wirkungsvolle Innovationen zu verwandeln.</h3>
                        <Link href={'/'} className="text-electricblue text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0">
                        Mehr erfahren <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default People;
