##步骤一：安装docker

```
sudo yum update﻿​  //更新centos7.9
```
安装Docker所需的包：
```
sudo yum install -y yum-utils \ device-mapper-persistent-data \ lvm2
```
```
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo﻿​  //设置源
```
```
sudo yum remove docker \ docker-common \ docker-selinux \ docker-engine    //如果有旧docker 则删除它
```
 

// 配置到稳定的Docker CE安装库：
```
sudo yum-config-manager \ --add-repo \ https://download.docker.com/linux/centos/docker-ce.repo
```
//  安装Docker CE：
```
sudo yum install docker-ce
```
```
systemctl start docker   //启动docker
```
```
//vi /etc/docker/daemon.json ﻿​
```
```
//{"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]}﻿​
```

##步骤二：安装composer
```
sudo curl -L https://github.com/docker/compose/releases/download/1.17.0/docker-compose-`uname -s`-`uname -m` -o /usr/bin/docker-compose
```
```
sudo chmod +x /usr/bin/docker-compose
```
```
docker-compose --version
```
```
mkdir   docker
```
```
cd   docker
```
```
vi  docker-compose.yml   //编辑脚本，将下面代码粘贴上去
```
```
i

ESC

:set  paste

//如果代码不齐时，进行下面的操作就整齐了

ESC

:set  nopaset

ESC

:wq
```
//再粘贴下面的内容就整齐了
```
version: '3'
services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: 123456
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress
   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     volumes:
        - wp_site:/var/www/html
     ports:
       - "80:80"
       - "443:443"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
volumes:
    db_data:
    wp_site:
 
 ```
 ```
sudo  docker-compose  up  -d     //执行脚本。注意：不能带扩展名docker-compose.yml,带了提示命令没有找到
```


成功后运行，查容器：
```
docker  ps -a
```


http://192.168.1.100    =》http://192.168.1.100/wp-admin/install.php

要等一会儿才出来熟悉的界面

 