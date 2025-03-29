import UploadForm from "./components/UploadForm";
import Dashboard from "./pages/dashboard";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isReady, setIsReady] = useState(false);
  return (
    <div style={{ padding: "2rem", }}>
      <div style={{ display: "flex"}}>
        <h1>FullStack Challenge</h1>
        <UploadForm onUploadSuccess={() => setIsReady(true)} />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <div style={{ minHeight: "80vh" }}>
        <Dashboard isReady={isReady} />
      </div>
    </div>
  );
}

export default App;