import Link from "next/link";
import Header from "./Header";
import { FiChevronRight } from "react-icons/fi";
import routes from "@/routes";

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
        {routes.map((rts: any, key: number) => {
          if (!rts.children) return (<li className="text-base" key={key}>
            <div className="flex items-center gap-5">
              <div className="aricons">{rts.icon}</div>
              <Link href={rts.path}>{rts.label}</Link>
            </div>
          </li>);
          if (rts.children) return (<li className="text-base dropdown dropdown-right" key={key}>
            <label tabIndex={0} className="w-full flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="aricons">{rts.icon}</div>
                <span>{rts.label}</span>
              </div>
              <div className="aricons"><FiChevronRight size={20} /></div>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52">
              {rts.children.map((chil: any, cKey: number) => {
                return <li key={cKey}>
                  <Link href={rts.path + chil.path}>{chil.label}</Link>
                </li>
              })}
            </ul>
          </li>);
        })}
      </ul>
    </div>
  </div>);
}