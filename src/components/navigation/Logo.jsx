// // import React from "react";
import { NavLink } from "react-router-dom";

// const Logo = ({ navFixed, onMobile }) => {
//   return (
//     <div className="logo-container">
//       <div className="logo-text-container">
//         <NavLink to="/">
//           <p>Micro Creche</p>
//           <h2>PITAYA</h2>
//         </NavLink>
//       </div>
//       <div className={`logo-img-container ${navFixed && !onMobile && "on-scroll"}`}>
//         {onMobile ? (
//           <img src="./img/logo2.png" alt="pitaya-logo2" />
//         ) : (
//           <NavLink to="/">
//             <img src="./img/logo2.png" alt="pitaya-logo2" />
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Logo;

// import React from "react";

const Logo = ({ onMobile }) => {
  return (
    <div className="logo-container">
      <div className="logo-text-container">
        <p>Micro Creche</p>
        <h2>PITAYA</h2>
      </div>
      <div className={`logo-img-container`}>
        <NavLink to="/" className={`logo-img`}>
          <img src="./img/logo2.png" alt="pitaya-logo2" />
        </NavLink>
      </div>
      {/* </NavLink> */}
    </div>
  );
};

export default Logo;

// const Logo = ({ onMobile }) => {
//   return (
//     <div className="logo-container">
//       <div className="logo-text-container">
//         <p>Micro Crèche</p>
//         <h2>PITAYA</h2>
//       </div>
//       <div className={`logo-img-container`}>
//         <NavLink to="/" className={`logo-img`}>
//           <img src="./img/logo2.png" alt="pitaya-logo2" />
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Logo;
