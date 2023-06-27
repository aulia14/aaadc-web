import AppLayout from "@/pages/layouts/AppLayout";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/reducers/user";

export default function Dashboard() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setAuth(true));
  }

  return (<AppLayout>
    <button className="bg-blue-400" onClick={handleClick}>Button</button>
  </AppLayout>);
}