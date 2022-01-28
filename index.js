window.onload = function(){
    let el = document.getElementById('pre-loader');
    el.style.display = 'none';
  };

$(document).ready(() => {
    var entries = [
        { label: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { label: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { label: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { label: "Python", url: "https://www.python.org/" },
        { label: "React", url: "https://reactjs.org/" },
        { label: "Unity", url: "https://unity.com/" },
        { label: "C++", url: "https://www.w3schools.com/CPP/default.asp" },
        { label: "C#", url: "https://www.w3schools.com/cs/index.php" },
        { label: "DBMS", url: "https://www.mongodb.com/" },
        { label: "Fonts Awesome", url: "https://fontawesome.com/" },
        { label: "VSCode", url: "https://code.visualstudio.com/" },
        { label: "Java", url: "https://www.javatpoint.com/java-tutorial" },
        { label: "JQuery", url: "https://jquery.com/" },
        { label: "C", url: "https://www.tutorialspoint.com/cprogramming/index.htm" },
        { label: "Blender", url: "https://www.blender.org/" },
        { label: "Dart", url: "https://dart.dev/" },
        { label: "Visual Studio", url: "https://visualstudio.microsoft.com/" },
        { label: "Flutter", url: "https://flutter.dev/" },
        { label: "Rockstar", url: "https://www.rockstargames.com/" },
        { label: "cdnJs", url: "https://cdnjs.com/" },
        { label: "BootStrap", url: "https://getbootstrap.com/" },
        { label: "itch.io", url: "https://itch.io/" },
        { label: "TypeScript", url: "https://www.typescriptlang.org/" },
    ];

    const tag = document.getElementById("tag");
    console.log(tag.offsetWidth);
        var settings = {
            entries: entries,
            width: window.innerWidth - 1152,
            height: window.innerWidth - 1152,
            radius: `${(window.innerWidth - 1152) / 11.5}%`,
            radiusMin: 70,
            bgDraw: false,
            bgColor: '#42f5f5',
            opacityOver: 1.00,
            opacityOut: 0.05,
            opacitySpeed: 5,
            fov: 800,
            speed: 0.5,
            fontFamily: 'Roboto Mono, monospace',
            fontSize: '22',
            fontWeight: 'bold',
            fontColor: '#f12178',
            fontStyle: 'normal',
            fontStretch: 'normal',
            fontToUppercase: false
        };
        $('#tag').svg3DTagCloud(settings);
    });


const smallCog = document.getElementById("small-cog");
const cog = document.getElementById("cog");

window.onscroll = (e) => {
    smallCog.style.transform = `rotate(${window.pageYOffset / 5}deg)`;
    cog.style.transform = `rotate(${window.pageYOffset / 8}deg)`;
}

const heading = document.getElementsByClassName('headings');

for (let i = 0; i < heading.length; i++) {

    heading[i].addEventListener('animationend', function (e) {
        heading[i].classList.remove('animated');
    });
    heading[i].addEventListener('mouseenter', function (e) {
        heading[i].classList.add('animated');
    })
}
const elements = document.getElementsByClassName('home-intro-text');

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('animationend', function (e) {
        elements[i].classList.remove('animated');
    });
    elements[i].addEventListener('mouseover', function (e) {
        elements[i].classList.add('animated');
    })
}

const navCog = document.getElementsByClassName('nav-cog');

for (let i = 0; i < navCog.length; i++) {
    navCog[i].addEventListener('animationend', function (e) {
        navCog[i].classList.remove('nav-cog-anim');
        navCog[i].classList.remove('animated-nav-cog-closed');
    });

    navCog[i].addEventListener('mouseover', function (e) {
        navCog[i].classList.add('nav-cog-anim');
    });

    navCog[i].addEventListener('mouseout', function (e) {
        navCog[i].classList.add('animated-nav-cog-closed');
    });
}

const userName = document.getElementById("user");
const userEmail = document.getElementById("email");
const userSubject = document.getElementById("subject");
const userMessage = document.getElementById("description");

const bar = document.getElementsByClassName("fill-bar");

const successText = document.getElementById("success");
const errorText = document.getElementById("error");

const sendMessage = () => {

    let templateParams = {
        from_name: userName.value,
        user_email: userEmail.value,
        subject: userSubject.value,
        message: userMessage.value
    };

    if (!(!userName.value || userName.value.length === 0) && !(!userEmail.value || userEmail.value.length === 0)) {
        emailjs.send('service_uujg3nn', 'template_bs85ow6', templateParams)
            .then((response) => {
                console.log(response);
                successText.textContent = "Your Message has been Sent.";
                successText.style.visibility = "visible";

            }, (error) => {
                console.log(error);
                errorText.textContent = "There was an Error: Message not Sent.";
                errorText.style.visibility = "visible";
            });

        userName.value = "";
        userEmail.value = "";
        userSubject.value = "";
        userMessage.value = "";
        document.body.addEventListener('click', () => {
            successText.style.visibility = "hidden";
            errorText.style.visibility = "hidden";
        });
    }
    
    if (!userName.value || userName.value.length === 0) {
        errorText.textContent = "Please Enter Your Name.";
        errorText.style.visibility = "visible";
    }
    if (!userEmail.value || userEmail.value.length === 0) {
        errorText.textContent = "Please Enter Your Email.";
        errorText.style.visibility = "visible";
    }

}






/*
Copyright (c) 2016 Niklas Knaack

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

!function () { function t(t, e) { function n() { A = document.createElementNS(E, "svg"), A.addEventListener("mousemove", v), t.appendChild(A), p.bgDraw && (P = document.createElementNS(E, "rect"), P.setAttribute("x", 0), P.setAttribute("y", 0), P.setAttribute("fill", p.bgColor), A.appendChild(P)), a(), i(), d(), window.addEventListener("resize", y) } function i() { var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, i = e, r = n; p.width.toString().indexOf("%") > 0 || p.height.toString().indexOf("%") > 0 ? (i = Math.round(t.offsetWidth / 100 * parseInt(p.width)), r = Math.round(i / 100 * parseInt(p.height))) : (i = parseInt(p.width), r = parseInt(p.height)), i >= e && (i = e), r >= n && (r = n), b = { x: i / 2, y: r / 2 }, O.x = p.speed / b.x, O.y = p.speed / b.y, w = i >= r ? r / 100 * parseInt(p.radius) : i / 100 * parseInt(p.radius), 1 > w && (w = 1), x = w / 2, x < p.radiusMin && (x = p.radiusMin, w = 2 * x), A.setAttribute("width", i), A.setAttribute("height", r), p.bgDraw && (P.setAttribute("width", i), P.setAttribute("height", r)), o(x) } function o(t) { for (var e = 0, n = S.length; n > e; e++)r(S[e], t) } function r(t, e) { var n = t.vectorPosition.x - C.x, i = t.vectorPosition.y - C.y, o = t.vectorPosition.z - C.z, r = Math.sqrt(n * n + i * i + o * o); t.vectorPosition.x /= r, t.vectorPosition.y /= r, t.vectorPosition.z /= r, t.vectorPosition.x *= e, t.vectorPosition.y *= e, t.vectorPosition.z *= e } function s(t, e, n, i, o) { var r = {}; return r.element = document.createElementNS(E, "text"), r.element.setAttribute("x", 0), r.element.setAttribute("y", 0), r.element.setAttribute("fill", p.fontColor), r.element.setAttribute("font-family", p.fontFamily), r.element.setAttribute("font-size", p.fontSize), r.element.setAttribute("font-weight", p.fontWeight), r.element.setAttribute("font-style", p.fontStyle), r.element.setAttribute("font-stretch", p.fontStretch), r.element.setAttribute("text-anchor", "middle"), r.element.textContent = p.fontToUpperCase ? e.label.toUpperCase() : e.label, r.link = document.createElementNS(E, "a"), r.link.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.url), r.link.setAttribute("target", e.target), r.link.addEventListener("mouseover", f, !0), r.link.addEventListener("mouseout", h, !0), r.link.appendChild(r.element), r.index = t, r.mouseOver = !1, r.vectorPosition = { x: n, y: i, z: o }, r.vector2D = { x: 0, y: 0 }, A.appendChild(r.link), r } function a() { for (var t = 1, e = p.entries.length + 1; e > t; t++) { var n = Math.acos(-1 + (2 * t - 1) / e), i = Math.sqrt(e * Math.PI) * n, o = Math.cos(i) * Math.sin(n), r = Math.sin(i) * Math.sin(n), a = Math.cos(n), u = s(t - 1, p.entries[t - 1], o, r, a); S.push(u) } } function u(t) { for (var e = 0, n = S.length; n > e; e++) { var i = S[e]; if (i.element.getAttribute("x") === t.getAttribute("x") && i.element.getAttribute("y") === t.getAttribute("y")) return i } } function c(t) { for (var e = u(t), n = 0, i = S.length; i > n; n++) { var o = S[n]; o.index === e.index ? o.mouseOver = !0 : o.mouseOver = !1 } } function l() { var t = O.x * z.x - p.speed, e = p.speed - O.y * z.y, n = t * k, i = e * k; D.sx = Math.sin(n), D.cx = Math.cos(n), D.sy = Math.sin(i), D.cy = Math.cos(i); for (var o = 0, r = S.length; r > o; o++) { var s = S[o]; if (M) { var a = s.vectorPosition.x, u = s.vectorPosition.y * D.sy + s.vectorPosition.z * D.cy; s.vectorPosition.x = a * D.cx + u * D.sx, s.vectorPosition.y = s.vectorPosition.y * D.cy + s.vectorPosition.z * -D.sy, s.vectorPosition.z = a * -D.sx + u * D.cx } var c = p.fov / (p.fov + s.vectorPosition.z); s.vector2D.x = s.vectorPosition.x * c + b.x, s.vector2D.y = s.vectorPosition.y * c + b.y, s.element.setAttribute("x", s.vector2D.x), s.element.setAttribute("y", s.vector2D.y); var l; M ? (l = (x - s.vectorPosition.z) / w, l < p.opacityOut && (l = p.opacityOut)) : (l = parseFloat(s.element.getAttribute("opacity")), l += s.mouseOver ? (p.opacityOver - l) / p.opacitySpeed : (p.opacityOut - l) / p.opacitySpeed), s.element.setAttribute("opacity", l) } S = S.sort(function (t, e) { return e.vectorPosition.z - t.vectorPosition.z }) } function d() { requestAnimFrame(d), l() } function f(t) { M = !1, c(t.target) } function h(t) { M = !0 } function v(t) { z = m(A, t) } function m(t, e) { var n = t.getBoundingClientRect(); return { x: e.clientX - n.left, y: e.clientY - n.top } } function y(t) { i() } var p = { entries: [], width: 480, height: 480, radius: "70%", radiusMin: 75, bgDraw: !0, bgColor: "#000", opacityOver: 1, opacityOut: .05, opacitySpeed: 6, fov: 800, speed: 2, fontFamily: "Arial, sans-serif", fontSize: "15", fontColor: "#fff", fontWeight: "normal", fontStyle: "normal", fontStretch: "normal", fontToUpperCase: !1 }; if (void 0 !== e) for (var g in e) e.hasOwnProperty(g) && p.hasOwnProperty(g) && (p[g] = e[g]); if (!p.entries.length) return !1; var x, w, b, A, P, S = [], M = !0, z = { x: 0, y: 0 }, C = { x: 0, y: 0, z: 0 }, O = { x: 0, y: 0 }, D = { sx: 0, cx: 0, sy: 0, cy: 0 }, k = Math.PI / 180, E = "http://www.w3.org/2000/svg"; window.requestAnimFrame = function () { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) { window.setTimeout(t, 1e3 / 60) } }(), n() } window.SVG3DTagCloud = t }(), "undefined" != typeof jQuery && !function (t) { t.fn.svg3DTagCloud = function (e) { return this.each(function () { t.data(this, "plugin_SVG3DTagCloud") || t.data(this, "plugin_SVG3DTagCloud", new SVG3DTagCloud(this, e)) }) } }(jQuery);
