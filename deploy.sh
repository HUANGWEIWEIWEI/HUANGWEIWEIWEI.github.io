#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'note.dignified.cn' > CNAME

#git init
#git config user.name "HUANGWEIWEIWEI"
#git config user.email "1535445275@qq.com"
sudo git add .
sudo git commit -m '8th commit'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:HUANGWEIWEIWEI/HUANGWEIWEIWEI.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:HUANGWEIWEIWEI/FEN.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
# git push -f git@nodeing666:dignified/fen/fen.git master

cd -