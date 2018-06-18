// main buggle js

requirejs.config({
    urlArgs: "bust=" + (new Date()).getTime(),//used to keep the browser from caching the scripts as we move
    // baseUrl : "../../shared/js", //base scripts page!
    paths : {
        'underscore' : "../../shared/js/underscore-min",
        'paper' : "../../shared/js/paper-core",
        'tries' : "tries",
        'buggleUI' : "buggleUI",
        'buggle' : "buggle",
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'paper' : {
            exports: 'paper'
        },
        'tries' : {
            exports: 'trie'
        },
        'buggleUI' : {
            deps: ['paper', 'buggle']
        },
        'buggle' : {
            deps: ['tries']
        },
    },
});

// initialize the document with a doc ready!

// requirejs(["underscore", "paper"], function (_, paper) {
//     console.log(_);
//     console.log(paper);
// });

requirejs(["underscore", "paper"], function (_, paper) {
    console.log(_.sample([1,0], 1));
});

requirejs(['buggle']);
requirejs(['buggleUI']);

testTrie = requirejs(['tries'], function () {
    testTrie = new trie();
    return testTrie
});

console.log(testTrie)
