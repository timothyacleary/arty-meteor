Template.interventionsList.helpers({
	interventions: function() {
		return Interventions.find();
	}
});