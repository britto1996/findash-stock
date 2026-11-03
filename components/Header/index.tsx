import Link from 'next/link'
import Image from 'next/image'
import { PATH } from '@/app/constants/path'
import NavItems from '../NavItems'
import UserDropdown from '../UserDropdown'

const Header = () => {
  return (
    <header className="sticky top-0 header border-b-4 border-gray-700">
      <div className="container header-wrapper">
        <Link href={PATH.HOME}>
          <Image loading="eager" src="/Logo/findash.svg" alt="Findash_Logo" width={200} height={32} className="w-auto h-80 cursor-pointer absolute -top-20" />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  )
}

export default Header