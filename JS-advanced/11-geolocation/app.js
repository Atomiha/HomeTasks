"use strict";

function getUserLocation(options = {}) {
    const { resolve, reject, promise } = Promise.withResolvers();
    if (!navigator.geolocation) {
        reject(new Error("Geolocation API не поддерживается браузером"));
        return promise;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
            });
        },
        (error) => {
            reject(error);
        },
        options,
    );
    return promise;
}

//     return new Promise((resolve, reject) => {
//         if (!navigator.geolocation) {
//             reject(new Error("Geolocation API не поддерживается браузером"));
//             return;
//         }

//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 resolve({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                     accuracy: position.coords.accuracy,
//                 });
//             },
//             (error) => {
//                 reject(error);
//             },
//             options,
//         );
//     });
// }
getUserLocation()
    .then((coords) => {
        console.log("Координаты:", coords);
    })
    .catch((err) => {
        console.error("Ошибка геолокации:", err.message);
    });
