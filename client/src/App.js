import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Components/Home";
import IndexPage from "./Components/IndexPage";
import Documentation from "./Components/Documentation"; 
import './Components/style.css';
import { useEffect } from 'react';

import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-EL8Z9J8YYZ';
ReactGA.initialize(TRACKING_ID);

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}


function App() {
  return (
    <Router>
      <div className="App">
     <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/documentation" element={<Documentation />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
