import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Topbar from "./topbar/topbar";
import Homepage from "./topbar/homepage";

import Register from "./topbar/register";
import Settings from "./topbar/settings"; 
import Single from "./topbar/single";
import Write from "./topbar/write";

function App() {
  const currentUser = true;

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route
          path="/register"
          element={currentUser ? <Homepage /> : <Register />}
        />
        <Route
          path="/single"
          element={currentUser ? <Homepage /> : <Register />}
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={currentUser ? <Write /> : <Register />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;


// // app.jsx
// import   './app.css';
// import HeroSection from "./brand/hero";
// // import Navigation from "./brand/navigation";

// const App = () => {
//   return (
//     <div>
//       {/* <Navigation /> */}
//       <HeroSection />
//     </div>
//   );
// };

// export default App;
