import { Link } from "gatsby"
import React, { useEffect } from "react"
import logo from "../images/logo1.png"

const Nav = () => {
  useEffect(() => {
    var nb = document.getElementById('navbutt');
    var ns = document.getElementById('navstuff');
    var h = document.getElementById('header');
    nb.onclick = function () {
      ns.classList.toggle('block');
      ns.classList.toggle('hidden');
      h.classList.toggle('bg-black');
    }

    return () => { }
  })

  return (

    <header id="header" className="lg:bg-transparent lg:h-screen fixed left-0 top-0 flex-none w-full lg:max-w-xs text-white z-50">
              <div className="topbar"></div>
      <div className="lg:flex flex-col lg:min-h-screen lg:pt-12 lg:pb-22 lg:px-16 py-6 px-8">
        <div className="flex flex-row">
          <Link
            className="flex-grow"
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img className="w-12 lg:w-16" src={logo} alt="UCSD Wushu logo" />
          </Link>
          <div className="block lg:hidden">
            <button id="navbutt" className="flex items-center text-white">
              <svg className="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="navstuff" className="lg:flex lg:flex-col lg:flex-grow hidden">
          <ul className="flex-grow mt-16">
            <li className="navlist">
              <Link to="/class" className="hoverlink">Class</Link>
            </li>
            <li className="navlist">
              <Link to="/cabinet" className="hoverlink">Cabinet</Link>
            </li>
            <li className="navlist">
              <Link to="/demos" className="hoverlink">Demos</Link>
            </li>
            <li className="navlist">
              <Link to="/contact" className="hoverlink">Contact</Link>
            </li>
          </ul>
          <footer className="mt-8">
            <div>
              <ul className="mb-4 text-gray-300">
                <li className="mt-1"><a className="navlist2" href="https://linktr.ee/ucsdwushu">LinkTree</a></li>
                <li className="mt-1"><a className="navlist2" href="https://discord.com/invite/F6gSrcG">Discord</a></li>
                <li className="mt-1"><a className="navlist2" href="https://www.instagram.com/ucsdwushu/">Instagram</a></li>
                <li className="mt-1"><a className="navlist2">Facebook</a></li>
                <li className="mt-1"><a className="navlist2" href="https://www.youtube.com/channel/UCJJOaO7Kk3-u-qHxsRbrFuw">YouTube</a></li>
              </ul>

              <p className="text-xs opacity-50 text-gray-400">© {new Date().getFullYear()} Wushu Club<br></br>@ UC San Diego</p>
              {/*<p><a className="text-xs opacity-50 text-gray-400 transition duration-100 hover:opacity-100" href="https://cao.sh">Designed by David Cao</a></p>*/}
            </div>
          </footer>

        </div>
      </div>
    </header>
  )
}

export default Nav
