import { useState } from 'react';
import './styles.css';

const Form = () => {
	// 1. states:
	// - form state
	// - error state
	// - color state

	// 2. validator
	// - username:            - 8 letters long
	// - email:               - includes "@gmail."
	// - password:            - 8 letter long
	// - confirm password:    - match password

	// --- state ---
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [errorUsername, setErrorUsername] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorPassword, setErrorPassword] = useState('');
	const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

	const [colorUsername, setColorUsername] = useState('');
	const [colorEmail, setColorEmail] = useState('');
	const [colorPassword, setColorPassword] = useState('');
	const [colorConfirmPassword, setColorConfirmPassword] = useState('');

	const validationHandler = (e) => {
		e.preventDefault();

		// username validator
		if (username.length >= 8) {
			setErrorUsername('');
			setColorUsername('green');
		} else {
			setErrorUsername('Username must be 8 letters long.');
			setColorUsername('red');
		}

		// email validator
		if (email.includes('@gmail.')) {
			setErrorEmail('');
			setColorEmail('green');
		} else {
			setErrorEmail('Email must be valid');
			setColorEmail('red');
		}

		// password validator
		if (password.length >= 8) {
			setErrorPassword('');
			setColorPassword('green');
		} else {
			setErrorPassword('Password must be 8 characters long.');
			setColorPassword('red');
		}

		// confirm password validator
		if (!confirmPassword || password === confirmPassword) {
			setErrorConfirmPassword('');
			setColorConfirmPassword('green');
		} else {
			setErrorConfirmPassword("Password and Confirm Password don't match!");
			setColorConfirmPassword('red');
		}

		// reset
		setUsername('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');

		setErrorUsername('');
		setErrorEmail('');
		setErrorPassword('');
		setErrorConfirmPassword('');

		setColorUsername('');
		setColorEmail('');
		setColorPassword('');
		setColorConfirmPassword('');

    return alert("Form Validation success!")
	};

	return (
		<>
			<div className="card">
				<div className="card-image" />

				<form onSubmit={validationHandler}>
					<input
						type="text"
						placeholder="Username..."
						style={{ borderColor: colorUsername }}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					{errorUsername && <p className="error">{errorUsername}</p>}

					<input
						type="text"
						placeholder="Email..."
						style={{ borderColor: colorEmail, color: 'black' }}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{errorEmail && <p className="error">{errorEmail}</p>}

					<input
						type="password"
						placeholder="Password..."
						style={{ borderColor: colorPassword }}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{errorPassword && <p className="error">{errorPassword}</p>}

					<input
						type="text"
						placeholder="Confirm Password..."
						style={{ borderColor: colorConfirmPassword }}
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					{errorConfirmPassword && <p className="error">{errorConfirmPassword}</p>}

					<button type="submit" className="submit-btn">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Form;
