auto.waitFor();

var Maid = require("./common/Maid.js");
var maid = new Maid("com.tencent.weread");
var Unlock = require("./common/Unlock.js");

var unlock = new Unlock();
maid.before(true);
unlock.unlock();


// maid.kill();
// maid.sleep(2);
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


toastLog("开始执行");
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
         if(!watchVideo) return
        sleep(1000)
    
        clickCenter(watchVideo)
    
        sleep(17000)
    
        // 关闭icon id ak
       const closeIcon = className("android.widget.ImageView").findOne()
       closeIcon.click()
    
    })
    
}


