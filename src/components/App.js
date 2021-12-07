import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader"
import '../App.scss';

export default function App() {
  return (
    <div id="site-container">
      <SiteHeader />
      <div id="page-container">
        <Outlet />
      </div>
    </div>
  );
}
