import { BaseCheckbox } from '../ui/BaseCheckbox'
import s from './styles.module.scss'
import { filtersData } from '../../mocks/filter'
import { Fragment, useState } from 'react'
import { BaseButton } from '../ui/BaseButton'

export const Filters = () => {
  
  const [data, setData] = useState(filtersData)

  const reset = () => {
    setData(data.map(item => {
      item.data = item.data.map(el => {
        return {...el, isChecked: false}
      })
      return item
    }))
  }

  const handleChange = (name: string, value: string) => {
      setData(data.map(item => {
        item.data = item.data.map(el => 
          el.name === name && el.value === value 
            ? {...el, isChecked: !el.isChecked} 
            : el
          )
        return item
      }))
  }


  return (
    <div className={s.filters}>

      {data.map((item, index) => (
        <Fragment key={index}>
          {item.title && <div className={s.filters__title}> {item.title} </div> }
          {item.data.map((el, index) => (
            <BaseCheckbox 
              key={`${el.name}-${index}`}
              name={el.name} 
              content={el.content} 
              isChecked={el.isChecked}
              value={el.value} 
              change={handleChange}
            />
          ))}
        </Fragment>))
      }

      <BaseButton 
        variant='filled' 
        color='primary' 
        click={reset}
      >
        Сбросить настройки
      </BaseButton>

    </div>
  )
}