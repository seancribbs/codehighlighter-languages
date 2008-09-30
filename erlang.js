CodeHighlighter.addStyle("erlang",{
  comment : {
    exp  : /%[^\n]+/
  },
  brackets : {
    exp  : /\(|\)|{|}/
  },
  string : {
    exp  : /"[^"]*"/
  },
  keywords : {
    exp  : /\b(after|and|andalso|band|begin|bnot|bor|bsl|bsr|bxor|case|catch|cond|div|end|fun|if|let|not|of|or|orelse|query|receive|rem|try|when|xor)\b/
  },
  macro : {
    exp  : /\b\?\w+\b/
  },
  atom : {
    exp  : /\b([a-z][@\w]*|'[^']')\b/
  },
  binary : {
    exp : /<<.*>>/
  },
  variable : {
    exp : /\b(_|_?([A-Z][@\w]*)*)\b/
  }
});