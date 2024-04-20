// 文档加载时
window.onload=function(){
    // 获取元素  提交按钮
    var otijiao=document.getElementById("tijiao");
    // 为元素添加点击事件  鼠标悬停渐变 
    otijiao.onmouseover=function(){
        this.style.background="linear-gradient(to bottom right, blue, BlueViolet )"
    };

    otijiao.onmouseout=function(){
        this.style.background="#2E4BC8"
    };

    // 点击提交按钮跳转主页
    otijiao.onclick=function(){
        
        window.open("../HTML/homepage.html")//打开窗口
        window.close()//关闭上一个窗口
    }

    // 名字输入框
    var oname=document.getElementById("name");
    // 为元素添加点击事件  鼠标悬停渐变 
    oname.onmouseover=function(){
        this.style.borderColor="DeepSkyBlue"
    };
    oname.onmouseout=function(){
        this.style.borderColor="#D9D9D9"
    };

    // 地址输入框
    var odizhi=document.getElementById("dizhi");
    // 为元素添加点击事件  鼠标悬停渐变 
    odizhi.onmouseover=function(){
        this.style.borderColor="DeepSkyBlue"
    };
    odizhi.onmouseout=function(){
        this.style.borderColor="#D9D9D9"
    };







}