import {carsData} from "@/data/cars-data";


export const getDistrictsOptions = () => {
  const districts = new Set(carsData.data.map((car) => {
    return car.district;
  }))
  const options = [];

  districts.forEach((district) => {
    options.push({value: district, label: district})
  })

  return options;
}