import {
  FiUser,
  FiAirplay,
  FiTarget,
  FiBriefcase,
  FiCreditCard,
  FiFileText,
  FiArchive,
  FiGrid
} from "react-icons/fi";

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
  },
  {
    label: "Payroll",
    path: "/payroll",
    icon: <FiBriefcase size={22} />,
    children: [
      {
        label: "Payroll Info",
        path: "/info"
      },
      {
        label: "Payslip",
        path: "/payslip"
      }
    ]
  },
  {
    label: "Finance",
    path: "/finance",
    icon: <FiCreditCard size={22} />,
    children: [
      {
        label: "Reimbursement",
        path: "/reimbursement"
      },
      {
        label: "Loan",
        path: "/loan"
      },
      {
        label: "Cash Advance",
        path: "/cash-advance"
      }
    ]
  },
  {
    label: "Files",
    path: "/files",
    icon: <FiFileText size={22} />
  },
  {
    label: "Assets",
    path: "/assets",
    icon: <FiArchive size={22} />
  },
  {
    label: "History",
    path: "/history",
    icon: <FiGrid size={22} />
  }
];

export default routes;