import savePet from 'assets/images/forms/save-pet.svg';
import InputField from 'components/ui/Input';
import { RemoveScroll } from 'react-remove-scroll';

import s from './styles.module.scss';

const FindPetForm = () => {
  const onInputChange = (str: string) => console.log(str);

  return (
    <RemoveScroll enabled style={{ position: 'absolute', left: 0 }}>
      <div className={s.formСontainer}>
        <h1>Вы нашли бездомного питомца?</h1>
        <p className={s.formСontainer__contacts}>
          Оставьте свои данные в форме ниже или позвоните нам по номеру: <strong>+7 (212) - 998–13–13 </strong> <br />
          Часы приёма звонков: <strong>10:00–22:00</strong>
        </p>
        <div className={s.contactsWithPicture}>
          <div className={s.contactsWithPicture__contacts}>
            <InputField onChange={onInputChange} placeholder="Введите имя" label="Имя" type="text" name="Имя" />
            <InputField onChange={onInputChange} placeholder="Введите имя" label="Имя" type="text" name="Имя" />
            <InputField onChange={onInputChange} placeholder="Введите имя" label="Имя" type="text" name="Имя" />
          </div>
          <img src={savePet} alt="save-pet" />
        </div>
      </div>
    </RemoveScroll>
  );
};

export default FindPetForm;
