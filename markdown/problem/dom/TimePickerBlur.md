### 问题介绍

##### 
由于日期组件通过open控制时间组件的显示与影藏，点击时间组件onClick,onMouseDown设置open为true，input失去焦点onBlur后设置open为false
但是由于onClick或者onMouseDown事件会同样会触发onBlur事件

```
 <MonthPicker
    onBlur={() => {
        // 点开MonthPicker时打开弹窗会触发Blur事件
        console.log(1)
    }
 />
```
通过阅读[antd实现源码](https://github.com/react-component/picker/blob/master/src/Picker.tsx) 发现他是比较当前的元素在不在整个浮层或者日期组件里，
如果在，则return掉，不关闭弹窗但是我们不能获取到他的ref和内置方法
### 解决方案

#####

组件外维护一个变量(避免重新render造成的重新初始化问题)，当移入时间组件设置为true，移出设置为false，在onBlur事件return掉点开即关闭问题

