__NUXT_JSONP__("/api/configuration-hooks", {data:[{},{path:"\u002Fzh\u002Fapi\u002Fconfiguration-hooks",section:"api",page:{attrs:{title:"API: The hooks Property",description:"hooks是Nuxt模块中通常使用的Nuxt事件的监听器，但也可以在`'Nuxt.config.js'`中使用。"},body:"\u003Ch1 id=\"hooks-属性\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#hooks-属性\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003Ehooks 属性\u003C\u002Fh1\u003E\u003Cul\u003E\n\u003Cli\u003E类型: \u003Ccode\u003EObject\u003C\u002Fcode\u003E\u003Cblockquote\u003E\n\u003Cp\u003Ehooks是\u003Ca href=\"\u002Fapi\u002Finternals\"\u003ENuxt事件的监听器\u003C\u002Fa\u003E，这些事件通常在Nuxt模块中使用，但也可以在nuxt.config.js中使用。\u003Ca href=\"\u002Fapi\u002Finternals\"\u003E了解更多\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E例如 (\u003Ccode\u003Enuxt.config.js\u003C\u002Fcode\u003E):\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E fs \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E&#x27;fs&#x27;\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E path \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E&#x27;path&#x27;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"hljs-keyword\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Edefault\u003C\u002Fspan\u003E {\n  \u003Cspan class=\"hljs-attr\"\u003Ehooks\u003C\u002Fspan\u003E: {\n    \u003Cspan class=\"hljs-attr\"\u003Ebuild\u003C\u002Fspan\u003E: {\n      done (builder) {\n        \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E extraFilePath = path.join(builder.nuxt.options.buildDir, \u003Cspan class=\"hljs-string\"\u003E&#x27;extra-file&#x27;\u003C\u002Fspan\u003E)\n        fs.writeFileSync(extraFilePath, \u003Cspan class=\"hljs-string\"\u003E&#x27;Something extra&#x27;\u003C\u002Fspan\u003E)\n      }\n    }\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E在内部，hooks遵循使用冒号的命名模式(例如，\u003Ccode\u003Ebuild:done\u003C\u002Fcode\u003E)。为了便于配置，当使用\u003Ccode\u003Enuxt.config.js\u003C\u002Fcode\u003E(如上所示)设置自己的钩子时，可以将它们构造为分层对象。有关它们如何工作的更多详细信息，请参考\u003Ca href=\"\u002Fapi\u002Finternals\"\u003ENuxt Internals\u003C\u002Fa\u003E。\u003C\u002Fp\u003E\n\u003Ch2 id=\"hooks-列表\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#hooks-列表\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003Ehooks 列表\u003C\u002Fh2\u003E\u003Cul\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fnuxtjs.org\u002Fapi\u002Finternals-nuxt#hooks\"\u003ENuxt hooks\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fnuxtjs.org\u002Fapi\u002Finternals-renderer#hooks\"\u003ERenderer hooks\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fnuxtjs.org\u002Fapi\u002Finternals-module-container#hooks\"\u003EModulesContainer hooks\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fnuxtjs.org\u002Fapi\u002Finternals-builder#hooks\"\u003EBuilder hooks\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fnuxtjs.org\u002Fapi\u002Finternals-generator#hooks\"\u003EGenerator hooks\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch2 id=\"例子\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#例子\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E例子\u003C\u002Fh2\u003E\u003Ch3 id=\"不在root上时重定向到-router-base\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#不在root上时重定向到-router-base\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E不在root上时重定向到 router.base\u003C\u002Fh3\u003E\u003Cp\u003ELet´s say you want to serve pages as \u003Ccode\u003E\u002Fportal\u003C\u002Fcode\u003E instead of \u003Ccode\u003E\u002F\u003C\u002Fcode\u003E.\n假设您希望将页面作为 \u003Ccode\u003E\u002Fportal\u003C\u002Fcode\u003E 而不是 \u003Ccode\u003E\u002F\u003C\u002Fcode\u003E 来提供。\n这可能是一个边缘情况， _nuxt.config.js_’ \u003Ccode\u003Erouter.base\u003C\u002Fcode\u003E用于当Web服务器,服务Nuxt而不是域根目录时。\u003C\u002Fp\u003E\n\u003Cp\u003E但是当在本地开发时，遇到 _localhost_，当router.base不是 \u002F 返回404时。为了防止这种情况，你可以设置一个Hook。\u003C\u002Fp\u003E\n\u003Cp\u003E也许重定向不是生产网站的最佳用例，但这将有助于您利用Hooks。\u003C\u002Fp\u003E\n\u003Cp\u003E首先，你\u003Ca href=\"\u002Fapi\u002Fconfiguration-router#base\"\u003E可以 改变 \u003Ccode\u003Erouter.base\u003C\u002Fcode\u003E\u003C\u002Fa\u003E;更新你的nuxt.config.js：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F nuxt.config.js\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E hooks \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E&#x27;.\u002Fhooks&#x27;\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Edefault\u003C\u002Fspan\u003E {\n  \u003Cspan class=\"hljs-attr\"\u003Erouter\u003C\u002Fspan\u003E: {\n    \u003Cspan class=\"hljs-attr\"\u003Ebase\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;\u002Fportal&#x27;\u003C\u002Fspan\u003E\n  }\n  \u003Cspan class=\"hljs-attr\"\u003Ehooks\u003C\u002Fspan\u003E: hooks(\u003Cspan class=\"hljs-built_in\"\u003Ethis\u003C\u002Fspan\u003E)\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E然后，创建一些文件;\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003Ehooks\u002Findex.js\u003C\u002Fcode\u003E, Hooks 模块\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F file: hooks\u002Findex.js\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E render \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E&#x27;.\u002Frender&#x27;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"hljs-keyword\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Edefault\u003C\u002Fspan\u003E nuxtConfig =&gt; ({\n  \u003Cspan class=\"hljs-attr\"\u003Erender\u003C\u002Fspan\u003E: render(nuxtConfig)\n})\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003Ehooks\u002Frender.js\u003C\u002Fcode\u003E, 渲染 hook\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F file: hooks\u002Frender.js\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E redirectRootToPortal \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E&#x27;.\u002Froute-redirect-portal&#x27;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"hljs-keyword\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Edefault\u003C\u002Fspan\u003E (nuxtConfig) =&gt; {\n  \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E router = \u003Cspan class=\"hljs-built_in\"\u003EReflect\u003C\u002Fspan\u003E.has(nuxtConfig, \u003Cspan class=\"hljs-string\"\u003E&#x27;router&#x27;\u003C\u002Fspan\u003E) ? nuxtConfig.router : {}\n  \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E base = \u003Cspan class=\"hljs-built_in\"\u003EReflect\u003C\u002Fspan\u003E.has(router, \u003Cspan class=\"hljs-string\"\u003E&#x27;base&#x27;\u003C\u002Fspan\u003E) ? router.base : \u003Cspan class=\"hljs-string\"\u003E&#x27;\u002Fportal&#x27;\u003C\u002Fspan\u003E\n\n  \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E {\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F**\n     * &#x27;render:setupMiddleware&#x27;\n     * {@link node_modules\u002Fnuxt\u002Flib\u002Fcore\u002Frenderer.js}\n     *\u002F\u003C\u002Fspan\u003E\n    setupMiddleware (app) {\n      app.use(\u003Cspan class=\"hljs-string\"\u003E&#x27;\u002F&#x27;\u003C\u002Fspan\u003E, redirectRootToPortal(base))\n    }\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003E\u003Ccode\u003Ehooks\u002Froute-redirect-portal.js\u003C\u002Fcode\u003E, 中间件本身\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F file: hooks\u002Froute-redirect-portal.js\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"hljs-comment\"\u003E\u002F**\n * Nuxt middleware hook to redirect from \u002F to \u002Fportal (or whatever we set in nuxt.config.js router.base)\n *\n * Should be the same version as connect\n * {\u003Cspan class=\"hljs-doctag\"\u003E@link \u003C\u002Fspan\u003Enode_modules\u002Fconnect\u002Fpackage.json}\n *\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E parseurl \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E&#x27;parseurl&#x27;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"hljs-comment\"\u003E\u002F**\n * Connect middleware to handle redirecting to desired Web Applicatin Context Root.\n *\n * Notice that Nuxt docs lacks explaning how to use hooks.\n * This is a sample router to help explain.\n *\n * See nice implementation for inspiration:\n * - https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Fblob\u002Fdev\u002Fexamples\u002Fwith-cookies\u002Fplugins\u002Fcookies.js\n * - https:\u002F\u002Fgithub.com\u002Fyyx990803\u002Flaunch-editor\u002Fblob\u002Fmaster\u002Fpackages\u002Flaunch-editor-middleware\u002Findex.js\n *\n * [http_class_http_clientrequest]: https:\u002F\u002Fnodejs.org\u002Fapi\u002Fhttp.html#http_class_http_clientrequest\n * [http_class_http_serverresponse]: https:\u002F\u002Fnodejs.org\u002Fapi\u002Fhttp.html#http_class_http_serverresponse\n *\n * \u003Cspan class=\"hljs-doctag\"\u003E@param \u003Cspan class=\"hljs-type\"\u003E{http.ClientRequest}\u003C\u002Fspan\u003E \u003C\u002Fspan\u003Ereq Node.js internal client request object [http_class_http_clientrequest]\n * \u003Cspan class=\"hljs-doctag\"\u003E@param \u003Cspan class=\"hljs-type\"\u003E{http.ServerResponse}\u003C\u002Fspan\u003E \u003C\u002Fspan\u003Eres Node.js internal response [http_class_http_serverresponse]\n * \u003Cspan class=\"hljs-doctag\"\u003E@param \u003Cspan class=\"hljs-type\"\u003E{Function}\u003C\u002Fspan\u003E \u003C\u002Fspan\u003Enext middleware callback\n *\u002F\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Edefault\u003C\u002Fspan\u003E desiredContextRoot =&gt;\n  \u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Efunction\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-title\"\u003EprojectHooksRouteRedirectPortal\u003C\u002Fspan\u003E (\u003Cspan class=\"hljs-params\"\u003Ereq, res, next\u003C\u002Fspan\u003E) \u003C\u002Fspan\u003E{\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E desiredContextRootRegExp = \u003Cspan class=\"hljs-keyword\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-built_in\"\u003ERegExp\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-string\"\u003E`^\u003Cspan class=\"hljs-subst\"\u003E${desiredContextRoot}\u003C\u002Fspan\u003E`\u003C\u002Fspan\u003E)\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E _parsedUrl = \u003Cspan class=\"hljs-built_in\"\u003EReflect\u003C\u002Fspan\u003E.has(req, \u003Cspan class=\"hljs-string\"\u003E&#x27;_parsedUrl&#x27;\u003C\u002Fspan\u003E) ? req._parsedUrl : \u003Cspan class=\"hljs-literal\"\u003Enull\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E url = _parsedUrl !== \u003Cspan class=\"hljs-literal\"\u003Enull\u003C\u002Fspan\u003E ? _parsedUrl : parseurl(req)\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E startsWithDesired = desiredContextRootRegExp.test(url.pathname)\n    \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E isNotProperContextRoot = desiredContextRoot !== url.pathname\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (isNotProperContextRoot &amp;&amp; startsWithDesired === \u003Cspan class=\"hljs-literal\"\u003Efalse\u003C\u002Fspan\u003E) {\n      \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E pathname = url.pathname === \u003Cspan class=\"hljs-literal\"\u003Enull\u003C\u002Fspan\u003E ? \u003Cspan class=\"hljs-string\"\u003E&#x27;&#x27;\u003C\u002Fspan\u003E : url.pathname\n      \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E search = url.search === \u003Cspan class=\"hljs-literal\"\u003Enull\u003C\u002Fspan\u003E ? \u003Cspan class=\"hljs-string\"\u003E&#x27;&#x27;\u003C\u002Fspan\u003E : url.search\n      \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E Location = desiredContextRoot + pathname + search\n      res.writeHead(\u003Cspan class=\"hljs-number\"\u003E302\u003C\u002Fspan\u003E, {\n        Location\n      })\n      res.end()\n    }\n    next()\n  }\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E然后，每当开发中的同事到达开发Web开发服务\u003Ccode\u003E\u002F\u003C\u002Fcode\u003E时，发生了意外情况，Nuxt将自动重定向到\u003Ccode\u003E\u002Fportal\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n"},contributors:[{author:"warriorBrian"}]}],fetch:[],mutations:[]});