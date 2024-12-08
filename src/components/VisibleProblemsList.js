import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faTrash, faLightbulb, faCar, faTree } from "@fortawesome/free-solid-svg-icons";


function VisibleProblemsList({ problems, onProblemClick }) {
  const textStyle = {
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "400",
    color: "#343a40",
    margin: "4px 0",
  };

  const awesomeFontStyle = {
    fontSize: "3.5rem",
    marginRight: "8px",
    marginLeft: "8px",
  };

  return (
    <div
    style={{
      fontFamily: "'Quicksand', sans-serif", // Specific fontul aici
      width: "30vw",
      overflowY: "auto", // Activează scroll-ul doar când este necesar
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxHeight: "calc(100vh - 90px)", // Înălțime maximă ajustată față de navbar (80px)
    }}
    
  >
      <h3
        style={{
          ...textStyle,
          color: "grey",
          fontSize: "1.5rem",
          textAlign: "center",
          padding: "8px 8px",
        }}
      >
        Probleme Vizibile pe Hartă
      </h3>
      {problems.length === 0 && (
        <p style={{ ...textStyle, textAlign: "center", color: "#6c757d" }}>
          Nicio problemă vizibilă pentru zona selectată.
        </p>
      )}
      {problems.map((problem) => (
        <div
          key={problem.id}
          onClick={() => onProblemClick(problem.lat, problem.lng)}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#eaf4e2",
            marginLeft: "8px",
            marginRight: "8px",
            display: "flex",
            alignItems: "center",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)")
          }
        >
        {problem.type === "infrastructura" && <FontAwesomeIcon icon={faRoad} style={awesomeFontStyle}/>}
        {problem.type === "mediu" && <FontAwesomeIcon icon={faTrash} style={awesomeFontStyle}/>}
        {problem.type === "utilitati" && <FontAwesomeIcon icon={faLightbulb} style={awesomeFontStyle}/>}
        {problem.type === "transport" && <FontAwesomeIcon icon={faCar} style={awesomeFontStyle}/>}
        {problem.type === "natural" && <FontAwesomeIcon icon={faTree} style={awesomeFontStyle}/>}


          <div style={{marginLeft: "100px"}}>
          <h4
            style={{
              ...textStyle,
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            {problem.title}
          </h4>
          <p style={{ ...textStyle }}>{problem.city}</p>
          <p
            style={{
              ...textStyle,
              color: "#6c757d",
              fontSize: "0.9rem",
            }}
          >
            Lat: {problem.lat}, Lng: {problem.lng}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
            }}
          >
            <span
              style={{
                ...textStyle,
                color: "#28a745",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              👍 {problem.likes}
            </span>
            <span
              style={{
                ...textStyle,
                color: "#dc3545",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              👎 {problem.dislikes}
            </span>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default VisibleProblemsList;
