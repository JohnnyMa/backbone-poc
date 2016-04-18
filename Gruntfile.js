module.exports = function(grunt) {
	var output_dir = 'output/',
		vendor_dir = 'vendor/',
		vendor_js_dependencies = [
			vendor_dir + 'jquery-1.8.0.min.js',
			vendor_dir + 'underscore-1.8.3.js',
			vendor_dir + 'backbone-1.3.2.js',
			vendor_dir + 'backbone.marionette.js',
			vendor_dir + 'dust-core.min.js',
			vendor_dir + 'dust-full.min.js',
			vendor_dir + 'backbone.marionette.dust.js',
			vendor_dir + 'backbone.layoutmanager.js'
		];

	grunt.initConfig({
		clean: {
			prebuild: [output_dir]
		},
		dustjs: {
			common_tpl: {
				src: ['app/js/templates/*.dust'],
				dest: output_dir + 'js/common-complied-templates.js',
				options: {
					fullname: function(filepath) {
						var path = require("path"),
							name;

						name = path.relative('app/js/templates', path.dirname(filepath)).split(path.sep) // folder names
							.concat([path.basename(filepath, path.extname(filepath))]) // template name
							.join('_');

						// trim off any leading '_'
						name = name.replace(/^_/, '');
						name = 'poc_' + name;

						return name;
					}
				}
			}
		},
		copy: {
			assets: {
				files: [{
					expand: true,
					cwd: 'app/',
					src: ['**'],
					dest: output_dir
				}]
			},
			vendor: {
				files: [{
					expand: true,
					cwd: 'vendor/',
					src: ['**'],
					dest: output_dir + vendor_dir
				}]
			}
		},
		babel: {
			options: {
				sourceMap: true,
				presets: ['babel-preset-es2015']
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['*.js'],
					dest: 'dist/',
					ext: '.js'
				}]
			}
		},
		// systemjs: {
		// 	options: {
		// 		sfx: true,
		// 		baseURL: "./target",
		// 		configFile: "./target/config.js",
		// 		minify: true,
		// 		build: {
		// 			mangle: false
		// 		}
		// 	},
		// 	dist: {
		// 		files: [{
		// 			"src": "./app/*/*.js",
		// 			"dest": output_dir + "/js/app.min.js"
		// 		}]
		// 	}
		// },
		'uglify': {
			login: {
				options: {
					mangle: false,
					compress: false,
					sourceMap: true,
					sourceMapUrl: output_dir + 'login.js.map'
				},
				src: [vendor_js_dependencies, output_dir + 'js/common-complied-templates.js', 'app/js/main.js', 'app/js/login.js'],
				dest: output_dir + 'login.js'
			},
			portal: {
				options: {
					mangle: false,
					compress: false,
					sourceMap: true,
					sourceMapUrl: output_dir + 'portal.js.map'
				},
				src: [vendor_js_dependencies, output_dir + 'js/common-complied-templates.js', 'app/js/**/*.js', 'app/js/main.js', 'app/js/app.js'],
				dest: output_dir + 'portal.js'
			}
		}
	});

	// Load libs
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-dustjs');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// load the task in the tasks dir, currently it's empty.
	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['clean:prebuild', 'dustjs:common_tpl', 'babel', 'copy:assets', 'copy:vendor', 'uglify:login', 'uglify:portal']);

}