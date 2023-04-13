import ShareIcon from 'assets/icons/Share';
import copy from 'assets/icons/socialIcons/copy.svg';
import copyCheck from 'assets/icons/socialIcons/copyCheck.svg';
import FacebookIcon from 'assets/icons/socialIcons/FacebookIcon';
import TelegramIcon from 'assets/icons/socialIcons/TelegramIcon';
import VkIcon from 'assets/icons/socialIcons/VkIcon';
import WhatsAppIcon from 'assets/icons/socialIcons/WhatsAppIcon';
import { SVGProps, useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import s from './styles.module.scss';
function Share(props: { link: string; btn: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation();

  async function copyLink() {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(props.link);
    }
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  // function clickOutside(ev: MouseEvent) {
  //   // console.log(ev);
  //   const target = ev.target as HTMLElement;
  //   // console.log(!target.offsetParent!.classList.contains(s.links_list));
  //   if (target !== null) {
  //     if (!target.offsetParent!.classList.contains(s.links_list)) {
  //       setIsOpen(false);
  //     } else {
  //       return;
  //     }
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('click', (ev) => clickOutside(ev));

  //   return () => document.removeEventListener('click', (ev) => clickOutside(ev));
  // }, []);

  // function btnHandler(ev: React.MouseEvent<HTMLButtonElement>) {
  //   ev.stopPropagation();
  //   document.querySelectorAll(`.${s.active}`).forEach((el) => el.classList.remove(s.active));
  //   document.querySelectorAll(`.${s.open}`).forEach((el) => el.classList.remove(s.open));
  //   setIsOpen((prev) => !prev);
  // }

  return (
    <div
      className={props.btn === 'share' ? s.share_block : s.shareIcon}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`${props.btn === 'share' ? s.btn : s.btnIcon} ${isOpen ? s.active : ''}`}>
        {props.btn === 'share' && t('share.title')}
        <ShareIcon className={`${s.share} ${isOpen ? s.active : ''}`} />
      </button>
      <ul
        className={`${s.links_list} ${props.btn === 'share' ? '' : s.linksIcon} ${isOpen ? s.open : ''}`}
        // onMouseLeave={() => setIsOpen(false)}
      >
        <li className={`${s.links_item} cop`}>
          <button onClick={copyLink}>
            <img src={isCopied ? copyCheck : copy} />
            <span className={isCopied ? s.copied : ''}>{isCopied ? t('share.result') : t('share.copy')}</span>
          </button>
        </li>
        <li className={s.links_item}>
          <Link to={`https://vk.com/share.php?url=${props.link}`} target="_blank">
            <VkIcon className={s.socialIcon} />
            <span>{t('share.vk')}</span>
          </Link>
        </li>
        <li className={s.links_item}>
          <Link to={`https://www.facebook.com/sharer/sharer.php?u=#${props.link}`} target="_blank">
            <FacebookIcon className={s.socialIcon} />
            <span>{t('share.fb')}</span>
          </Link>
        </li>
        <li className={s.links_item}>
          <Link to={`https://t.me/share/url?url=${props.link}`} target="_blank">
            <TelegramIcon className={s.socialIcon} />
            <span>{t('share.telegram')}</span>
          </Link>
        </li>
        <li className={s.links_item}>
          <Link to={`https://wa.me/?text=${props.link}`} target="_blank">
            <WhatsAppIcon className={s.socialIcon} />
            <span>{t('share.whatsapp')}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Share;
