import { useEffect, useState } from "react";
import { RandomColorProvider } from "../../data/RandomColorProvider";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MovingDiv = ({ position }) => {
  const dispatch = useDispatch();
  const [colorString, setColorString] = useState("");

  const headerColorRGBA = useSelector((state) => state.headerColorRGBA); //check l'etat

  // Utiliser useEffect pour afficher la valeur dans la console lorsqu'elle change
  useEffect(() => {
    if (position === "header") {
      console.log("La valeur mise à jour est:", headerColorRGBA);
    }
  }, [headerColorRGBA]);

  useEffect(() => {
    if (position === "header") {
      dispatch({ type: "MAJ_VALEUR", payload: colorString });
    }
  }, [colorString, dispatch]);

  useEffect(() => {
    setColorString(RandomColorProvider());
  }, []);

  return (
    <div>
      <div className={`${position}-span-container`}>
        <div className={`${position}-span`} style={{ backgroundColor: colorString }}></div>
      </div>
    </div>
  );
};

export default MovingDiv;
