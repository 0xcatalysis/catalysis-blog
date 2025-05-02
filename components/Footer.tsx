import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import LogoLightMode from '@/data/logo-light-mode.svg'
import LogoDarkMode from '@/data/logo-dark-mode.svg'

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
                  <div className="mb-4 flex h-10 w-28 items-center justify-start sm:h-12 sm:w-32 md:w-36">
                    <div className="relative h-full w-full dark:hidden">
                      <LogoDarkMode className="h-full w-full object-contain" />
                    </div>
                    <div className="relative hidden h-full w-full dark:block">
                      <LogoLightMode className="h-full w-full object-contain" />
                    </div>
                  </div>
                </div>
              </Link>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Building the First Security Abstraction Layer for decentralized networks.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
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
            <div className="col-span-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="https://catalysis.network/about"
                    className="text-sm text-gray-700 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-300"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="col-span-1">
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
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <Link href="/privacy" className="hover:text-purple-700 dark:hover:text-purple-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-purple-700 dark:hover:text-purple-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
