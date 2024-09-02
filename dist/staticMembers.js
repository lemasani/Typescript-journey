"use strict";
class Ride {
    startRide() {
        Ride.activeRides++;
        console.log(`Ride started. Current active rides: ${Ride.activeRides}`);
    }
    stopRide() {
        Ride.activeRides--;
        console.log(`Ride stopped. Current active rides: ${Ride.activeRides}`);
    }
}
Ride.activeRides = 0;
const ride = new Ride();
ride.startRide(); // Ride started. Current active rides: 1
const ride2 = new Ride();
ride2.startRide(); // Ride started. Current active rides: 2
console.log(Ride.activeRides); // 1
console.log(Ride.activeRides); // 1
//# sourceMappingURL=staticMembers.js.map