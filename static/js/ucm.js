//轮播.
var index = 0;
var imgs = document.querySelectorAll(".side");
setInterval(function() {
    if (index == 4) {
        index = 0;
    }
    for (var j = 0; j < imgs.length; j++) {
        imgs[j].style.opacity = "0";
    }
    imgs[index].style.opacity = "1";
    index++;
}, 2000)

//用户名验证
var username = document.querySelector(".username input");
var usernamepoint = document.querySelector(".usernamepoint");
var usernamepointnr = usernamepoint.querySelector("span");
var usernamepointfh = document.querySelector(".dui");
username.onfocus = function() {
    usernamepointfh.style.display = "none";
    usernamepointnr.style.display = "none";
    username.style.borderColor = "#549df8";
}
username.onblur = function() {
    var reg = /^\S+$/
    if (reg.test(username.value)) {
        username.style.borderColor = "#cccccc";
        usernamepointfh.innerHTML = "&#xe505;";
        usernamepointfh.style.cssText =
        `
        display: inline-block;
        color: lightgreen;
        font-size: 20px;
        `
        }
     else {
        usernamepointfh.innerHTML = "&#xe50b;"
        usernamepointfh.style.cssText =
        `
        display: inline-block;
        color: red;
        font-size: 20px;`
        usernamepointnr.style.display = "block";
        usernamepointnr.innerHTML = "&#xe50b;昵称不可以为空"
        usernamepoint.style.cssText =
        `
        display: block;
        color: red;
        `
        username.style.borderColor = "#ff5b5b";
    }
}

//密码验证
var userpaw = document.querySelector(".userpaw input");
var userpawpointfh = document.querySelector(".dui1");
var userpawpoint = document.querySelector(".userpawpoint");
var userpawpointnr1 = userpawpoint.querySelector(".nr1");
var userpawpointnr2 = userpawpoint.querySelector(".nr2");
var userpawpointnr3 = userpawpoint.querySelector(".nr3");
var kongtip = document.querySelector(".kongtip");
userpaw.onfocus = function() {
    userpawpointfh.style.display = "none";
    userpawpoint.style.display = "block";
    userpawpointnr1.innerHTML = "&#xe505;";
    userpawpointnr1.style.color = "lightgreen";
    kongtip.style.display = "none";
    userpaw.style.borderColor = "#549df8";
}
userpaw.oninput = function() {
    var str = userpaw.value;
    if (str.indexOf(" ") == -1) {
        userpawpointnr1.innerHTML = "&#xe505;";
        userpawpointnr1.style.color = "lightgreen";
    }
    else {
        userpawpointnr1.innerHTML = "&#xe50b;";
        userpawpointnr1.style.color = "#a5caff";
    }
    if (str.length >= 8) {
        userpawpointnr2.innerHTML = "&#xe505;";
        userpawpointnr2.style.color = "lightgreen";
    }
    else {
        userpawpointnr2.innerHTML = "&#xe50b;";
        userpawpointnr2.style.color = "#a5caff";
    }
    if (str.length > 16) {
        userpaw.value = str.slice(0, 16);
    }
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!\s+$)[0-9a-zA-Z\s\.,./;'\\]{2,}$/
    if (reg.test(str)) {
        userpawpointnr3.innerHTML = "&#xe505;";
        userpawpointnr3.style.color = "lightgreen";
    }
    else {
        userpawpointnr3.innerHTML = "&#xe50b;";
        userpawpointnr3.style.color = "#a5caff";
    }
}

