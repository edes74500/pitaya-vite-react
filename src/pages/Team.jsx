import React from "react";
import TeamObjectif from "../components/TeamObjectifs";
import TeamPolaroid from "../components/TeamPolaroid";
import TextContent from "../components/TextContent";

import PageLayout from "../layout/PageLayout";

const Team = () => {
  const teamObjectivesList = [
    {
      id: "01.",
      icon: "mood",
      content: `Une qualité de vie au travail, pour s'épanouir professionnellement`,
      color: "#5692C0",
    },
    {
      id: "02.",
      icon: "school",
      content: `des ateliers et formations pour monter en compétences`,
      color: "#61BBA0",
    },
    {
      id: "03.",
      icon: "diversity_1",
      content: `des prises de responsabilités pour être impliqué dans la réussite de la micro-crèche`,
      color: "#FDD33A",
    },
    {
      id: "04.",
      icon: "tactic",
      content: `Des projets à créer !`,
      color: "#E3998D",
    },
  ];

  return (
    <PageLayout page="team" titleh2="Notre equipe" titleh3="Créer une dynamique d'équipe dans laquelle chacun se retrouve">
      <TextContent
        title={`Une pluridisciplinarité au service de votre enfant`}
        p={`Nos équipes sont composées de personnes ayant développé une expérience dans l’accueil des jeunes enfants.

    La plupart de nos personnels ont une expérience dans l’accueil individuel qui traduit une capacité à accompagner votre enfant de manière individualisée, c’est bien là l’essence de notre projet.`}
      />
      <TeamPolaroid />
      <TextContent
        title={`Une équipe investie, un projet solide`}
        p={
          <>
            Notre équipe est constituée de 4 professionnelles spécialisées de la petite enfance, diplomées d'état, pour une complémentarité pertinente
            au service de l'enfant et sa famille <br />
            Réunions d'équipe : prendre le temps de réfléchir en amont, d'échanger les idées, de penser des projets Analyse de la pratique. <br />
            Lectures-débats sur des articles et livres pédagogiques : harmoniser nos pratiques
          </>
        }
        img={"./img/2.jpg"}
        reverseImg
      />
      <TeamObjectif list={teamObjectivesList} />
    </PageLayout>
  );
};

export default Team;
