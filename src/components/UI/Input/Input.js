import React from 'react';
import * as classes from './Input.module.css';

const Input = (props) => {
	let mountedClasses = [classes.Input];
	if (!props.isValid && props.touched) {
		mountedClasses.push(classes.Invalid);
		console.log('mountedclasses: ', mountedClasses);
	}
	return (
		<div className={props.nameRowElement ? classes.NameRowElement : null}>
			<p>{props.title}</p>
			{!props.isValid && props.touched ? <p style={{ color: 'red' }}>{props.errorMessage}</p> : null}
			{props.textarea ? (
				<textarea
					className={mountedClasses.join(' ')}
					name={props.name}
					placeholder={props.placeholder}
					required={props.required}
					type={props.type}
					onChange={props.onChange}
				/>
			) : (
				<input
					className={mountedClasses.join(' ')}
					name={props.name}
					placeholder={props.placeholder}
					required={props.required}
					type={props.type}
					onChange={props.onChange}
				/>
			)}
		</div>
	);
};

export default Input;
