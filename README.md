环信移动客服WEB访客端接入文档 [点击进入](http://docs.easemob.com/cs/300visitoraccess/20webplugin)
==============================

分支说明：
* rp 分支为集成红包的开发分支
* 当环信某分支需要使用红包功能时，需在该分支（例如 `dev43.6`）执行 `git merge --squash --no-commit yzh/rp`，处理冲突，`gulp clean`，并提交
* `gulp build` 再做 build 文件的提交


