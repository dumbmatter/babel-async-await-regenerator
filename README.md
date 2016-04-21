Goal: async/await compiled down to Bluebird promises with minimal performance impact

Problem: http://stackoverflow.com/questions/36775097/babel-plugin-transform-async-to-module-method-without-regenerator

To see for yourself, `npm run build` will create bundle.js which works fine. But if you go into package.json and delete this:

    [
      "transform-runtime",
      {
        "polyfill": false,
        "regenerator": true
      }
    ],

then `npm run build` still works but bundle.js won't run because of:

    ReferenceError: regeneratorRuntime is not defined