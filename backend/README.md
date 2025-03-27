# Environmental Indicators via excel - Backend API

API for uploading and reading Excel and calculating environmental indicators

# Features

Extract data from an Excel file by upload.
Process the data and compute relevant indicators, such as:
• Total CO₂ emissions per year
• Average energy consumption per company
• Top 5 companies with the highest emissions
• Consume by sector

## Tech Stack

- Express.js
- JavaScript (ES6)
- Multer
- Node.js
- Swagger UI
- XLSX

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Code editor that runs node.js like VS Code

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/yourrepo.git

# Navigate to the project folder
cd yourrepo

# Install dependencies
npm install
```

### Run the server

```bash
npx nodemon index.js
---

> The server will be running at `http://localhost:3000`
---

## Available Endpoints

### Upload

POST /upload/spreadsheet
Uploads an Excel file with sustainability data. If a file with the same name already exists, it will be renamed automatically (e.g., `file (1).xlsx`).
---
### Indicators

GET /indicators/emission-per-year
GET /indicators/top-five-emission-companies
GET /indicators/average-consume-by-company
GET /indicators/total-sector-consume
---

## 📘 Swagger Documentation
Access the full documentation with live testing via:
---
http://localhost:3000/api-docs
---

## Notes

This project was built as a technical challenge and learning experience focused on backend, clean architecture, and RESTful API practices.