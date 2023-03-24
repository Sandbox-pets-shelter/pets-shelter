import { SVGProps, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import s from './styles.module.scss';

import ShareIcon from '../../../assets/icons/Share';

import copy from '../../../assets/icons/socialIcons/copy.svg';
import facebook from '../../../assets/icons/socialIcons/Facebook.svg';
import instagram from '../../../assets/icons/socialIcons/Instagram.svg';
import telegram from '../../../assets/icons/socialIcons/Telegram.svg';
import vk from '../../../assets/icons/socialIcons/VK.svg';

function Share(props: { link: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation();

  async function copyLink() {
    await navigator.clipboard.writeText(props.link);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div className={s.share_block}>
      <button className={s.btn} onClick={() => setIsOpen((prev) => !prev)}>
        {t('share.title')}
        <ShareIcon className={s.share} />
      </button>
      <ul className={`${s.links_list} ${isOpen ? s.open : ''}`}>
        <li className={s.links_item}>
          <button onClick={copyLink}>
            <img src={copy} />
            {/* дизайн уведомления о копировании в процессе */}
            <span>{t('share.copy')}</span>
          </button>
        </li>
        <li className={s.links_item}>
          <Link to={`https://vk.com/share.php?url=${props.link}`} target="_blank">
            <img src={vk} />
            <span>{t('share.vk')}</span>
          </Link>
        </li>
        <li className={s.links_item}>
          <Link to={`https://www.facebook.com/sharer/sharer.php?u=#${props.link}`} target="_blank">
            <img src={facebook} />
            <span>{t('share.fb')}</span>
          </Link>
        </li>
        <li className={s.links_item}>
          <Link to={`https://t.me/share/url?url=${props.link}`} target="_blank">
            <img src={telegram} />
            <span>{t('share.telegram')}</span>
          </Link>
        </li>
        <li className={s.links_item}>
          <Link to="https://www.instagram.com/" target="_blank">
            <img src={instagram} />
            <span>{t('share.instagram')}</span>
          </Link>
        </li>
      </ul>
      {isCopied && <p className={s.copied}>{t('share.result')}</p>}
    </div>
  );
}

export default Share;
