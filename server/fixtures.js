if (Interventions.find().count() === 0) {
	lungCancerId = Interventions.insert({
		title: "Lung Cancer Study",
		enrollmentGoal: 30,
		totalEnrollment: 0
	});

	prostateCancerId = Interventions.insert({
		title: "Prostate Cancer Study",
		enrollmentGoal: 20,
		totalEnrollment: 0
	});

	baldderCancerId = Interventions.insert({
		title: "Bladder Cancer Study",
		enrollmentGoal: 60,
		totalEnrollment: 0
	});

	Patients.insert({
		name: 'Tim Cleary',
		email: 'timothyacleary@gmail.com'
	});
}