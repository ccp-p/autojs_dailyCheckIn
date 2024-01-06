const clickCenter = function (sel)  {
    const item = sel
    const bound = item.bounds()
    const centerX = bound.centerX()
    const centerY = bound.centerY()
    click(centerX, centerY)
}


function helloWorld() {
    click(1,196,1079,2400)
    console.log('hello 12342225');
     
    // 如果一个控件的类名以"android.widget."开头，则可以省略这部分，例如文本控件可以直接用className("TextView")的选择器。
    const button = className("android.widget.Button")
    
    // 福袋
    const  prefix = '福袋'

    const descButton  = button.descStartsWith(prefix).findOne(1000)
    if(!descButton){
        console.log('没有找到福袋');
        return
    }
    const descStr = descButton.desc()

    const keywords = ['9分','4分']
    let time = descStr
    const isContent = keywords.some(function(item){
        if(descStr.includes(item)){
            time = item
            return true
        }
    })
    if(!isContent){
        console.log("不是"+time+"钟福袋不点击");
       return 
    }
   
    
    descButton.click()
    
    let comment = className("android.widget.Button").text("去发表评论").findOne(1000)
    if(!comment){
      console.log('没有找到去发表评论');
      click( 895,1137,1033,1220)
      return
    }
    comment = comment.parent()
    console.log('comment', comment);
    
    clickCenter(comment)
    
    // 发送
    var sent  = id('jme').findOne(1000)
    
    
    sleep(1000)
    
    click( 895,1137,1033,1220)
    // bounds = (895,1137,1033,1220)

    
}
const fourMinutes =  4 * 60 * 1000
setInterval(() => {
    const close = className("android.widget.TextView").text("关闭福袋").findOne(1000)
    if(close){
    close.click()
    }

    helloWorld()
}, 5000);


