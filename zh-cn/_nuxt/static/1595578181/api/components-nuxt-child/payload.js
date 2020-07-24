__NUXT_JSONP__("/api/components-nuxt-child", {data:[{},{path:"\u002Fzh\u002Fapi\u002Fcomponents-nuxt-child",section:"api",page:{attrs:{title:"API: \u003Cnuxt-child\u003E 组件",description:"显示当前页面"},body:"\u003Ch1 id=\"-lt-nuxt-child-gt-组件\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#-lt-nuxt-child-gt-组件\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E&lt;nuxt-child&gt; 组件\u003C\u002Fh1\u003E\u003Cblockquote\u003E\n\u003Cp\u003E该组件用于显示\u003Ca href=\"\u002Fguide\u002Frouting#%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1\"\u003E嵌套路由\u003C\u002Fa\u003E场景下的页面内容。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E例如：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs bash\"\u003E-| pages\u002F\n---| parent\u002F\n------| child.vue\n---| parent.vue\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E上面的目录树结构会生成下面这些路由配置：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E[\n  {\n    \u003Cspan class=\"hljs-attr\"\u003Epath\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;\u002Fparent&#x27;\u003C\u002Fspan\u003E,\n    \u003Cspan class=\"hljs-attr\"\u003Ecomponent\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;~\u002Fpages\u002Fparent.vue&#x27;\u003C\u002Fspan\u003E,\n    \u003Cspan class=\"hljs-attr\"\u003Ename\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;parent&#x27;\u003C\u002Fspan\u003E,\n    \u003Cspan class=\"hljs-attr\"\u003Echildren\u003C\u002Fspan\u003E: [\n      {\n        \u003Cspan class=\"hljs-attr\"\u003Epath\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;child&#x27;\u003C\u002Fspan\u003E,\n        \u003Cspan class=\"hljs-attr\"\u003Ecomponent\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;~\u002Fpages\u002Fparent\u002Fchild.vue&#x27;\u003C\u002Fspan\u003E,\n        \u003Cspan class=\"hljs-attr\"\u003Ename\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E&#x27;parent-child&#x27;\u003C\u002Fspan\u003E\n      }\n    ]\n  }\n]\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E为了显示 \u003Ccode\u003Echild.vue\u003C\u002Fcode\u003E 组件，我们需要在父级页面组件 \u003Ccode\u003Epages\u002Fparent.vue\u003C\u002Fcode\u003E 中加入 \u003Ccode\u003E&lt;nuxt-child\u002F&gt;\u003C\u002Fcode\u003E：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs html\"\u003E\u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Etemplate\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Eh1\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E我是父级页面\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Eh1\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Enuxt-child\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-attr\"\u003E:foobar\u003C\u002Fspan\u003E=\u003Cspan class=\"hljs-string\"\u003E&quot;123&quot;\u003C\u002Fspan\u003E \u002F&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Etemplate\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E\u003Ccode\u003E&lt;nuxt-child\u002F&gt;\u003C\u002Fcode\u003E 接收 \u003Ccode\u003Ekeep-alive\u003C\u002Fcode\u003E 和 \u003Ccode\u003Ekeep-alive-props\u003C\u002Fcode\u003E:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs html\"\u003E\u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Etemplate\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Enuxt-child\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-attr\"\u003Ekeep-alive\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-attr\"\u003E:keep-alive-props\u003C\u002Fspan\u003E=\u003Cspan class=\"hljs-string\"\u003E&quot;{ exclude: [&#x27;modal&#x27;] }&quot;\u003C\u002Fspan\u003E \u002F&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Etemplate\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"hljs-comment\"\u003E&lt;!-- 将被转换成以下形式 --&gt;\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Ekeep-alive\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-attr\"\u003E:exclude\u003C\u002Fspan\u003E=\u003Cspan class=\"hljs-string\"\u003E&quot;[&#x27;modal&#x27;]&quot;\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Erouter-view\u003C\u002Fspan\u003E \u002F&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Ekeep-alive\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cblockquote\u003E\n\u003Cp\u003E子组件还可以接收Vue组件等属性。\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E可以看这个实际案例：\u003Ca href=\"\u002Fexamples\u002Fnested-routes\"\u003E嵌套路由示例\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"命名视图\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#命名视图\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E命名视图\u003C\u002Fh2\u003E\u003Cblockquote\u003E\n\u003Cp\u003ENuxt v2.4.0 新增\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E\u003Ccode\u003E&lt;nuxt-child\u002F&gt;\u003C\u002Fcode\u003E接受\u003Ccode\u003Ename\u003C\u002Fcode\u003E prop 来呈现渲染命名视图：\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs html\"\u003E\u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Etemplate\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Enuxt-child\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-attr\"\u003Ename\u003C\u002Fspan\u003E=\u003Cspan class=\"hljs-string\"\u003E&quot;top&quot;\u003C\u002Fspan\u003E \u002F&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Enuxt-child\u003C\u002Fspan\u003E \u002F&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Etemplate\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E查看更多例子，请点击 \u003Ca href=\"\u002Fexamples\u002Fnamed-views\"\u003Enamed-views 例子\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n"},contributors:[{author:"warriorBrian"},{author:"Atinux"}]}],fetch:[],mutations:[]});