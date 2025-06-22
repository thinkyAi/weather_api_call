/**
 * Exercise 1: Simulating a Weather App API Call
 */


const fetchWeather = function(city) {
    return new Promise((resolve, reject) => {
        if(Math.random() < 0.5) reject(new Error("Timeout!"));
        const delay = Math.random().toFixed(2) * 1000
        setTimeout(() => resolve({city, temperature: +(10 + Math.random() * 20).toFixed(1), delay}), delay)
    })
}

const cities = ["Lagos", "London", "Tokyo"];
const getCities = cities.map(city => fetchWeather(city));

Promise.all(getCities)
    .then(results => results.forEach(result => console.log(result)))
    .catch(error => console.log(error.message))


