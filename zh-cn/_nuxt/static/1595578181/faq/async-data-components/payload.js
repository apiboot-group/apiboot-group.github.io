__NUXT_JSONP__("/faq/async-data-components", {data:[{},{path:"\u002Fzh\u002Ffaq\u002Fasync-data-components",section:"faq",page:{attrs:{title:"如何在组件中使用异步数据",description:"如何在组件中使用异步数据？"},body:"\u003Ch1 id=\"如何在组件中使用异步数据-\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#如何在组件中使用异步数据-\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E如何在组件中使用异步数据？\u003C\u002Fh1\u003E\u003Cp\u003E如果组件不是和路由绑定的页面组件，原则上是不可以使用异步数据的。因为 Nuxt.js 仅仅扩展增强了页面组件的 \u003Ccode\u003Edata\u003C\u002Fcode\u003E 方法，使得其可以支持异步数据处理。\u003C\u002Fp\u003E\n\u003Cp\u003E对于非页面组件，有两种方式可以实现数据的异步获取：\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003E在组件的 \u003Ccode\u003Emounted\u003C\u002Fcode\u003E 方法里面实现异步获取数据的逻辑，之后设置组件的数据，限制是：不支持服务端渲染。\u003C\u002Fli\u003E\n\u003Cli\u003E在页面组件的\u003Ccode\u003EasyncData\u003C\u002Fcode\u003E或\u003Ccode\u003Efetch\u003C\u002Fcode\u003E方法中进行API调用，并将数据作为\u003Ccode\u003Eprops\u003C\u002Fcode\u003E传递给子组件。服务器渲染工作正常。缺点：\u003Ccode\u003EasyncData\u003C\u002Fcode\u003E或页面提取可能不太可读，因为它正在加载其他组件的数据。\n总之，使用哪种方法取决于你的应用是否需要支持子组件的服务端渲染。\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n"},contributors:[{author:"Atinux"},{author:"warriorBrian"}]}],fetch:[],mutations:[]});