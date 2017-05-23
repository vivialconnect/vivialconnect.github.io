
// This script is dependent on showdown.js https://github.com/showdownjs/showdown
// npm install showdown
// To run the script: node html-generator.js



console.log("Beginning HTML generation script")
const template = require('./template')
const showdown  = require('showdown')
const converter = new showdown.Converter()
const fs = require('fs')


// To add a new library, simply replicate the existing file structure
// languagename/README.md
// and add the name of the library to the array below

libraries = [ 'PHP', 'Python', 'Ruby']

function build_html(libraries){
  libraries.forEach(function(element) {
    let text = fs.readFileSync(`${element}/README.md`, 'utf-8')
    let md = converter.makeHtml(text)
    md = template.header(element + ' Library') + md + template.footer()
    fs.writeFileSync(`${element}/index.html`, md, 'utf-8')
    console.log(`HTML for ${element}/index.html generated successfully.`)
  }); 
}

function build_main_html(){
  let text = fs.readFileSync('README.md', 'utf-8')
  let md = converter.makeHtml(text)
  md = template.header('Client Libraries') + md + template.footer()
  fs.writeFileSync(`index.html`, md, 'utf-8')
  console.log('HTML for the main index.html generated successfully.')
}

function execute_script(){
  build_html(libraries)
  build_main_html();
  console.log("Script finished successfully")
}

execute_script();