// import React from "react";

import PageHeader from "../components/PageHeader";

const Team = () => {
  return (
    <div className="team-container page-container">
      <div className="team-header header">
        <PageHeader img="team.jpg" titleh2="Notre equipe :" titleh3="Créer une dynamique d'équipe dans laquelle chacun se retrouve" />
      </div>
      <div className="content-container">
        <p>
          Notre équipe est constituée de 4 professionnelles spécialisées de la petite enfance, diplomées d'état, pour une complémentarité pertinente
          au service de l'enfant et sa famille Réunions d'équipe : prendre le temps de réfléchir en amont, d'échanger les idées, de penser des projets
          Analyse de la pratique. Lectures-débats sur des articles et livres pédagogiques : harmoniser nos pratiques La philosophie de la micro-crèche
          Pitaya : Une qualité de vie au travail, pour s'épanouir professionnellement des ateliers et formations pour monter en compétences des prises
          de responsabilités pour être impliqué dans la réussite de la micro-crèche Des projets à créer !paa
        </p>
      </div>
    </div>
  );
};

export default Team;
