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
    var gequname=["负重一万斤长大",
                  "无名的人",
                  "这世界那么多人",];
    // 歌手名
    var gesou=["太一",
               "毛不易",
               "莫文蔚",];

    // 歌曲链接
    var gequurl=["http://m701.music.126.net/20240418215038/99e65b0b9739ac31b2af42f968b496cf/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096603055/3a4d/1015/c053/d421684b94a56b4d6f928ee76fb3ec7b.mp3",

    "https://wx.music.tc.qq.com/C400000gyqu72ATz5E.m4a?guid=2000000280&vkey=868B2242F071ABE79E4CAC4841583413139ECF4A39A14D25973835BF8CDDDF94D2395EE9D22B8E4683B69916E64E064F0D2D5B14865F175B&uin=0&fromtag=30280&src=C400002v4k0j2uvSp5.m4a&trace=7351e4de572cc20f",

    "http://music.163.com/song/media/outer/url?id=1852309595.mp3",];
  
    // 歌曲封面图片链接
    var gqfmurl=["url(https://p2.music.126.net/YVdUq-VX1TJW_8u3EKAs5g==/109951164545953099.jpg?param=100x100)",

    "url(https://p2.music.126.net/tLKBLSGTBgHKpazu83hZfw==/109951166724351491.jpg?param=130y130)",

    "url(https://p2.music.126.net/jjd9SbhbSr_jj79d6GKszg==/109951168561880681.jpg?param=50y50)",];


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

// 飘雪函数
function  piaoxue(){

    //飘雪
    //Here is configuration
    window.animation_config = {
        generatorDelay : { min: 1, max:20 }, //in ms
        speed : 1, //1x
        x_axis_rate : 0.1, // x axis mobility
        weight : 0.5, //snow flake weight
        size : 1.5, //snow flake size
        z_axis_rate : 0.05, //z axis mobility
        color : {b : 255, a: 0.8}, //b for brightness, a for alpha, by default generates random colors but if you set brightness 255 then you'll see only white color
        wind : 0 // value's sign determines wind direction.
    };

    (function(){
        window.animation_config = window.animation_config || {
            generatorDelay : { min: 1, max:20 },
            isRunning : true,
            speed : 1,
            x_axis_rate : 0.1,
            weight : 0.5,
            size : 1.5,
            z_axis_rate : 0.05,
            color : {b : 255, a: 0.8},
            wind : 0
        };
        window.animation_config.isRunning = true;
        
        let canvas = document.getElementById('snow-flake-app');
        let ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const generatorDelay = { min: 1, max:1 };
        let screenBounds = { lower: 0, upper: canvas.width};
        
        window.onfocus = function() {
        //uncomment for performance
        //window.animation_config.isRunning = true;
        };
        window.onblur = function() {
        //uncomment for performance
        //window.animation_config.isRunning = false;
        };
        
        let particleArray = [];
        
        function randomInt(min = 0, max = 1){
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function randomFloat(min = 0, max = 1){
            return (Math.random() * (max - min)) + min;  //Math.random() * (max - min + 1) + min;
        }
        function randomColor(brightness, alpha){
            return 'rgba(' + randomInt(brightness,255) + ',' + randomInt(brightness,255) + ',' + randomInt(brightness,255) + ',' + alpha + ')';
        }
        
        class Particle{
            constructor(pos, vector, z_index, size, color, weight){
                this.pos = pos;
                this.vector = vector;
                this.z_index = z_index%5;
                this.color = color;
                this.size = size%50;
                this.weight = weight%50;
            }
            
            get displaySize(){
                return Math.sqrt(this.z_index*this.size) * window.animation_config.size;
            }
            
            draw(){
                if(this.death || !(this.pos.x >= 0 && this.pos.x <= canvas.width )) return;
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.displaySize, 0, Math.PI*2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            
            update(){
                this.vector.z += randomFloat(-0.1,0.1);
                this.z_index += this.vector.z * window.animation_config.z_axis_rate;
                if(this.z_index <= 0) this.z_index = Math.abs(this.z_index);
                if(this.pos.y > canvas.height - this.displaySize || !(this.pos.x >= screenBounds.lower && this.pos.x <= screenBounds.upper ) || this.displaySize <= 0){
                    this.death = true;
                    return;
                }
                
                this.vector.x += (randomFloat(-0.3, 0.3) * this.z_index) * window.animation_config.x_axis_rate;
                this.vector.y = Math.sqrt(this.weight * this.size * this.z_index) * window.animation_config.speed;
                
                
                this.pos.x += this.vector.x + window.animation_config.wind;
                this.pos.y += this.vector.y;
            }
        }
        
        function init(){
            particleArray = [];
            
            function generateRandomParticle(){
                if(window.animation_config.isRunning){
                    if(window.animation_config.wind > 0) {
                        screenBounds.lower = (window.animation_config.wind * 200) * -1;
                        screenBounds.upper = canvas.width;
                    }
                    else if(window.animation_config.wind < 0) {
                        screenBounds.lower = 0;
                        screenBounds.upper = canvas.width + (window.animation_config.wind * -200);
                    }
                    let pos = { x: randomInt(screenBounds.lower, screenBounds.upper), y: 0 };
                    let vector = { x: randomFloat(-0.3,0.3), y: randomFloat(-5,5), z: randomFloat(-0.1,0.1)};
                    let s = randomFloat(0.1,5);
                    let z = randomFloat(0.2,5);
                    let c = randomColor(window.animation_config.color.b, window.animation_config.color.a);
                    let w = window.animation_config.weight;
                    particleArray.push(new Particle(pos,vector,z,s,c,w));
                }
                setTimeout(generateRandomParticle, randomInt(window.animation_config.generatorDelay.min, window.animation_config.generatorDelay.max));
            }
            
            
            generateRandomParticle();
        }
        
        function animate(){
            
            if(window.animation_config.isRunning){
                ctx.clearRect(0,0, canvas.width, canvas.height);
                particleArray = particleArray.filter(particle => !particle.death);
                for(let i = 0; i < particleArray.length; i++){
                    particleArray[i].update();
                    particleArray[i].draw();
                }
            }
            requestAnimationFrame(animate);
        }
        
        init();
        animate();
    })();

    }

// 调用飘雪函数
piaoxue()
//------------------------------------------------------------------------------------------------------------------------------------------------------------------


}


