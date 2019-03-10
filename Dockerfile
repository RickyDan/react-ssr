FROM node:8.10.0
# 安装nginx
RUN apt-get update \
  && apt-get install -y nginx

# 指定工作目录
WORKDIR /app

# 将当前目录下的所有文件拷贝到工作目录下
COPY . /app/

# 声明允许容器提供服务的端口

EXPOSE 80

# 安装依赖
# 运行 npm run install
# 将 dist 目录的所有文件拷贝到 nginx 目录下
# 删除工作目录文件， 尤其是 node_modules 以减小镜像体积
# 为了减少镜像体积， 尽可能将一些同类操作集成到一个步骤下
RUN npm install \
  && npm run build \
  && cp -r dist/* /var/www/html \
  && rm -rf /app

# 以前台方式启动nginx
CMD [ "nginx",  "-g", "daemon off;"]
