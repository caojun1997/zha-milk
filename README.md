# skills-cli-project

一个使用 npm 构建的技能（skills）管理项目，提供一个简单的 CLI：

- 列出技能
- 添加技能
- 删除技能
- 搜索技能

## 安装依赖

本项目无第三方依赖。

## 使用方式

```bash
npm start -- list
npm start -- add TypeScript "类型安全的 JavaScript" intermediate
npm start -- search JavaScript
npm start -- remove Git
```

或直接使用可执行文件：

```bash
node src/index.js list
```

## 测试

```bash
npm test
```
