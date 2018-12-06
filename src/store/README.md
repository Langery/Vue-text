## 关于Vuex

1. 在`src`中新建一个`store`文件夹用于存放vuex处理文件;
2. 在store中新建一下相关文件
```
  |- actions.js
  |- getters.js
  |- index.js
  |- modules.js
  |- mutation-type.js
  |- mutations.js
  |- state.js
```
3. 在state.js中编写要存储的vuex值,并确定其存储类型;
4. mutation-type用于编写引用的对象,此处需要用`大写字母`编写
5. mutations引用mutation-type中的对象,然后获取调取方式,如:id、info、msgs...
6. getters用于存储派生状态
