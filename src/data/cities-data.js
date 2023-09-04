import {carsData} from "@/data/cars-data";

export const cities = new Set(carsData.data.map((car) => {
  return car.city;
}))

export const getCitiesOptions = () => {
  const options = [];

  cities.forEach((city) => {
    options.push({value: city, label: city})
  })

  return options;
}