import Textarea from 'components/ui/Textarea';
import EmojiPicker from 'emoji-picker-react';
import { ChangeEvent } from 'react';

export const About = () => {
  const printTextarea = (e: any) => console.log(e);
  const printInput = (e: ChangeEvent<HTMLInputElement>) => console.log(e);

  return (
    <div>
      About
      <Textarea onFileUpload={printInput} onChangeTextarea={printTextarea} />
    </div>
  );
};
