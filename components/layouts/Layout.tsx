import Head from "next/head"

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="flex justify-between items-center bg-gray-200 sticky top-0 z-10 px-8 py-1">
        <a>
          <div className="mylogo"><span className="text-primary">My</span>Logo</div>
        </a>
        <ul className="flex">
          <li className="px-6 py-1">
            <a href="" className="uppercase pb-1 hover:text-main-color">Home</a>
          </li>
          <li className="px-6 py-1">
            <a href="">Home</a>
          </li>
          <li className="px-6 py-1">
            <a href="">Home</a>
          </li>
        </ul>
      </nav>
      {children}
      <footer>
        Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.
      </footer>
    </div>
  )
}

export default Layout
