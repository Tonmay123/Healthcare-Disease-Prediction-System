const symptoms = ['Itching', 'Skin Rash', 'Nodal skin eruptions', 'Continuous sneezing', 'Shivering', 'Chills', 'Joint pain', 'Stomach pain',
'Acidity', 'Ulcers on tongue', 'Muscle wasting', 'Vomiting', 'Burning micturition', 'Spotting urination', 'Fatigue', 'Weight gain', 'Anxiety',
'Cold hands and feets', 'Mood swings', 'Weight loss', 'Restlessness', 'Lethargy', 'Patches in throat', 'Irregular sugar level','Cough', 'High fever', 'Sunken eyes', 'Breathlessness', 'Sweating', 'Dehydration', 'Indigestion', 'Headache', 'Yellowish skin', 'Dark urine', 'Nausea', 'Loss of appetite', 'Pain behind the eyes', 'Back pain', 'Constipation', 'Abdominal pain', 'Diarrhoea', 'Mild fever', 'Yellow urine', 'Yellowing of eyes', 'Acute liver failure', 'Fluid overload', 'Swelling of stomach', 'Swelled lymph nodes', 'Malaise', 'Blurred and distorted vision', 'Phlegm', 'Throat irritation', 'Redness of eyes', 'Sinus pressure', 'Runny nose', 'Congestion', 'Chest pain', 'Weakness in limbs', 'Fast heart rate', 'Pain during bowel movements', 'Pain in anal region', 'Bloody stool', 'Irritation in anus', 'Neck pain', 'Dizziness', 'Cramps', 'Bruising', 'Obesity', 'Swollen legs', 'Swollen blood vessels', 'Puffy face and eyes', 'Enlarged thyroid', 'Brittle nails', 'Swollen extremeties', 'Excessive hunger', 'Extra marital contacts', 'Drying and tingling lips', 'Slurred speech', 'Knee pain', 'Hip joint pain', 'Muscle weakness', 'Stiff neck', 'Swelling joints', 'Movement stiffness', 'Spinning movements', 'Loss of balance', 'Unsteadiness', 'Weakness of one body side', 'Loss of smell', 'Bladder discomfort', 'Foul smell of urine', 'Continuous feel of urine', 'Passage of gases', 'Internal itching', 'Toxic look(typhos)', 'Depression', 'Irritability', 'Muscle pain', 'Altered sensorium', 'Red spots over body', 'Belly pain', 'Abnormal menstruation', 'Dischromic patches', 'Watering from eyes', 'Increased appetite', 'Polyuria', 'Family history', 'Mucoid sputum', 'Rusty sputum', 'Lack of concentration', 'Visual disturbances', 'Receiving blood transfusion', 'Receiving unsterile injections', 'Coma', 'Stomach bleeding', 'Distention of abdomen', 'History of alcohol consumption', 'Fluid overload', 'Blood in sputum', 'Prominent veins on calf', 'Palpitations', 'Painful walking', 'Pus filled pimples', 'Blackheads', 'Scurring', 'Skin peeling', 'Silver like dusting', 'Small dents in nails', 'Inflammatory nails', 'Blister', 'Red sore around nose', 'Yellow crust ooze']

		// const form = document.getElementById('symptom-form');
		// for (let i = 0; i < 20; i++) {
		// 	let input = document.createElement('input');
		// 	input.type = 'hidden';
		// 	input.id = `binary_value_${i}`;
		// 	input.name = `binary_value_${i}`;
		// 	input.value = '0';
		// 	form.appendChild(input);

		// 	let button = document.createElement('button');
		// 	button.className = 'binary_value';
		// 	button.name = 'binary_value';
		// 	button.id = `${i}`;
		// 	button.value = `${symptoms[i]}`;
		// 	button.textContent = `${symptoms[i]}`;
		// 	form.appendChild(button);
		// }


		// const buttons = document.querySelectorAll('.binary_value');
		// buttons.forEach(button => {
		// 	button.addEventListener('click', (e) => {
		// 		e.preventDefault()
		// 		const input = document.querySelector(`#binary_value_${button.id}`);
		// 		input.value = input.value === '0' ? '1' : '0';
		// 		button.style.backgroundColor = input.value === '0'? 'transparent' : 'green'
		// 	});
		// });
		// const submitBtn = document.createElement('button')
		// submitBtn.innerText = 'Predict'
		// submitBtn.type = 'submit'

		// form.appendChild(submitBtn)


		const div = document.getElementById('symptomns');
		for (let i = 0; i < 132; i++) {
			let input = document.createElement('input');
			input.type = 'hidden';
			input.id = `binary_value_${i}`;
			input.name = `binary_value_${i}`;
			input.value = '0';
			div.appendChild(input);
		
			let button = document.createElement('button');
			button.className = 'binary_value';
			button.name = 'binary_value';
			button.id = `${i}`;
			button.value = `${symptoms[i]}`;
			button.textContent = `${symptoms[i]}`;
			div.appendChild(button);
		}
		const form = document.getElementById('symptom-form');
		const submitBtn = document.createElement('button')
		submitBtn.innerText = 'Predict'
		submitBtn.type = 'submit'
		submitBtn.className = 'predictResult'
		form.appendChild(submitBtn)
		
		
		const buttons = document.querySelectorAll('.binary_value');
		buttons.forEach(button => {
			button.addEventListener('click', (e) => {
				e.preventDefault()
				const input = document.querySelector(`#binary_value_${button.id}`);
				input.value = input.value === '0' ? '1' : '0';
				button.style.backgroundColor = input.value === '0'? 'transparent' : 'teal'
			});
		});