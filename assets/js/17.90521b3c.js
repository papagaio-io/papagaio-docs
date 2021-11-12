(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{389:function(e,a,t){"use strict";t.r(a);var o=t(28),i=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"git-source-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-source-commands"}},[e._v("#")]),e._v(" Git Source commands")]),e._v(" "),t("p",[e._v("In order to login in Papagaio you have to add your Git Source using the command below.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Usage:\n  papagaio gitsource [command]\n\nAvailable Commands:\n  add         \n  remove      \n  update      \n\nFlags:\n      --agola-client-id string       agola oauth2 client id\n      --agola-client-secret string   agola oauth2 client secret\n      --agola-remotesource string    agola remotesource name\n      --delete-remotesource          true to delete the Agola remotesource\n      --gateway-url string           papagaio gateway URL(optional)\n      --git-api-url string           api url\n      --git-client-id string         git oauth2 client id\n      --git-client-secret string     git oauth2 client secret\n  -h, --help                         help for gitsource\n      --name string                  gitSource name\n      --token string                 token\n      --type string                  git type(gitea, github, gitlab)\n\nUse "papagaio gitsource [command] --help" for more information about a command.\n')])])]),t("h2",{attrs:{id:"add-a-git-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-a-git-source"}},[e._v("#")]),e._v(" Add a Git Source")]),e._v(" "),t("p",[e._v("To add a git source in papagaio using an existing Agola remote source:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("papagaio gitsource add  --name {gitSourceName} \n                        --type gitea \n                        --git-api-url {gitUrl} \n                        --git-client-id {gitClientId} \n                        --git-client-secret {gitClientSecret} \n                        --agola-remotesource {agolaRemoteSource} \n                        --token {papagaioAdminToken}\n")])])]),t("h2",{attrs:{id:"update-git-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-git-source"}},[e._v("#")]),e._v(" Update Git Source")]),e._v(" "),t("p",[e._v("To update a git source")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("papagaio gitsource update   --name {gitSourceName} \n                            --type gitea \n                            --git-api-url {gitUrl} \n                            --git-client-id {gitClientId} \n                            --git-client-secret {gitClientSecret} \n                            --agola-remotesource {agolaRemoteSource} \n                            --token {papagaioAdminToken}\n")])])]),t("h2",{attrs:{id:"remove-git-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-git-source"}},[e._v("#")]),e._v(" Remove Git Source")]),e._v(" "),t("p",[e._v("To remove a git source")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("papagaio gitsource remove   --name {gitSourceName}\n                            --token {papagaioAdminToken}\n")])])]),t("p",[e._v("To remove a git source also in Agola")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("papagaio gitsource remove   --name {gitSourceName}\n                            --delete-remotesource\n                            --token {papagaioAdminToken}\n")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);