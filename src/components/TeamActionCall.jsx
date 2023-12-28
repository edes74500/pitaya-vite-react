import React from "react";
import { teamActionCallList } from "./Data/TeamActionCall";

const TeamActionCall = () => {
  return (
    <div className="action-call-container">
      {teamActionCallList.map((item, index) => {
        return (
          <div className="action-call-item" style={{ color: `${item.color}` }} key={index}>
            <div className="action-call-item-img">
              <span className="material-symbols-outlined">{item.icon}</span>
              {/* <i className={`${item.icon}`} /> Assuming item.icon is the class for the Font Awesome icon */}
            </div>
            <div className="action-call-item-text">
              <h3>{item.id}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamActionCall;
