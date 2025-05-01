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
      <header className='flex px-4 sm:px-6 md:px-10 lg:px-20 xl:px-56 items-center w-full bg-[#F9E1FF] dark:bg-[#3A0051] dark:border-b dark:border-[#580082] justify-between py-3 sticky top-0 z-50 shadow-sm transition-all duration-300 font-satoshi'>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <div className="mr-1 w-28 sm:w-32 md:w-36 h-10 sm:h-12 flex items-center justify-center">
              <div className="dark:hidden w-full h-full relative">
                <LogoDarkMode className="w-full h-full object-contain" />
              </div>
              <div className="hidden dark:block w-full h-full relative">
                <LogoLightMode className="w-full h-full object-contain" />
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
        <div className="flex items-center space-x-2 sm:space-x-4 leading-5 sm:-mr-6">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-2 md:gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-purple-300 dark:hover:text-purple-300 m-1 font-medium text-gray-900 dark:text-gray-100 transition-colors duration-200"
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
