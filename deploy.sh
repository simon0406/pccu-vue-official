npm run build         
git add -f dist         #强制把dist文件夹提交到github
git commit -m "update dist"
git subtree push --prefix dist origin gh-pages  #把dist文件夹单独部署到 gh-pages 分支