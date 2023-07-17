import prisma from '@/utils/prisma';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { Metadata } from 'next';
import { SITE_NAME, TITLE_SEP } from '@/utils/constants';

import './page-style.scss';

const fetchPageBySlug = async (
	slug: string
): Promise<{
	title: string;
	content: string | null;
}> => {
	const data = await prisma.page.findUnique({
		where: { slug },
		select: {
			title: true,
			content: true,
		},
	});

	if (!data) {
		notFound();
	}

	return data;
};

export default async function Page({ params }: { params: { slug: string } }) {
	const { title, content } = await fetchPageBySlug(params.slug);

	return (
		<div className="container">
			<article className="node">
				<header className="node__header">
					<h1>{title}</h1>
				</header>
				<section className="node__content content clearfix">
					{typeof content === 'string' ? parse(content) : ''}
				</section>
			</article>
		</div>
	);
}

export async function generateMetadata(
	{
		params,
	}: {
		params: { slug: string };
	}
): Promise<Metadata> {
	const data = await fetchPageBySlug(params.slug);

	return {
		title: `${data.title} ${TITLE_SEP} ${SITE_NAME}`,
	};
}

export async function generateStaticParams() {
	const data = await prisma.page.findMany({
		select: {
			slug: true,
		},
	});

	return data;
}
