Скрипт установки инструментария protobuff для node.js
=====================================================

    PROTOC_ZIP=protoc-3.7.0-linux-x86_64.zip
    curl -OL https://github.com/google/protobuf/releases/download/v3.7.0/$PROTOC_ZIP
    sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
    rm -f $PROTOC_ZIP
    wget https://github.com/grpc/grpc-web/releases/download/1.0.3/protoc-gen-grpc-web-1.0.3-linux-x86_64
    sudo mv protoc-gen-grpc-web-1.0.3-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
    sudo chmod +x /usr/local/bin/protoc-gen-grpc-web
    sudo apt-get install libatomic1 -y


Команда для генерации исходных кодов JS для работы с сервисами
==============================================================

    protoc -I=${current.project.path}/src/proto $(find ${current.project.path}/src/proto -iname "*.proto") --js_out=import_style=commonjs:${current.project.path}/src/grpc-generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${current.project.path}/src/grpc-generated

Установка grpcc
===============
    sudo npm install -g grpcc

Использование API в вашем JS
============================

Вызов методов, осуществляется, через точку вызова CDSAPI. Например, для метода, опубликованного в файле /src/api/routes.js будет доступно как: 'CDSAPI.Routes.sendGetRoute'
Ваш файл с методами должен быть прописан в webpack.config.js в секции app