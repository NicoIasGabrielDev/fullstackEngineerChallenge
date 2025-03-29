export default function Top5Cards({ data }) {
  return (
    <div style={{justifySelf: "center" }}>
      <h3>Top 5 CO₂ Emitting Companies</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              width: "200px",
              background: "#ffe0e0",
            }}
          >
            <strong>{formatter(item.company)}</strong>
            <p>{item["c02Emission"]} tons CO₂</p>
            </div>
        ))}
      </div>
    </div>
  );
}

function formatter(company){
  return company.replace("Empresa", "Company");
}
