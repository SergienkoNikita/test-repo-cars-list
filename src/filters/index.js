import {SelectFilter} from "./filter";
import {sortOptions} from "@/filters/constants";
import {getDistrictsOptions} from "@/data/districts-data";
import {getCitiesOptions} from "@/data/cities-data";

export const filters = () => {
  const districtSelect = new SelectFilter({
    id: 'district-select',
    options: getDistrictsOptions(),
  })

  const citySelect = new SelectFilter({
    id: 'city-select',
    options: getCitiesOptions(),
  })

  const sortSelect = new SelectFilter({
    id: 'sort-select',
    options: sortOptions,
  })

  return {
    districtSelect,
    citySelect,
    sortSelect,
  }
}