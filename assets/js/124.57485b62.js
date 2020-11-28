(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{630:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.jdbc.mysql.Query"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("MySQL Query Task.")])]),t._v(" "),a("p",[t._v("Currently supported types are the following ones :")]),t._v(" "),a("ul",[a("li",[t._v("serial,")]),t._v(" "),a("li",[t._v("tinyint,")]),t._v(" "),a("li",[t._v("char(n),")]),t._v(" "),a("li",[t._v("varchar(n),")]),t._v(" "),a("li",[t._v("text,")]),t._v(" "),a("li",[t._v("bigint,")]),t._v(" "),a("li",[t._v("bit(n),")]),t._v(" "),a("li",[t._v("float,")]),t._v(" "),a("li",[t._v("double,")]),t._v(" "),a("li",[t._v("numeric,")]),t._v(" "),a("li",[t._v("decimal,")]),t._v(" "),a("li",[t._v("date,")]),t._v(" "),a("li",[t._v("datetime(n),")]),t._v(" "),a("li",[t._v("time,")]),t._v(" "),a("li",[t._v("timestamp(n),")]),t._v(" "),a("li",[t._v("year(n),")]),t._v(" "),a("li",[t._v("json,")]),t._v(" "),a("li",[t._v("blob")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Request a PostgresSQL Database and fetch a row as outputs")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.jdbc.mysql.Query"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("postgresql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("56982/\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pg_passwd\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" select * from mysql_types\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetchOne")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" "),a("code",[t._v("fetch")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to fetch the data from the query result to the task output This parameter is evaluated after 'fetchOne' and 'store'.")])]),t._v(" "),a("h3",{attrs:{id:"fetchone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetchone"}},[t._v("#")]),t._v(" "),a("code",[t._v("fetchOne")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to fetch only one data row from the query result to the task output. This parameter is evaluated before 'store' and 'fetch'.")])]),t._v(" "),a("h3",{attrs:{id:"password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[t._v("#")]),t._v(" "),a("code",[t._v("password")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The database user's password")])]),t._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" "),a("code",[t._v("sql")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The sql query to run")])]),t._v(" "),a("h3",{attrs:{id:"store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" "),a("code",[t._v("store")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether to fetch data row from the query result to a file in internal storage. File will be saved as Amazon Ion (text format)."),a("br"),t._v("\nSee "),a("a",{attrs:{href:"http://amzn.github.io/ion-docs/"}},[t._v("Amazon Ion documentation")]),t._v(" This parameter is evaluated after 'fetchOne' but before 'fetch'.")])]),t._v(" "),a("h3",{attrs:{id:"timezoneid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timezoneid"}},[t._v("#")]),t._v(" "),a("code",[t._v("timeZoneId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The time zone id to use for date/time manipulation. Default value is the worker default zone id.")])]),t._v(" "),a("h3",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" "),a("code",[t._v("url")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The jdbc url to connect to the database")])]),t._v(" "),a("h3",{attrs:{id:"username"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[t._v("#")]),t._v(" "),a("code",[t._v("username")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The database user")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row"}},[t._v("#")]),t._v(" "),a("code",[t._v("row")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Map containing the first row of fetched data")])]),t._v(" "),a("p",[t._v("Only populated if 'fetchOne' parameter is set to true.")]),t._v(" "),a("h3",{attrs:{id:"rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" "),a("code",[t._v("rows")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Lit of map containing rows of fetched data")])]),t._v(" "),a("p",[t._v("Only populated if 'fetch' parameter is set to true.")]),t._v(" "),a("h3",{attrs:{id:"size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" "),a("code",[t._v("size")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The size of the fetched rows")])]),t._v(" "),a("p",[t._v("Only populated if 'store' or 'fetch' parameter is set to true.")]),t._v(" "),a("h3",{attrs:{id:"uri"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" "),a("code",[t._v("uri")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The url of the result file on kestra storage (.ion file / Amazon Ion text format)")])]),t._v(" "),a("p",[t._v("Only populated if 'store' is set to true.")])])}),[],!1,null,null,null);e.default=r.exports}}]);