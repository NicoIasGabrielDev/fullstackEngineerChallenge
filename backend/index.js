const cors = require("cors");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");


//Initializing backend especification
const app = express();
const PORT = 3000;

//Using cors to suport integrations
app.use(cors());

//Routes
const uploadRoutes = require('./src/routes/upload.routes');
const indicatorsRoutes = require('./src/routes/indicators.routes');
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/indicators', indicatorsRoutes);
app.use('/upload', uploadRoutes);


//Initialize
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
