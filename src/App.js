import './App.css';
import GoogleMapComponent from './components/GoogleMapComponent';
import Navbar from './components/Navbar';
import VisibleProblemsList from './components/VisibleProblemsList';
import { useState } from 'react';

function App() {

  const [mapCenter, setMapCenter] = useState({ lat: 44.4268, lng: 26.1025 });

  const handleProblemClick = (lat, lng) => {
    setMapCenter({ lat, lng });
  };

  // Exemplu de probleme stocate local
  const [problems, setProblems] = useState([
    { id: 1, title: "Gropi în asfalt", lat: 46.7712, lng: 23.6236, city: "Cluj-Napoca" },
    { id: 2, title: "Gunoi abandonat", lat: 44.4268, lng: 26.1025, city: "București" },
    { id: 3, title: "Iluminat public defect", lat: 46.7685, lng: 23.5917, city: "Cluj-Napoca" },
    { id: 4, title: "Semafor stricat", lat: 44.4353, lng: 26.1039, city: "București" },
    { id: 5, title: "Alunecări de teren", lat: 46.7643, lng: 23.5975, city: "Cluj-Napoca" },
  ]);

  const [mapBounds, setMapBounds] = useState(null);

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

  return (
    <div className="App-screen">
      <Navbar />
      <div className="App-body">
        <GoogleMapComponent 
          onBoundsChanged={handleBoundsChanged} 
          problems={problems} 
          center={mapCenter} 
        />
        <VisibleProblemsList problems={visibleProblems} onProblemClick={handleProblemClick}/>
        
      </div>
    </div>
  );
}

export default App;
