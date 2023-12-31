import "./styles/index.scss";
import { BrowserRouter, Route, Routes, ScrollRestoration } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import OurValues from "./pages/OurValues.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
// import "@fontsource-variable/dosis";
// import "@fontsource/poppins";

function App() {
  // const imageFolder = "./img/page-header/";
  // const imageFileNames = [
  //   "our-values.jpg",
  //   "team.jpg",
  //   "team2.jpg",
  //   // Ajoutez d'autres noms de fichiers d'images ici
  // ];

  // imageFileNames.forEach((fileName) => {
  //   const img = new Image();
  //   img.src = `${imageFolder}${fileName}`;
  // });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence>
        <HelmetProvider>
          {/* Render the Navigation component */}
          <Navigation />
          <Helmet>
            <title>Micro Creche Pitaya : votre creche a Besancon</title>
            <link rel="icon" type="image/png" href="/img/logo.png" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <link rel="preload" as="image" href="./img/page-header/our-values.jpg" />
            <link rel="preload" as="image" href="./img/page-header/team.jpg" />
            <link rel="preload" as="image" href="./img/page-header/team2.jpg" />
          </Helmet>
          {/* Define routes using the Routes and Route components */}
          <Routes>
            {/* Route for the Home component */}
            <Route path="/" element={<Home />} />
            <Route path="/equipe" element={<Team />} />
            {/* Route for the 404 page */}
            <Route path="/nos-valeurs" element={<OurValues />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </HelmetProvider>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
