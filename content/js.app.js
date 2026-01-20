const initApp = async () => {
  console.log("init app is running");
  const data = await loadvehicles();
  showCars(data);
};

const loadvehicles = async () => {
  console.log("Vehicles loading");
  const Vehicles = await fetch("http://localhost:3000/vehicles");

  if (Vehicles.ok) {
    const result = await Vehicles.json();
    console.log(result);

    result.forEach((Vehicle) => {
      console.log(
        Vehicle.manufacturer,
        Vehicle.model,
        Vehicle.modelYear,
        Vehicle.mileage,
      );
    });
    return result;
  }
  console.error("hoppsan det gick lite fel");
};

const showCars = (vehiclesData) => {
  const button = document.getElementById("displaybutton");
  const display = document.querySelector(".cars");

  button.addEventListener("click", () => {
    if (display.innerHTML === "") {
      const result = vehiclesData;
      result.forEach(({ manufacturer, model, modelYear, mileage }) => {
        display.innerHTML += `<strong class="carsinfo">Car:</strong> <p class="carsinfo">${manufacturer}, ${model}, ${modelYear}, ${mileage}</p><br/>`;
        button.innerHTML = "Hide Cars";
      });
    } else {
      display.innerHTML = "";
      button.innerHTML = "Display Cars";
    }
  });
};

document;
addEventListener("DOMContentLoaded", initApp);

/* 

   SAKER SOM SKA GÖRAS TILL ONSDAG!!!


1. utöka json filen med 
   modelYear,
   mileage

2. uppdatera app.js
   skriv ut i console fönstret alla egenskapen

3. skapa en visualeisering i index.html som visar samma inmatning

4. pusha till github


*/
