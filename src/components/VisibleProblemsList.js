import React from "react";

function VisibleProblemsList({ problems, onProblemClick }) {
  return (
    <div
      style={{
        width: "30vw",
        overflowY: "scroll",
        border: "1px solid #ddd",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h3
        style={{
          color: "#007bff",
          fontSize: "1.5rem",
          marginBottom: "16px",
          borderBottom: "2px solid #007bff",
          paddingBottom: "8px",
        }}
      >
        Probleme Vizibile pe Hartă
      </h3>
      {problems.length === 0 && (
        <p style={{ color: "#6c757d", textAlign: "center" }}>
          Nicio problemă vizibilă pentru zona selectată.
        </p>
      )}
      {problems.map((problem) => (
        <div
          key={problem.id}
          onClick={() => onProblemClick(problem.lat, problem.lng)}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "12px 0",
            marginBottom: "12px",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e9ecef")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <h4 style={{ margin: "0", color: "#343a40", fontSize: "1.2rem" }}>
            {problem.title}
          </h4>
          <p style={{ margin: "4px 0", color: "#495057" }}>{problem.city}</p>
          <p style={{ margin: "4px 0", color: "#6c757d", fontSize: "0.9rem" }}>
            Lat: {problem.lat}, Lng: {problem.lng}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            <span
              style={{
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
      ))}
    </div>
  );
}

export default VisibleProblemsList;
