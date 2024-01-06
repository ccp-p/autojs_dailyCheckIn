auto.waitFor();

var Maid = require("./common/Maid.js");
var maid = new Maid("com.tencent.weread");
var Unlock = require("./common/Unlock.js");

var unlock = new Unlock();


maid.before(true);
unlock.unlock();

sleep(1000)
launch('org.autojs.autojsPro');
sleep(1000)

// maid.kill();
maid.sleep(2);

maid.launch();

const clickCenter = function (sel)  {
    const item = sel
    const bound = item.bounds()
    const centerX = bound.centerX()
    const centerY = bound.centerY()
    click(centerX, centerY)
}
//  找到我的按钮Z
text("阅读").waitFor();

sleep(1000)
// 我
id('s2').findOne().click()

sleep(1000)

click('排行榜')

sleep(1000)

click('时长兑福利')

sleep(1000)


const bound = text("领取")

scrollDown()
sleep(1000)

const getFind = text("领取")
console.log('getFind',getFind.find().length);

while(getFind.find().length>0){
    getFind.find().forEach((item,index)=>{
        console.log('item',item)
    
        if(index>0){
            return
        }
    
        clickCenter(item)
        const watchVideo = text("看视频兑换").findOne()
         const get = text("领 取").findOne()
         if(!watchVideo) return false
         if(get){
            clickCenter(get)
            return false
         } 
        sleep(1000)
    
        clickCenter(watchVideo)
    
        sleep(17000)
    
        // 关闭icon id ak
       const closeIcon = className("android.widget.ImageView").findOne()
       closeIcon.click()
    
    })
    
}


