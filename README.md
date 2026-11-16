# Linux 零基础复习笔记

基于黑马程序员《新版 Linux 零基础快速入门到精通》60 节课程整理的个人复习笔记。

## 在线阅读

开启 GitHub Pages 后访问：

```
https://<你的GitHub用户名>.github.io/linux-notes/
```

## 内容

- `index.html`：首页 / 课程目录
- `chapter-0.html` ~ `chapter-5.html`：6 个章节页，共 60 节
- `tree.html`：知识树总览与分章大图
- `assets/`：Word 讲义、知识树 PDF/PNG、分章图
- `style.css` / `app.js`：移动端阅读样式、复制代码、阅读进度

每节包含：一句话核心、要解决的问题、核心概念、拆开讲、命令/操作速查、动手做、小白避坑、记忆口诀、可展开的自测答案。

## 本地预览

```bash
python -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 部署到 GitHub Pages

1. 新建空仓库（不要勾选 README），例如 `linux-notes`。
2. 在本地目录执行：

```bash
git remote add origin https://github.com/<你的用户名>/linux-notes.git
git branch -M main
git push -u origin main
```

3. 仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支 `main`，目录 `/ (root)`。
4. 等 1～2 分钟，访问 `https://<你的用户名>.github.io/linux-notes/`。

## 说明

- 课程实际 60 节，不含视频列表最后的“未完待续”。
- 课程环境为 CentOS 7；CentOS 7 已停止维护，学习仍可用，生产环境建议 Rocky/Alma/Ubuntu。
- 笔记为个人学习整理，课程内容版权归原作者/黑马程序员所有。
