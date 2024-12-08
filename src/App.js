import './App.css';
import GoogleMapComponent from './components/GoogleMapComponent';
import Navbar from './components/Navbar';
import VisibleProblemsList from './components/VisibleProblemsList';
import { useState } from 'react';
import "@fontsource/roboto/400.css"; // Greutatea normală
import "@fontsource/roboto/700.css"; // Greutatea bold

function App() {
  const [mapCenter, setMapCenter] = useState({ lat: 44.4268, lng: 26.1025 });
  const [problems, setProblems] = useState([
    { id: 1, title: "Gropi în asfalt", type: "infrastructura", lat: 46.7712, lng: 23.6236, city: "Cluj-Napoca" },
    { id: 2, title: "Gunoi abandonat", type: "mediu", lat: 44.4268, lng: 26.1025, city: "București" },
    { id: 3, title: "Iluminat public defect", type: "utilitati", lat: 46.7685, lng: 23.5917, city: "Cluj-Napoca" },
    { id: 4, title: "Semafor stricat", type: "transport", lat: 44.4353, lng: 26.1039, city: "București" },
    { id: 5, title: "Alunecări de teren", type: "natural", lat: 46.7643, lng: 23.5975, city: "Cluj-Napoca" },
    { id: 6, title: "Alunecări de teren", type: "natural", lat: 46.7643, lng: 23.5975, city: "Cluj-Napoca" },
  ]);

  const [temporaryMarker, setTemporaryMarker] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState('');
  const [newCity, setNewCity] = useState('');
  const [mapBounds, setMapBounds] = useState(null);

  const handleProblemClick = (lat, lng) => {
    setMapCenter({ lat, lng });
  };

  const centerMapOnRomania = () => {
    setMapCenter({ lat: 44.4268, lng: 26.1025 }); // Centrul României
  };

  const handleReportClick = () => {
    setTemporaryMarker(mapCenter);
  };

  const handleBoundsChanged = (bounds) => {
    setMapBounds(bounds);
  };

  const visibleProblems = problems.filter(problem => {
    if (!mapBounds) return true; 
    const { north, south, east, west } = mapBounds;
    return (
      problem.lat <= north &&
      problem.lat >= south &&
      problem.lng <= east &&
      problem.lng >= west
    );
  });

  const handleSubmit = () => {
    if (temporaryMarker && newTitle && newType) {
      const newProblem = {
        id: problems.length + 1,
        title: newTitle,
        type: newType,
        lat: temporaryMarker.lat,
        lng: temporaryMarker.lng,
        city: newCity,
      };
      setProblems([...problems, newProblem]);
      setTemporaryMarker(null);
      setNewTitle('');
      setNewType('');
      setNewCity('');
    }
  };

  return (
    <div className="App-screen">
      <Navbar onLogoClick={centerMapOnRomania} onReportClick={handleReportClick}/>

      <div className="App-body">
        <GoogleMapComponent 
          onBoundsChanged={handleBoundsChanged} 
          problems={problems} 
          center={mapCenter} 
          temporaryMarker={temporaryMarker}
          setTemporaryMarker={setTemporaryMarker}
        />
        {temporaryMarker && (
          <div className="report-form">
            <input 
              type="text" 
              placeholder="Title" 
              value={newTitle} 
              onChange={(e) => setNewTitle(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Type" 
              value={newType} 
              onChange={(e) => setNewType(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="City" 
              value={newCity} 
              onChange={(e) => setNewCity(e.target.value)}
            />
            <button onClick={handleSubmit} className="submit-button">
              Submit
            </button>
          </div>
        )}

        <VisibleProblemsList problems={visibleProblems} onProblemClick={handleProblemClick}/>
      </div>
    </div>
  );
}

export default App;
