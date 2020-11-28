(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{667:function(e,t,r){"use strict";r.r(t);var a=r(9),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"csvreader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#csvreader"}},[e._v("#")]),e._v(" CsvReader")]),e._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org.kestra.task.serdes.csv.CsvReader"')]),e._v("\n")])])]),r("blockquote",[r("p",[e._v("Read a csv file and write it to an ion serialized data file.")])]),e._v(" "),r("h2",{attrs:{id:"inputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),r("h3",{attrs:{id:"charset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#charset"}},[e._v("#")]),e._v(" "),r("code",[e._v("charset")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("string")])]),e._v(" "),r("li",[r("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),r("li",[r("strong",[e._v("Required:")]),e._v(" ❌")]),e._v(" "),r("li",[r("strong",[e._v("Default:")]),e._v(" "),r("code",[e._v("UTF-8")])])]),e._v(" "),r("blockquote",[r("p",[e._v("The name of a supported charset")])]),e._v(" "),r("p",[e._v("Default value is UTF-8.")]),e._v(" "),r("h3",{attrs:{id:"errorondifferentfieldcount"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#errorondifferentfieldcount"}},[e._v("#")]),e._v(" "),r("code",[e._v("errorOnDifferentFieldCount")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("boolean")])]),e._v(" "),r("li",[r("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),r("li",[r("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),r("blockquote",[r("p",[e._v("Specifies if an exception should be thrown, if CSV data contains different field count (default: false)")])]),e._v(" "),r("h3",{attrs:{id:"fieldseparator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fieldseparator"}},[e._v("#")]),e._v(" "),r("code",[e._v("fieldSeparator")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("string")])]),e._v(" "),r("li",[r("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),r("li",[r("strong",[e._v("Required:")]),e._v(" ❌")]),e._v(" "),r("li",[r("strong",[e._v("Default:")]),e._v(" "),r("code",[e._v(",")])])]),e._v(" "),r("blockquote",[r("p",[e._v("The field separator character (default: ',' - comma)")])]),e._v(" "),r("h3",{attrs:{id:"from"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[e._v("#")]),e._v(" "),r("code",[e._v("from")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("string")])]),e._v(" "),r("li",[r("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),r("li",[r("strong",[e._v("Required:")]),e._v(" ✔️")])]),e._v(" "),r("blockquote",[r("p",[e._v("Source file URI")])]),e._v(" "),r("h3",{attrs:{id:"header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" "),r("code",[e._v("header")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("boolean")])]),e._v(" "),r("li",[r("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),r("li",[r("strong",[e._v("Required:")]),e._v(" ❌")]),e._v(" "),r("li",[r("strong",[e._v("Default:")]),e._v(" "),r("code",[e._v("true")])])]),e._v(" "),r("blockquote",[r("p",[e._v("Specifies if the first line should be the header (default: false)")])]),e._v(" "),r("h3",{attrs:{id:"skipemptyrows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#skipemptyrows"}},[e._v("#")]),e._v(" "),r("code",[e._v("skipEmptyRows")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("boolean")])]),e._v(" "),r("li",[r("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),r("li",[r("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),r("blockquote",[r("p",[e._v("Specifies if empty rows should be skipped (default: true)")])]),e._v(" "),r("h3",{attrs:{id:"skiprows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#skiprows"}},[e._v("#")]),e._v(" "),r("code",[e._v("skipRows")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("integer")])]),e._v(" "),r("li",[r("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),r("li",[r("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),r("blockquote",[r("p",[e._v("Number of lines to skip at the start of the file")])]),e._v(" "),r("h3",{attrs:{id:"textdelimiter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#textdelimiter"}},[e._v("#")]),e._v(" "),r("code",[e._v("textDelimiter")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("string")])]),e._v(" "),r("li",[r("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),r("li",[r("strong",[e._v("Required:")]),e._v(" ❌")]),e._v(" "),r("li",[r("strong",[e._v("Default:")]),e._v(" "),r("code",[e._v('"')])])]),e._v(" "),r("blockquote",[r("p",[e._v("The text delimiter character (default: '\"' - double quotes)")])]),e._v(" "),r("h2",{attrs:{id:"outputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),r("h3",{attrs:{id:"uri"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[e._v("#")]),e._v(" "),r("code",[e._v("uri")])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Type:")]),e._v(" "),r("mark",[e._v("object")])])]),e._v(" "),r("blockquote",[r("p",[e._v("URI of a temporary result file")])])])}),[],!1,null,null,null);t.default=s.exports}}]);