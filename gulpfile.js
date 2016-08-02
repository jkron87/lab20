var karma = require('karma').Server;
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
gulp.task('test', function(done){
new karma({
configFile: __dirname + '/karma.conf.js'
}, done).start();
});
