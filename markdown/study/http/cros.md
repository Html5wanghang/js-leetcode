CORS

CORS 是跨域资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，属于跨源 AJAX 请求的根本解决方法。

1、普通跨域请求：只需服务器端设置Access-Control-Allow-Origin

2、带cookie跨域请求：前后端都需要进行设置
xhr.withCredentials = true;

JSONP ,静态资源不跨域