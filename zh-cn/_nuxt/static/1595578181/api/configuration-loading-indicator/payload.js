__NUXT_JSONP__("/api/configuration-loading-indicator", {data:[{},{path:"\u002Fzh\u002Fapi\u002Fconfiguration-loading-indicator",section:"api",page:{attrs:{title:"API: The loading indicator Property",description:"在SPA页面加载时显示不同加载进度条！"},body:"\u003Ch1 id=\"loadingindicator-属性\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#loadingindicator-属性\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EloadingIndicator 属性\u003C\u002Fh1\u003E\u003Cblockquote\u003E\n\u003Cp\u003E在SPA页面加载时显示不同加载进度条！\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E在SPA模式下运行Nuxt.js时，第一页加载时没有来自服务器端的内容。因此，我们可能会显示一个加载进度，而不是在页面加载时显示空白页面。\n此属性可以有3种不同的类型：\u003Ccode\u003Estring\u003C\u002Fcode\u003E或\u003Ccode\u003Efalse\u003C\u002Fcode\u003E或\u003Ccode\u003Eobject\u003C\u002Fcode\u003E。如果提供了\u003Ccode\u003Estring\u003C\u002Fcode\u003E值，则将其转换为\u003Ccode\u003Eobject\u003C\u002Fcode\u003E样式。\u003C\u002Fp\u003E\n\u003Cp\u003E默认值为:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E{\n  \u003Cspan class=\"hljs-attr\"\u003Ename\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;circle&#x27;\u003C\u002Fspan\u003E,\n  \u003Cspan class=\"hljs-attr\"\u003Ecolor\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;#3B8070&#x27;\u003C\u002Fspan\u003E,\n  \u003Cspan class=\"hljs-attr\"\u003Ebackground\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;white&#x27;\u003C\u002Fspan\u003E\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Ch2 id=\"内置加载器样式\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#内置加载器样式\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E内置加载器样式\u003C\u002Fh2\u003E\u003Cp\u003E这些指标来自令人敬佩的\u003Ca href=\"http:\u002F\u002Ftobiasahlin.com\u002Fspinkit\"\u003ESpinkit\u003C\u002Fa\u003E项目。您可以使用其demo页面预览加载进度样式。\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Ecircle\u003C\u002Fli\u003E\n\u003Cli\u003Ecube-grid\u003C\u002Fli\u003E\n\u003Cli\u003Efading-circle\u003C\u002Fli\u003E\n\u003Cli\u003Efolding-cube\u003C\u002Fli\u003E\n\u003Cli\u003Echasing-dots\u003C\u002Fli\u003E\n\u003Cli\u003Enuxt\u003C\u002Fli\u003E\n\u003Cli\u003Epulse\u003C\u002Fli\u003E\n\u003Cli\u003Erectangle-bounce\u003C\u002Fli\u003E\n\u003Cli\u003Erotating-plane\u003C\u002Fli\u003E\n\u003Cli\u003Ethree-bounce\u003C\u002Fli\u003E\n\u003Cli\u003Ewandering-cubes\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003E内置加载器样式支持 \u003Ccode\u003Ecolor\u003C\u002Fcode\u003E 和 \u003Ccode\u003Ebackground\u003C\u002Fcode\u003E 配置.\u003C\u002Fp\u003E\n\u003Ch2 id=\"自定义加载器\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#自定义加载器\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E自定义加载器\u003C\u002Fh2\u003E\u003Cp\u003E如果您需要自己的特殊加载器，\u003Ccode\u003EString\u003C\u002Fcode\u003E值或\u003Ccode\u003EName\u003C\u002Fcode\u003E键也可以是指标源代码的\u003Ccode\u003Ehtml\u003C\u002Fcode\u003E模板的路径！所有选项也都传递给模板。\u003C\u002Fp\u003E\n\u003Cp\u003E如果您需要基础配置，Nuxt的内置\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Ftree\u002Fdev\u002Fpackages\u002Fvue-app\u002Ftemplate\u002Fviews\u002Floading\"\u003E源代码\u003C\u002Fa\u003E也可用！\u003C\u002Fp\u003E\n"},contributors:[{author:"warriorBrian"},{author:"manniL"}]}],fetch:[],mutations:[]});