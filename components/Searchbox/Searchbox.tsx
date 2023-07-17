import { Suspense } from 'react';

import { SearchForm, SearchResult } from '@/components';
import { WorkProps } from '@/components/Work';
import { WorksListSkeleton } from '@/components/WorksList';

import styles from './Searchbox.module.scss';
export type SearchboxProps = {
    search: string,
	result: Promise<WorkProps[] | string>;
};

export const Searchbox = ({ search, result }: SearchboxProps) => (
	<div className={styles.wrapper}>
		<SearchForm search={search} />

		{search && (
			<Suspense
				key={search}
				fallback={<WorksListSkeleton />}
			>
				<SearchResult result={result} />
			</Suspense>
		)}
	</div>
);
