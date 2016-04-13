'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        connect: {
            options: {
                index: 'index.html'
            },
            first: {
                options: {
                    open: true,
                    port: 9999,
                    base: 'domain1'
                }
            },

            second: {
                options: {
                    port: 8888,
                    base: 'domain2',
                    keepalive: true
                }

            }
        }
    });
    grunt.registerTask('default', 'connect');
};
