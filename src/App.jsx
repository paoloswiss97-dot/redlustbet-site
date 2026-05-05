export default function App() {
  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
        padding: "40px",
        textAlign: "center"
      }}
    >
      <h1
        style={{
          color: "red",
          fontSize: "58px",
          marginTop: "80px"
        }}
      >
        RedLustBet
      </h1>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "700px",
          margin: "20px auto",
          lineHeight: "1.6"
        }}
      >
        Pronostici premium, contenuti esclusivi e community privata.
      </p>

      <button
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "18px 40px",
          borderRadius: "14px",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Accedi alla VIP
      </button>
    </div>
  );
}
