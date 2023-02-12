// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  // const [progress, setprogress] = useState(0);
// setprogress = ()=> {
//   setprogress(progress);
// }
let apikey="9b6df3b19dd44512a22e89512556da3e";
  return (
    <div>
      <Router>
        <Navbar title="article" />
        {/* <LoadingBar color="#f11946" progress={progress} /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={12}
                country="in"
                category="general"
                
                apiKey={apikey}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={12}
                country="in"
                category="business" 
                apiKey={apikey}
                
                
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={12}
                country="in"
                category="entertainment"
                
                
                
                apiKey={apikey}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News key="health" pageSize={12} country="in"
                category="health" apiKey={apikey} />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={12}
                country="in"
                category="science"
                
                apiKey={apikey}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News key="sports" pageSize={12}  
               country="in" category="sports" apiKey={apikey} />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={12}
                country="in"
                category="technology"
                
                
                apiKey={apikey}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
