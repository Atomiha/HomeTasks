const addressLat = 5;
const addressLong = 4;
const positionLat = 2;
const positionLong = 0;

const distanceLat = (addressLat - positionLat) ** 2;
const distanceLong = (addressLong - positionLong) ** 2;

const distance = (distanceLat + distanceLong) ** 0.5;

console.log(distance);
