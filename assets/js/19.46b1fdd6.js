(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{571:function(t,e,s){t.exports=s.p+"assets/img/flow-1.e551b909.png"},572:function(t,e,s){t.exports=s.p+"assets/img/flow-2.d7aac868.png"},573:function(t,e,s){t.exports=s.p+"assets/img/flow-3.fc03e84e.png"},574:function(t,e,s){t.exports=s.p+"assets/img/execution-1.4e39bb0a.png"},575:function(t,e,s){t.exports=s.p+"assets/img/execution-2.6aac671a.png"},576:function(t,e,s){t.exports=s.p+"assets/img/execution-3.a14308b9.png"},759:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("h2",{attrs:{id:"before-you-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-you-begin"}},[t._v("#")]),t._v(" Before you begin")]),t._v(" "),a("p",[t._v("Make sure you have already installed:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"launch-kestra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-kestra"}},[t._v("#")]),t._v(" Launch Kestra")]),t._v(" "),a("ul",[a("li",[t._v("Download the compose file "),a("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/develop/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" and save it with the name "),a("code",[t._v("docker-compose.yml")]),t._v(", for linux and macos, you can run "),a("code",[t._v("wget https://raw.githubusercontent.com/kestra-io/kestra/develop/docker-compose.yml")])]),t._v(" "),a("li",[t._v("Run "),a("code",[t._v("docker-compose pull")])]),t._v(" "),a("li",[t._v("Run "),a("code",[t._v("docker-compose up -d")])]),t._v(" "),a("li",[t._v("Open "),a("code",[t._v("http://localhost:8080")]),t._v(" on your browser")])]),t._v(" "),a("h2",{attrs:{id:"create-your-first-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-flow"}},[t._v("#")]),t._v(" Create your first flow")]),t._v(" "),a("p",[t._v("The default installation is empty and don't contain any flows.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(571),alt:"Flow list"}})]),t._v(" "),a("p",[t._v("We will create the first one :")]),t._v(" "),a("p",[a("img",{attrs:{src:s(572),alt:"Flow Create"}})]),t._v(" "),a("ul",[a("li",[t._v("Click on the "),a("code",[t._v("Create")]),t._v(" button at the button")]),t._v(" "),a("li",[t._v("Paste the flow below")]),t._v(" "),a("li",[t._v("Click on save")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logs\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.tests\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t1\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" first "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task.id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t2\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" second "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task.type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" WARN\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t3\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" third "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("flow.id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ERROR\n")])])]),a("p",[t._v("You will see the Topology of your flow as graph on "),a("code",[t._v("Overview")]),t._v(" tabs.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(573),alt:"Flow Topology"}})]),t._v(" "),a("h2",{attrs:{id:"execute-your-first-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute-your-first-flow"}},[t._v("#")]),t._v(" Execute your first flow")]),t._v(" "),a("p",[t._v("Now let's run our first flow and see it running :")]),t._v(" "),a("ul",[a("li",[t._v("Now hit the button "),a("code",[t._v("Execute")]),t._v(" on top Tabs.")]),t._v(" "),a("li",[t._v("You will see in Real time the execution of the current flow"),a("br"),t._v(" "),a("img",{attrs:{src:s(574),alt:"Execution Gantt"}})]),t._v(" "),a("li",[t._v("Look at the log of the current tasks on "),a("code",[t._v("Logs")]),a("br"),t._v(" "),a("img",{attrs:{src:s(575),alt:"Execution Log"}})]),t._v(" "),a("li",[t._v("And watch the topology of the current execution."),a("br"),t._v(" "),a("img",{attrs:{src:s(576),alt:"Execution Topology"}})])]),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),a("p",[t._v("Now, you are ready to use Kestra !")]),t._v(" "),a("p",[t._v("Now I suggest you to read some documentations in order:")]),t._v(" "),a("ul",[a("li",[t._v("to understand Kestra "),a("a",{attrs:{href:"../concepts"}},[t._v("concepts")]),t._v(".")]),t._v(" "),a("li",[t._v("read the "),a("a",{attrs:{href:"../developer-guide"}},[t._v("Developer Guide")]),t._v(" to understand how to code your own flow.")]),t._v(" "),a("li",[t._v("Look at "),a("a",{attrs:{href:"../../plugins"}},[t._v("Plugins")]),t._v(" to have some real task .")]),t._v(" "),a("li",[a("a",{attrs:{href:"../administrator-guide"}},[t._v("Deploy")]),t._v(" your kestra instance to real environments.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);