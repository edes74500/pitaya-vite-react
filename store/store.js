// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  headerColorRGBA: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAJ_VALEUR":
      return { ...state, headerColorRGBA: action.payload };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer,
});

//IMPORTANT : Recuperer sur un composant de l'application
//import { useSelector } from "react-redux";
//const headerColorRGBA = useSelector((state) => state.headerColorRGBA);
