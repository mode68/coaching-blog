import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const IntersectionContext = React.createContext({ inView: true });

export const IntersectionObserver = ({ children, triggerOnce = false, threshold = 0 }) => {
	const [inViewState, setInViewState] = useState(false);
	const [intersectionRef, inView] = useInView({
		threshold: threshold,
		triggerOnce: triggerOnce,
	});

	useEffect(() => {
		setInViewState(inView);
	}, [inView]);

	return (
		<IntersectionContext.Provider value={{ inViewState }}>
			<div ref={intersectionRef}>{children}</div>
		</IntersectionContext.Provider>
	);
};
