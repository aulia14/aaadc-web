import Link from "next/link";
import Header from "./Header";

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
    <div className="drawer-side border-r shadow rounded-r-lg">
      <label htmlFor="sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-64 h-full bg-white text-base-content">
        <li className="text-base">
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
    </div>
  </div>);
}