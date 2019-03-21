module.exports = function(grunt) {

  // 1. All configuration goes here 
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      concat: {   
        dist: {
            src: [
                'js/adjustRating.js',
                'js/currentdate.js',
                'js/currenttempfh.js',
                'js/currentTempp.js',
                'js/currenttempss.js',
                'js/events.js',
                'js/eventsfh.js',
                'js/eventsss.js',
                'js/forcastss.js',
                'js/forecastfh.js',
                'js/forecastp.js',
                'js/togglemenu.js',
                'js/towns.js',
                'js/weatherapi.js',
                
            ],
            dest: 'js/build/production.js',
        }
    }

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat']);

};