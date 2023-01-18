Element.prototype.characterCounting = function(e) {
    var t, n, i, s;
    let l = [],
        r = this.querySelectorAll("p");
    r.forEach((e, t) => { l.push(e.innerText.length) });
    let o, a, c = function t(n) {
            let i = 0;
            for (let s = 0; s < n.length; s++)
                if ((i += n[s]) >= e.maxChar) return s
        }(l),
        h = (t = l, n = c, 0 === n ? e.maxChar : 1 === n ? a = e.maxChar - t[0] : (total = (o = t.slice(0, n)).reduce((e, t) => e + t, 0), a = e.maxChar - total)),
        u, d, p, T;
    i = r, s = c, u = i[s].innerHTML, d = u.slice(0, h), p = u.slice(h, i[s].innerHTML.length), i[s].innerHTML = `${d}<span class="end-dots">...</span>`, T = document.createElement("button"), T.innerText = e.buttonShowText, i[s].parentNode.appendChild(T), i[s].parentNode.querySelector("button").addEventListener("click", function(t) { if (t.preventDefault(), this.classList.toggle("less-content"), this.classList.contains("less-content")) { this.innerText = e.buttonHideText, r[s].querySelector(".end-dots").remove, i[s].innerHTML = `${d}${p}`; for (let n = s + 1; n < l.length; n++) r[n].setAttribute("style", " height: 100%; transition: 0.3s all ease-in-out; opacity:1;visibility: visible;") } else { this.innerText = e.buttonShowText, i[s].innerHTML = `${d}<span class="end-dots">...</span>`; for (let o = s + 1; o < l.length; o++) r[o].style.display = "none" } });
    for (let f = c + 1; f < l.length; f++) r[f].style.display = "none"
};