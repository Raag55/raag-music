import { BrowserRouter, Routes, Route } from "react-router-dom";

import RaagMusic from "./subSections/raagMusic.tsx";
import RaagCafe from "./subSections/cafe";
import RaagAcademy from "./subSections/academy";
import RaagStudio from "./subSections/studio";
import RaagFoundation from "./subSections/foundation";

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RaagMusic />} />
        <Route path="/cafe" element={<RaagCafe />} />
        <Route path="/academy" element={<RaagAcademy />} />
        <Route path="/studio" element={<RaagStudio />} />
        <Route path="/foundation" element={<RaagFoundation />} />
      </Routes>

      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
