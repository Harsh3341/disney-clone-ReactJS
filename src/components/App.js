import Login from "./Login";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./Header";

function App() {
    return (
        <div>
        <Header/>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App;