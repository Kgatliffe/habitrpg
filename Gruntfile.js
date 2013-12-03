module.exports = function(grunt) {

  grunt.initConfig({
    sprite:{
      all: {
        src: 'img/sprites/images/*.png',
        destImg: 'img/sprites/spritesmith.png',
        destCSS: 'css/spritesmith.css',
        cssOpts: {
          'cssClass': function (item) {
            return '.sprite-' + item.name;
          }
        }
      }
    },
    cssmin: {
      dist: {
        options: {
          report: 'gzip'
        },
        files: {
          "dist/spritesheets.css": [
            "css/Mounts.css",
            "css/PetEggs.css",
            "css/player_sprites.css",
            "css/male_sprites.css",
            "css/female_sprites.css",
            "css/shop_sprites.css",
            "css/pet_sprites.css",
            "css/achievements.css",
            "css/backer.css",
            "css/customizer.css",
            "css/spritesmith.css"
          ]
        }
      }
    },

    browserify: {
      dist: {
        src: ["script/index.js"],
        dest: "dist/habitrpg-shared.js"
      },
      options: {
        transform: ['coffeeify']
        //debug: true Huge data uri source map (400kb!)
      }
    }

  });

  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-cssmin'); // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browserify');

  // Default task(s).
  grunt.registerTask('default', ['sprite', 'cssmin', 'browserify']);

};