userpaw.onblur = function() {
    var reg2 = /^\S+$/
    if (reg2.test(userpaw.value)) {
        var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!\s+$)[0-9a-zA-Z\s\.,./;']{8,16}$/
        if (reg.test(userpaw.value)) {
            userpaw.style.borderColor = "#cccccc";
            userpawpointfh.innerHTML = "&#xe505;"
            userpawpointfh.style.cssText = `
            display: inline-block;
            color:lightgreen;
            font-size: 20px;`
        }
        else {
            userpaw.style.borderColor = "#ff5b5b";
            userpawpointfh.innerHTML = "&#xe50b;"
            userpawpointfh.style.cssText = `
            display: inline-block;
            color:red;
            font-size: 20px;`
        }
        userpawpoint.style.display = "none";
        kongtip.style.display = "none";
    }
    else {
        userpaw.style.borderColor = "#ff5b5b";
        userpawpoint.style.display = "none";
        kongtip.style.display = "block";
        userpawpointfh.innerHTML = "&#xe50b;"
        userpawpointfh.style.cssText = `
        display: inline-block;
        color:red;
        font-size: 20px;`
    }
}
//手机号验证
var userphonenr = document.querySelector(".userphone input");
var userphonefh = document.querySelector(".dui2");
var userphonepoint = document.querySelector(".userphonepoint");
userphonenr.onfocus = function() {
    userphonenr.style.borderColor = "#549df8";
    userphonepoint.style.display = "none";
    userphonefh.style.display = "none";
}
userphonenr.onblur = function() {
    var phonenr = userphonenr.value;
    var reg = /^1[3-9]\d{9}$/
    if (reg.test(phonenr)) {
        userphonefh.innerHTML = "&#xe505;"
        userphonefh.style.cssText = `
        display: inline-block;
        color:lightgreen;
        font-size: 20px;`;
        userphonenr.style.borderColor = "#cccccc";
    }
    else {
        userphonefh.innerHTML = "&#xe50b;"
        userphonefh.style.cssText = `
        display: inline-block;
        color:red;
        font-size: 20px;`
        userphonepoint.style.display = "block";
        userphonepoint.style.color = "red";
        userphonenr.style.borderColor = "#ff5b5b";
    }
}
//验证码验证
var yzmsr = document.querySelector(".yzm input:nth-of-type(1)");
var yzmxs = document.querySelector(".yzm input:nth-of-type(2)");
var yzmfh = document.querySelector(".sjm");
var midle = sjyzm();
var nosee = document.querySelector(".nosee");
sele.onfocus = function() {
    sele.style.borderColor = "#549df8";
}
sele.onblur = function() {
    sele.style.borderColor = "#cccccc";
}
yzmsr.onfocus = function() {
    yzmxs.value = midle;
    yzmfh.style.display = "none";
    yzmsr.style.borderColor = "#549df8";

}
yzmsr.onblur = function() {
    var xs = (yzmxs.value).toUpperCase()
    var sr = (yzmsr.value).toUpperCase()
    if (xs == sr) {
        yzmfh.innerHTML = "&#xe505;"
        yzmfh.style.cssText = `
            display: inline-block;
            color:lightgreen;
            font-size: 20px;`;
        yzmsr.style.borderColor = "#cccccc";
    }
    else {
        yzmfh.innerHTML = "&#xe50b;"
        yzmfh.style.cssText = `
            display: inline-block;
            color:red;
            font-size: 20px;`;
        yzmsr.style.borderColor = "#ff5b5b";
    }
}
nosee.onclick = function() {
    midle = sjyzm();
    yzmxs.value = midle;
    yzmsr.onblur();
}

function sjyzm() {
    var str = "";
    for (var i = 0; i >= 0; i++) {
        if (str.indexOf(String.fromCharCode(yzm())) == -1) {
            str += String.fromCharCode(yzm());
        }
        if (str.length == 4) {
            break;
        }
    }
    function yzm() {
        var r = Math.random();
        var sjs = null;
        if (r <= (1 / 3)) {
            sjs = parseInt(Math.random() * (90 - 65 + 1) + 65);
        }
        else if (r <= (2 / 3)) {
            sjs = parseInt(Math.random() * (122 - 97 + 1) + 97);
        }
        else {
            sjs = parseInt(Math.random() * (57 - 48 + 1) + 48);
        }
        return sjs;
    }
    return str;
}
