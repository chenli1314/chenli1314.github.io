window.onload=function(){
    // 获取元素
  
function ti(){

    var oriqi=document.getElementById("riqi");
    var os=document.getElementById("shijian");
     // 创建时间对象
     var otime=new Date();

     var myyear=otime.getFullYear();//年
     var mymonth=otime.getMonth()+1;//月
     var myday=otime.getDate();//日
 
     var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
     var write=weekday[otime.getDay()]//星期

     oriqi.innerHTML= myyear+"&nbsp;"+"年"+"&nbsp;"+mymonth+"&nbsp;"+"月"+"&nbsp;"+myday+"&nbsp;"+"日"+"&nbsp;&nbsp;&nbsp;&nbsp;"+write;

    var myhours=otime.getHours();//时
    var mymin=otime.getMinutes();//分
    var myse=otime.getSeconds();//秒

    if(myhours<10){
        myhours="0"+myhours;
    }
    if(mymin<10){
        mymin="0"+mymin;
    }
    if(myse<10){
        myse="0"+myse;
    }
    //  时分秒  
     os.innerHTML=myhours+":"+mymin+":"+myse;

};
   
// 计时器
setInterval(ti,1000);



// 音乐函数
function vbo(){

    // 获取元素
    // 音乐控件
    var v=document.getElementById("yykj");
    // 播放暂停控件
    var obfj=document.getElementById("bfj");
    // 上一曲控件
    var osys=document.getElementById("sys");
    // 下一曲控件
    var oxyq=document.getElementById("xys");

    // 图片
    var otup=document.getElementById("tupian");
    // 歌曲名
    var ogqname=document.getElementById("gqname");
    // 歌手名
    var ogsname=document.getElementById("gsname");


    // 音量滑块
    var ohuak=document.getElementById("huakuai");
    
   //前进时间，总时间
   var oqjsj=document.getElementById("qjsj");
   var ozsj=document.getElementById("zsj");
    // 播放进度条
   var oqwe=document.getElementById("jingdut");



    // 歌曲名
    var gequname=[  "负重一万斤长大",
                    "无名的人",
                    "这世界那么多人",
                    "入秋",
                    "别想太多,好好生活",
                    "小美满",
                    "想某人",
                    "身骑白马",
                    "和光同尘",
                    "时光正好",
                    "向云端",
                    "一荤一素",
                    "东北民谣",
                    "呓语",
                    "像我这样的人",
                    "别爱太满别睡太晚(童声版)",
                    "匆匆那年",
                    "不必在乎我是谁",
                    "过去了",
                    "无处安放",
                    "世界上不存在的歌",
                    "不在等候的姑娘",
                    "世界这么大还是遇见你",];
    // 歌手名
    var gesou=[ "太一",
                "毛不易",
                "莫文蔚",
                "江楠",
                "王一一",
                "周深",
                "王优秀",
                "周深",
                "周深",
                "郁可唯",
                "小霞/海洋Bo",
                "毛不易",
                "毛不易",
                "毛不易",
                "毛不易",
                "李子莹",
                "王菲",
                "孙露",
                "虎二",
                "白若溪",
                "赵英俊",
                "程响",
                "程响",];
                

    // 歌曲链接
    var gequurl=["../music/0-fuzhongyiwanjingzhangda-taiyi.m4a",
    "../music/1-Nameless-people-maobuyi.mp3",
    "http://music.163.com/song/media/outer/url?id=1852309595.mp3",
    "../music/2-ruqiu-feat.jiangnan.m4a",
    "../music/3-biexiangtaiduo-haohaoshenghuo-wangyiyi.m4a",
    "../music/4-xiaomeiman-zhousheng.mp3",
    "../music/5-xiangmoureng-wangyouxiu.mp3",
    "../music/6-shenqibaima-zhoushen.mp3",
    "../music/7-heguangtongchen-zhoushen.mp3",
    "../music/8-shiguangzhenghao-yukewei.mp3",
    "../music/9-xiangyunduan-haiyangbo.mp3",
    "../music/10-yihunyisu-maobuyi.mp3",
    "../music/11-dongbeiminyao-maobuyi.mp3",
    "../music/12-yiyu-maobuyi.mp3",
    "../music/13-xiangwozheyangderen-mabuyi.mp3",
    "../music/14-bieaitanmanbieshuitaiwan-liziying.m4a",
    "../music/15-congcongnanian-wangfei.m4a",
    "../music/16-bubizaihuwoshishui-shunlu.m4a",
    "../music/17-guoqul-huer.m4a",
    "../music/18-wuchuanfang-bairuoxi.m4a",
    "../music/19-shijieshangbucunzaidege-zhaoyingjun.m4a",
    "../music/20-buzhaidenghoudeguniang-chengxuiang.m4a",
    "../music/21-shijienamodahaishiyujianni-chengxiang.m4a"];
  
    // 歌曲封面图片链接
    var gqfmurl=["url(https://p2.music.126.net/YVdUq-VX1TJW_8u3EKAs5g==/109951164545953099.jpg?param=100x100)",
    "url(https://p2.music.126.net/tLKBLSGTBgHKpazu83hZfw==/109951166724351491.jpg?param=130y130)",
    "url(https://p2.music.126.net/jjd9SbhbSr_jj79d6GKszg==/109951168561880681.jpg?param=50y50)",
    "url(https://imge.kugou.com/stdmusic/20230208/20230208180250638950.jpg)",
    "url(https://imge.kugou.com/stdmusic/20240304/20240304172838687028.jpg)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M0000002ATV00WcBgd_1.jpg?max_age=2592000)",
    "url(https://imge.kugou.com/stdmusic/20210805/20210805215422444360.jpg)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M000001jkFOp2xAku1.jpg?max_age=2592000)",
    "url(https://y.gtimg.cn/music/photo_new/T002R180x180M000004g9SDm1squHf_2.jpg)",
    "url(https://n.sinaimg.cn/sinakd10121/213/w2048h1365/20221225/132d-0881a19b6d055d773897d43a3f551a27.jpg)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M00000152o5W2z6PSk_2.jpg?max_age=2592000)",
    "url(https://p6.itc.cn/q_70/images03/20211210/8e60460c5df74dd6967570f91fc0eab7.jpeg)",
    "url(https://y.qq.com/music/photo_new/T001R300x300M000001BHDR33FZVZ0.jpg?max_age=2592000)",
    "url(https://up2.susanguitar.com/upload5/img/c688fa5e64122cc51d965f0f5b085e4d.jpg)",
    "url(https://puui.qpic.cn/tv/0/40367000_700527/0)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M0000000Sqja48MbDE.jpg?max_age=2592000)",
    "url(https://y.gtimg.cn/music/photo_new/T002R180x180M0000036eU2A4VBjo2_1.jpg)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M000004IAMVY04ObQd.jpg?max_age=2592000)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M000003Mox8T1Hpbw4.jpg?max_age=2592000)",
    "url(https://img.pconline.com.cn/images/upload/upc/tx/photoblog/1511/11/c14/15141788_15141788_1447248892810_mthumb.jpg)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M000000ZmnKf4fuO0O.jpg?max_age=2592000)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M000002pqoUj09HVcf.jpg?max_age=2592000)",
    "url(https://y.qq.com/music/photo_new/T002R300x300M000003Ls5Jo4EFBIH.jpg?max_age=2592000)"];


    // 索引
    var i=0
    // 为歌曲名/歌手名/歌曲链接/歌曲封面/赋值
    function fuzhi(){
        // 歌曲名赋值
        ogqname.innerText=gequname[i];
        // 歌手名赋值
        ogsname.innerText=gesou[i];
        // 歌曲链接赋值
        v.src=gequurl[i];
        // 歌曲封面赋值
        otup.style.backgroundImage=gqfmurl[i];

    }


    // 随机歌曲函数
    function shuijigq(){
        i=Math.floor(Math.random()*gequurl.length)
        fuzhi();
    }

    shuijigq()//实现随机音乐
    
    
    // 播放函数
    function bofang(){
        obfj.className="fa fa-pause-circle-o";
        otup.style.animationPlayState="running";
        v.play();
    }
    
    
    // 暂停函数
    function zhanting(){
        obfj.className="fa fa-play-circle-o";
        otup.style.animationPlayState="paused";
        v.pause();
    }
    

    // 上一曲函数
    function sys(){
        i--;
        if(i<0){
            i=gequurl.length-1;
        }
        fuzhi();
    }
    
    // 下一曲函数
    function xys(){
        i++;
        if(i==gequurl.length){
            i=0;
        }
        fuzhi();
    }


    // 前进时间-总时间函数
    function sjdd(){
        // 前进时间分钟:秒
        var qjsjfz=Math.floor(v.currentTime/60);
        var qjsjm=Math.floor(v.currentTime-qjsjfz*60);
        //总时间分钟：秒
        var zsjfz=Math.floor(v.duration/60);
        var zsjm=Math.floor(v.duration-zsjfz*60)
       
       
       if(qjsjfz<10){
        qjsjfz="0"+qjsjfz;
       }
       if(qjsjm<10){
        qjsjm="0"+qjsjm;
       }
       if(zsjfz<10){
        zsjfz="0"+zsjfz;
       }
       if(zsjm<10){
        zsjm="0"+zsjm
       }
        // 前进时间
        oqjsj.innerText=qjsjfz+" "+":"+" "+qjsjm ;
        // 总时间
        ozsj.innerText=zsjfz+" "+":"+" "+zsjm;
    }

    // 播放进度函数
    function oasd(){
        var oqwe=document.getElementById("jingdut");
        oqwe.min=0;
        oqwe.max=v.duration;
        oqwe.value=v.currentTime;
    }
    
    // 控制播放进度函数
    function kzbf(){
        var oqwe=document.getElementById("jingdut");
        oqwe.min=0;
        oqwe.max=v.duration;
        v.currentTime=oqwe.value;
    }


    obfj.onclick=function(){
        // 当处于站厅状态时-播放
        if(v.paused){
            bofang();
        }
         // 当处于播放状态时-暂停
         else{
            zhanting();
         };
    }

    // 上一曲
    osys.onclick=function(){
        sys();
        bofang();
    }
     
    // 下一曲
     oxyq.onclick=function(){
        xys();
        bofang();
    }
    
    // 自动播放下一首
    v.onended=function(){
        xys();
        bofang();
    }
  
    //控制音量 当拖动音量滑块时
    ohuak.onchange=function(){
       
        // alert(v.volume);
        v.volume = ohuak.value;
       
    }


    // 音乐播放时
    v.ontimeupdate=function(){
        sjdd();
        oasd();
    }
    
    // 控制播放进度 不完善
    oqwe.onchange=function(){
        kzbf();
    }
    

}

vbo()


//-------------------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------------------------------------------------------


}


