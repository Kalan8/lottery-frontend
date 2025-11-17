import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerRegistrationPage from "./pages/PlayerRegistrationPage";
import PlayerListPage from "./pages/PlayerListPage";


function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerRegistrationPage />} />
          <Route path="/management" element={<PlayerListPage />} />
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </main>
  );
}
export default App;