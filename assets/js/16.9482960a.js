(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{425:function(e,t,a){e.exports=a.p+"assets/img/architecture.8b7d9920.svg"},709:function(e,t,a){"use strict";a.r(t);var r=a(9),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),r("p",[r("img",{attrs:{src:a(425),alt:"Kestra Architecture",title:"Kestra Architecture"}})]),e._v(" "),r("h2",{attrs:{id:"dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),r("p",[e._v("At the heart, Kestra have a pluggable system allowing to switch some dependencies, but for now there is only one production environments architecture available :")]),e._v(" "),r("h3",{attrs:{id:"kafka"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[e._v("#")]),e._v(" Kafka")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://kafka.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kafka"),r("OutboundLink")],1),e._v(" is the real main dependencies of Kestra, all the most important servers need to have a Kafka up & running. Kafka allowing Kestra to be an infinite scalable solution.")]),e._v(" "),r("h3",{attrs:{id:"elasticsearch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[e._v("#")]),e._v(" ElasticSearch")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElasticSearch"),r("OutboundLink")],1),e._v(" is the database of Kestra, allowing displaying, search, aggregate all the data from Kestra (Flow, executions, ...)")]),e._v(" "),r("h3",{attrs:{id:"storage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),r("p",[e._v("Kestra need to store some files (incoming or outgoing files) and this notion is included in the heart of Kestra. Nowadays, storage availability are backup by many file systems, we rely on these in order to guarantee scalability of Kestra.")]),e._v(" "),r("p",[e._v("The storage is a simple plugin that you need to include and configure, by default only a Local (not scalable) storage is available.")]),e._v(" "),r("p",[e._v("The storage is used can be used by any Kestra servers except the "),r("a",{attrs:{href:"#executor"}},[e._v("Executor")]),e._v(" & the "),r("a",{attrs:{href:"#indexer"}},[e._v("Indexer")]),e._v(" that don't need it.")]),e._v(" "),r("p",[e._v("Available storage are :")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/kestra-io/storage-minio",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Minio"),r("OutboundLink")],1),e._v(" for "),r("a",{attrs:{href:"https://min.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minio"),r("OutboundLink")],1),e._v(" compatible with "),r("a",{attrs:{href:"https://aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS S3"),r("OutboundLink")],1),e._v(" and all others "),r("em",[e._v("S3 Like")]),e._v(" storage")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/kestra-io/storage-gcs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage GCS"),r("OutboundLink")],1),e._v(" for "),r("a",{attrs:{href:"https://cloud.google.com/storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Storage"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"servers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#servers"}},[e._v("#")]),e._v(" Servers")]),e._v(" "),r("p",[e._v("Kestra consist of multiple servers that can be scaled independently:")]),e._v(" "),r("h3",{attrs:{id:"executor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#executor"}},[e._v("#")]),e._v(" Executor")]),e._v(" "),r("p",[e._v("Executors handle all executions and "),r("a",{attrs:{href:"../../developer-guide/flowable"}},[e._v("flowable tasks")]),e._v(". The only goal is to receive created execution and find what will be next tasks."),r("br"),e._v("\nThere isn't (and can't) heavy computing on this part. Only looking at current execution and find next tasks.")]),e._v(" "),r("p",[e._v("The executor also handle special execution case :")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"../../developer-guide/listeners"}},[e._v("Listeners")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/developer-guide/triggers/flow.html"}},[e._v("Flow Trigger")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"../../developer-guide/templates"}},[e._v("Template")])])]),e._v(" "),r("p",[e._v("Internally, the executor is a heavy "),r("a",{attrs:{href:"https://kafka.apache.org/documentation/streams/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kafka Stream"),r("OutboundLink")],1),e._v(". The executor processes all events coming from Kafka in the right order, keep an internal state of the execution and merge taskrun result coming from the worker."),r("br"),e._v("\nIt also detects a dead Worker and resubmit the task running by a dead worker.")]),e._v(" "),r("p",[e._v("Since the application is a Kafka Stream, the application can be scale infinitely (with the limit of partition count on Kafka) but since no heavy computation are done on the executor, this server doesn't use a lot of resources (except if you have a very high rate of execution).")]),e._v(" "),r("h3",{attrs:{id:"worker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#worker"}},[e._v("#")]),e._v(" Worker")]),e._v(" "),r("p",[e._v("Workers is where the task are done. Worker will receive task from Executor and will process then."),r("br"),e._v("\nSince tasks could be everything (heavy computation, simple api call), worker is ThreadPool where you can configure the amount of thread you need.")]),e._v(" "),r("p",[e._v("Internally, Worker are a simple "),r("a",{attrs:{href:"https://kafka.apache.org/documentation/#consumerapi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kafka Consumer"),r("OutboundLink")],1),e._v(" that will process any taskrun submitted. Worker will receive all task and dispatch internally in his Thread Pool."),r("br"),e._v("\nYou can also scale as you want workers and have many instance on multiple servers(with the limit of partition count on Kafka), each own with Thread Pool."),r("br"),e._v("\nIf a worker is dead, the "),r("em",[e._v("Executor")]),e._v(" will detect him and resubmit their current taskrun to another worker.")]),e._v(" "),r("h3",{attrs:{id:"scheduler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scheduler"}},[e._v("#")]),e._v(" Scheduler")]),e._v(" "),r("p",[e._v("Scheduler will handle most of the "),r("a",{attrs:{href:"../../developer-guide/triggers"}},[e._v("triggers")]),e._v(" (except the "),r("RouterLink",{attrs:{to:"/developer-guide/triggers/flow.html"}},[e._v("Flow Trigger handle by executor")]),e._v("). It will watch continuously all the triggers and detect if all the conditions is meet to trigger an Execution (submitted to Executor).")],1),e._v(" "),r("p",[e._v("Internally, Scheduler are 2 ThreadPool :")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("ScheduledExecutorService")]),e._v(" : that will tick every second and try to find an available job")]),e._v(" "),r("li",[r("strong",[e._v("CachedThreadPool")]),e._v(" : that will compute in a separate Thread for all the trigger")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("By default, Kestra will handle all date with your system timezone. You can change the timezone with "),r("a",{attrs:{href:"../administrator-guide/configuration/others#jvm-configuration"}},[e._v("JVM options")]),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"indexer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#indexer"}},[e._v("#")]),e._v(" Indexer")]),e._v(" "),r("p",[e._v("Indexer will watch for many "),r("em",[e._v("Kafka topic")]),e._v(" and will simply copy the content to "),r("a",{attrs:{href:"#repositories"}},[e._v("Repositories")]),e._v(". This will save to ElasticSearch all the execution & flow allowing to have a rich ui.")]),e._v(" "),r("h3",{attrs:{id:"webserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webserver"}},[e._v("#")]),e._v(" Webserver")]),e._v(" "),r("p",[e._v("Webserver will offer 2 main module in the same server :")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Api")]),e._v(": All the api allowing triggering execution for any systems, and to interact with Kestra.")]),e._v(" "),r("li",[r("strong",[e._v("Ui")]),e._v(": The ui is also served by the same webserver")])]),e._v(" "),r("p",[e._v("The webserver mostly interact with Elasticsearch in order to have a rich api / ui. It also interacts with Kafka in order to trigger new execution, follow execution in real-time, ...")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("As you understand, all the application is able to work only with Kafka and "),r("a",{attrs:{href:"#storage"}},[e._v("Storage")]),e._v(" (mostly except Scheduler)."),r("br"),e._v("\nElasticsearch is only available for the Web ui and if ElasticSearch is down, you are able to continue any workload on Kestra")])]),e._v(" "),r("h2",{attrs:{id:"plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),r("p",[e._v("Kestra core doesn't allow to handle many tasks type. We have included a "),r("a",{attrs:{href:"../../plugins"}},[e._v("Plugins")]),e._v(" systems that allow you to develop as many tasks as you need."),r("br"),e._v("\nA wide range of plugins will deliver by Kestra team !")]),e._v(" "),r("h2",{attrs:{id:"repositories"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#repositories"}},[e._v("#")]),e._v(" Repositories")]),e._v(" "),r("p",[e._v("Repositories are the internal way to fetch data. On production servers, it will fetch data from ElasticSearch. There is a memory repository than is used during internal Kestra unit test and have an incomplete api. Never use this one on production.")])])}),[],!1,null,null,null);t.default=s.exports}}]);