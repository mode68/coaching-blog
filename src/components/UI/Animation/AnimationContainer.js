import React, { useMemo, useContext } from 'react';

import { IntersectionContext } from '../IntersectionObserver/IntersectionObserver';
import { motion } from 'framer-motion';

export const AnimationContainer = ({
	children,
	childStyle,
	scale,
	slideInFromLeft,
	staggerChildren = 0,
	delayOrder, // order of appearance
	duration = 0.4,
	easing = [0.42, 0, 0.58, 1], // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}) => {
	const { inViewState } = useContext(IntersectionContext);
	const transition = useMemo(
		() => ({
			duration,
			delay: delayOrder / 5,
			ease: easing,
			staggerChildren: staggerChildren,
		}),
		[duration, delayOrder, easing, staggerChildren]
	);

	let hidden = { opacity: 0 };
	let show = {
		opacity: 1,
	};

	if (scale) {
		hidden.scale = 0;
		show.scale = 1;
	}

	if (slideInFromLeft) {
		hidden.x = -200;
		show.x = 0;
	}

	const variants = {
		hidden: { ...hidden, transition },
		show: { ...show, transition },
	};

	const updatedChildren = Array.isArray(children)
		? children.map((child, i) => (
				<motion.div
					key={'motion-child-' + i}
					variants={{ show: show, hidden: hidden }}
					style={childStyle ? childStyle : null}
				>
					{child}
				</motion.div>
		  ))
		: children;

	return (
		<motion.div initial='hidden' animate={inViewState ? 'show' : 'hidden'} exit='hidden' variants={variants}>
			{updatedChildren}
		</motion.div>
	);
};
