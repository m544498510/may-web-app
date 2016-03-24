/*
 * This is an example build file that demonstrates how to use the build system for
 * require.js.
 *
 * THIS BUILD FILE WILL NOT WORK. It is referencing paths that probably
 * do not exist on your machine. Just use it as a guide.
 *
 *
 */
({

    baseUrl: "./modules/",
    dir:"../dist",

    paths: {
        'jquery':'../lib/jquery/dist/jquery.min',
        'artTemplate':'../lib/artTemplate/dist/template',
        'StateMan':'../lib/stateman/stateman.min'
    },
    removeCombined:true,
    generateSourceMaps:true,
    modules:[
        {
            name:"managerApp/managerApp.main",
            exclude:[
                "StateMan",
                "jquery",
                "artTemplate"
            ]
        }
    ]

})
