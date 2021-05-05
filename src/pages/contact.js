import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import * as classes from '../pageStyles/contact.module.css';
import Spinner from '../components/UI/Spinner/Spinner';
import Modal from '../components/UI/Modal/Modal';
import Input from '../components/UI/Input/Input';
import { updateObject, checkValidity } from '../shared/utility';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const [formValidity, setFormValidity] = useState(false);
	const [error, setError] = useState('');
	const [emailSentResponse, setEmailSentResponse] = useState('');

	const [contactForm, setContactForm] = useState({
		firstName: {
			value: '',
			required: true,
			errorMessage: 'First name cannot be left empty',
			touched: false,
			isValid: false,
		},
		lastName: {
			value: '',
			required: true,
			errorMessage: 'Last name cannot be left empty',
			touched: false,
			isValid: false,
		},
		title: {
			value: '',
			required: true,
			errorMessage: 'Please enter a title for your letter',
			touched: false,
			isValid: false,
		},
		email: {
			value: '',
			required: true,
			errorMessage: 'Invalid email address',
			isEmail: true,
			touched: false,
			isValid: false,
		},
		message: {
			value: '',
			required: true,
			errorMessage: 'Please enter your message',
			touched: false,
			isValid: false,
		},
	});

	const clearContactForm = () => {
		const updatedForm = { ...contactForm };

		Object.keys(updatedForm).forEach((fieldName) => {
			updatedForm[fieldName].value = '';
		});

		setContactForm(updatedForm);
	};

	const sendHandler = (event) => {
		event.preventDefault();
		if (!formValidity) {
			setError('Form is not valid. Pease make sure to fill all of the fields correctly.');
			return;
		}
		setLoading(true);
		emailjs
			.send(
				'testservice_coach_email',
				'template_4htxezl',
				{
					from_name: contactForm['firstName'].value,
					from_last_name: contactForm['lastName'].value,
					message: contactForm['message'].value,
					client_email: contactForm['email'].value,
					client_title: contactForm['title'].value,
				},
				'user_otGE6kcEHWTEHs2BDRy4G'
			)
			.then((response) => {
				clearContactForm();
				setLoading(false);
				setEmailSentResponse('Thank you for contacting!');
			})
			.catch((error) => {
				setLoading(false);
				setError(error.text);
			});
	};

	const onInputChangeHandler = (event, fieldName) => {
		const updatedFormElement = updateObject(contactForm[fieldName], {
			value: event.target.value,
			isValid: checkValidity(event.target.value, contactForm[fieldName]),
			touched: true,
		});
		const updatedForm = updateObject(contactForm, { [fieldName]: updatedFormElement });
		let isFormValid = true;
		for (fieldName in updatedForm) {
			isFormValid = updatedForm[fieldName].isValid && isFormValid;
		}
		setContactForm(updatedForm);
		setFormValidity(isFormValid);
	};

	const modalCloseHandler = () => {
		setError('');
		setEmailSentResponse('');
	};

	return (
		<Layout pageName='CONTACT'>
			<Modal show={loading} modalClosed={() => {}}>
				<p style={{ textAlign: 'center', fontSize: '22px' }}>Sending your message...</p>
				<Spinner />
			</Modal>
			<Modal show={error !== ''} modalClosed={modalCloseHandler}>
				<p style={{ textAlign: 'center', color: 'red' }}>
					<FontAwesomeIcon icon={faExclamationCircle} size='3x' />
				</p>
				<p style={{ textAlign: 'center', fontSize: '22px' }}>Something went wrong sending the message!</p>
				<p style={{ textAlign: 'center' }}>{error}</p>
			</Modal>
			<Modal show={emailSentResponse !== ''} modalClosed={modalCloseHandler}>
				<p style={{ textAlign: 'center', color: 'green' }}>
					<FontAwesomeIcon icon={faCheckCircle} size='3x' />
				</p>
				<p style={{ textAlign: 'center', fontSize: '22px' }}>{emailSentResponse}</p>
			</Modal>
			<p>
				各セクションのお申し込みやご質問などは、以下 LINE
				を友達登録頂きご連絡いただくか、サイト内のお問い合わせフォームからご連絡下さ い。
			</p>
			<div>
				<a href='https://lin.ee/m7DdXR9'>
					<img
						height='36'
						border='0'
						src='https://scdn.line-apps.com/n/line_add_friends/btn/ja.png'
						alt='LINE link'
					/>
				</a>
			</div>
			<form>
				<div>
					<Input
						nameRowElement
						title='LAST NAME / 姓'
						name='LastName'
						placeholder='Your Last Name'
						required={contactForm['lastName'].required}
						type='text'
						touched={contactForm['lastName'].touched}
						isValid={contactForm['lastName'].isValid}
						errorMessage={contactForm['lastName'].errorMessage}
						value={contactForm['lastName'].value}
						onChange={(event) => onInputChangeHandler(event, 'lastName')}
					/>
					<Input
						nameRowElement
						title='FIRST NAME / 名'
						name='FirstName'
						placeholder='Your First Name'
						required={contactForm['firstName'].required}
						type='text'
						touched={contactForm['firstName'].touched}
						isValid={contactForm['firstName'].isValid}
						errorMessage={contactForm['firstName'].errorMessage}
						value={contactForm['firstName'].value}
						onChange={(event) => onInputChangeHandler(event, 'firstName')}
					/>
				</div>
				<div>
					<Input
						title='EMAIL / メールアドレス'
						name='Email'
						placeholder='Your Email Address'
						required={contactForm['email'].required}
						type='text'
						touched={contactForm['email'].touched}
						isValid={contactForm['email'].isValid}
						errorMessage={contactForm['email'].errorMessage}
						value={contactForm['email'].value}
						onChange={(event) => onInputChangeHandler(event, 'email')}
					/>
				</div>
				<div>
					<Input
						title='TITLE / 件名'
						name='Title'
						placeholder='Title'
						required={contactForm['title'].required}
						type='text'
						touched={contactForm['title'].touched}
						isValid={contactForm['title'].isValid}
						errorMessage={contactForm['title'].errorMessage}
						value={contactForm['title'].value}
						onChange={(event) => onInputChangeHandler(event, 'title')}
					/>
				</div>
				<div>
					<Input
						textarea
						title='MESSAGE / メッセージ'
						name='Message'
						placeholder='Your Message'
						required={contactForm['message'].required}
						type='text'
						touched={contactForm['message'].touched}
						isValid={contactForm['message'].isValid}
						errorMessage={contactForm['message'].errorMessage}
						value={contactForm['message'].value}
						onChange={(event) => onInputChangeHandler(event, 'message')}
					/>
				</div>
				<button className={classes.SendButton} onClick={sendHandler}>
					<p>SEND</p>
				</button>
			</form>
		</Layout>
	);
};

export default Contact;
