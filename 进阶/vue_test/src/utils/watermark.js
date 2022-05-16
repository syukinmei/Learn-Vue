/**入参：
    @text: 传入水印需要展示的文本;
    @renderDom:要给哪个元素加水印，默认body；
*/
const watermark = {};
const setWatermark = function (text, renderDom = document.body) {
    const id = 'myId'
    console.log(document.getElementById(id) !== null)
    if (document.getElementById(id) !== null) {
        // document.body.removeChild(document.getElementById(id))
        document.getElementById(id).remove();
    }
    // 第一步：生成cavas元素，使用canvas, 绘制水印
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext('2d');
    ctx.rotate(-20 * Math.PI / 180); // 画布旋转-20度
    ctx.font = '20px Vedana';
    ctx.fillStyle = '#eee';
    ctx.textAlign = "left";
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 1)'; // 阴影的颜色
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 3;
    // 在画布上绘制填色的文本（输出的文本，开始绘制文本的X/Y轴坐标）
    ctx.fillText(text, -canvas.width / 16, canvas.height / 2);

    // 第二步：把canvas转化为一张图片，作为背景图，添加到div
    const rectAttr = renderDom.getBoundingClientRect();
    var div = document.createElement('div')
    div.id = id;
    div.style.pointerEvents = 'none';
    // 两种效果都可以，看需求
    // div.style.position = 'absolute';
    div.style.position = 'fixed';
    div.style.top = rectAttr.top + 'px';
    // div.style.top = '3px';
    div.style.left = rectAttr.left + 'px';
    // div.style.left = '5px';
    div.style.zIndex = '1';
    div.style.opacity = '0.3';
    div.style.width = rectAttr.width + 'px';
    div.style.height = rectAttr.height + 'px';
    div.style.background = 'url(' + canvas.toDataURL() + ')left top repeat';
    if (rectAttr.height === 0) {
        return;
    }
    // 第三步：div添加到body元素，水印生成
    renderDom.appendChild(div)
    return id;
}
watermark.set = function (text, renderDom) {
    var id = setWatermark(text, renderDom)
    if (!id) {
        // setTimeout(function () { watermark.set(text, renderDom) }, 0)
        watermark.set(text, renderDom);
    }
    // setWatermark(text, renderDom)

    // 页面发生缩放，重绘水印
    window.onresize = function () {
        setWatermark(text, renderDom)
    }
}

export default watermark;