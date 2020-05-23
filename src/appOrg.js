// added to component.service
const numberOneInput = document.getElementById('numberOne');
const numberTwoInput = document.getElementById('numberTwo');
const addValuesButton = document.getElementById('addValues');
const resultDiv = document.getElementById('result');
// end of component.service
const errorBox = document.getElementById('error');

// moved to parse-input
const parseInputs = (...input) => {
	return input.map((str) => parseInt(str));
};

// moved to util
const inputsAreValid = (...input) => {
	return input.every((num) => typeof num === 'number' && !isNaN(num));
};

// move to alert.service
const handleAdditionError = (inputs, numbers) => {
	const fullMessage = inputs.reduce((message, str, index) => {
		if (inputsAreValid(numbers[index])) {
			return message + '';
		} else {
			return message + `${str} is not a number. `;
		}
	}, 'Please enter two valid numbers! ');

	errorBox.classList.remove('invisible');
	errorBox.innerText = fullMessage;
};

// move to alert.service
const hideErrors = () => {
	errorBox.classList.add('invisible');
};

hideErrors();
addValuesButton.addEventListener('click', () => {
	hideErrors();
	const inputs = [numberOneInput.value, numberTwoInput.value];
	const parsedInputs = parseInputs(...inputs);
	if (inputsAreValid(...parsedInputs)) {
		const [numA, numB] = parsedInputs;
		resultDiv.innerText = numA + numB;
	} else {
		resultDiv.innerText = '';
		handleAdditionError(inputs, parsedInputs);
	}
});
