import {FC, ReactNode} from "react"
import Head from "next/head"

interface IProps {
  children: ReactNode,
  title: string
}

const Layout: FC<IProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="flex justify-between items-center border-b-2 border-gray-200 bg-white sticky top-0 z-10 px-20 py-4">
        <a>
          <div className="mylogo font-bold text-2xl leading-relaxed tracking-widest"><span className="text-primary">Fine</span>Logo</div>
        </a>
        <ul className="flex">
          <li className="px-6 py-1">
            <a href="" className="uppercase font-bold hover:text-main-color">Home</a>
          </li>
          <li className="px-6 py-1">
          <a href="" className="uppercase font-bold hover:text-main-color">Shop</a>
          </li>
          <li className="px-6 py-1">
          <a href="" className="uppercase font-bold hover:text-main-color">Profile</a>
          </li>
        </ul>
        <div className="flex items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </nav>
      {children}
      <footer>
        Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.
      </footer>
    </div>
  )
}

export default Layout
