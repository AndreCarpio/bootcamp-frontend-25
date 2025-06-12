import { useState } from "react";
import "./Cinema.css";
import { SeatIcon } from "./SeatIcon";

// cinema using  only an useState()
export const Cinema = ({ rows = 5, numSeats = 10 }) => {
  const [seats, setSeats] = useState(createSeats);

  function createSeats() {
    const newSeats = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < numSeats; j++) {
        row.push(false);
      }
      newSeats.push(row);
    }
    console.log(newSeats);
    return newSeats;
  }

  const reserveSeat = (seat, indexRow, indexColum) => {
    if (seat) {
      alert("This seat has already been reserved.");
    }
    setSeats((prev) => {
      let newSeats = structuredClone(prev);
      newSeats[indexRow][indexColum] = true;
      console.log("reserveSeat !!!!!!!!!!!!!!!");
      return newSeats;
    });
  };

  return (
    <>
      <div className="cinema">
        {seats.map((row, indexRow) => {
          return (
            <div key={indexRow} className="row">
              {row.map((seat, indexColum) => {
                return (
                  <div
                    key={` ${indexRow}-${indexColum}`}
                    className="seat"
                    onClick={() => {
                      reserveSeat(seat, indexRow, indexColum);
                    }}
                  >
                    <SeatIcon fill={seat ? "red" : "#00e0e0"}></SeatIcon>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
