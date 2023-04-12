import clip from 'assets/icons/clip.svg';
import emoji from 'assets/icons/emoji.svg';

import EmojiPicker from 'emoji-picker-react';

import { ChangeEvent, Dispatch, FC, MouseEvent, MouseEventHandler, SetStateAction, useRef, useState } from 'react';

import s from './styles.module.scss';

type TextareaProps = {
  onFileUpload: Dispatch<SetStateAction<any>> | Function;
  onChangeTextarea: Dispatch<SetStateAction<any>> | Function;
  disabled?: boolean;
};

type EmojiPickerEvent = {
  activeSkinTone: string;
  emoji: string;
  getImageUrl: Function;
  names: string[];
  unified: string;
  unifiedWithoutSkinTone: string;
};

const Textarea: FC<TextareaProps> = ({ onFileUpload, onChangeTextarea, disabled }) => {
  const [isEmojiShow, setEmojiShow] = useState(false);
  const [filesAmount, setFilesAmount] = useState(0);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e?.target?.files ? setFilesAmount(e.target.files.length) : setFilesAmount(0);
    onFileUpload(e);
  };

  const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeTextarea(e);
  };

  const handleWindowClick = (e: Event) => {
    if (!emojiPickerRef.current?.contains(e.target as Node)) {
      window.removeEventListener('click', handleWindowClick);
      setEmojiShow(false);
    }
  };

  const openEmojiPanel = (e: MouseEvent) => {
    if (!isEmojiShow && !disabled) {
      e.stopPropagation();
      setEmojiShow(true);
      window.addEventListener('click', handleWindowClick);
    } else {
      setEmojiShow(false);
    }
  };

  const printEmoji = (e: EmojiPickerEvent) => {
    if (textAreaRef.current) textAreaRef.current.value += e.emoji;
  };

  return (
    <div className={s.wrapper} style={{ filter: `grayscale(${disabled ? '1' : '0'})` }}>
      <form className={s.textareaWrapper} style={{ borderColor: isTextareaFocused ? '#6549fb' : '#A392FD' }}>
        <textarea
          onChange={changeTextareaHandler}
          onFocus={() => setIsTextareaFocused(true)}
          onBlur={() => setIsTextareaFocused(false)}
          autoComplete="off"
          ref={textAreaRef}
          disabled={disabled}
        />
        <div className={s.iconWrapper}>
          <span>{filesAmount !== 0 && `(${filesAmount})`}</span>
          <form>
            <label className="custom-file-upload">
              <img src={clip} />
              <input type="file" multiple onChange={changeInputHandler} disabled={disabled} />
            </label>
          </form>
          <div onClick={openEmojiPanel}>
            <img src={emoji} />
          </div>
        </div>
      </form>
      <div
        ref={emojiPickerRef}
        className={s.emojiPickerWrapper}
        style={{ opacity: isEmojiShow ? 100 : 0, zIndex: 100 }}
      >
        <EmojiPicker onEmojiClick={printEmoji} />
      </div>
    </div>
  );
};

export default Textarea;
