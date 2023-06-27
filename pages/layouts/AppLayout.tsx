import { useSelector } from "react-redux";
import localFont from "next/font/local";

const font = localFont({src: [
  {
    path: "../fonts/Roboto-Thin.ttf",
    weight: "100",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Light.ttf",
    weight: "300",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Regular.ttf",
    weight: "400",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Medium.ttf",
    weight: "500",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Bold.ttf",
    weight: "700",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Black.ttf",
    weight: "900",
    style: "normal",
  }
]});

interface LProps {
  children: React.ReactNode;
}

export default function AppLayout({children}: LProps) {
  const userSelector = useSelector((state: any) => state.user);

  return (
    <div className={`min-h-screen bg-secondary-gray text-slate-800 ${font.className}`}>
      <p>{userSelector.auth.toString()}</p>
      {children}
    </div>
  );
}