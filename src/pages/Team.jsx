// import React from "react";

import PageHeader from "../components/PageHeader";
import TeamActionCall from "../components/TeamActionCall";

const Team = () => {
  return (
    <div className="team-container page-container">
      <div className="team-header header">
        <PageHeader img="team.jpg" titleh2="Notre equipe" titleh3="Créer une dynamique d'équipe dans laquelle chacun se retrouve" />
      </div>
      <div className="content-container">
        <div className="introduction-container">
          <h2>Une équipe investie, un projet solide</h2>
          <span></span>
          <p>
            Notre équipe est constituée de 4 professionnelles spécialisées de la petite enfance, diplomées d'état, pour une complémentarité pertinente
            au service de l'enfant et sa famille <br />
            Réunions d'équipe : prendre le temps de réfléchir en amont, d'échanger les idées, de penser des projets Analyse de la pratique. <br />
            Lectures-débats sur des articles et livres pédagogiques : harmoniser nos pratiques
          </p>
        </div>

        <TeamActionCall />
      </div>
    </div>
  );
};

export default Team;
