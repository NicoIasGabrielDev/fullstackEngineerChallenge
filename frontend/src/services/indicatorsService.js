import axios from "axios";
const API_BASE_URL = "http://localhost:3000/indicators";

//GET /emission-per-year 
const getEmissionPerYear = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/emission-per-year`,
  );
  return response.data;
};

//GET /top-five-emission-companies
const getTop5EmissionCompanies = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/top-five-emission-companies`,
  );
  return response.data;
};

//GET /average-consume-by-company 
const getAverageConsumeByCompany = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/average-consume-by-company`,
  );
  return response.data;
};

//GET /total-sector-consume
const getTotalConsumeBySector = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/total-sector-consume`,
  );
  return response.data;
};

export{
    getTotalConsumeBySector,
    getAverageConsumeByCompany,
    getTop5EmissionCompanies,
    getEmissionPerYear
};
