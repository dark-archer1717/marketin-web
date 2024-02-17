import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '../components/Container'




function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl  ring-slate-900/5"
          >
            <MobileNavLink href="feature">Feature</MobileNavLink>
            <MobileNavLink href="about">About</MobileNavLink>
            <MobileNavLink href="contact">Contact</MobileNavLink>
            <MobileNavLink href="pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export default function Nav() {
  const router = useRouter()

  return (
    // <Popover className="relative bg-white">
    <Popover className="z-50 relative bg-white lg:shadow-md">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center px-4 py-2 sm:px-6 md:justify-start md:space-x-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">

              <Link href="/">
                <a className={`text-xl ${router.pathname == "/" ? "activeLink" : ""}`}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      src="/logo2.webp"
                      alt="Logo"
                      width="42"
                      height="42"
                    />
                    <span style={{ marginLeft: '8px' }}>Sohag Technology</span>
                  </div>
                </a>
              </Link>

            </div>

            <div className="mr-2 -my-2 md:invisible">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                {<span className="sr-only"></span>}
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group as="nav" className="hidden md:flex space-x-8">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={clsx(
                        open ? 'text-gray-900' : 'text-gray-500'
                      )}
                    >

                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg  ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            { }
                          </div>
                          <div className="p-5 bg-gray-50 sm:p-8">
                            <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                              <div className="flex items-center">
                                <div className="text-base font-medium text-gray-900">Enterprise</div>
                                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                                  New
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                Empower your entire team with even more faster internet.
                              </p>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link href="pricing">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900" id={router.pathname == "/pricing" ? "activeLink" : ""}>
                  Pricing
                </a>
              </Link>
              <a href="feature" className="text-base font-medium text-gray-500 hover:text-gray-900" id={router.pathname == "/feature" ? "activeLink" : ""}>
                Features
              </a>
              <a href="contact" className="text-base font-medium text-gray-500 hover:text-gray-900" id={router.pathname == "/contact" ? "activeLink" : ""}>
                Contact
              </a>
              <a href="about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

              <a
                href="http://link.bdcinema.net/"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                FTP Server
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >

          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg  ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-5 px-5">
                <div className="flex items-center justify-end">
                  <div className="mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-dark hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-7 w-7" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <span >
                  <Link href="/">
                    <a className="text-xl" id={router.pathname == "/" ? "activeLink" : ""}>
                      Sohag Technology
                    </a>
                  </Link>
                </span>
              </div>

              <div className="py-8 px-7">
                <div className="grid grid-cols-2 gap-4">
                  <a href="pricing" className="text-base font-medium text-gray-600 hover:text-gray-800" >
                    Pricing
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a href="feature" className="text-base font-medium text-gray-500 hover:text-gray-800" id={router.pathname == "/feature" ? "activeLink" : ""}>
                    Features
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <a href="contact" className="text-base font-medium text-gray-500 hover:text-gray-800" id={router.pathname == "/contact" ? "activeLink" : ""}>
                    Contact
                  </a>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  <a href="about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    About
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="http://link.bdcinema.net/"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    FTP Server
                  </a>

                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Container>
    </Popover>
  )
}


