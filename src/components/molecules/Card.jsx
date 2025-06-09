import React from "react";
import Divine from "../../assets/divine.svg";
import "./Card.css";
import Star from "../../assets/star.svg";
export const Card = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="cardName">
          <p>Obelisk the Tormentor</p>
          <img src={Divine} />
        </div>
        <div className="cardStars">
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
        </div>
        <div className="cardImage"></div>
        <div className="cardInformation">
          <div className="cardDescription">
            <p>
              <b>[Divine-Beast]</b>
            </p>
            <p>
              Requires 3 Tributes to Normal Summon (cannot be Normal Set). This
              card's Normal Summon cannot be negated. When Normal Summoned,
              cards and effects cannot be activated. Neither player can target
              this card with card effects. Once per turn, during the End Phase,
              if this card was Special Summoned: Send it to the GY. You can
              Tribute 2 monsters; destroy all monsters your opponent controls.
              This card cannot declare an attack the turn this effect is
              activated.
            </p>
          </div>
          <div className="cardAttack">
            <p>
              <b>ATK/4000 DEF/4000</b>
            </p>
          </div>
        </div>
      </div>
      <div className="texture"></div>
    </div>
  );
};
