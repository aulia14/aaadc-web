import Link from "next/link";
import Header from "./Header";
import { BiChevronRight } from "react-icons/bi";

interface CProps {
  children: React.ReactNode;
}

export default function Sidebar({children}: CProps) {
  return (<div className="drawer lg:drawer-open">
    <input id="sidebar" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <div className="mx-auto min-h-screen p-3 md:p-8">
        <Header />
        {children}
      </div>
      {/* <label htmlFor="sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
    </div>
    <div className="drawer-side border-r shadow rounded-r-lg overflow-y-visible">
      <label htmlFor="sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-64 h-full bg-white text-base-content">
        <div className="py-6">
          <span className="text-3xl font-semibold">AAADC</span><sub className="text-primary">v1.0.0</sub>
        </div>
        <li className="text-base">
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li className="text-base dropdown dropdown-right">
          <label tabIndex={0} className="w-full flex items-center justify-between">
            <span>General</span>
            <div className="aricons">
              <BiChevronRight size={22} />
            </div>
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52">
            <li>
              <Link href={"/general"}>Personal</Link>
            </li>
            <li><a>Employment</a></li>
            <li><a>Education & Experience</a></li>
            <li><a>Additional Info</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>);
}