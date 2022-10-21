export interface IBaseDropdown {
  value: string
  label: string
  code: string
}

export interface ICheckbox {
  name: string,
  content: string,
  isChecked: boolean,
  change?: (name: string, value: string) => void,
  value: string
}

export interface ILink {
  id: number,
  text?: string,
  src?: string
}

export interface IFooterText {
  id: number,
  class: string,
  title?: string,
  custom?: boolean,
  modificator?: boolean,
  subtitleLinks: Array<ILink>
}

export interface IBaseButton {
  variant: string,
  color: string,
  disabled?: boolean,
  children?: any,
  click?: () => void,
  startIcon: string,
  endIcon: string
}