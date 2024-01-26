import Sidebar from "./sidebar";
import SinglePost from "./singlepost";
import "./single.css"


export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
  }