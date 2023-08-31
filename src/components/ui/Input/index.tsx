import EyeIcon from 'assets/icons/Eye';
import SearchIcon from 'assets/icons/footer/Search';
import countrycodes from 'data/countrycodes.json';
import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';

import s from './styles.module.scss';

type Props = {
  onChange: (str: string) => void;
  label?: string;
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  width?: string;
};

const InputField = ({ onChange, type, name, label, placeholder, value = '', disabled, required }: Props) => {
  const [telValue, setTelValue] = useState('');
  const inputCard = useRef<HTMLInputElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('KZ');
  const [searchCountry, setSearchCountry] = useState('');
  const FLAG = `https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/${selectedOption.toLowerCase()}.svg`;

  const [passwordShown, setPasswordShown] = useState(true);

  const getNumbersInputValue = (str: string) => {
    return str.replace(/\D/g, '');
  };

  const handlePhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && getNumbersInputValue(input.value).length === 1) {
      setTelValue('');
    }
  };

  const handleSetSelectedCountry = (code: string, dial_code: string) => {
    onChange(dial_code + telValue)
    setSelectedOption(code)
  }

  const handlePhoneInput = (event: ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;
    const inputNumbersValue = getNumbersInputValue(input);
    let formattedInputValue = '';

    if (!inputNumbersValue) {
      return (input = '');
    }

    if (inputNumbersValue.length > 0) {
      formattedInputValue += `(${inputNumbersValue.substring(0, 3)}`;
    }

    if (inputNumbersValue.length > 3) {
      formattedInputValue += `) - ${inputNumbersValue.substring(3, 6)}`;
    }

    if (inputNumbersValue.length > 6) {
      formattedInputValue += `-${inputNumbersValue.substring(6, 10)}`;
    }

    setTelValue(formattedInputValue);
    onChange(countrycodes.filter(country => country.code === selectedOption)[0].dial_code + formattedInputValue);
  };

  if (type !== 'search' && type !== 'number' && type !== 'tel') {
    return (
      <div>
        <div style={{ marginBottom: '4px' }}>
          <label htmlFor={name}>
            {label}
            <span style={{ color: 'red' }}> {required && '*'}</span>
          </label>
        </div>
        <div className={`${s.wrapper} ${value !== '' && s.active} ${disabled && s.disabled}`}>
          <input
            onChange={(event) => onChange(event.target.value)}
            type={`${type === 'password' ? (passwordShown ? 'password' : 'text') : 'text'}`}
            id={name}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={value}
          />
          {type === 'password' && (
            <EyeIcon
              onClick={() => setPasswordShown(!passwordShown)}
              passwordShown={passwordShown}
              className={s.icon}
              active={value !== '' && true}
            />
          )}
        </div>
      </div>
    );
  } else if (type === 'tel') {
    return (
      <div>
        <div style={{ marginBottom: '4px' }}>
          <label htmlFor={name}>
            {label}
            <span style={{ color: 'red' }}> {required && '*'}</span>
          </label>
        </div>
        <div className={`${s.wrapper} ${value !== '' && s.active} ${disabled && s.disabled}`}>
          <div className={`${disabled && s.tel_title_disabled} ${s.tel_title}`}>
            {selectedOption && (
              <img
                className={`${disabled && s.flag_disabled} ${s.flag} ${selectedOption === 'KZ' && s.flag_kz}`}
                src={FLAG}
              />
            )}
            {countrycodes.filter((country) => country.code === selectedOption)[0].dial_code}
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className={`arrow ${disabled && 'arrow-disabled'} ${menuOpen ? 'up' : 'down'}`}
            ></span>
          </div>
          {menuOpen && (
            <div className={s.menu}>
              <input
                className={s.searchCountry}
                value={searchCountry}
                placeholder="Поиск по странам"
                type="text"
                onChange={(e) => setSearchCountry(e.target.value)}
              />
              {countrycodes
                .filter((cntry) => cntry.name.toLocaleLowerCase().startsWith(searchCountry.toLowerCase()))
                .map((country) => (
                  <div
                    className={`${selectedOption === country.code ? s.selected_item : s.menu_item}`}
                    key={country.name}
                    onClick={() => handleSetSelectedCountry(country.code, country.dial_code)}
                  >
                    {country.name} {country.dial_code}
                  </div>
                ))}
            </div>
          )}
          <div className={`${s.divider} ${disabled && s.divider_disabled}`}></div>
          <input
            className={`${!disabled && s.inputnum}`}
            onChange={handlePhoneInput}
            onKeyDown={handlePhoneKeyDown}
            type={type}
            id={name}
            name={name}
            ref={inputCard}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={telValue}
          />
        </div>
      </div>
    );
  } else if (type === 'number') {
    return (
      <div className={s.num_wrapper}>
        <div>
          <label htmlFor={name}>
            {label}
            <span style={{ color: 'red' }}> {required && '*'}</span>
          </label>
        </div>
        <div className={`${s.wrapper} ${s.input_num} ${value !== '' && s.active} ${disabled && s.disabled}`}>
          <div
            className={`${s.button} ${disabled && s.button_disabled}`}
            onClick={() => onChange(`${parseInt(value) - 1}`.slice(0, 4))}
          >
            <span className={`arrow arrow-active down ${disabled && 'arrow-disabled'}`}></span>
          </div>
          <input
            onChange={(event) => onChange(event.target.value.slice(0, 4))}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={value}
          />
          <div
            className={`${s.button} ${disabled && s.button_disabled} ${s.plus}`}
            onClick={() => onChange(`${parseInt(value) + 1}`.slice(0, 4))}
          >
            <span className={`arrow arrow-active up ${disabled && 'arrow-disabled'}`}></span>
          </div>
        </div>
      </div>
    );
  } else if (type === 'search') {
    return (
      <div className={`${s.wrapper} ${s.withIcon} ${value !== '' && s.active}`}>
        <input
          onChange={(event) => onChange(event.target.value)}
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
        />
        <SearchIcon className={s.icon} active={value !== '' && true} />
      </div>
    );
  }
  return null;
};

export default InputField;
