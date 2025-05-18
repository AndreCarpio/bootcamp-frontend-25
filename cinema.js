class Cinema {
    seats;
    rows;
    columns;
    constructor(rows, numSeats) {
        this.rows = rows;
        this.columns = numSeats;
        this.seats = Array(rows).fill(null).map(() => {
            return Array(numSeats).fill(null).map(() => new Seat())
        });
    }

    reserveSeat(row, column) {
        if (row < this.rows && column < this.columns && row >= 0 && column >= 0) {
            if (this.seats[row][column].available) {
                this.seats[row][column].setAvailable(false)
                console.log(`=====> Seat [${row}] [${column}] reserved`)
            } else {
                console.log(`=====> This seat ([${row}][${column}]) has already been reserved by someone else.`)
            }
        } else {
            console.log("=====> Seat not found")
        }
    }

    showSeatStatus() {
        console.log("----------------------- Cinema Seats -----------------------\n")
        for (let row = 0; row < this.seats.length; row++) {
            let aux = "";
            for (let column = 0; column < this.seats[0].length; column++) {
                if (this.seats[row][column].available) {
                    aux += ("[ ]  ")
                } else {
                    aux += ("[x]  ")
                }
            }
            console.log(aux + "\n")
        }
    }
}

class Seat {
    available;

    constructor(available = true) {
        this.available = available;
    }

    setAvailable(available) {
        this.available = available;
    }
}

const cinema = new Cinema(5, 10);
cinema.showSeatStatus();
cinema.reserveSeat(3, 5);
cinema.showSeatStatus();
cinema.reserveSeat(3, 5);