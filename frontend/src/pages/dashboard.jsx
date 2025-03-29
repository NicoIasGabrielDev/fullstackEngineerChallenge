import { useEffect, useState } from "react";
import { getTotalConsumeBySector,getAverageConsumeByCompany,getTop5EmissionCompanies,getEmissionPerYear,} from "../services/indicatorsService";
import BarChart from "../components/BarChart";
import SimpleTable from "../components/SimpleTable";
import Top5Cards from "../components/Top5Cards";
import PieChart from "../components/PieChart";

export default function Dashboard({ isReady }) {
  const [emissionPerYear, setEmissionPerYear] = useState([]);
  const [averageByCompany, setAverageByCompany] = useState([]);
  const [top5Companies, setTop5Companies] = useState([]);
  const [consumeBySector, setConsumeBySector] = useState([]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    if (!isReady) return;
    async function fetchData() {
      try {
        const emissions = await getEmissionPerYear();
        const averages = await getAverageConsumeByCompany();
        const top5 = await getTop5EmissionCompanies();
        const sectors = await getTotalConsumeBySector();

        setEmissionPerYear(emissions);
        setAverageByCompany(averages);
        setTop5Companies(top5);
        setConsumeBySector(sectors);
        if (emissions.length &&averages.length &&top5.length &&sectors.length) {
          setHasData(true);
        };
      } catch (err) {
        console.error("Error fetching indicators:", err);
      };
    }

    fetchData();
  }, [isReady]);

  return (
    !hasData ? (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>No data loaded yet</h2>
        <p>Please upload a spreadsheet to view the indicators.</p>
      </div>
    ) : (
      <div style={{ padding: "2rem" }}>
        <BarChart data={averageByCompany} />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <SimpleTable data={consumeBySector} />
          <PieChart data={emissionPerYear} />
        </div>
        <Top5Cards data={top5Companies} />
      </div>
    )

  );
}
