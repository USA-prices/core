exports.config = {
	watched: ['app'],
	files: {
		javascripts: {
			defaultExtension: 'js',
			joinTo: {
				'javascripts/app.js': /^app/,
				'javascripts/vendor.js': /^bower_components/
			}
		},
		stylesheets: {
			joinTo: 'stylesheets/app.css'
		},
		templates: {
			joinTo: 'javascripts/app.js'
		}
	},
	server: {
		path: 'server.js',
		port: 8080,
		run: true
	}
};