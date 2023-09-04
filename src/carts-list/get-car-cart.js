export const getCarCart = (carData) => {
  const priceClass = carData.price > 5000 ? 'text-red' : 'text-green'
  const mileageClass = carData.mileage > 150 ? 'text-red' : 'text-green'

  return `<div class="auto-cart">
        <h4 class="auto-title">
            ${carData.name} / ${carData.year}г / <span class="${mileageClass}">${carData.mileage}тыс.</span> / <span class="${priceClass}">${carData.price} $</span>
        </h4>
        <div class="auto-cart-pros">
            <p class="text-light-green">Плюсы:</p>
            <ul class="car-desc text-light-green">
                ${carData.pluses.map((plus) => `<li>${plus}</li>`).join('')}
            </ul>
    
            <p class="text-light-red">Минусы:</p>
            <ul class="car-desc text-light-red">
                ${carData.minuses.map((minus) => `<li>${minus}</li>`).join('')}
            </ul>
            </div>
        <div class="car-additional">
          <p class="flex"><span class="car-addtional-head">Цена: </span><span class="${priceClass} text-bold">${carData.price} $</span></p>
          <p class="flex"><span class="car-addtional-head">Пробег: </span><span class="${mileageClass} text-bold">${carData.mileage} тыс.</span></p>
          <p class="flex"><span class="car-addtional-head">Год: </span><span class="text-bold">${carData.year}г</span></p>
          <p class="flex"><span class="car-addtional-head">Город: </span><span class="text-bold">${carData.city}</span></p>
        </div>

        <a class="mt-10"
           href="${carData.link}"
           target="_blank">
            Ссылка - ${carData.link}
        </a>
    </div>`
}