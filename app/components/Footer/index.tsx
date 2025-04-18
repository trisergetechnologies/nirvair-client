import Link from "next/link";
import ContactForm from "../contact";

interface links {
    link: string;
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: '/assets/footer/instagram.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const links: links[] = [
    {
        link: 'Product',
    },
    {
        link: 'Pricing',
    },
    {
        link: 'Features',
    },

]



const Footer = () => {
    return (

        <div className=" bg-midnightblue">
            <ContactForm/>

            <div className="mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                </div>

                {/* All Rights Reserved */}

                <div className='pt-12 pb-10 lg:flex items-center justify-between border-t border-t-white border-opacity-30'>
                    <h4 className='text-lg text-center md:text-start font-normal text-white opacity-60'>© {new Date().getFullYear()} Nirvair. All rights reserved</h4>
                    <div className="flex gap-5 mt-6 md:mt-0 justify-center md:justify-start">
                        <h4 className='opacity-60 text-lg font-normal text-white'><Link href="/privacy-policy" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-white opacity-60 w-0.5"></div>
                        <h4 className='opacity-60 text-lg font-normal text-white'><Link href="/impressum" target="_blank">Impressum</Link></h4>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Footer;
