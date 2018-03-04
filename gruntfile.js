module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: "/*---------------------------separator---Ashish--------------------------------------------*/",
				banner: "/*------------------------banner---Ashish---------------------------------------*/" 
			},
			asd: {
				src: ["components/scripts/*.js"],
				dest: "builds/development/js/scripts.js"
			}
		},
		sass: {
			options : {
				style : 'expanded'
			},
			ignorePartials : {
				files : 
				[
					{
						"builds/development/css/style.css" : "components/sass/style.scss",
					}
				]
			}
		},
		connect: {
			server: {
				options: {
					hostname: '192.168.1.204',
					port: 4000,
					base: 'builds/development',
					livereload: true,
					protocol: 'http'
				}
			}

		},
		wiredep: {
			task: {
				src: 'builds/development/**/*.html'
			}
		},
		bower_concat: {
			asd: {
				dest: "builds/development/js/_bower.js"
			}
		},
		watch: {
		  scripts: {
		    files: [
		    '**/*.html',
		    'components/sass/*.scss'
		    ],
		    tasks: ['concat','sass'],
		    options: {
		      spawn: false,
		      livereload: true
		    },
		  },
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.registerTask('default',['bower_concat','concat','sass','connect','watch']);
}