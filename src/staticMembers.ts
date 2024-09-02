

class Ride {
    private static _activeRides: number = 0;

    startRide(): void {
        Ride._activeRides++;
        console.log(`Ride started. Current active rides: ${Ride._activeRides}`);
    }

    stopRide(): void {
        Ride._activeRides--;
        console.log(`Ride stopped. Current active rides: ${Ride._activeRides}`);
    }

    static get activeRides(): number {
        return  Ride._activeRides 
    }
}

const ride = new Ride();
ride.startRide(); // Ride started. Current active rides: 1

const ride2 = new Ride();
ride2.startRide(); // Ride started. Current active rides: 2

console.log(Ride.activeRides); // 1
console.log(Ride.activeRides); // 1