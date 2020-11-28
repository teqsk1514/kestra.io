(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{730:function(t,e,a){"use strict";a.r(e);var s=a(9),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"helpers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helpers"}},[t._v("#")]),t._v(" Helpers")]),t._v(" "),a("p",[t._v("Kestra have some "),a("em",[t._v("helpers")]),t._v(" function that can help during flow development.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("These helpers are only available during flow development in order to test on your local installation."),a("br"),t._v("\nYou must expand the flow definition before sending it to your server.")])]),t._v(" "),a("h2",{attrs:{id:"expand-the-flow-to-be-uploaded-to-the-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expand-the-flow-to-be-uploaded-to-the-server"}},[t._v("#")]),t._v(" Expand the flow to be uploaded to the server")]),t._v(" "),a("p",[t._v("There is a convient task on Kestra executable that allow validation of the current flow and"),a("br"),t._v("\nwill output the expanded version of your flow without any helper :")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./kestra flow validate path-to-your-flow.yaml \n")])])]),a("h2",{attrs:{id:"file-txt-include-another-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-txt-include-another-file"}},[t._v("#")]),t._v(" "),a("code",[t._v("[[> file.txt]]")]),t._v(": Include another file")]),t._v(" "),a("p",[t._v("When doing a large flow, the flow can be messy when a lot of tasks are defined and"),a("br"),t._v("\nspecially when you have some big text inside the flow (example, sql statement, ...).")]),t._v(" "),a("p",[t._v("Let's take an example :")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" include\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    Lorem Ipsum is simply dummy text of the printing \n    .....\n    500 lines later")]),t._v("\n")])])]),a("p",[t._v("You can replace the flow with this one :")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" include\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[[> lorem.txt]]"')]),t._v("\n")])])]),a("p",[t._v("and have a local file "),a("code",[t._v("lorem.txt")]),t._v(" with the large content.")]),t._v(" "),a("p",[t._v("The path can be :")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("[[> lorem.txt]]")]),t._v(": a relative path from the flow (flow.yaml & lorem.txt are on the same directory)")]),t._v(" "),a("li",[a("code",[t._v("[[> /path/to/lorem.txt]]")]),t._v(": an absolute path")]),t._v(" "),a("li",[a("code",[t._v("[[> path/to/lorem.txt]]")]),t._v(": a relative path from the flow (flow.yaml with a subdirectory "),a("code",[t._v("path/to/")]),t._v(")")])])])}),[],!1,null,null,null);e.default=n.exports}}]);