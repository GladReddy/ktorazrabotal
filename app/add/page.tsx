import { Metadata } from 'next';
import { FormAdd } from '@/components';
import { SITE_NAME, TITLE_SEP } from '@/utils/constants';

import './page-style.scss';

export default function AddPage() {
	return (
		<div className="container">
			<article className="node add-node">
				<header className="node__header">
					<h1>Добавление авторства сайта</h1>
				</header>
				<section className="node__content clearfix">
					<FormAdd />
				</section>
			</article>
		</div>
	);
}

export const metadata: Metadata = {
	title: `Добавление авторства сайта ${TITLE_SEP} ${SITE_NAME}`,
};
