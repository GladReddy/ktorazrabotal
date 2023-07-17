type IconProps = {
	name: string;
};

export const Icon = ({ name }: IconProps) => (
	<svg className={`icon icon-${name}`}>
		<use xlinkHref={`/sprite.svg#${name}`} />
	</svg>
);
