const addressLat = 10.762622;
const addressLong = 106.660172;
const positionLat = 10.762000;
const positionLong = 106.660000;

const x = (addressLat - positionLat) * 111; 
const y = (addressLong - positionLong) * 111 * Math.cos((positionLat* Math.PI) / 180);

console.log( Math.sqrt(x * x + y * y));