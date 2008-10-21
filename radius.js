CodeHighlighter.addStyle("radius", {
  comment : {
    exp: /(&lt;!--|#).*\n/
  },
  attribute : {
    exp: /([_a-zA-Z-]+)=/,
    replacement: "<span class=\"$0\">$1</span>="
  },
  tag : {
    exp: /(r:[-_a-zA-Z0-9:]+)/,
    replacement: "<span class=\"$0\">$1</span>"
  },
  value : {
   exp: /["']([a-zA-Z0-9_\-\/].*?)["']/,
   replacement: "\"<span class=\"$0\">$1</span>\""
  }
});
