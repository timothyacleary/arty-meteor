if (Interventions.find().count() === 0) {
	Interventions.insert({
		title: "Lung Cancer Study",
		enrollmentGoal: 30
	});

	Interventions.insert({
		title: "Prostate Cancer Study",
		enrollmentGoal: 20
	});

	Interventions.insert({
		title: "Bladder Cancer Study",
		enrollmentGoal: 60
	});
}