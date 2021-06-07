(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{821:function(t,e,s){"use strict";s.r(e);var r=s(9),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("\n     AbstractPython\n")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.scripts.AbstractPython"')]),t._v("\n")])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("blockquote",[s("p",[t._v("Execute a python script")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abstract_python"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.tasks.scripts.AbstractPython"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputFiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data.json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n          {"status": "OK"}')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("main.py")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    from kestra import Kestra\n    import json\n    import requests\n    import sys\n    result = json.loads(open(sys.argv[1]).read())\n    print(f\"python script {result['status']}\")\n    response = requests.get('http://google.com')\n    print(response.status_code)\n    Kestra.outputs({'status': response.status_code, 'text': response.text})")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pip.conf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n    # some specific pip repository configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" data.json\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requirements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" requests\n")])])]),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("h3",{attrs:{id:"args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#args"}},[t._v("#")]),t._v(" "),s("code",[t._v("args")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Python command args")])]),t._v(" "),s("p",[t._v("Arguments list to pass to main python script")]),t._v(" "),s("h3",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" "),s("code",[t._v("env")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Additional environnements variable to add for current process.")])]),t._v(" "),s("h3",{attrs:{id:"exitonfailed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exitonfailed"}},[t._v("#")]),t._v(" "),s("code",[t._v("exitOnFailed")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("boolean")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("true")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Exit if any non true return value")])]),t._v(" "),s("p",[t._v("This tells bash that it should exit the script if any statement returns a non-true return value."),s("br"),t._v("\nThe benefit of using -e is that it prevents errors snowballing into serious issues when they could have been caught earlier.")]),t._v(" "),s("h3",{attrs:{id:"files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" "),s("code",[t._v("files")])]),t._v(" "),s("p",[t._v("🔒 "),s("em",[t._v("Deprecated")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The list of files that will be uploaded to internal storage,")])]),t._v(" "),s("p",[t._v("use "),s("code",[t._v("outputsFiles")]),t._v(" property instead")]),t._v(" "),s("h3",{attrs:{id:"inputfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputfiles"}},[t._v("#")]),t._v(" "),s("code",[t._v("inputFiles")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Input files are extra files supplied by user that make it simpler organize code.")])]),t._v(" "),s("p",[t._v("Describe a files map that will be written and usable in execution context. In python execution context is in a temp folder, for bash scripts, you can reach files using a inputsDirectory variable like 'source "+t._s(t.inputsDirectory)+"/myfile.sh'")]),t._v(" "),s("h3",{attrs:{id:"interpreter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interpreter"}},[t._v("#")]),t._v(" "),s("code",[t._v("interpreter")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("/bin/sh")])]),t._v(" "),s("li",[s("strong",[t._v("Min length:")]),t._v(" "),s("code",[t._v("1")])])]),t._v(" "),s("p",[t._v("Interpreter to used")]),t._v(" "),s("h3",{attrs:{id:"interpreterargs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interpreterargs"}},[t._v("#")]),t._v(" "),s("code",[t._v("interpreterArgs")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("[-c]")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Interpreter args used")])]),t._v(" "),s("h3",{attrs:{id:"outputfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputfiles"}},[t._v("#")]),t._v(" "),s("code",[t._v("outputFiles")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Output file list that will be uploaded to internal storage")])]),t._v(" "),s("p",[t._v("List of key that will generate temporary files."),s("br"),t._v("\nOn the command, just can use with special variable named "),s("code",[t._v("outputFiles.key")]),t._v("."),s("br"),t._v("\nIf you add a files with "),s("code",[t._v('["first"]')]),t._v(", you can use the special vars "),s("code",[t._v("echo 1 >> {[ outputFiles.first }}")]),t._v(" and you used on others tasks using "),s("code",{pre:!0},[t._v("{{  outputs.task-id.files.first  }}")])]),t._v(" "),s("h3",{attrs:{id:"outputsfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputsfiles"}},[t._v("#")]),t._v(" "),s("code",[t._v("outputsFiles")])]),t._v(" "),s("p",[t._v("🔒 "),s("em",[t._v("Deprecated")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Deprecated Output file")])]),t._v(" "),s("p",[t._v("use "),s("code",[t._v("outputFiles")])]),t._v(" "),s("h3",{attrs:{id:"pythonpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pythonpath"}},[t._v("#")]),t._v(" "),s("code",[t._v("pythonPath")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("/usr/bin/python3")])]),t._v(" "),s("li",[s("strong",[t._v("Min length:")]),t._v(" "),s("code",[t._v("1")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The python interpreter to use")])]),t._v(" "),s("p",[t._v("Set the python interpreter path to use")]),t._v(" "),s("h3",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" "),s("code",[t._v("requirements")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("array")])]),t._v(" "),s("li",[s("strong",[t._v("SubType:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Requirements are python dependencies to add to the python execution process")])]),t._v(" "),s("p",[t._v("Python dependencies list to setup in the virtualenv, in the same format than requirements.txt")])])}),[],!1,null,null,null);e.default=a.exports}}]);