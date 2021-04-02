import React from 'react';
import Layout from '../components/Layout/Layout';
import * as classes from '../pageStyles/contact.module.css';

const reviews = () => (
	<Layout pageName='CONTACT'>
		<p>For more inquiries or information, please contact me through social media or here, via email.</p>
		<form classes={classes.Form}>
			<div>
				<div className={classes.NameRowElement}>
					<p>FIRST NAME</p>
					<input name='FirstName' placeholder='Your First Name' required='required' type='text' />
				</div>
				<div className={classes.NameRowElement}>
					<p>LAST NAME</p>
					<input name='LastName' placeholder='Your Last Name' required='required' type='text' />
				</div>
			</div>
			<div>
				<div>
					<p>EMAIL</p>
					<input
						className={classes.Input}
						name='Email'
						placeholder='Your Email Address'
						required='required'
						type='text'
					/>
				</div>
			</div>
			<div>
				<div>
					<p>TITLE</p>
					<input className={classes.Input} name='Title' placeholder='Title' required='required' type='text' />
				</div>
			</div>
			<div>
				<div>
					<p>MESSAGE</p>
					<textarea
						className={classes.Input}
						name='Message'
						placeholder='Your Message'
						required='required'
						type='text'
					/>
				</div>
			</div>
			<button className={classes.SendButton}>
				<p>SEND</p>
			</button>
		</form>
	</Layout>
);

export default reviews;
