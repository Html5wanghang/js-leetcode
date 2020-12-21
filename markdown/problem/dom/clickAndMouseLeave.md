### 问题介绍

##### 
在一个日期组件里，一个DOM元素同时绑定了onClick事件和onMouseLeave事件，onClick事件会在DOM元素之上加上一个浮层
而onMouseLeave是鼠标移出该元素关闭该浮层，而在有的浏览器会出现一闪而逝的情况。而非理想的点击悬浮，移出关闭


### 解决方案

#####
经排查该闪烁的onMouseLeave事件的relatedTarget为window，而正常的relatedTarget应该为一个div元素
所以只需要判断relatedTarget的元素是否拥有nodeType属性即可

