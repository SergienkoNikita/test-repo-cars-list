import {carsData} from "@/data/cars-data";

export const districts = new Set(carsData.map((car) => {
  return car.district;
}))

export const getDistrictsOptions = () => {
  const options = [];

  districts.forEach((district) => {
    options.push({value: district, label: district})
  })

  return options;
}