npm run build         
git branch gh-pages     #创建gh-pages分支
git checkout gh-pages   #切换到gh-pages分支
git add -f dist         #强制把dist文件夹提交到github
git commit -m "update dist"
git subtree push --prefix dist origin gh-pages  #把dist文件夹单独部署到 gh-pages 分支
git checkout master