### 浏览器打开输入一个网址会发生什么(网址为域名 + url形式)

- DNS解析(即把输入的域名解析为IP)，浏览器会依次优先从浏览器缓存，操作系统缓存，注册表DNS缓存里读取缓存，如果有缓存的IP和域名 
  对应关系则返回对应的IP，如果没有，则会请求路由器缓存（内网的原理，以上查询为递归查询）,运营商DNS缓存，根DNS服务器，顶级域名，主域名
 
- 拿到IP，地址以后，浏览器会发送一个http连接，经过TCP／IP, MAC ，链路层，到达指定服务器IP地址，但是可能该地址是一个集群
  会进行负载均衡处理，经过层层解析，服务器收到了这个http连接，服务器也会返回一个建立连接请求，客户端收到后会继续返回一个收到的请求给服务器，
  自此浏览器和服务器开始建立了TCP 连接
  

- 开启http请求资源，拿到html文件以后会 请求其他例如css,js的静态资源地址，同理也会走DNS解析，拿IP，最终拿到静态资源

- 浏览器通过拿到的html文件，css，js文件渲染页面
  