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

  const teamList = [
    {
      id: 1,
      name: "Delphine",
      formation: "Éducatrice de Jeunes Enfants",
      image: "./img/equipe/delphine.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis.",
      passion: "Delphine is a team of 3000 students from Delhi, Ind",
    },
    {
      id: 2,
      name: "Astrid",
      formation: "Auxiliaire de puériculture",
      image: "./img/equipe/astrid.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis.",
      passion: "Delphine is a team of 3000 students from Delhi, Ind",
    },
    {
      id: 3,
      name: "Maeva",
      formation: "Éducatrice de Jeunes Enfants",
      image: "./img/equipe/maeva.jpg",
      description:
        "Lorem ipsum das nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis.",
      passion: "Delphine is a team of 3000 students from Delhi, Ind",
    },
    {
      id: 4,
      name: "Lola",
      formation: "Psychomotricienne",
      image: "./img/equipe/lola.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. c. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis.",
      passion: "Delphine is a team of 3000 students from Delhi, Ind",
    },
    {
      id: 5,
      name: "Camille",
      formation: "Accompagnante éducatrice petite enfance (AEPE)",
      image: "./img/equipe/camille.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenet, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.",
      passion: "Delphine is a team of 3000 students from Delhi, Ind",
    },
    {
      id: 6,
      name: "Clémence",
      formation: "Accompagnante éducatrice petite enfance (AEPE)",
      image: "./img/equipe/clemence.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. bero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis.",
      passion: "Delphine is a team of 3000 students from Delhi, Ind",
    },
  ];

  return (
    <PageLayout page="team" titleh2="Notre equipe" titleh3="Créer une dynamique d'équipe dans laquelle chacun se retrouve">
      <TextContent
        title={`Une pluridisciplinarité au service de votre enfant`}
        p={`Nos équipes sont composées de personnes ayant développé une expérience dans l’accueil des jeunes enfants.

    La plupart de nos personnels ont une expérience dans l’accueil individuel qui traduit une capacité à accompagner votre enfant de manière individualisée, c’est bien là l’essence de notre projet.`}
      />
      <TeamPolaroid list={teamList} />
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
