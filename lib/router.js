Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'interventionsList'});

Router.route('/interventions/:_id', {
	name: 'interventionPage',
	data: function() { return Interventions.findOne(this.params._id); }
});