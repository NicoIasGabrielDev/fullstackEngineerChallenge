const xlsx = require('xlsx');
/**
 * Process excel and return indicators
 * @param {string} filePath
 * @return {object} indicators made by excel's data
 */

function processExcel(filePath){
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    const totalEmissionPerYear = {};
    const emissionByCompany = {};
    const consumeByCompany = {};
    const sectorConsume = {};
    const averageConsume = {};

    data.forEach(row => {
        const company = row['Empresa'];
        const year = row['Ano'];
        const sector = row['Setor'];
        //To avoid comma issues
        const energyConsumed = parseFloat(String(row['Consumo de Energia (MWh)']).replace(',','.'))|| 0;
        const c02Emission = parseFloat(String(row['Emissões de CO2 (toneladas)']).replace(',','.')) || 0;
    
        if(!totalEmissionPerYear[year])totalEmissionPerYear[year] = 0;
        totalEmissionPerYear[year] += c02Emission;

        if(!emissionByCompany[company])emissionByCompany[company] = 0;
        emissionByCompany[company] += c02Emission;

        if(!sectorConsume[sector])sectorConsume[sector] = 0;
        sectorConsume[sector] += energyConsumed;

        if (!consumeByCompany[company]) {
            consumeByCompany[company] = [];
        }
        consumeByCompany[company].push(energyConsumed);
    });

    

    for (let company in consumeByCompany){
        const consumes = consumeByCompany[company];
        let sum = 0;
        for (let consume of consumes){
            sum += consume;
        }
        const average = sum / consumes.length;
        averageConsume[company]  = average;
    }

    const top5EmissionCompanies = Object.entries(emissionByCompany).sort((a,b) => b[1] - a[1]).slice(0,5).map(([company,c02Emission]) => ({company,c02Emission: Number(c02Emission.toFixed(2)) }))
    
    return({
        totalEmissionPerYear,
        emissionByCompany,
        sectorConsume,
        top5EmissionCompanies,
        averageConsumeByCompany: averageConsume
    });
}

module.exports = {processExcel}