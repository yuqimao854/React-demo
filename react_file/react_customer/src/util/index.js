export function parseObjectToGetUrl(params) {
    let ret = [];
    for (const key in params) {
        ret.push(`${key}=${params[key]}`);
    }
    return "?" + ret.join("&");
}
//监听视窗触发动画
export function anima() {
    var viewHeight = document.documentElement.clientHeight; //视窗高度
    let lis = document.querySelectorAll("div[anima]"); //获取所有包含anima属性的div节点
    Array.prototype.forEach.call(lis, item => {
        let flag = item.getAttributeNode("anima").nodeValue; //anima的值即想要开启的css动画效果
        if (flag == "") return; //如果为空证明被移除属性，动画已触发，所以return
        let rect = item.getBoundingClientRect(); //元素距离视窗的具体数据
        if (rect.bottom >= 0 && rect.top < viewHeight) {
            (function () {
                item.classList.add("animate__animated"); //添加动画属性
                item.classList.add(flag); //添加动画属性
                item.removeAttribute("anima"); //移除anima证明动画已触发
            })();
        }
    });
}
export function listenView() {
    // 设备识别
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    return new Promise(function (resolve, reject) {
        if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsIpad) {
            resolve(true)
        } else {
            reject(false)
        }
    });
}
export function getUserAgent(){
    const ua = navigator.userAgent.toLowerCase();
    return new Promise(function(resolve,reject){
        if(ua.indexOf('android')!=-1){
            resolve('安卓')
        }else if(ua.indexOf('iphone')!=-1){
            reject('ios')
        }
    })
}