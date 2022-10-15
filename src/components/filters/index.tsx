import { Checkbox } from '../ui/Checkbox'
import { Filter } from '../ui/Filter'
import s from './styles.module.scss'
import { filtersData, needsHelp } from './constants'
import { useState } from 'react'

export const Filters = () => {

  const [help, setHelp] = useState(needsHelp)
  
  const [data, setData] = useState(filtersData)

  const reset = () => {
    setHelp({...help, isChecked: false})
    setData(data.map(item => {
      item.data = item.data.map(el => {
        return {...el, isChecked: false}
      })
      return item
    }))
  }

  const handleCange = (name: string, value: string) => {
    if(name === 'help') {
      setHelp({...help, isChecked: !help.isChecked})
    } else {
      setData(data.map(item => {
        item.data = item.data.map(el => 
          el.name === name && el.value === value 
            ? {...el, isChecked: !el.isChecked} 
            : el
          )
        return item
      }))
    }
  }

  return (
    <div className={s.filters}>
      <Checkbox {...help} change={handleCange}/>
      {data.map((item, index) => 
      <Filter 
        key={index} 
        {...item}
        change={handleCange}
      />)}
      <button className={s.filters__btn} onClick={reset}>
        Сбросить настройки
      </button>
    </div>
  )
}