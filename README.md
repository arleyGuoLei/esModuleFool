 坑点：
 
 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化。


复现操作：

```bash
git clone xxx # 克隆本仓库
npm install
npx webpack main.js
```

然后打开dist目录下的index.html, 就可以在浏览器调试面板看到输出。