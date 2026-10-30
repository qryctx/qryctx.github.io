# phantom

极简个人主页，为 GitHub 账号 `qryctx` 准备。预期网址：https://qryctx.github.io/ 。

只包含展示名、用户名、一句简介和 GitHub 主页链接，不展示任何个人项目、技术方向或项目资料。

纯 HTML / CSS，加一个轻量主题脚本；无 npm 依赖、运行时 API、统计脚本或 Cookie。

内容最大宽度 640px，手机左右留白 24px。提供暖白浅色与炭黑深色主题，右上角可选择跟随系统、浅色或深色，选择只保存在当前浏览器。浏览器禁止本地存储时，切换仍可使用，但刷新后会恢复为跟随系统。禁用 JavaScript 时页面跟随系统配色。

## 本地预览

在本目录运行 `python3 -m http.server 4173 --bind 127.0.0.1`，打开 http://127.0.0.1:4173/ 。也可以直接打开 `index.html`。

## 发布

1. 创建 `qryctx/qryctx.github.io` 仓库。GitHub Free 支持公开仓库的 Pages；私有仓库的 Pages 支持取决于账号套餐。
2. 将本目录推送至 `main` 分支。
3. 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。
4. 如果首次推送早于启用 Pages，在 **Actions** 中手动运行部署工作流。
5. 部署成功后访问 https://qryctx.github.io/ 。

工作流仅上传 `index.html`、`styles.css`、`theme.js`、`favicon.svg` 和 `.nojekyll`。

部署参考：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## 修改

- 文字、名称与链接：`index.html`。
- 布局与颜色：`styles.css`。
- 主题偏好与切换：`theme.js`，在样式表加载前应用偏好以避免主题闪烁。
- 网站图标：`favicon.svg`。
- 若修改 GitHub 用户名，请同时更新主页链接、canonical、Open Graph URL、仓库名和本文档。
