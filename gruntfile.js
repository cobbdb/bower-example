var fs = require('fs');

module.exports = function (grunt) {
    grunt.registerTask('validate', 'Ensure jquery is present.', function () {
        if (fs.existsSync('components/jquery/jquery.min.js')) {
            grunt.log.ok('jQuery found.');
        } else {
            var msg = 'jQuery is missing!';
            grunt.log.error(msg);
            throw Error(msg);
        }
    });
};
