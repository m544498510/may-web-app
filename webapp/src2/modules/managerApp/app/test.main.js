/**
 * Created by May on 2016/3/15.
 */
requirejs.config({
    baseUrl: './',
    paths: {
        'jquery':'dist/lib/jquery/dist/jquery.min',
        'artTemplate':'dist/lib/artTemplate/dist/template',
        'StateMan':'dist/lib/stateman/stateman.min'
    },
    shim: {
    }
});

define(['StateMan',"taskListViewModule","testController"],function (StateMan,a,b) {
    a.init();
    b.init();
    var config = {
        enter: function(){
            console.log("enter: " + this.name)
        },
        leave: function(){
            console.log("leave: " + this.name)
        }
    };

    function create(o){
        o = o || {};
        o.enter= config.enter;
        o.leave = config.leave;
        return o;
    }

    var stateman = new StateMan();

    stateman
        .state("home", config)
        .state("contact", config)
        .state("contact.list", config )
        .state("contact.detail", create({url: ":id(\\d+)"}))
        .state("contact.detail.option", config)
        .state("contact.detail.message", config)
        .start({});
});
