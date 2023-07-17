import Link from "next/link";
import style from './SuccessFormMsg.module.scss'

export const SuccessFormMsg = () => (
	<div className={style.wrapper}>
		<p>Авторство сайта отправилось на модерацию.<br /> Если хотите обсудить вопросы пишите нам в telegram</p>
		<p><Link href="https://t.me/kotelov_com" target="_blank">@kotelov</Link></p>
	</div>
);
