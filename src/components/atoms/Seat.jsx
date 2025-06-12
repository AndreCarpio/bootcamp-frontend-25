import { useState } from "react";
import { SeatIcon } from "../../SeatIcon";

export const Seat = () => {
  const [available, seatAvailable] = useState(true);

  const reserveSeat = () => {
    if (!available) {
      alert("This seat has already been reserved.");
    }
    seatAvailable(false);
  };

  return (
    <div
      className="seat"
      onClick={() => {
        reserveSeat();
      }}
    >
      <SeatIcon fill={available ? "#00e0e0" : "red"}></SeatIcon>
    </div>
  );
};
