'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import LogoLightMode from '@/data/logo-light-mode.svg'
import LogoDarkMode from '@/data/logo-dark-mode.svg'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-7 w-7 text-gray-900 hover:text-purple-700 dark:text-gray-100 dark:hover:text-purple-300"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-black/25" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-95"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <DialogPanel className="font-satoshi fixed top-0 left-0 z-70 h-full w-full bg-[#F9E1FF]/95 duration-300 dark:bg-[#3A0051]/98">
              <nav
                ref={navRef}
                className="mt-8 flex h-full basis-0 flex-col items-start overflow-y-auto px-6 pt-2 text-left sm:px-8"
              >
                <div className="mb-8">
                  <Link href="/" className="inline-block" onClick={onToggleNav}>
                    <div className="flex items-center">
                      <div className="mb-4 flex h-10 w-28 items-center justify-start sm:h-12 sm:w-32">
                        <div className="relative h-full w-full dark:hidden">
                          <LogoDarkMode className="h-full w-full object-contain" />
                        </div>
                        <div className="relative hidden h-full w-full dark:block">
                          <LogoLightMode className="h-full w-full object-contain" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="mb-4 py-2 pr-4 text-xl font-bold tracking-widest text-gray-900 outline outline-0 hover:text-purple-700 sm:text-2xl dark:text-gray-100 dark:hover:text-purple-300"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>

              <button
                className="fixed top-4 right-4 z-80 h-12 w-12 p-3 text-gray-900 hover:text-purple-700 dark:text-gray-100 dark:hover:text-purple-300"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
