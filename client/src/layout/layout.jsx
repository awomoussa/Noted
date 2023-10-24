import { Outlet } from "react-router-dom";
import Navbar2 from "../components/navbar2/navbar2";

export default function Layout() {
  return (
    <div>
      <Navbar2 />
      <Outlet />
    </div>
  );
}
