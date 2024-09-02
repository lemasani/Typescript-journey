// this makes tell typescript we know more about the type
const phone = <HTMLInputElement> document.getElementById('phone')  // this makes phone.value be known
// HTMlElement is a class in js
// HTMlInputelement

//phone.value this is not seen in typescript

phone.value