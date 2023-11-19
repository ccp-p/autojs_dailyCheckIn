
const clickCenter = function (sel)  {
    const item = sel
    const bound = item.bounds()
    const centerX = bound.centerX()
    const centerY = bound.centerY()
    click(centerX, centerY)
}
const get = text("领 取").findOne()
 console.log('get',get);
 
if(get){
       clickCenter(get)
} 