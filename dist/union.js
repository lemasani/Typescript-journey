"use strict";
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kgs');
//# sourceMappingURL=union.js.map