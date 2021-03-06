import React from 'react';
import * as classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<div
				role='alert'
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0',
				}}
				onKeyPress={(e) => {
					console.log(e.key);
				}}
			>
				{props.children}
			</div>
		</Aux>
	);
};

export default React.memo(Modal, (prevProps, nextProps) => {
	return nextProps.show === prevProps.show && nextProps.children === prevProps.children;
});
