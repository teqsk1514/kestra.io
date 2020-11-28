(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{701:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"deployment-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-with-docker"}},[t._v("#")]),t._v(" Deployment with Docker")]),t._v(" "),a("p",[t._v("The quickest way to install Kestra is to use "),a("em",[t._v("Docker Compose")]),t._v(". It will start a "),a("strong",[t._v("non production")]),t._v(" Kestra with all the dependency.")]),t._v(" "),a("h2",{attrs:{id:"before-you-begin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-you-begin"}},[t._v("#")]),t._v(" Before you begin")]),t._v(" "),a("p",[t._v("Make sure you have already installed :")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Compose"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"launch-kestra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-kestra"}},[t._v("#")]),t._v(" Launch Kestra")]),t._v(" "),a("ul",[a("li",[t._v("Download the compose file "),a("a",{attrs:{href:"https://github.com/kestra-io/kestra/blob/develop/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Run "),a("code",[t._v("docker-compose up")])]),t._v(" "),a("li",[t._v("Open "),a("code",[t._v("http://localhost:8080")]),t._v(" on your browser")])]),t._v(" "),a("p",[t._v("It will start all the dependencies with a preconfigured Kestra that is connected to all!")]),t._v(" "),a("p",[t._v("Kestra will start with "),a("em",[t._v("Standalone")]),t._v(" server (all the different "),a("a",{attrs:{href:"../../architecture"}},[t._v("servers")]),t._v(" in one JVM)."),a("br"),t._v("\nThis is clearly not  for "),a("strong",[t._v("production")]),t._v(" workload but sufficient to test on a local computer.")]),t._v(" "),a("h2",{attrs:{id:"docker-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-image"}},[t._v("#")]),t._v(" Docker Image")]),t._v(" "),a("h3",{attrs:{id:"use-official-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-official-image"}},[t._v("#")]),t._v(" Use official image")]),t._v(" "),a("p",[t._v("The Kestra docker image is available in "),a("a",{attrs:{href:"https://hub.docker.com/r/kestra/kestra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker hub"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("We provide 2 images :")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("kestra/kestra:latest")])]),t._v(" "),a("li",[a("code",[t._v("kestra/kestra:latest-full")])])]),t._v(" "),a("p",[t._v("The docker image is based on "),a("code",[t._v("openjdk:11-jre-slim")]),t._v(" docker image.")]),t._v(" "),a("h4",{attrs:{id:"kestra-kestra-latest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kestra-kestra-latest"}},[t._v("#")]),t._v(" "),a("code",[t._v("kestra/kestra:latest")])]),t._v(" "),a("p",[t._v("This image :")]),t._v(" "),a("ul",[a("li",[t._v("does't contain any kestra plugins.")]),t._v(" "),a("li",[t._v("does't contain a lot of binaries to work with your "),a("RouterLink",{attrs:{to:"/plugins/core/tasks/scripts/org.kestra.core.tasks.scripts.Bash.html"}},[t._v("Bash task")]),t._v(".")],1),t._v(" "),a("li",[t._v("does't contain some binaries for "),a("a",{attrs:{href:"https://kestra.io/plugins/core/tasks/scripts/org.kestra.core.tasks.scripts.Python.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python task"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://kestra.io/plugins/core/tasks/scripts/org.kestra.core.tasks.scripts.Node.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node task"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"kestra-kestra-latest-full"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kestra-kestra-latest-full"}},[t._v("#")]),t._v(" "),a("code",[t._v("kestra/kestra:latest-full")])]),t._v(" "),a("p",[t._v("This image contains all the kestra plugins and all the binaries for "),a("a",{attrs:{href:"https://kestra.io/plugins/core/tasks/scripts/org.kestra.core.tasks.scripts.Python.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python task"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://kestra.io/plugins/core/tasks/scripts/org.kestra.core.tasks.scripts.Node.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node task"),a("OutboundLink")],1),t._v("."),a("br"),t._v("\nTake care that this image will always contain the last version of plugins that can have some breaking change.")]),t._v(" "),a("h3",{attrs:{id:"create-a-new-image-with-more-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-image-with-more-binaries"}},[t._v("#")]),t._v(" Create a new image with more binaries")]),t._v(" "),a("p",[t._v("If the base or full image don't contain binaries"),a("br"),t._v("\nYou can easily create a new one with the "),a("code",[t._v("DockerFile")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" IMAGE_TAG=latest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" kestra/kestra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$IMAGE_TAG\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p /app/plugins && \\\n  apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y && \\\n  apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("recommends golang && \\\n  apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get clean && rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rf /var/lib/apt/lists/* /var/tmp/*\n")])])]),a("h3",{attrs:{id:"create-a-new-image-with-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-image-with-plugins"}},[t._v("#")]),t._v(" Create a new image with plugins")]),t._v(" "),a("p",[t._v("By default, the kestra base docker image don't contain any plugins, but you can create a new image with all the plugins you want :")]),t._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ARG")]),t._v(" IMAGE_TAG=latest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" kestra/kestra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$IMAGE_TAG\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" /app/kestra plugins install \\\n  org.kestra.task.notifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("notifications"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("LATEST \\\n  org.kestra.storage.gcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("LATEST \\\n  org.kestra.task.gcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("LATEST \n")])])]),a("h3",{attrs:{id:"docker-image-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-image-tag"}},[t._v("#")]),t._v(" Docker image tag")]),t._v(" "),a("p",[t._v("We provide a 3 tags for docker image :")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("latest")]),t._v(": that will contain the default latest image with its full variant "),a("code",[t._v("latest-full")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("release")]),t._v(": an image with preview of the next release  with its full variant "),a("code",[t._v("release-full")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("develop")]),t._v(": an image based on "),a("code",[t._v("develop")]),t._v(" branch that will change every day and contain all "),a("strong",[t._v("unstable")]),t._v(" feature we are working and with its full variant "),a("code",[t._v("develop-full")]),t._v(".")])])])}),[],!1,null,null,null);e.default=r.exports}}]);