import {filters} from "@/filters";
import {renderCarsList} from "@/carts-list/render-cars-list";
import {carsData} from "@/data/cars-data";
import {getSpinner} from "@/spinner/get-spinner";

export const initPageScripts = async () => {
  const listElement = document.getElementById('cars-list')
  listElement.innerHTML = getSpinner();
  try {
    carsData.data = await fetch('https://raw.githubusercontent.com/SergienkoNikita/test-repo-cars-list/main/api/cars.json').then(res => res.json())
  } finally {
    listElement.innerHTML = ''
  }

  const { citySelect, districtSelect, sortSelect } = filters();
  renderCarsList({
    district: districtSelect.value,
    city: citySelect.value,
    sort: sortSelect.value,
  });

  citySelect.onChange(
    () => renderCarsList({
      district: districtSelect.value,
      city: citySelect.value,
      sort: sortSelect.value,
    })
  )

  districtSelect.onChange(
    () => renderCarsList({
      district: districtSelect.value,
      city: citySelect.value,
      sort: sortSelect.value,
    })
  )
  sortSelect.onChange(
    () => renderCarsList({
      district: districtSelect.value,
      city: citySelect.value,
      sort: sortSelect.value,
    })
  )
}