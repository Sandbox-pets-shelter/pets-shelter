import { IFilter} from '../../../types/ui'
import s from './styles.module.scss'
import { Checkbox } from '../Checkbox'

export const Filter = (props: IFilter) => {

  const {title, data, change} = props

  return (
    <div className={s.filter}>
      <div className={s.filter__title}> 
        {title} 
      </div>
      {data.map((item, index) => (
        <div key={index} className={s.filter__item}>
          <Checkbox 
            name={item.name} 
            content={item.content} 
            isChecked={item.isChecked}
            value={item.value} 
            change={change}
          />
        </div>
      ))}
    </div>
  )
}
