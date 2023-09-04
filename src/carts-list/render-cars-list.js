import {getCarCart} from "@/carts-list/get-car-cart";
import {carsData} from "@/data/cars-data";

const sortByParam = (cars, param) => {
  const notSorted = [...cars]
  if (param.includes('price')) {
    return  notSorted.sort((a, b) => param === 'price-max' ? b.price - a.price : a.price - b.price)
  }

  if (param.includes('year')) {
    return notSorted.sort((a, b) => param === 'year-max' ? a.year - b.year : b.year - a.year)
  }

  if (param.includes('mileage')) {
    return notSorted.sort((a, b) => param === 'mileage-max' ? b.mileage - a.mileage : a.mileage - b.mileage)
  }
}

const getCarsListByFilter = (params) => {
  let cars = [...carsData];

  if (params.district) {
    cars = cars.filter((car) => car.district === params.district)
  }

  if (params.city) {
    cars = cars.filter((car) => car.city === params.city)
  }

  if (params.sort) {
    cars = sortByParam(cars, params.sort)
  }

  return cars;
}
export const renderCarsList = (filters) => {
  const listElement = document.getElementById('cars-list')
  listElement.innerHTML = '';

  const carsList = getCarsListByFilter(filters);

  carsList.forEach((car) => {
    listElement.insertAdjacentHTML('beforeend', getCarCart(car))
  })
}