# fullstackWebApp

>这是一个简单的全栈Web.App，基于Deno + Vue +Mysql.

## client

> 运行在Brower里的应用程序'code'。（html + js + css）

## Server

> 运行在Linux上的Web服务器
功能：
- 响应浏览器Http请求

```sh
# 安装 unzip 解压工具
sudo apt install zip

# 安装 deno
curl -fsSL https://deno.land/x/install/install.sh | sh

# 拷贝二进制文件
sudo cp .deno/bin/deno /usr/bin

# 检查是否安装成功
deno --version

# 克隆git
git clone https://github.com/Superifan/full-stack.git

# 创建一个.js文件
touch .js

# 运行.js文件
deno run --allow-net mod.js


## Database

> 持久化数据，保存Brower浏览器用户需要的数据
