"use strict";
class Ride {
    startRide() {
        Ride._activeRides++;
        console.log(`Ride started. Current active rides: ${Ride._activeRides}`);
    }
    stopRide() {
        Ride._activeRides--;
        console.log(`Ride stopped. Current active rides: ${Ride._activeRides}`);
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride = new Ride();
ride.startRide(); // Ride started. Current active rides: 1
const ride2 = new Ride();
ride2.startRide(); // Ride started. Current active rides: 2
console.log(Ride.activeRides); // 1
console.log(Ride.activeRides); // 1
//# sourceMappingURL=staticMembers.js.map