CodeHighlighter.addStyle('haml', {
  preserve: {
    exp: /\B~(?=[\s\w])\B/
  },
  comment: {
    exp: /\B\/[^\n]*/
  },
  classDiv: {
    exp: /\.\w+\b/
  },
  idDiv: {
    exp: /\#\w+\b/
  },
  doctype: {
    exp: /^!!![^\n]*/
  },
  tag: {
    exp: /\%\w+\b/
  },
  emit: {
    exp: /\B=(?=[\s\w])/
  },
  interpolate: {
    exp: /\B(==)\B([^\n]*)/,
    replacement: "<span class='interpolate'>$1</span><span class='string'>$2</span>"
  },
  symbol: {
    exp: /:\w+/
  },
  string: {
    exp: /"[^"]*"|'[^']*'/
  }
})