import "./App.css";
import { ocr } from "llama-ocr";
import { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      // Process the file (e.g., send it to a server)
      console.log(selectedFile);
      const markdown = await ocr({
        filePath: selectedFile, // path to your image (soon PDF!)
        apiKey: process.env.REACT_APP_TOGETHER_API_KEY, // Together AI API key
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default App;
