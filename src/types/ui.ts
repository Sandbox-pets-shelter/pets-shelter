// TODO: Всё что ниже примеры

import { ReactComponentElement, ReactElement, ReactSVG, ReactSVGElement } from "react"

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

export interface IBaseButton {
  variant: string,
  color: string,
  disabled?: boolean, 
  children?: any, 
  click?: () => void,
  startIcon?: any,
  endIcon?: any
}