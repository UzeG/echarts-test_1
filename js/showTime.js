let t = null;
t = setTimeout(time, 1000);
const showTime = document.querySelector('.showTime');
function time() {
    clearTimeout(t);
    let dt = new Date();
    let y = dt.getFullYear();
    let m = dt.getMonth() + 1;
    let d = dt.getDate();
    let hh = padZero(dt.getHours());
    let mm = padZero(dt.getMinutes());
    let ss = padZero(dt.getSeconds());
    showTime.innerHTML = `当前时间: ${y}年${m}月${d}日-${hh}:${mm}:${ss}`;
    t = setTimeout(time, 1000);
}
function padZero(data) {
    return data >= 10 ? `${data}` : `0${data}`;
}