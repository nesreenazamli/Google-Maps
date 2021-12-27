import React, { useEffect, useState } from "react";
import "./App.css";
import { loadMapApi } from "./utils/GoogleMapsUtils";
import { Map } from "./Components/Maps/Map";

function App() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", function () {
      setScriptLoaded(true);
    });
  }, []);
  return (
    <div className="App">
      {scriptLoaded && (
        <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
      )}
      nes
    </div>
  );
}

export default App;
