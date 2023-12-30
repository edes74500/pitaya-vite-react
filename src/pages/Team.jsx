import React from "react";
import PageHeader from "../components/PageHeader";
import TeamActionCall from "../components/TeamActionCall";
import TeamPolaroid from "../components/TeamPolaroid";
import TextContent from "../components/TextContent";
import PageTransition from "../components/layout/PageTransition";

const Team = () => {
  return (
    <PageTransition>
      <div
        className="team-page-content"
        // initial={pageTransition.out}
        // animate={pageTransition.in}
        // exit={pageTransition.out}
        // transition={pageTransition.transition}
        // // variants={pageTransition}
      >
        <PageHeader page="team" img="team.jpg" titleh2="Notre equipe" titleh3="Créer une dynamique d'équipe dans laquelle chacun se retrouve" />
        <TextContent
          title={`Une pluridisciplinarité au service de votre enfant`}
          p={`Nos équipes sont composées de personnes ayant développé une expérience dans l’accueil des jeunes enfants.

La plupart de nos personnels ont une expérience dans l’accueil individuel qui traduit une capacité à accompagner votre enfant de manière individualisée, c’est bien là l’essence de notre projet.`}
          // img={"./img/bg/team.jpg"}
        />
        <TeamPolaroid />
        <TextContent
          title={`Une équipe investie, un projet solide`}
          p={
            <>
              Notre équipe est constituée de 4 professionnelles spécialisées de la petite enfance, diplomées d'état, pour une complémentarité
              pertinente au service de l'enfant et sa famille <br />
              Réunions d'équipe : prendre le temps de réfléchir en amont, d'échanger les idées, de penser des projets Analyse de la pratique. <br />
              Lectures-débats sur des articles et livres pédagogiques : harmoniser nos pratiques
            </>
          }
          img={"./img/2.jpg"}
          reverseImg
        />
        <TeamActionCall />
      </div>
    </PageTransition>
  );
};

export default Team;
