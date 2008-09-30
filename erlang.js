CodeHighlighter.addStyle("erlang",{
  punctuation: {
    exp: /-(&gt;)?|;|\||\!/
  },
  comment : {
    exp  : /%[^\n]+/
  },
  bracket : {
    exp  : /\(|\)|{|}|(&gt;&gt;)|(&lt;&lt;)/
  },
  string : {
    exp  : /"[^"]*"/
  },
  keyword : {
    exp  : /\b(after|and|andalso|band|begin|bnot|bor|bsl|bsr|bxor|case|catch|cond|div|end|fun|if|let|not|of|or|orelse|query|receive|rem|try|when|xor)\b/
  },
  pp : {
    exp : /\b(module|author|include|include_lib|behavior|behaviour|define)\b/
  },
  atom : {
    exp  : /\b([a-z][@\w]*|'[^']*')\b/
  },
  variable : {
    exp : /\b(_|_?[A-Z][@\w]*)\b/
  }
});