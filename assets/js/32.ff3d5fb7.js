(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{247:function(e,n,t){"use strict";t.r(n);var a=t(2),c=Object(a.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"浅谈keep-alive原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浅谈keep-alive原理","aria-hidden":"true"}},[e._v("#")]),e._v(" 浅谈keep-alive原理")]),e._v(" "),t("h4",{attrs:{id:"用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用法","aria-hidden":"true"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template>\n<div>\n    <keep-alive>\n        <coma v-if=\"test\"></coma>\n        <comb v-else></comb>\n    </keep-alive>\n    <button @click=\"test=handleClick\">请点击</button>\n</div>\n</template>\nimport coma from 'a'\nimport comb from 'b'\nexport default {\n    components:[coma,comb],\n    data () {\n        return {\n            test: true\n        }\n    },\n    methods: {\n        handleClick () {\n            this.test = !this.test;\n        }\n    }\n}\n")])])]),t("p",[e._v("点击按钮两个组件会进行切换 但是组件中的状态会被保留 比如渲染出的列表")]),e._v(" "),t("h4",{attrs:{id:"include-exclude"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#include-exclude","aria-hidden":"true"}},[e._v("#")]),e._v(" include&exclude")]),e._v(" "),t("p",[t("code",[e._v("keep-alive")]),e._v("的"),t("code",[e._v("include")]),e._v("和"),t("code",[e._v("exclude")]),e._v("属性分别是允许缓存的组件和不被缓存的组件 二者都可以用逗号字符串，正则表达式，数组表示")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<keep-alive include="a">\n  <component></component>\n</keep-alive>\n')])])]),t("p",[e._v("将缓存name为a的组件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<keep-alive exclude="a">\n  <component></component>\n</keep-alive>\n')])])]),t("p",[e._v("name为a的组件将不会被缓存。")]),e._v(" "),t("h4",{attrs:{id:"生命钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生命钩子","aria-hidden":"true"}},[e._v("#")]),e._v(" 生命钩子")]),e._v(" "),t("p",[t("code",[e._v("keep-alive")]),e._v("提供了两个生命钩子，分别是"),t("code",[e._v("activated")]),e._v("与"),t("code",[e._v("deactivated")]),e._v("。")]),e._v(" "),t("p",[e._v("因为"),t("code",[e._v("keep-alive")]),e._v("会将组件保存在内存中，并不会销毁以及重新创建，所以不会重新调用组件的"),t("code",[e._v("created")]),e._v("等方法，需要用"),t("code",[e._v("activated")]),e._v("与"),t("code",[e._v("deactivated")]),e._v("这两个生命钩子来得知当前组件是否处于活动状态。")]),e._v(" "),t("h4",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("created () {\n    /* 缓存对象 */\n    this.cache = Object.create(null)\n}\n")])])]),t("p",[e._v("创建cache对象缓存vnode")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* destroyed钩子中销毁所有cache中的组件实例 */\ndestroyed () {\n    for (const key in this.cache) {\n        pruneCacheEntry(this.cache[key])\n    }\n},\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("render () {\n    /* 得到slot插槽中的第一个组件 */\n    const vnode: VNode = getFirstComponentChild(this.$slots.default)\n\n    const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions\n    if (componentOptions) {\n        // check pattern\n        /* 获取组件名称，优先获取组件的name字段，否则是组件的tag */\n        const name: ?string = getComponentName(componentOptions)\n        /* name不在inlcude中或者在exlude中则直接返回vnode（没有取缓存） */\n        if (name && (\n        (this.include && !matches(this.include, name)) ||\n        (this.exclude && matches(this.exclude, name))\n        )) {\n            return vnode\n        }\n        const key: ?string = vnode.key == null\n        // same constructor may get registered as different local components\n        // so cid alone is not enough (#3269)\n        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')\n        : vnode.key\n        /* 如果已经做过缓存了则直接从缓存中获取组件实例给vnode，还未缓存过则进行缓存 */\n        if (this.cache[key]) {\n            vnode.componentInstance = this.cache[key].componentInstance\n        } else {\n            this.cache[key] = vnode\n        }\n        /* keepAlive标记位 */\n        vnode.data.keepAlive = true\n    }\n    return vnode\n}\n")])])]),t("p",[t("code",[e._v("render")]),e._v("函数中 先获取"),t("code",[e._v("name")]),e._v(" 再根据"),t("code",[e._v("include")]),e._v(","),t("code",[e._v("exclude")]),e._v("中的值进行匹配 匹配成功就返回缓存的"),t("code",[e._v("vnode")]),e._v(" 不成功就不进行操作")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* 检测name是否匹配 */\nfunction matches (pattern: string | RegExp, name: string): boolean {\n  if (typeof pattern === 'string') {\n    /* 字符串情况，如a,b,c */\n    return pattern.split(',').indexOf(name) > -1\n  } else if (isRegExp(pattern)) {\n    /* 正则 */\n    return pattern.test(name)\n  }\n  /* istanbul ignore next */\n  return false\n}\n")])])]),t("p",[e._v('检测include与exclude属性匹配的函数很简单，include与exclude属性支持字符串如"a,b,c"这样组件名以逗号隔开的情况以及正则表达式。matches通过这两种方式分别检测是否匹配当前组件。')]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if (this.cache[key]) {\n    vnode.componentInstance = this.cache[key].componentInstance\n} else {\n    this.cache[key] = vnode\n}\n")])])]),t("p",[e._v("缓存过就覆盖该"),t("code",[e._v("vnode")]),e._v("实例 没有就缓存")]),e._v(" "),t("p",[e._v("但是如果我改变了"),t("code",[e._v("include")]),e._v("或"),t("code",[e._v("exclude")]),e._v("里的值咋办")]),e._v(" "),t("p",[e._v("办法就是 用"),t("code",[e._v("watch")]),e._v("来监听"),t("code",[e._v("pruneCache")]),e._v("与"),t("code",[e._v("pruneCache")]),e._v("这两个属性的改变，在改变的时候修改"),t("code",[e._v("cache")]),e._v("缓存中的缓存数据。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("watch: {\n    /* 监视include以及exclude，在被修改的时候对cache进行修正 */\n    include (val: string | RegExp) {\n        pruneCache(this.cache, this._vnode, name => matches(val, name))\n    },\n    exclude (val: string | RegExp) {\n        pruneCache(this.cache, this._vnode, name => !matches(val, name))\n    }\n}\n")])])]),t("p",[e._v("pruneCache实现")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* 修正cache */\nfunction pruneCache (cache: VNodeCache, current: VNode, filter: Function) {\n  for (const key in cache) {\n    /* 取出cache中的vnode */\n    const cachedNode: ?VNode = cache[key]\n    if (cachedNode) {\n      const name: ?string = getComponentName(cachedNode.componentOptions)\n      /* name不符合filter条件的，同时不是目前渲染的vnode时，销毁vnode对应的组件实例（Vue实例），并从cache中移除 */\n      if (name && !filter(name)) {\n        if (cachedNode !== current) {\n          pruneCacheEntry(cachedNode)\n        }\n        cache[key] = null\n      }\n    }\n  }\n} \n\n/* 销毁vnode对应的组件实例（Vue实例） */\nfunction pruneCacheEntry (vnode: ?VNode) {\n  if (vnode) {\n    vnode.componentInstance.$destroy()\n  }\n}\n\n")])])])])},[],!1,null,null,null);n.default=c.exports}}]);