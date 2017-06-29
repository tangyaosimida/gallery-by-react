/**
 * Created by tangyao-pc on 2017/6/21.
 */

module.exports = function(grunt) {

    // Do grunt-related things in here
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //JS代码查错提示
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                //这里是覆盖JSHint默认配置的选项
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        //JS代码的合并
        concat: {
            //dist是随便起的名字
            dist: {
                // 将要被合并的文件
                src: ['src/**/*.js'],
                // 合并后的JS文件的存放位置
                dest: 'dest/contact.js'
            },
        },

        //JS代码合并
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    './dest/contact.min.js': ['./dest/contact.js']
                }
            }
        },

        //监测任务,scripts是随便起的名字
        watch:{
            scripts:{
                files:['src/**/*.js','Gruntfile.js'],
                tasks:['jshint','concat','uglify'],
                options:{
                    spawn:false,
                    debounceDelay: 250,
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');


    //运行grunt t_watch将会执行下面额任务
    grunt.registerTask('t_watch', ['watch']);

    //运行grunt要执行的任务，default是默认的任务
    grunt.registerTask('default', ['jshint',  'concat', 'uglify']);



};