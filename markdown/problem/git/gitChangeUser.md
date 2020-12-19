### 问题介绍

##### 此项目里需要将历史的commit信息的作者和更为目前的邮箱和名称


### 解决方案

##### 使用如下git命令

##### git filter-branch -f --env-filter "GIT_AUTHOR_NAME='王行'; GIT_AUTHOR_EMAIL='673438530@qq.com'; GIT_COMMITTER_NAME='王行'; GIT_COMMITTER_EMAIL='673438530@qq.com';" HEAD

##### git push -force
