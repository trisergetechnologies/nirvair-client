import Image from 'next/image';

const Business = () => {

    // In your Banner component
const scrollToContact = () => {
    const contactSection = document.getElementById('contactSection');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // Aligns to top of viewport
      });
    }
  };

    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>Warum wir die richtige Wahl für Sie sind</h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>Im Mittelpunkt unseres Handelns stehen Qualität, Sorgfalt und Vertrauen. Wir verstehen Ihre Bedürfnisse und geben alles, um Lösungen zu bieten, die wirklich etwas bewirken. Mit einem engagierten Team, nachgewiesener Erfolgsbilanz und kundenorientiertem Ansatz sind wir die richtige Wahl für Sie.</h3>
                    {/* <Link href={'/'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0">
                    Mehr erfahren <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                    </Link> */}
                </div>

                <div className='col-span-6 flex justify-center mt-10 lg:mt-0'>
                    <Image src="/assets/business/nirvair01.png" alt="business" width={1000} height={805} />
                </div>

            </div>
        </div>

    )
}

export default Business;
