### 测试代码

## 本项目用于nw移植过程中的所有测试代码

#目录结构：
./---
  |--runtime/    //runtime目录，用于放运行测试的content_shell或nw可执行程序
  |
  |--nw-index/   //nw的可执行程序入口函数，执行nw ../nw-index,建立本地服务
  |
  |--test/       //测试代码存放目录。

## 测试方法:
#   1 下载nw 到runtime目录下:
#   2 执行nw程序:   ./runtime/nw ./nw-index 
#   3 打开手机中的content_shell,输入http://ip地址:端口号, 进行测试 ( ip地址和端口显示在nw的网页上)

