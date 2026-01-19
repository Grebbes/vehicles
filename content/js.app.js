const initApp = () => {
  console.log("init app is running");
  loadvehicles();
};

const loadvehicles = async () => {
  console.log("Vehicles loading");
  const Vehicles = await fetch("http://localhost:3000/vehicles");

  if (Vehicles.ok) {
    const result = await Vehicles.json();
    console.log(result);

    result.forEach((Vehicle) => {
      console.log(Vehicle.manufacturer);
    });

    return;
  }
  console.error("hoppsan det gick lite fel");
};

document;
addEventListener("DOMContentLoaded", initApp);
