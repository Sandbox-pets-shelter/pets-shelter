// TODO: Всё что ниже примеры

export interface IBaseDropdown {
  value: string
  label: string
  selectedItem?: boolean
}

export interface ICheckbox {
  name: string,
  content: string,
  isChecked: boolean,
  change?: (name: string, value: string) => void,
  value: string
}
