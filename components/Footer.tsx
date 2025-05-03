import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Logo from '@/data/catalysis.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="font-satoshi bg-[#F9E1FF] dark:border-t dark:border-[#580082] dark:bg-[#3A0051]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 xl:px-56">
        <div className="py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Footer content grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {/* Logo and description */}
            <div className="col-span-2 sm:col-span-2 md:col-span-1">
              <Link href="/" className="inline-block">
                <div className="flex items-center">
                  <div className="mb-4 flex h-[5.4rem] w-[14rem] items-center justify-start sm:h-[4.7rem] sm:w-[12.5rem] md:ml-[-20px] md:h-[3.9rem] md:w-[14rem]">
                    <div className="relative h-full w-full dark:hidden">
                      <Image
                        src={Logo}
                        alt="Catalysis Logo"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="relative hidden h-full w-full dark:block">
                      <Image
                        src={Logo}
                        alt="Catalysis Logo"
                        className="h-full w-full object-contain invert"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 mt-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="https://docs.catalysis.network"
                    className="text-sm text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-300"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-1 mt-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="https://catalysis.network"
                    className="text-sm text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-300"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="col-span-1 mt-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Connect</h3>
              <div className="mt-4 flex space-x-4">
                <SocialIcon kind="github" href={siteMetadata.github} size={5} />
                <SocialIcon kind="x" href={siteMetadata.x} size={5} />
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-6 sm:mt-10 sm:pt-8 md:flex-row dark:border-[#580082]">
            <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div>{`© ${new Date().getFullYear()} Catalysis Network.`}</div>
              <div>{` All rights reserved.`}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
