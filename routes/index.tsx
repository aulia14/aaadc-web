import { FiUser, FiAirplay, FiTarget } from "react-icons/fi";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <FiAirplay size={22} />
  },
  {
    label: "General",
    path: "/general",
    icon: <FiUser size={22} />,
    children: [
      {
        label: "Personal",
        path: "/personal"
      },
      {
        label: "Employment",
        path: "/employment"
      },
      {
        label: "Education & Experience",
        path: "/education-experience"
      },
      {
        label: "Additional Info",
        path: "/additional-info"
      },
    ]
  },
  {
    label: "Time Management",
    path: "/time",
    icon: <FiTarget size={22} />,
    children: [
      {
        label: "Attendance",
        path: "/attendance"
      },
      {
        label: "Timeoff",
        path: "/timeoff"
      },
      {
        label: "Overtime",
        path: "/overtime"
      }
    ]
  }
];

export default routes;