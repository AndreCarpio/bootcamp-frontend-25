import { useState } from "react";
import "./Cinema.css";
import { SeatIcon } from "./SeatIcon";
import { Seat } from "./components/atoms/Seat";

// cinema using an useSate() in every seat
export const Cinema2 = ({ rows = 5, numSeats = 10 }) => {
  const [seats, setSeats] = useState(createSeats);

  function createSeats() {
    const newSeats = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < numSeats; j++) {
        row.push(<Seat key={`row${i}-column${j}`} />);
      }
      newSeats.push(row);
    }
    console.log(newSeats);
    return newSeats;
  }

  return (
    <>
      <div className="cinema">
        {seats.map((row, indexRow) => {
          return (
            <div key={indexRow} className="row">
              {row.map((seat) => {
                return seat;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
