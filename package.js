Package.describe({
  name: 'd3k4y:autoform-files',
  summary: 'File upload for AutoForm using d3k4y:files',
  description: 'File upload for AutoForm using d3k4y:files',
  version: '2.2.1',
  git: 'https://github.com/d3k4y/meteor-autoform-file.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.6.1');

  api.use([
    'check',
    'ecmascript',
    'underscore',
    'mongo',
    'reactive-var',
    'templating@1.3.2',
    'aldeed:autoform@6.3.0',
    'd3k4y:files@1.10.0'
  ]);

  api.addFiles([
    'lib/client/autoform.js',
    'lib/client/fileUpload.html',
    'lib/client/fileUpload.js',
    'lib/client/uploadImageDemo.html',
    'lib/client/uploadFileDemo.html'
  ], 'client');
});
