const StarryBackground: React.FC = () => {
	const stars = Array.from({ length: 100 }, () => ({
		cx: `${Math.random() * 100}%`,
		cy: `${Math.random() * 100}%`,
		r: Math.random(),
	}));

	return (
		<svg
			className="pointer-events-none h-full w-full object-cover"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="100%" height="100%" fill="transparent" />
			<g fill="white">
				{stars.map((star, i) => (
					<circle
						className="animate-twinkle"
						key={i}
						cx={star.cx}
						cy={star.cy}
						r={star.r}
						style={{
							animationDuration: `${Math.random() * 2 + 1}s`,
							animationDelay: `${Math.random() * 2}s`,
						}}
					/>
				))}
			</g>
		</svg>
	);
};

export default StarryBackground;
