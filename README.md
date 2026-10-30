# phantom

极简个人主页，为 GitHub 账号 `qryctx` 准备。预期网址：https://qryctx.github.io/ 。

只包含展示名、用户名、一句简介和 GitHub 主页链接，不展示任何个人项目、技术方向或项目资料。

纯 HTML / CSS，无 JavaScript、npm 依赖、运行时 API、统计脚本或 Cookie。配色跟随浏览器的系统深浅色偏好。

## 本地预览

在本目录运行 `python3 -m http.server 4173 --bind 127.0.0.1`，打开 http://127.0.0.1:4173/ 。也可以直接打开 `index.html`。

## 发布

1. 创建 `qryctx/qryctx.github.io` 仓库。GitHub Free 支持公开仓库的 Pages；私有仓库的 Pages 支持取决于账号套餐。
2. 将本目录推送至 `main` 分支。
3. 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。
4. 如果首次推送早于启用 Pages，在 **Actions** 中手动运行部署工作流。
5. 部署成功后访问 https://qryctx.github.io/ 。

工作流仅上传 `index.html`、`styles.css`、`favicon.svg` 和 `.nojekyll`。

部署参考：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## 修改

- 文字、名称与链接：`index.html`。
- 布局与颜色：`styles.css`。
- 网站图标：`favicon.svg`。
- 若修改 GitHub 用户名，请同时更新主页链接、canonical、Open Graph URL、仓库名和本文档。
