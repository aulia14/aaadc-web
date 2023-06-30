import Link from "next/link";
import Header from "./Header";
import { FiChevronRight, FiMenu } from "react-icons/fi";
import routes from "@/routes";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface CProps {
  children: React.ReactNode;
}

export default function Sidebar({children}: CProps) {
  const router = useRouter();

  useEffect(() => {
    // console.log(router.asPath.split("/")[1]);
  }, [router]);

  return (<div className="drawer lg:drawer-open">
    <input id="sidebar" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <div className="mx-auto min-h-screen p-3 md:p-8">
        <Header>
          <label htmlFor="sidebar" className="lg:hidden">
            <FiMenu size={26} />
          </label>
        </Header>
        {children}
      </div>
    </div>
    <div className="drawer-side border-r-0 shadow rounded-r-lg overflow-y-visible md:border-r">
      <label htmlFor="sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-64 h-full bg-white text-base-content">
        <div className="py-6 mb-3">
          <span className="text-3xl font-semibold">AAADC</span><sub className="text-primary">v1.0.0</sub>
        </div>
        {routes.map((rts: any, key: number) => {
          if (!rts.children) return (
            <li
              className={`text-base mb-2 rounded-lg menu-item ${router.asPath === rts.path ? "menu-active" : ""}`}
              key={key}
            >
              <div className="flex items-center gap-4">
                <div className="aricons">{rts.icon}</div>
                <Link href={rts.path} className="text-sm w-full">{rts.label}</Link>
              </div>
            </li>
          );
          if (rts.children) return (
            <li
              className={`rounded-lg menu-item-nested text-base dropdown dropdown-right mb-2 ${"/" + router.asPath.split("/")[1] === rts.path ? "menu-active" : ""}`}
              key={key}
            >
              <label tabIndex={0} className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="aricons">{rts.icon}</div>
                  <span className="text-sm">{rts.label}</span>
                </div>
                <div className="aricons"><FiChevronRight size={20} /></div>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52">
                {rts.children.map((chil: any, cKey: number) => {
                  return <li key={cKey}>
                    <Link href={rts.path + chil.path} className={`nested-item ${rts.path + chil.path == router.asPath ? "nested-active" : ""}`}>{chil.label}</Link>
                  </li>
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  </div>);
}