'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';
import { SearchboxProps } from '@/components/Searchbox';

import { Icon } from '@/components/ui/Icon';

import styles from './SearchForm.module.scss';

export type SearchFormProps = Pick<SearchboxProps, 'search'>;


export const SearchForm = ({ search }: SearchFormProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams()!;
	const [query, setQuery] = useState<string>(search);
	const isMounted = useRef<boolean>(false);

	const createQueryString = useCallback(
		(query: string) => {
			const params = new URLSearchParams(Array.from(searchParams.entries()));

			if (query) {
				params.set('s', query);
			} else {
				params.delete('s');
			}

			return params.toString();
		},
		[searchParams]
	);

	const updateSearchValue = useCallback(
		debounce((query: string) => {
			router.push(pathname + '?' + createQueryString(query));
		}, 500),
		[]
	);

	useEffect(() => {
		if (isMounted.current) updateSearchValue(query.toLocaleLowerCase());

		isMounted.current = true;
	}, [query]);

	return (
		<form
			action="#"
			className={styles.form}
			role="search"
			onSubmit={(e) => e.preventDefault()}
		>
			<label>
				<input
					type="search"
					name="s"
					className={styles.formInput}
					placeholder="Название/ссылка сайта или приложения"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					type="reset"
					className={cx({
						[styles.formClear]: true,
						['is-visible']: query.length > 0,
					})}
					onClick={() => setQuery('')}
				>
					<Icon name="cross" />
				</button>
				<span className={styles.formPlaceholder}>Название/ссылка сайта или приложения</span>
			</label>
		</form>
	);
};
