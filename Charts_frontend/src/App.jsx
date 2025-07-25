
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FileUploader from './Components/FileUpload';
import { FileContext, FileProvider } from './Components/FileContext';
import ChartSelector from './Components/chartSelector';

// import MapWrapper from './Components/MapWrapper';

import Home from './Components/CP_CPIPS';
import CPCIPS_Chunks from './Components/CP_CIPS_Chunk';

import ACVG from './Components/ACVG';
import ACVG_Chunks from './Components/ACVG_Chunk';

import ACPSP from './Components/ACPSP';
import ACPSP_Chunks from './Components/ACPSP_Chunk';

import DOC from './Components/DOC';
import DOC_Chunks from './Components/DOC_Chunk';

import DCVG from './Components/DCVG';
import DCVG_Chunks from './Components/DCVG_Chunk';

import Attenuation from './Components/Attenuation';
import Attenuation_Chunks from './Components/Attenuation_Chunk';

import ACVG_mv from './Components/ACVG_mv';
import ACVG_mvChunk from './Components/ACVG_mvChunk';

import ElevationChart from './Components/ElevationChart';
import Elevation_Chunks from './Components/Elevation_chunk';

import CorrosionRate from './Components/CR';
import CR_Chunk from './Components/CR_Chunk';

import WallLoss from './Components/WallLoss';
import WallLoss_Chunk from './Components/WallLoss_Chunk';
import ChartSelector_ICE from './Components/ChartSelector_ICE';
import Navbar from './Components/Navbar'
import Footer from './Components/footer';

import MapTilerPolyline from './Components/MapWithPolyline';

function App() {

  const [markers, setMarkers] = useState([]);
  // const {uploadedFile} = useContext(FileContext);

  console.log('Markers:', markers); // Debug log to check markers array

  return (
    <FileProvider>
      <Router>
        <AppContent markers={markers} setMarkers={setMarkers} />
      </Router>
    <Footer/>
    </FileProvider>
  );
}

const AppContent = ({ markers, setMarkers }) => {
  const location = useLocation();

  return (
    <>
      <Navbar />
    
     
      <FileUploader setMarkers={setMarkers} />
       {/* <h1 className="text-2xl font-bold text-center my-4">Pipeline Viewer</h1> */}
        {location.pathname === "/" && <MapTilerPolyline />}

      <Routes>
        {/* ✅ Main page */}
        <Route
          path="/"
          element={
            <div /*style={{ display: 'flex', gap: '6rem', alignItems: 'center', position: 'sticky' }}*/>
              <ChartSelector />
              <ChartSelector_ICE />
            </div>
          }
        />
        {/* Removed separate /ice-charts route */}

        {/* ✅ Chunk pages for each chart type */}
        <Route path="/cpcips-chunks" element={<CPCIPS_Chunks />} />
        <Route path="/acvg-chunks" element={<ACVG_Chunks />} />
        <Route path="/acpsp-chunks" element={<ACPSP_Chunks />} />
        <Route path="/doc-chunks" element={<DOC_Chunks />} />
        <Route path="/dcvg-chunks" element={<DCVG_Chunks />} />
        <Route path="/attenuation-chunks" element={<Attenuation_Chunks />} />
        <Route path="/acvg_mv-chunks" element={<ACVG_mvChunk />} />
        <Route path="/rolledUp-chunks" element={<Elevation_Chunks />} />
        <Route path="/cr-chunks" element={<CR_Chunk />} />
        <Route path="/loss-chunks" element={<WallLoss_Chunk />} />
      </Routes>
    </>
  );
};

export default App;
