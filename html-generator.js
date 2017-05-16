
// This script is dependent on showdown.js https://github.com/showdownjs/showdown
// npm install showdown
// To run the script: node html-generator.js

console.log("Beginning HTML generation script");
var showdown  = require('showdown');
var converter = new showdown.Converter();
var fs = require('fs');


// To add a new library, simply replicate the existing file structure
// languagename/README.md
// and add the name of the library to the array below

libraries = [ 'php', 'python', 'ruby']

function build_html(libraries){
  libraries.forEach(function(element) {
    var text = fs.readFileSync(`${element}/README.md`, 'utf-8');
    var md = converter.makeHtml(text);
    md = md.replace('<!--', '').replace('-->', '')
    fs.writeFileSync(`${element}/index.html`, md, 'utf-8');
    console.log(`HTML for ${element}/index.html generated successfully.`)
  }); 
}

function build_main_html(){
  var text = fs.readFileSync('README.md', 'utf-8');
  var md = converter.makeHtml(text);
  fs.writeFileSync(`index.html`, md, 'utf-8');
  console.log('HTML for the main index.html generated successfully.')
}

function execute_script(){
  build_html(libraries)
  build_main_html();
}

execute_script();