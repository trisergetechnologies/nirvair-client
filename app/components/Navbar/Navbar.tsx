import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Über uns', href: '/about-us', current: true },
    { name: 'Dienstleistungen', href: '#features', current: false },
    { name: 'Kontakt', href: '#contactSection', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 md:py-2 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                    <h1 className='text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight'>
                                  <Link href="/" className="hover:text-gray-700 transition-colors">
                                    nirvair
                                  </Link>
                            </h1>
                        <div className="flex flex-1 items-end sm:items-stretch sm:justify-end">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">


                                {/* 
                                <img
                                    className="block h-12 w-40 lg:hidden"
                                    src={'/assets/logo/logo.svg'}
                                    alt="paidin-logo"
                                />
                                <img
                                    className="hidden h-full w-full lg:block"
                                    src={'/assets/logo/logo.svg'}
                                    alt="paidin-logo"
                                />
                                 */}
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block ml-20">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-black hover:opacity-75' : 'hover:text-black hover:opacity-75',
                                                'px-3 py-4 text-lg font-normal text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        {/* <Signdialog /> */}


                        {/* REGISTER DIALOG */}

                        {/* <Registerdialog /> */}


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
