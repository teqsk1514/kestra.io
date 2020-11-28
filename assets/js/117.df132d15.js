(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{653:function(t,s,a){"use strict";a.r(s);var e=a(9),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"downloads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloads"}},[t._v("#")]),t._v(" Downloads")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.gcs.Downloads"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Download multiple files from a GCS bucket.")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Download a list of files and move it to an archive folders")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"downloads"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.gcs.Downloads"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bucket/kestra/files/\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MOVE\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("moveDirectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bucket/kestra/archive/\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" "),a("code",[t._v("action")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The action to do on find files")])]),t._v(" "),a("p",[t._v("Can be null, in this case no action is perform")]),t._v(" "),a("h3",{attrs:{id:"allversions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allversions"}},[t._v("#")]),t._v(" "),a("code",[t._v("allVersions")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("If set to "),a("code",[t._v("true")]),t._v(", lists all versions of a blob. The default is "),a("code",[t._v("false")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" "),a("code",[t._v("filter")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("BOTH")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The filter files or directory")])]),t._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),a("code",[t._v("from")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("blockquote",[a("p",[t._v("The directory to list")])]),t._v(" "),a("h3",{attrs:{id:"listingtype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listingtype"}},[t._v("#")]),t._v(" "),a("code",[t._v("listingType")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("DIRECTORY")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The listing type you want (like directory or recursive)")])]),t._v(" "),a("h3",{attrs:{id:"movedirectory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movedirectory"}},[t._v("#")]),t._v(" "),a("code",[t._v("moveDirectory")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The destination directory in case off "),a("code",[t._v("MOVE")])])]),t._v(" "),a("h3",{attrs:{id:"projectid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),a("code",[t._v("projectId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP project id")])]),t._v(" "),a("h3",{attrs:{id:"regexp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp"}},[t._v("#")]),t._v(" "),a("code",[t._v("regExp")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("A regexp to filter on full path")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"blobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blobs"}},[t._v("#")]),t._v(" "),a("code",[t._v("blobs")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("object")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The bucket of the downloaded file")])])])}),[],!1,null,null,null);s.default=r.exports}}]);