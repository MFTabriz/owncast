"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2602],{62602:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){function wordRegExp(words,end){return RegExp((end?"":"^")+"(?:"+words.join("|")+")"+(end?"$":"\\b"))}function chain(tokenize,stream,state){return state.tokenize.push(tokenize),tokenize(stream,state)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{crystal:function(){return crystal}});var operators=/^(?:[-+/%|&^]|\*\*?|[<>]{2})/,conditionalOperators=/^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/,indexingOperators=/^(?:\[\][?=]?)/,anotherOperators=/^(?:\.(?:\.{2})?|->|[?:])/,idents=/^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,types=/^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,keywords=wordRegExp(["abstract","alias","as","asm","begin","break","case","class","def","do","else","elsif","end","ensure","enum","extend","for","fun","if","include","instance_sizeof","lib","macro","module","next","of","out","pointerof","private","protected","rescue","return","require","select","sizeof","struct","super","then","type","typeof","uninitialized","union","unless","until","when","while","with","yield","__DIR__","__END_LINE__","__FILE__","__LINE__"]),atomWords=wordRegExp(["true","false","nil","self"]),indentKeywords=wordRegExp(["def","fun","macro","class","module","struct","lib","enum","union","do","for"]),indentExpressionKeywords=wordRegExp(["if","unless","case","while","until","begin","then"]),dedentKeywordsArray=["end","else","elsif","rescue","ensure"],dedentKeywords=wordRegExp(dedentKeywordsArray),dedentPunctualsArray=["\\)","\\}","\\]"],dedentPunctuals=RegExp("^(?:"+dedentPunctualsArray.join("|")+")$"),nextTokenizer={def:tokenFollowIdent,fun:tokenFollowIdent,macro:function(stream,state){var matched;if(stream.eatSpace())return null;if(matched=stream.match(idents)){if("def"==matched)return"keyword";stream.eat(/[?!]/)}return state.tokenize.pop(),"def"},class:tokenFollowType,module:tokenFollowType,struct:tokenFollowType,lib:tokenFollowType,enum:tokenFollowType,union:tokenFollowType},matching={"[":"]","{":"}","(":")","<":">"};function tokenBase(stream,state){if(stream.eatSpace())return null;if("\\"!=state.lastToken&&stream.match("{%",!1))return chain(tokenMacro("%","%"),stream,state);if("\\"!=state.lastToken&&stream.match("{{",!1))return chain(tokenMacro("{","}"),stream,state);if("#"==stream.peek())return stream.skipToEnd(),"comment";if(stream.match(idents))return(stream.eat(/[?!]/),matched=stream.current(),stream.eat(":"))?"atom":"."==state.lastToken?"property":keywords.test(matched)?(indentKeywords.test(matched)?"fun"==matched&&state.blocks.indexOf("lib")>=0||"def"==matched&&"abstract"==state.lastToken||(state.blocks.push(matched),state.currentIndent+=1):("operator"==state.lastStyle||!state.lastStyle)&&indentExpressionKeywords.test(matched)?(state.blocks.push(matched),state.currentIndent+=1):"end"==matched&&(state.blocks.pop(),state.currentIndent-=1),nextTokenizer.hasOwnProperty(matched)&&state.tokenize.push(nextTokenizer[matched]),"keyword"):atomWords.test(matched)?"atom":"variable";if(stream.eat("@"))return"["==stream.peek()?chain(tokenNest("[","]","meta"),stream,state):(stream.eat("@"),stream.match(idents)||stream.match(types),"propertyName");if(stream.match(types))return"tag";if(stream.eat(":"))return stream.eat('"')?chain(tokenQuote('"',"atom",!1),stream,state):stream.match(idents)||stream.match(types)||stream.match(operators)||stream.match(conditionalOperators)||stream.match(indexingOperators)?"atom":(stream.eat(":"),"operator");if(stream.eat('"'))return chain(tokenQuote('"',"string",!0),stream,state);if("%"==stream.peek()){var phrase,embed,matched,delim,style="string",embed1=!0;if(stream.match("%r"))style="string.special",delim=stream.next();else if(stream.match("%w"))embed1=!1,delim=stream.next();else if(stream.match("%q"))embed1=!1,delim=stream.next();else if(delim=stream.match(/^%([^\w\s=])/))delim=delim[1];else if(stream.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/))return"meta";else if(stream.eat("%"))return"operator";return matching.hasOwnProperty(delim)&&(delim=matching[delim]),chain(tokenQuote(delim,style,embed1),stream,state)}return(matched=stream.match(/^<<-('?)([A-Z]\w*)\1/))?chain((phrase=matched[2],embed=!matched[1],function(stream,state){if(stream.sol()&&(stream.eatSpace(),stream.match(phrase)))return state.tokenize.pop(),"string";for(var escaped=!1;stream.peek();)if(escaped)stream.next(),escaped=!1;else{if(stream.match("{%",!1))return state.tokenize.push(tokenMacro("%","%")),"string";if(stream.match("{{",!1))return state.tokenize.push(tokenMacro("{","}")),"string";if(embed&&stream.match("#{",!1))return state.tokenize.push(tokenNest("#{","}","meta")),"string";escaped=embed&&"\\"==stream.next()}return"string"}),stream,state):stream.eat("'")?(stream.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/),stream.eat("'"),"atom"):stream.eat("0")?(stream.eat("x")?stream.match(/^[0-9a-fA-F_]+/):stream.eat("o")?stream.match(/^[0-7_]+/):stream.eat("b")&&stream.match(/^[01_]+/),"number"):stream.eat(/^\d/)?(stream.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/),"number"):stream.match(operators)?(stream.eat("="),"operator"):stream.match(conditionalOperators)||stream.match(anotherOperators)?"operator":(matched=stream.match(/[({[]/,!1))?chain(tokenNest(matched=matched[0],matching[matched],null),stream,state):stream.eat("\\")?(stream.next(),"meta"):(stream.next(),null)}function tokenNest(begin,end,style,started){return function(stream,state){if(!started&&stream.match(begin))return state.tokenize[state.tokenize.length-1]=tokenNest(begin,end,style,!0),state.currentIndent+=1,style;var nextStyle=tokenBase(stream,state);return stream.current()===end&&(state.tokenize.pop(),state.currentIndent-=1,nextStyle=style),nextStyle}}function tokenMacro(begin,end,started){return function(stream,state){return!started&&stream.match("{"+begin)?(state.currentIndent+=1,state.tokenize[state.tokenize.length-1]=tokenMacro(begin,end,!0),"meta"):stream.match(end+"}")?(state.currentIndent-=1,state.tokenize.pop(),"meta"):tokenBase(stream,state)}}function tokenFollowIdent(stream,state){return stream.eatSpace()?null:(stream.match(idents)?stream.eat(/[!?]/):stream.match(operators)||stream.match(conditionalOperators)||stream.match(indexingOperators),state.tokenize.pop(),"def")}function tokenFollowType(stream,state){return stream.eatSpace()?null:(stream.match(types),state.tokenize.pop(),"def")}function tokenQuote(end,style,embed){return function(stream,state){for(var escaped=!1;stream.peek();)if(escaped)stream.next(),escaped=!1;else{if(stream.match("{%",!1))return state.tokenize.push(tokenMacro("%","%")),style;if(stream.match("{{",!1))return state.tokenize.push(tokenMacro("{","}")),style;if(embed&&stream.match("#{",!1))return state.tokenize.push(tokenNest("#{","}","meta")),style;var ch=stream.next();if(ch==end)return state.tokenize.pop(),style;escaped=embed&&"\\"==ch}return style}}let crystal={name:"crystal",startState:function(){return{tokenize:[tokenBase],currentIndent:0,lastToken:null,lastStyle:null,blocks:[]}},token:function(stream,state){var style=state.tokenize[state.tokenize.length-1](stream,state),token=stream.current();return style&&"comment"!=style&&(state.lastToken=token,state.lastStyle=style),style},indent:function(state,textAfter,cx){return(textAfter=textAfter.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g,""),dedentKeywords.test(textAfter)||dedentPunctuals.test(textAfter))?cx.unit*(state.currentIndent-1):cx.unit*state.currentIndent},languageData:{indentOnInput:wordRegExp(dedentPunctualsArray.concat(dedentKeywordsArray),!0),commentTokens:{line:"#"}}}}}]);