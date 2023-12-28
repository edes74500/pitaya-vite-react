import "./styles/index.scss";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import { Helmet } from "react-helmet";
// import "@fontsource-variable/dosis";
// import "@fontsource/poppins";

function App() {
  return (
    <BrowserRouter>
      {/* Render the Navigation component */}
      <Navigation />
      <Helmet>
        <title>Micro Creche Pitaya : votre creche a Besancon</title>
        <link rel="icon" type="image/png" href="/img/logo.png" />
      </Helmet>
      {/* Define routes using the Routes and Route components */}
      <Routes>
        {/* Route for the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="/equipe" element={<Team />} />
        {/* Route for the 404 page */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
