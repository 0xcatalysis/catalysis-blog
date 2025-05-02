import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import LogoLightMode from '@/data/logo-light-mode.svg'
import LogoDarkMode from '@/data/logo-dark-mode.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <div>
      <header className="font-satoshi sticky top-0 z-50 flex w-full items-center justify-between bg-[#F9E1FF] px-4 py-3 shadow-sm transition-all duration-300 sm:px-6 md:px-10 lg:px-20 xl:px-56 dark:border-b dark:border-[#580082] dark:bg-[#3A0051]">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <div className="mr-1 flex h-10 w-28 items-center justify-center sm:h-12 sm:w-32 md:w-36">
              <div className="relative h-full w-full dark:hidden">
                <LogoDarkMode className="h-full w-full object-contain" />
              </div>
              <div className="relative hidden h-full w-full dark:block">
                <LogoLightMode className="h-full w-full object-contain" />
              </div>
            </div>
            {/* {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )} */}
          </div>
        </Link>
        <div className="flex items-center space-x-2 leading-5 sm:-mr-6 sm:space-x-4">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-2 overflow-x-auto sm:flex md:max-w-72 md:gap-x-4 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="m-1 font-medium text-gray-900 transition-colors duration-200 hover:text-purple-300 dark:text-gray-100 dark:hover:text-purple-300"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
    </div>
  )
}

export default Header
