Template.enrollPage.helpers({
	intervention: function() {
		return Interventions.findOne(this.params._id);
	}

	patients: function() {
		return Patients.find();
	}
});