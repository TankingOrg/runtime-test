# 测试代码

## 本项目用于nw移植过程中的所有测试代码

### 目录结构：
    ./---
      |--runtime/    //runtime目录，用于放运行测试的content_shell或nw可执行程序
      |
       |--nw-index/   //nw的可执行程序入口函数，执行nw ../nw-index,建立本地服务
       |
       |--test/       //测试代码存放目录。

# 测试方法(content_shell):
###   1 下载nw 到runtime目录下:
###   2 执行nw程序:   ./runtime/nw ./nw-index 
###   3 打开手机中的content_shell,输入http://ip地址:端口号, 进行测试 ( ip地址和端口显示在nw的网页上)

# 编写测试程序方法:
### 在test目录下建立文件夹,并在文件夹下简历index.html文件,或者直接在test目录下建立测试用的html文件.
### 写完测试用的html文件后,在test/index.html中加入测试文件的索引:
    如下:
      <p><a href="./subHtml/global.html">global.html</a></p>
### 使用nw启动测试验证测试文件是否能正常运行,并调试.
       ./runtime/nw ./test/


