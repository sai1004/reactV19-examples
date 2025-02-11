import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLazyRoutes from "./routes/AppLazyRoutes";

function App() {
    return (
        <main className="App">
            <BrowserRouter>
                <AppLazyRoutes />
            </BrowserRouter>
        </main>
    );
}

export default App;
