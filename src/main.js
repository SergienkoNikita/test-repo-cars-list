import {filters} from "@/filters";
import {renderCarsList} from "@/carts-list/render-cars-list";

export const initPageScripts = () => {
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