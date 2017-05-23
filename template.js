exports.header = function(title) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Vivial Connect ${title}</title>
        <link rel="stylesheet" href="/css/github-markdown.css">
        <link rel="stylesheet" href="/css/style.css">
        <link rel="shortcut icon" href="/img/favicon.png'">
      </head>
 <body class="markdown-body">
      <header style="padding-left: 0px">
        <img src="/img/logo.png"><br>
      </header>
      `
}


exports.footer = function() {
  return `
    </body>
  </html>`
}