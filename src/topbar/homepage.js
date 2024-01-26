import { useLocation } from "react-router";
import Header from "./header";
import Posts from "./posts";
import Sidebar from "./sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}