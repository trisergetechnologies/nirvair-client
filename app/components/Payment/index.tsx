import Image from 'next/image';
import Link from 'next/link';

const Payment = () => {

    return (
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/payment/nirvair.vision.png" alt="payment" width={600} height={600} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-center mb-32'>
                        <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>
                        {/* Your Vision, Our Technology, Shared Success */}
                        Ihre Vision, Unsere Technologie, Gemeinsamer Erfolg
                        </h2>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                        {/* Your goals are at the heart of what we do. With tailored technology solutions and expert consulting, we help turn your vision into reality. Through innovative approaches, modern tools, and a collaborative partnership, we create sustainable success – together with you. */}
                        Bei uns stehen Ihre Ziele im Mittelpunkt. Mit maßgeschneiderten Technologielösungen und fundierter Beratung unterstützen wir Sie dabei, Ihre Visionen in die Realität umzusetzen. Durch innovative Ansätze, moderne Tools und partnerschaftliche Zusammenarbeit schaffen wir nachhaltigen Erfolg – gemeinsam mit Ihnen.
                        </h3>
                        <Link href={'/about-us'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                        {/* Learn More */}
                        Mehr erfahren
                         <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </Link>
                    </div>

                </div>
            </div>
    )
}

export default Payment;
