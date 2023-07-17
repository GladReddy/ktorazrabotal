import { InfoText, WorksList } from '@/components';

import { SearchboxProps } from "@/components/Searchbox";

import styles from './SearchResult.module.scss';

export type SearchResultProps = Pick<SearchboxProps, 'result'>;


export const SearchResult = async ({ result }: SearchResultProps) => {
	let content: JSX.Element = <></>;

	try {
		const data = await result;

		if (typeof data === 'string') {
			content = <InfoText text={data} />;
		} else {
			content = <WorksList items={data} />;
		}
	} catch {
		content = <InfoText text="Ошибка" />;
	}

	return <div className={styles.wrapper}>{content}</div>;
};
