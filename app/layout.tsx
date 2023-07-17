import { AppHeader, AppFooter, AppWrapper } from '@/components';
import type { Metadata } from 'next';

import '@/styles/style.scss';
import { IBM_Plex_Sans } from 'next/font/google';
import { SITE_DESCR, SITE_NAME, TITLE_SEP } from '@/utils/constants';
const ibmFont = IBM_Plex_Sans({
	weight: ['400', '600'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-ibm',
});

export const metadata: Metadata = {
	title: `${SITE_NAME} ${TITLE_SEP} ${SITE_DESCR}`,
	description: SITE_DESCR,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={ibmFont.variable}>
				<AppWrapper>
					<AppHeader />
					<main className="app-main">
						{ children }
					</main>
					<AppFooter />
				</AppWrapper>
			</body>
		</html>
	);
}
