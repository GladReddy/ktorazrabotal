import prisma from '@/utils/prisma';
import { WorkProps } from '@/components/Work';

import { Searchbox } from '@/components';

const fetchQuery = async (search: string): Promise<WorkProps[] | string> => {

	let searchStr = search;

	if (search.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g) ) {
		searchStr = search.trim().replace(/^(https?:\/\/)/g, '').replace(/^(www\.)/g, '');
		searchStr = new URL(`https://${searchStr}`).hostname
	}

	const data = await prisma.work.findMany({
		where: {
			OR: [
				{
					reference: {
						url: searchStr,
					},
				},
				{
					reference: {
						keywords: {
							has: searchStr,
						},
					},
				},
			],
		},
		select: {
			name: true,
			year: true,
			company: {
				select: {
					name: true,
					site: true,
				},
			},
		},
	});

	if (data.length === 0) {
		return 'Ничего не найдено';
	}

	return data;
};

export default function Home({ searchParams }: { searchParams: { s: string } }) {
	const search = searchParams.s ?? '';
	const result = fetchQuery(search);

	return (
		<div className="container">
			<Searchbox search={search} result={result} />
		</div>
	);
}
