import React from "react";
import PageHeader from "../components/PageHeader";
import TeamActionCall from "../components/TeamActionCall";
import TeamPolaroid from "../components/TeamPolaroid";
import TextContent from "../components/TextContent";

const OurValues = () => {
  return (
    <div className="values-page-content">
      <PageHeader page="our-value" img="our-values.png" titleh2="Nos Valeurs" titleh3="Être... Une base pour se construire" />
      <TextContent
        title={` Le projet pédagogique Pitaya`}
        p={
          <>
            Importance du lien à la nature : Sorties régulières Matériaux naturels Explorations et découvertes quotidiennes dans notre grand extérieur
            et jardin potager rythme des saisons dans le quotidien Sensibilisation à l'écologie (recyclage, compost, réduction des déchets, pas de
            plastique ...) Adulte “support”, “phare” : Grâce à l'observation-projet qui permet une adaptation au rythme de l'enfant, en privilégiant
            des soins individualisés et une adaptation de nos réponses dans le lien. Présence sécurisante et non interventionniste, accompagnement et
            propositions sans imposer (sauf règles de sécurité et de respect de l'autre). Réflexions d'équipe pour provoquer et enrichir le jeu libre
            de l'enfant Adulte confiant en la capacité de l'enfant, bienveillant dans sa présence et attentif à ne pas être dans des douces violences
            S’envoler : la possibilité de se découvrir Enfant acteur : motricité libre et reconnaissance du besoin de mouvement aménagement de
            l'espace pensé pour se sentir en sécurité dans ses découvertes rythmes respectés pour une meilleure connaissance de soi avoir le temps
            d'observer, de découvrir sans être interrompus par le rythme de la collectivité importance du jeu libre, pensé en amont et en équipe :
            quels jeux, quels aménagements pour une circulation libre et sécure Enfant interprète-créateur : importance de l'art pour grandir et se
            construire, développer l'expression artistique, corporelle, sensibiliser à différents supports (musique, yoga, danse, arts manuels...)
            accès aux activités librement, en fonction des capacités de chaque enfant développement de l'imaginaire et des relations sociales par le
            jeu libre
          </>
        }
      />

      <TextContent
        title={`Une micro-crèche sociale`}
        p={
          <>
            Mixité et inclusion axé sur l'égalité des chances : mise en place de partenariats avec les acteurs locaux du social et du handicap soutien
            à la parentalité, selon les besoins des familles et nos observations de l'enfant équipe pluri-disciplinaire pour un accueil prenant en
            compte le contexte socio-culturel de l'enfant Tarifs adaptés aux familles en fonction des revenus et barèmes CAF pour le droit au CMG
            Micro-crèche avec un projet inclusif et social engagé qui lutte à son niveau pour l’égalité des chances et la mixité : 20% des places
            réservées à ce type d’accueil, tarif social en projet, partenariats
          </>
        }
        img={"./img/4.jpg"}
      />
      <TextContent
        title={`Une communauté d'apprentissage`}
        p={
          <>
            Création d'une collectivité de parents : un lien de confiance pour une connaissance commune, Ateliers parents, Formations autour de thèmes
            de la petite enfance, ouverts à tous Accueil de stagiaires Possibilité de participer à des temps du quotidien Biblio/prêt de livres Espace
            dons ou échange ou prix libre : habits, jeux, puériculture... Petits déjeuner familles Fête de la petite enfance Dynamique de quartier Et
            d'autres projets en cours d'élaboration...!
          </>
        }
      />
    </div>
  );
};

export default OurValues;
