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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
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
