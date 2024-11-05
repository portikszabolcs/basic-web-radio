var _0x20e1 = ['6007hlzWJP', 'fromCharCode', '2318Nknfyv', 'stringify', '167KYGiJK', '694918DCdfPJ', '2tWpOcN', 'random', 'floor', '1DqYLPq', 'length', '1711564Rmkiqr', '163mzDyoY', '1237mqqmdP', 'charCodeAt', 'split', 'indexOf', 'load finished', 'push', 'toLowerCase', 'undefined', '41NacndT', '180556XkhSIW', '66569hLsnff'];

const rArr = [
    ['bdpstrock', {
        "name": "BDPST Rock",
        "audio": "https://s2.audiostream.hu/bdpstrock_192k",
        "website": "https://bdpstrock.hu",
        "slogan": "Magyarország rockrádiója",
        "lang": "hu"
    }],
    ['best-dance', {
        "name": "Best - Dance Radio",
        "audio": "https://sonic1-rbx.cloud-center.ro/8018/;",
        "website": "https://best-dance.ro",
        "slogan": "Csak fiatalosan!",
        "lang": "hu"
    }],
    ['bestfm', {
        "name": "Best FM - Budapest",
        "audio": "https://icast.connectmedia.hu/5101/live.mp3/",
        "metadata": true,
        "website": "https://bestfm.hu/",
        "slogan": "A legjobb zenék",
        "lang": "hu"
    }],
    ['chillfm', {
        "name": "Chill FM",
        "audio": "https://edge126.rcs-rds.ro/profm/chillfm.mp3",
        "metadata": true,
        "website": "https://chillfm.ro",
        "slogan": "Muzică de la A la Zen",
        "lang": "ro"
    }],
    ['city', {
        "name": "City Rádió",
        "audio": "https://mscp1.gazduireradio.ro/cityradio",
        "website": "https://www.city-radio.ro/",
        "slogan": "A legtöbb sláger",
        "lang": "hu"
    }],
    ['coolfm', {
        "name": "Cool FM",
        "audio": "https://mediagw.e-tiger.net/stream/coolfm",
        "website": "https://coolfm.hu",
        "slogan": "No.1 Hit Music",
        "lang": "hu"
    }],
    ['dancefm', {
        "name": "Dance FM",
        "audio": "https://edge126.rcs-rds.ro/profm/dancefm.mp3",
        "metadata": true,
        "website": "https://dancefm.ro",
        "slogan": "The Beat of Romania",
        "lang": "ro"
    }],
    ['digifm', {
        "name": "Digi FM",
        "audio": "https://edge76.rcs-rds.ro/digifm/digifm.mp3",
        "website": "https://digifm.ro",
        "slogan": "Ca să știi",
        "lang": "ro"
    }],
    ['europafm', {
        "name": "Europa FM",
        "audio": "https://astreaming.edi.ro:8443/EuropaFM_aac",
        "metadata": true,
        "website": "https://europafm.ro",
        "slogan": "Pe aceeași frecvență cu tine!",
        "lang": "ro"
    }],
    ['ibizaglobal', {
        "name": "Ibiza Global Radio",
        "audio": "https://listenssl.ibizaglobalradio.com:8024/stream",
        "website": "https://ibizaglobalradio.com",
        "slogan": "The Soundtrack of Ibiza",
        "lang": "en"
    }],
    ['kissfm', {
        "name": "Kiss FM",
        "audio": "https://live.kissfm.ro/kissfm.aacp",
        "metadata": true,
        "website": "https://kissfm.ro",
        "slogan": "#1 HIT Radio",
        "lang": "ro"
    }],
    ['kisskm', {
        "name": "Kiss Kiss in the Mix Radio",
        "audio": "https://live.kissfm.ro/kkm.radio",
        "website": "https://soundis.ro/kisskissinthemix/",
        "slogan": "Kiss Kiss in the Mix Radio",
        "lang": "ro"
    }],
    ['kossuth', {
        "name": "Kossuth Rádió",
        "audio": "https://icast.connectmedia.hu/4736/mr1.mp3",
        "website": "https://mediaklikk.hu/kossuth",
        "slogan": "Otthon a világban",
        "lang": "hu"
    }],
    ['magicfm', {
        "name": "Magic FM",
        "audio": "https://live.magicfm.ro/magicfm.aacp",
        "metadata": true,
        "website": "https://magicfm.ro",
        "slogan": "Always Great Music",
        "lang": "ro"
    }],
    ['marosvr', {
        "name": "Marosvásárhelyi Rádió",
        "audio": "http://stream2.srr.ro:8312/;",
        "website": "https://www.marosvasarhelyiradio.ro/",
        "slogan": "Értünk van, rólunk szól",
        "lang": "hu"
    }],
    ['mixradio', {
        "name": "Mix Rádió",
        "audio": "https://stream.phost.hu:8006/live",
        "website": "http://www.mixradio.hu/",
        "slogan": "Napjaink slágerei",
        "lang": "hu"
    }],
    ['onefm', {
        "name": "One FM",
        "audio": "https://live.onefm.ro/onefm.aacp",
        "metadata": true,
        "website": "https://onefm.ro",
        "slogan": "This is The Party Station",
        "lang": "ro"
    }],
    ['oneworld', {
        "name": "One World Radio",
        "audio": "https://22193.live.streamtheworld.com/OWR_DABAAC.aac",
        "website": "https://www.tomorrowland.com/home/radio",
        "slogan": "The Sound of Tomorrowland",
        "lang": "en"
    }],
    ['oxygen', {
        "name": "Oxygen Music",
        "audio": "https://oxygenmusic.hu:8000/oxygenmusic_128",
        "website": "https://oxygenmusic.hu/csatorna",
        "slogan": "Slágerek Maximumon",
        "lang": "hu"
    }],
    ["oxygenxmas", {
        "name": "Oxygen Xmas",
        "audio": "https://oxygenmusic.hu:8443/xmas_128",
        "website": "https://oxygenmusic.hu/csatorna/oxygen-xmas",
        "slogan": "Slágerek Maximumon",
        "lang": "hu"
    }],
    ["ozonefm", {
        "name": "Ozone FM",
        "audio": "https://oxygenmusic.hu:8443/ozonefm_128.mp3",
        "website": "https://oxygenmusic.hu/csatorna/ozone-fm",
        "slogan": "Mai Slágerek Maximumon",
        "lang": "hu"
    }],
    ['petofi', {
        "name": "Petőfi Rádió",
        "audio": "https://icast.connectmedia.hu/4738/mr2.mp3",
        "metadata": true,
        "website": "https://petofilive.hu",
        "slogan": "Zenében Első!",
        "lang": "hu"
    }],
    ['profm', {
        "name": "ProFM",
        "audio": "https://edge126.rcs-rds.ro/profm/profm.mp3",
        "metadata": true,
        "website": "https://profm.ro",
        "slogan": "OPEN RADIO",
        "lang": "ro"
    }],
    ['radio1', {
        "name": "Rádió 1",
        "audio": "https://icast.connectmedia.hu/5202/live.mp3",
        "metadata": true,
        "website": "https://radio1.hu",
        "slogan": "Csak igazi mai sláger megy!",
        "lang": "hu"
    }],
    ['radiogaga-ms', {
        "name": "Rádió GaGa Marosszék",
        "audio": "https://securestreams4.autopo.st:1696/live",
        "website": "https://radiogaga.ro",
        "slogan": "Slágerek és új zenék",
        "lang": "hu"
    }],
    ['radiogaga-ud', {
        "name": "Rádió GaGa Udvarhelyszék",
        "audio": "https://securestreams5.autopo.st:1992/player",
        "website": "https://radiogaga.ro",
        "slogan": "Slágerek és új zenék",
        "lang": "hu"
    }],
    ['radioimpuls', {
        "name": "Radio Impuls",
        "audio": "https://live.radio-impuls.ro/stream",
        "website": "https://radioimpuls.ro",
        "slogan": "#HITPEREPEAT",
        "lang": "ro"
    }],
    ['radiozum', {
        "name": "Radio ZUM",
        "audio": "https://streams.radiozum.md/listen/zum1/ZUM1",
        "website": "https://radiozum.md",
        "slogan": "Muzica proaspăt lansată",
        "lang": "ro"
    }],
    ['retro', {
        "name": "Retró Rádió",
        "audio": "https://icast.connectmedia.hu/5001/live.mp3",
        "metadata": true,
        "website": "https://retroradio.hu",
        "slogan": "Minden idők legnagyobb slágerei",
        "lang": "hu"
    }],
    ['rockfm', {
        "name": "Rock FM",
        "audio": "https://live.rockfm.ro/rockfm.aacp",
        "metadata": true,
        "website": "https://rockfm.ro",
        "slogan": "It Rocks!",
        "lang": "ro"
    }],
    ['rocker', {
        "name": "Rocker Rádió",
        "audio": "https://radio.ch3.hu:8200/rocker.mp3",
        "website": "https://rockerradio.online/kezdolap/",
        "slogan": "A Rock ereje!",
        "lang": "hu"
    }],
    ['roxy', {
        "name": "Roxy Rádió",
        "audio": "https://s2.audiostream.hu/roxy_192k",
        "website": "https://radioroxy.hu",
        "slogan": "Csak mai zene",
        "lang": "hu"
    }],
    ['slagerfm', {
        "name": "Sláger FM",
        "audio": "https://slagerfm.netregator.hu:7813/slagerfm128.mp3",
        "website": "https://slagerfm.hu/",
        "slogan": "A legnagyobb slágerek változatosan",
        "lang": "hu"
    }],
    ['szepvizfm', {
        "name": "Szépvíz FM",
        "audio": "http://szepvizfm.ro:8000/;",
        "website": "http://myonlineradio.hu/szepviz-radio",
        "slogan": "Csak a mienk!",
        "lang": "hu"
    }],
    ['virginro', {
        "name": "Virgin Radio Romania",
        "audio": "https://astreaming.edi.ro:8443/VirginRadio_aac",
        "metadata": true,
        "website": "https://virginradio.ro",
        "slogan": "The World Famous Virgin Radio",
        "lang": "ro"
    }],
    ['virginuk', {
        "name": "Virgin Radio UK",
        "audio": "https://radio.virginradio.co.uk/stream",
        "website": "https://virginradio.co.uk",
        "slogan": "The World Famous Virgin Radio",
        "lang": "en"
    }]
];
const r = new Map(rArr);

var _0x5e16 = function (_0x522b0, _0x17583a) { _0x522b0 = _0x522b0 - 0x1df; var _0x20e113 = _0x20e1[_0x522b0]; return _0x20e113; };

// For IE 11
if (r.size === 0) {
    rArr.forEach(function (radio) {
        r.set(radio[0], radio[1]);
    });
}

const fetchMeta = {
    metaInterv: null,
    netlifyAPI: false,
    count: 0
};
function Song(artist, title, imageUrl, time) {
    this.artist = artist;
    this.title = title;
    this.img = imageUrl;
    this.time = time;
}
const playlist = {
    currentSong: null,
    songQueue: [],
    update: function () {
        let container = document.getElementById("playlist-container");
        let last = this.songQueue.length - 1;
        if (last < 0) {
            container.innerHTML = "";
            return;
        }
        if (container.childNodes.length == 3) container.removeChild(container.lastChild);

        let image = document.createElement('img');
        image.src = this.songQueue[last].img;
        image.setAttribute("loading", "lazy");
        image.onerror = function () {
            this.src = "img/maskable-grey.svg";
        };
        let button = document.createElement('button');
        button.appendChild(image);
        let textbox = document.createElement("div");
        textbox.classList.add("textbox");
        let text = document.createElement('h2');
        text.innerText = " " + this.songQueue[last].title;
        button.title = this.songQueue[last].title + ' - ' + this.songQueue[last].artist;
        let slogan = document.createElement("p");
        if (this.songQueue[last].artist != "") slogan.innerText = this.songQueue[last].artist + "  •  " + this.songQueue[last].time;
        else slogan.innerText = this.songQueue[last].time;
        slogan.classList.add("slogan");
        textbox.appendChild(text);
        textbox.appendChild(slogan);
        button.classList.add("list-button");
        button.appendChild(textbox);
        document.getElementById("playlist-container").prepend(button);
    }
}

const mediaAPI = ('mediaSession' in navigator);
const player = document.getElementById("audio");
const ho = location.host;
let focused = -1;
let np = 0;
let favs = [];
let ice = null;
let wLock = null;

// ~~~~~~ OLDAL BETOLTESE ~~~~~~

function initPage() {
    if (localStorage.getItem("color-theme")) {
        document.getElementById("color-selector").value = localStorage.getItem("color-theme");
        themeSet(document.getElementById("color-selector").value);
    }
    if (localStorage.getItem("color-scheme")) {
        document.getElementById("scheme-selector").value = localStorage.getItem("color-scheme");
        schemeSwitch();
    }

    (function (_0x1cfc32, _0x558d56) { var _0xeb7533 = _0x5e16; while (!![]) { try { var _0x585e05 = -parseInt(_0xeb7533(0x1f5)) * parseInt(_0xeb7533(0x1e6)) + -parseInt(_0xeb7533(0x1e5)) * -parseInt(_0xeb7533(0x1f3)) + -parseInt(_0xeb7533(0x1f1)) * parseInt(_0xeb7533(0x1ee)) + parseInt(_0xeb7533(0x1ef)) * -parseInt(_0xeb7533(0x1e2)) + -parseInt(_0xeb7533(0x1f6)) + -parseInt(_0xeb7533(0x1df)) * parseInt(_0xeb7533(0x1f0)) + parseInt(_0xeb7533(0x1e4)); if (_0x585e05 === _0x558d56) break; else _0x1cfc32['push'](_0x1cfc32['shift']()); } catch (_0x890dd7) { _0x1cfc32['push'](_0x1cfc32['shift']()); } } }(_0x20e1, 0x994d0), function () { var _0x1283a1 = _0x5e16; console['log'](_0x1283a1(0x1ea)); var _0x2db433 = 0x0; function _0x20e8a8(_0x30b154) { var _0x949080 = _0x1283a1, _0x167938; return _0x30b154[_0x949080(0x1e9)]('//') > -0x1 ? _0x167938 = _0x30b154[_0x949080(0x1e8)]('/')[0x2] : _0x167938 = _0x30b154[_0x949080(0x1e8)]('/')[0x0], _0x167938 = _0x167938['split'](':')[0x0], _0x167938 = _0x167938['split']('?')[0x0], _0x167938; } function _0x1c544b(_0x54fc91) { var _0x46bb54 = _0x1283a1, _0x33cecb = _0x20e8a8(_0x54fc91), _0x1004c0 = _0x33cecb[_0x46bb54(0x1e8)]('.'), _0x3936f5 = _0x1004c0['length']; if (_0x3936f5 == 0x2) _0x33cecb = _0x1004c0[0x0]; else _0x3936f5 > 0x2 && (_0x33cecb = _0x1004c0[_0x3936f5 - 0x2], _0x1004c0[_0x3936f5 - 0x2][_0x46bb54(0x1e3)] == 0x2 && _0x1004c0[_0x3936f5 - 0x1][_0x46bb54(0x1e3)] == 0x2 && (_0x33cecb = _0x1004c0[_0x3936f5 - 0x3])); return _0x33cecb; } var _0x3db9a9 = String[_0x1283a1(0x1f2)](0x4c, 0x4f, 0x43, 0x41, 0x54, 0x49, 0x4f, 0x4e)['toLowerCase'](), _0x11c634 = String[_0x1283a1(0x1f2)](0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e)[_0x1283a1(0x1ec)](), _0x2274fb = window[_0x3db9a9][_0x11c634], _0x33455b = _0x2274fb[_0x1283a1(0x1e9)](String[_0x1283a1(0x1f2)](0x6c, 0x6f, 0x63, 0x61, 0x6c)); if (_0x33455b < 0x0 || _0x2db433 == 0x1) var _0x12255b = _0x1c544b(_0x2274fb); else return; var _0x111013 = [110, 116, 105, 121], _0x255f4b = [], _0x584645 = [], _0x1b1211 = '', _0x22db39 = 0x0; while (_0x22db39 < _0x111013[_0x1283a1(0x1e3)] * 0x2) { _0x584645[_0x1283a1(0x1eb)](_0x12255b[_0x1283a1(0x1e7)](_0x22db39)), _0x22db39 += 0x2; } if (JSON[_0x1283a1(0x1f4)](_0x584645) === JSON[_0x1283a1(0x1f4)](_0x111013)) { } else { var _0x439267 = 0x0; for (var _0x4c9fb3 in window) { _0x439267++; if (_0x439267 > 0xc8) try { var _0x169d94 = Math[_0x1283a1(0x1e1)](Math[_0x1283a1(0x1e0)]() * 0x64); window[_0x169d94] !== _0x1283a1(0x1ed) ? window[_0x4c9fb3] = window[_0x169d94] : window[_0x4c9fb3] = null; } catch (_0x5bf924) { } } } }());

    if (localStorage.getItem("custom-station")) {
        try {
            let cs = JSON.parse(localStorage.getItem("custom-station"));
            r.set("0custom", cs);
        } catch (e) { console.log(e); }
    }
    if (localStorage.getItem("favs")) {
        let string = localStorage.getItem("favs");
        try {
            favs = JSON.parse(string);
            updateFavList();
        } catch (e) { console.log(e); }
    }
    if (ho.indexOf(".netlify") != -1) fetchMeta.netlifyAPI = true;

    createRadioList();
    window.onload = settingsInit();

    const param = window.location.search;
    if (param !== "") {
        const params = new URLSearchParams(param);
        if (params.has("s")) {
            const radio = params.get("s");
            switch (radio) {
                case "last": if (localStorage.getItem("lastStation")) rSelect(localStorage.getItem("lastStation"));
                    break;
                case "fav": if (favs.length > 0) rSelect(favs[0]);
                    break;
                default: if (r.has(radio)) rSelect(radio);
            }
        }
    }
}

function createRadioList() {
    document.getElementById("radio-list-container").innerHTML = "";
    let opt = localStorage.getItem("filter");
    let newArr = [];
    try {
        newArr = Array.from(r.keys()).sort();
    } catch (e) { for (let i = 0; i < rArr.length; i++) { newArr.push(rArr[i][0]); } }
    newArr.forEach(function (key) {
        let image = document.createElement('img');
        image.src = "img/stations/" + key + ".png";
        image.onerror = function () {
            this.src = "img/maskable-grey.svg";
        };
        image.alt = r.get(key).name + " logo";
        image.setAttribute("loading", "lazy");

        let button = document.createElement('button');
        button.appendChild(image);

        let textbox = document.createElement("div");
        textbox.classList.add("textbox");
        let text = document.createElement('h2');
        text.innerText = " " + r.get(key).name;

        let slogan = document.createElement("p");
        slogan.innerText = r.get(key).slogan;
        slogan.classList.add("slogan");
        textbox.appendChild(text);
        textbox.appendChild(slogan);

        button.appendChild(textbox);
        button.classList.add("list-button");
        button.classList.add("focusable");
        button.setAttribute("data-radioid", key);
        button.setAttribute("data-lang", r.get(key).lang);
        if (opt && opt != "all" && opt != r.get(key).lang && r.get(key).lang != "all") {
            button.style.display = "none";
            button.classList.remove("focusable");
        }
        button.onclick = function () {
            let n = this.getAttribute("data-radioid");
            rSelect(n);
        }
        document.getElementById("radio-list-container").appendChild(button);
    });
}

function filter(button) {
    let opt = button.getAttribute("data-val");
    filterSwitch();
    if (opt != "all") {
        Array.prototype.forEach.call(document.getElementsByClassName("list-button"), function (el) {
            let lang = el.getAttribute("data-lang");
            if (!lang) return;
            if (lang == opt || lang == "all") {
                el.style.display = "";
                el.classList.add("focusable");
            }
            else {
                el.style.display = "none";
                el.classList.remove("focusable");
            }
        });
    } else {
        Array.prototype.forEach.call(document.getElementsByClassName("list-button"), function (el) {
            el.style.display = "";
            el.classList.add("focusable");
        });
    }
    localStorage.setItem("filter", opt);
}

function addStationMenu() {
    let layer = document.createElement("div");
    layer.classList.add("shadow-layer");
    layer.onclick = function () {
        document.body.removeChild(layer);
    }
    let container = document.createElement("div");
    container.classList.add("popup-menu");
    container.onclick = function (e) {
        e.stopPropagation();
    }
    let h = document.createElement("h3");
    h.innerText = text.newRadio[0];
    h.style.margin = "10px 0";
    let form = document.createElement("form");
    let nameLabel = document.createElement("label");
    nameLabel.textContent = text.newRadio[1];
    nameLabel.setAttribute("for", "customr-name");
    let name = document.createElement("input");
    name.type = "text";
    name.id = "customr-name";
    name.setAttribute("required", "true");
    let urlLabel = document.createElement("label");
    urlLabel.textContent = "URL:";
    urlLabel.setAttribute("for", "customr-url");
    let url = document.createElement("input");
    url.type = "text";
    url.id = "customr-url";
    url.setAttribute("required", "true");
    if (r.has("custom")) {
        name.value = r.get("custom").name;
        url.value = r.get("custom").audio;
    }
    let submit = document.createElement("input");
    submit.type = "submit";
    submit.onclick = function () {
        if (name.value == "" || url.value == "") return;
        const radio = {
            name: name.value,
            audio: url.value,
            slogan: text.newRadio[2],
            lang: "all"
        }
        r.set("0custom", radio);
        createRadioList();
        localStorage.setItem("custom-station", JSON.stringify(radio));
        document.body.removeChild(layer);
        toastMessage(text.newRadio[3]);
    }
    let remove = document.createElement("input");
    remove.type = "reset";
    remove.addEventListener("click", function () {
        if (r.delete("0custom")) {
            createRadioList();
            removeFromFavorites("0custom");
            updateFavList();
            localStorage.removeItem("custom-station");
        }
        document.body.removeChild(layer);
    });
    document.querySelector("#shadow-layer").style.display = "block";
    form.appendChild(nameLabel);
    form.appendChild(name);
    form.appendChild(urlLabel);
    form.appendChild(url);
    form.appendChild(submit);
    form.appendChild(remove);
    container.appendChild(h);
    container.appendChild(form);
    layer.appendChild(container);
    document.body.appendChild(layer);
}

function playPause() {
    if (player.paused) {
        player.load();
        player.play();
    }
    else player.pause();
}

function mute() {
    if (player.muted) {
        player.muted = false;
        document.getElementById("mute").innerText = "volume_up";
    }
    else {
        player.muted = true;
        document.getElementById("mute").innerText = "volume_off";
    }
}

function nextStation() {
    if (favs.length !== 0) {
        let i;
        for (i = 0; i < favs.length; i++) {
            if (favs[i] === np) {
                if (i === favs.length - 1) rSelect(favs[0]);
                else rSelect(favs[i + 1]);
                break;
            }
        }
        if (i === favs.length) rSelect(favs[0]);
    } else {
        const list = document.querySelectorAll(".list-button.focusable");
        for (i = 0; i < list.length; i++) {
            if (list[i].getAttribute("data-radioid") === np) {
                if (i === list.length - 1) rSelect(list[0].getAttribute("data-radioid"));
                else rSelect(list[i + 1].getAttribute("data-radioid"));
                break;
            }
        }
    }
}

function prevStation() {
    if (favs.length !== 0) {
        let i;
        for (i = 0; i < favs.length; i++) {
            if (favs[i] === np) {
                if (i === 0) rSelect(favs[favs.length - 1]);
                else rSelect(favs[i - 1]);
                break;
            }
        }
        if (i === favs.length) rSelect(favs[i - 1]);
    } else {
        const list = document.querySelectorAll(".list-button.focusable");
        for (i = 0; i < list.length; i++) {
            if (list[i].getAttribute("data-radioid") === np) {
                if (i === 0) rSelect(list[list.length - 1].getAttribute("data-radioid"));
                else rSelect(list[i - 1].getAttribute("data-radioid"));
                break;
            }
        }
    }
}

function mediaKeys() {
    navigator.mediaSession.setActionHandler('pause', function () {
        player.pause();
    });
    navigator.mediaSession.setActionHandler('play', function () {
        player.load();
        player.play();
    });
    navigator.mediaSession.setActionHandler('nexttrack', function () {
        nextStation();
    });
    navigator.mediaSession.setActionHandler('previoustrack', function () {
        prevStation();
    });
}

function createMetadata(title, artist, art) {
    if (!mediaAPI) return;
    navigator.mediaSession.metadata = new MediaMetadata({
        artist: artist,
        title: title,
        artwork: [{ src: art }]
    });
}

function rSelect(selected) {
    if (!r.has(selected)) return;

    if (ice) ice.stop();
    clearInterval(fetchMeta.metaInterv);
    fetchMeta.metaInterv = null;
    playlist.songQueue = [];
    playlist.currentSong = null;
    playlist.update();

    document.getElementById("song-info").innerText = "";
    document.getElementById("now-playing").style.visibility = "hidden";
    let selectedLogo = "img/stations/" + selected + ".png";
    player.src = r.get(selected).audio;

    if (!navigator.onLine) {
        toastMessage(text.noInternet);
    } else {
        let playPromise = player.play();
        if (playPromise !== undefined) {
            playPromise.then(function () {
                if (mediaAPI && !navigator.mediaSession.metadata) mediaKeys();
                createMetadata(r.get(selected).name, text.title, selectedLogo);
            })
                .catch(function () {
                    if (r.get(selected).audio.slice(0, 5) === 'http:') {
                        toastMessage(text.mixedContent);
                        document.title = r.get(np).name + " - " + text.title;
                        setTimeout(function () {
                            window.open(r.get(selected).audio, 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,height=100px,width=400px');
                        }, 2000);
                        console.log("HTTP Play promise rejected");
                    }
                });
        }
    }

    let radiotitle = document.getElementById("radio-title");
    radiotitle.innerText = r.get(selected).name;
    document.getElementById("big-logo").src = selectedLogo;
    document.getElementById("big-logo").onerror = function () {
        this.src = "img/maskable-grey.svg";
    };
    document.getElementById("big-logo").alt = r.get(selected).name + " logo / Album artwork";

    np = selected;
    localStorage.setItem("lastStation", selected);

    if (radiotitle.offsetWidth < radiotitle.scrollWidth) document.getElementById("openWebsite-button").style.display = "none";
    else document.getElementById("openWebsite-button").style.display = "";
    updateFavicon();
    startCast();
}

function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("contentID").scrollTo({ top: 0, behavior: 'smooth' });
}

function openPage() {
    if (!np) return;
    if (location.origin.slice(-2) == "pp") window.open(r.get(np).website, "_blank");
    else window.open("https://simpleradio.netlify.app", "_blank");
}

function shareAPI() {
    const data = {
        title: text.title,
        text: text.title,
        url: "https://simpleradio.netlify.app" + location.pathname
    }
    if (np) {
        data.title = r.get(np).name + " - " + text.title;
        data.text = text.sharing[2] + r.get(np).name;
        data.url = "https://simpleradio.netlify.app" + location.pathname + "?s=" + np;
        let now = document.getElementById("song-info").innerText;
        if (now != "") data.text = text.sharing[0] + r.get(np).name + text.sharing[1] + now;
    }

    if ('canShare' in navigator && navigator.canShare(data)) {
        navigator.share(data);
    } else {
        if ('clipboard' in navigator) {
            navigator.clipboard.writeText(data.url);
            toastMessage(text.clipboard);
        }
    }
}

// ~~~~~~~~ ALBUM ADATOK LEKERESE ~~~~~~~~~
function fetchMetadata(selected) {
    let p = document.getElementById("song-info");

    fetch("/.netlify/functions/fetchMeta?s=" + selected)
        .then(function (rsp) {
            return rsp.json();
        })
        .then(function (rsp) {
            let tmp = p.textContent;
            if (!fetchMeta.metaInterv) {
                fetchMeta.metaInterv = setInterval(function () { fetchMetadata(np); }, 30000);
            }
            switch (selected) {
                case "profm":
                case "dancefm": {
                    tmp = JSON.parse(rsp.result).songs[0].song;
                    if (playlist.songQueue.length && tmp.includes(playlist.songQueue[playlist.songQueue.length - 1].artist)) return;
                    break;
                }
                case "kissfm":
                case "magicfm":
                case "onefm":
                case "rockfm":
                case "asha": {
                    let text = JSON.parse(rsp.result);
                    if (text.ArtistName != "") tmp = text.ArtistName + " - " + text.TrackTitle;
                    else tmp = text.TrackTitle;
                    break;
                }
                case "radio1":
                case "retro":
                case "bestfm": {
                    let text = JSON.parse(rsp.result);
                    if (text.player[0].artist != "") tmp = text.player[0].artist + " - " + text.player[0].title;
                    else tmp = text.player[0].title;
                    break;
                }
                case "virgin":
                case "europafm": {
                    let text = JSON.parse(rsp.result);
                    if (text.songs[0].artist != "") tmp = text.songs[0].artist + " - " + text.songs[0].track;
                    else tmp = text.songs[0].title;
                    break;
                }
                case "petofi": {
                    const parser = new DOMParser();
                    const text = parser.parseFromString(rsp.result, 'application/xml');
                    tmp = text.getElementsByTagName("Name")[0].innerHTML;
                    break;
                }
                case "chillfm": {
                    tmp = rsp.result;
                }
            }
            if (tmp != p.textContent) {
                p.textContent = tmp;
                formatMetadata(tmp);
                fetchMeta.count = 0;
            }
            else {
                fetchMeta.count++;
                if (fetchMeta.count > 16) {
                    clearInterval(fetchMeta.metaInterv);
                    fetchMeta.metaInterv = null;
                }
            }
        })
        .catch(function (err) { console.log(err) });

}

function getMetadata(selected) {
    fetchMeta.count = 0;
    if (fetchMeta.netlifyAPI && r.get(selected).hasOwnProperty("metadata")) {
        if (ice) ice.stop();
        fetchMetadata(selected);
        return;
    }

    if (ice && ice.state != "stopped") return;

    let p = document.getElementById("song-info");

    const onStatsFunc = function (stats) {
        let titleTmp = p.textContent;
        if (stats.icestats != undefined) {
            if (stats.icestats.source.hasOwnProperty(length)) {
                for (let i = 0; i < stats.icestats.source.length; i++) {
                    let slash = r.get(selected).audio.lastIndexOf('/') - r.get(selected).audio.length;
                    if (stats.icestats.source[i].listenurl.slice(slash) == r.get(selected).audio.slice(slash)) titleTmp = stats.icestats.source[i].title;
                }
            } else titleTmp = stats.icestats.source.title;

        }
        if (stats.icy != undefined) titleTmp = stats.icy.StreamTitle;
        if (titleTmp == undefined) titleTmp = "";
        if (titleTmp != p.textContent && titleTmp != "") {
            p.textContent = titleTmp;
            formatMetadata(titleTmp);
        }
    };

    ice = new IcecastMetadataStats(
        r.get(selected).audio,
        { onStats: onStatsFunc, sources: ["icy", "icestats"] }
    );

    ice.getIcestats().then(function (rsp) {
        if (rsp.icestats != undefined) {
            ice = new IcecastMetadataStats(
                r.get(selected).audio,
                { onStats: onStatsFunc, sources: ["icestats"] }
            );
            ice.start();
        } else ice.getIcyMetadata().then(function (rsp) {
            if (rsp.icy != undefined) {
                ice = new IcecastMetadataStats(
                    r.get(selected).audio,
                    { onStats: onStatsFunc, sources: ["icy"] }
                );
                ice.start();
            }
        });
    });
}

function formatMetadata(data) {
    document.getElementById("now-playing").style.visibility = 'visible';
    let minus = data.indexOf(" - ");
    if (playlist.currentSong) {
        playlist.songQueue.push(playlist.currentSong);
        if (playlist.songQueue.length > 3) playlist.songQueue.shift();
        playlist.currentSong = null;
        playlist.update();
    }
    let currentTime = new Date();
    let minutes = currentTime.getMinutes();
    let time = currentTime.getHours() + ":" + (minutes < 10 ? '0' + minutes : minutes);
    if (minus != -1) {
        let title = data.slice(minus + 3 - data.length).replace('&', "%26");
        let artist = data.substring(0, minus);
        let regx = /(\s([/x]|f(ea)?t\.?)\s?|,\s)/gi;
        let formatedArtist = artist.split(regx)[0];
        playlist.currentSong = new Song(formatedArtist, title, "img/stations/" + np + ".png", time);
        if (fetchMeta.netlifyAPI) getArtwork(title, formatedArtist);
    } else {
        document.getElementById("big-logo").src = "img/stations/" + np + ".png";
        playlist.currentSong = new Song("", data, "img/stations/" + np + ".png", time);
        createMetadata(data, r.get(np).name + " - " + text.title, "img/stations/" + np + ".png");
    }
}

function getArtwork(title, artist) {
    fetch('/.netlify/functions/getArtwork?a=' + artist + '&t=' + title)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            document.getElementById("song-link").setAttribute('href', response.result.album.url);
            let url = JSON.stringify(response.result.album.image[3]).substring(30, JSON.stringify(response.result.album.image[3]).length - 2);
            if (url != "") {
                document.getElementById("big-logo").src = url;
                playlist.currentSong.img = url;
                createMetadata(document.getElementById("song-info").innerText, r.get(np).name + " - " + text.title, url);
            }
            else resetArtwork();
        }).catch(function () {
            resetArtwork();
        })
}

function resetArtwork() {
    document.getElementById("song-link").removeAttribute("href");
    document.getElementById("big-logo").src = "img/stations/" + np + ".png";
    createMetadata(document.getElementById("song-info").innerText, r.get(np).name + " - " + text.title, "img/stations/" + np + ".png");
}

// ~~~~~ KEDVENCEK FUNKCIOI ~~~~~

function updateFavicon() {
    if (favs.indexOf(np) != -1) {
        document.getElementById("star-icon").src = "img/star-filled.png";
    } else {
        document.getElementById("star-icon").src = "img/star.png";
    }
}

function favoriteSwitch() {
    if (!np) return;
    if (favs.indexOf(np) != -1) {
        removeFromFavorites(np);
    } else {
        addToFavorites(np);
    }
    updateFavicon();
}

function addToFavorites(id) {
    favs.push(id);
    localStorage.setItem("favs", JSON.stringify(favs));
    updateFavList();
}

function removeFromFavorites(id) {
    const fav2 = [];
    for (let i = 0; i < favs.length; i++) {
        if (favs[i] !== id) fav2.push(favs[i]);
    }
    favs = fav2;
    if (!favs.length) localStorage.removeItem("favs");
    else localStorage.setItem("favs", JSON.stringify(favs));
    updateFavList();
}

function updateFavList() {
    let favList = document.getElementById("favorites-container");
    favList.innerHTML = "";

    for (let i = 0; i < favs.length; i++) {
        if (!r.has(favs[i])) removeFromFavorites(favs[i]);
        let button = document.createElement("button");
        let image = document.createElement("img");
        image.src = "img/stations/" + favs[i] + ".png";
        image.alt = r.get(favs[i]).name;
        image.onerror = function () {
            this.src = "img/maskable-grey.svg";
        };
        button.classList.add("favorite-button");
        button.classList.add("focusable");
        button.appendChild(image);
        button.setAttribute("data-radio-id", favs[i]);
        button.title = r.get(favs[i]).name;
        button.onclick = function () {
            let n = this.getAttribute("data-radio-id");
            rSelect(n);
        }
        favList.appendChild(button);
    }
}

// ~~~~~ IDOZITO FUNKCIOK ~~~~~

const idozites = {
    ora: 0,
    perc: 0,
    interval: null
};

function timeInput() {
    let str = document.getElementById("timer-input").value;
    if (str === "") {
        idozites.ora = 0;
        idozites.perc = 0;
        clearInterval(idozites.interval);
        idozites.interval = null;
        toastMessage(text.timer[2]);
    }
    else {
        let s = str.split(':');
        idozites.ora = parseInt(s[0]);
        idozites.perc = parseInt(s[1]);
        clearInterval(idozites.interval);
        idozites.interval = setInterval(checkTime, 10000);
        let date = new Date();
        let ido = date.getHours() * 60 + date.getMinutes();
        let ido2 = idozites.ora * 60 + idozites.perc;
        if (ido > ido2) ido = 1440 - ido + ido2;
        else ido = ido2 - ido;
        let perc = ido % 60;
        perc = perc < 10 ? '0' + perc : perc;
        toastMessage(text.timer[0] + Math.floor(ido / 60) + ':' + perc + text.timer[1]);
    }
}

function checkTime() {
    let date = new Date();
    if (date.getHours() == idozites.ora && date.getMinutes() == idozites.perc) {
        stopAll();
    }
}

function stopAll() {
    player.pause();
    clearInterval(idozites.interval);
    idozites.interval = null;
    document.getElementById("timer-input").value = "00:00";
}

// ~~~~~ TEMA FUNKCIOK ~~~~~

function schemeSwitch() {
    let select = document.getElementById("scheme-selector").value;
    if (select == "auto") {
        localStorage.removeItem("color-scheme");
        document.documentElement.className = "";
    } else {
        localStorage.setItem("color-scheme", select);
        document.documentElement.className = select + "-mode";
    }
    let color = getComputedStyle(document.body).getPropertyValue("--main-color");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
}

function themeSet(value) {
    if (value == "grey") {
        localStorage.removeItem("color-theme");
        document.body.className = "";
    } else {
        localStorage.setItem("color-theme", value);
        document.body.className = "theme-" + value;
    }
    let color = getComputedStyle(document.body).getPropertyValue("--main-color");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
}

function filterSwitch() {
    if (document.getElementById("filter-list").style.display != "flex") {
        document.getElementById("filter-list").style.display = "flex";
    } else document.getElementById("filter-list").style.display = "none";
}

//~~~~~ BEALLITASOK ~~~~~

function settingSwitch() {
    let settings = document.getElementById("settings");
    let settingsIcon = document.getElementById("settings-icon");
    let shadow = document.getElementById("shadow-layer");
    if (settings.getAttribute("data-state") == "off") {
        shadow.style.display = "block";
        settings.style.transform = "";
        settingsIcon.style.transform = "rotate(90deg)";
        settings.setAttribute("data-state", "on");
    }
    else {
        shadow.style.display = "none";
        settings.style.transform = "translateX(100%)";
        settingsIcon.style.transform = "";
        settings.setAttribute("data-state", "off");
    }
}

function settingsInit() {
    window.addEventListener('load', function () {
        if (this.navigator.userAgent.toLowerCase().indexOf("android") > -1) {
            window.history.pushState({}, '')
            window.addEventListener('popstate', function () {
                toastMessage(text.exitAlert);
            });
        }
    });

    if (localStorage.getItem("autoplay")) {
        document.getElementById("autoplay").checked = true;
        if (!np) rSelect(localStorage.getItem("lastStation"));
    }

    if (!localStorage.getItem("metadata")) {
        document.getElementById("metadata").checked = true;
    }

    if (localStorage.getItem("wLock") && 'wakeLock' in navigator) {
        document.getElementById("wake-lock").checked = true;
    }

    player.addEventListener('pause', function () {
        document.getElementById("retry").style.animation = "";
        document.getElementById("play-pause").innerText = "play_arrow";
        if (document.getElementById("aod-play")) document.getElementById("aod-play").innerText = "play_arrow";
        document.title = text.title;
        if (ice) ice.stop();
        clearInterval(fetchMeta.metaInterv);
        fetchMeta.metaInterv = null;
        if (wLock) {
            wLock.release().then(function () { wLock = null; }).catch(function (error) { console.error(error); });
        }
    });

    player.addEventListener('playing', function () {
        document.getElementById("retry").style.animation = "";
        document.getElementById("play-pause").innerText = "pause";
        if (document.getElementById("aod-play")) document.getElementById("aod-play").innerText = "pause";
        document.title = r.get(np).name + " - " + text.title;
        if (document.getElementById("metadata").checked) getMetadata(np);
        if ((document.getElementById("wake-lock").checked && !wLock) || document.getElementById("aod")) {
            try {
                navigator.wakeLock.request('screen').then(function (res) { wLock = res; }).catch(function (e) { console.log(e); });
            } catch (e) {
                console.log(e);
            }
        }
    });

    player.addEventListener('waiting', function () {
        document.getElementById("retry").style.animation = ".8s linear spin infinite";
    });

    window['__onGCastApiAvailable'] = function (isAvailable) {
        if (isAvailable) {
            initCastApi();
        }
    };

    document.addEventListener('keydown', function (event) {
        if (document.activeElement.type == "text") return;
        var code = event.key;
        const keys = ["ArrowRight", "ArrowLeft", "Enter", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "];
        if (keys.indexOf(code) == -1) return;
        let focusable = [];
        focusable.push(document.getElementsByTagName("button")[0]);
        if (!settings.style.transform) {
            focusable = Array.prototype.slice.call(document.getElementsByClassName("focusable-setting"));
            focusable.unshift(document.getElementById("settings-button"));
        } else {
            if (document.getElementById("aod")) {
                focusable = Array.prototype.slice.call(document.getElementsByClassName("aod-x"));
                focused = 0;
            } else {
                focusable = Array.prototype.slice.call(document.getElementsByClassName("focusable"));
                if (focused < 0 || focused > focusable.length) focused = 5;
            }
        }
        switch (code) {
            case "ArrowRight": {
                event.preventDefault();
                if (focused < focusable.length - 1) focused++;
                focusable[focused].focus();
                break;
            }
            case "ArrowLeft": {
                event.preventDefault();
                if (focused > 0) focused--;
                focusable[focused].focus();
                break;
            }
            case "Enter": {
                event.preventDefault();
                focusable[focused].click();
                break;
            }
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9": {
                if (document.activeElement.tagName != "INPUT") {
                    event.preventDefault();
                    if (favs.length >= Number(code)) {
                        rSelect(favs[Number(code) - 1]);
                    }
                }
                break;
            }
            case " ":
            case "0": {
                if (document.activeElement.tagName != "INPUT") {
                    event.preventDefault();
                    if (player.paused) {
                        player.load();
                        player.play();
                    } else player.pause();
                    break;
                }
            }
        }
    }, false);

    document.getElementById("autoplay").addEventListener("click", function () {
        if (document.getElementById("autoplay").checked) {
            localStorage.setItem("autoplay", true);
        } else {
            localStorage.removeItem("autoplay");
        }
    });

    document.getElementById("metadata").addEventListener("click", function () {
        if (document.getElementById("metadata").checked) {
            localStorage.removeItem("metadata");
            if (!player.paused) getMetadata(np);
        } else {
            localStorage.setItem("metadata", false);
            if (ice) ice.stop();
            clearInterval(fetchMeta.metaInterv);
            fetchMeta.metaInterv = null;
            document.getElementById("song-info").innerText = "";
            document.getElementById("now-playing").style.visibility = "hidden";
            document.getElementById("big-logo").src = "img/stations/" + np + ".png";
            document.getElementById("big-logo").onerror = function () {
                this.src = "img/maskable-grey.svg";
            };
            createMetadata(r.get(np).name, text.title, "img/stations/" + np + ".png");
        }
    });

    if ('wakeLock' in navigator) {
        document.getElementById('wake-lock').parentElement.style.display = "block";
        document.getElementById('wake-lock').addEventListener('click', function () {
            if (!document.getElementById("wake-lock").checked) {
                localStorage.removeItem("wLock");
                if (wLock) {
                    wLock.release().then(function () { wLock = null; })
                        .catch(function (error) { console.error(error); });
                }
            } else {
                localStorage.setItem("wLock", "true");
                if (!player.paused && !wLock) {
                    try {
                        navigator.wakeLock.request('screen').then(function (res) { wLock = res; }).catch(function (e) { console.log(e); });
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        });
        document.addEventListener('visibilitychange', function () {
            if (wLock !== null && document.visibilityState === 'visible') {
                navigator.wakeLock.request('screen').then(function (res) { wLock = res; }).catch(function (e) { console.log(e); });
            }
        });
    }

    document.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop < 400) document.getElementById("scroll-up").style.display = "none";
        else document.getElementById("scroll-up").style.display = "block";
    });
    document.getElementById("contentID").addEventListener("scroll", function () {
        if (document.getElementById("contentID").scrollTop < 400) document.getElementById("scroll-up").style.display = "none";
        else document.getElementById("scroll-up").style.display = "block";
    });
    caches.keys().then(function (rsp) {
        if (rsp.length < 1) return;
        let devData = document.createElement('p');
        devData.innerText += "Version: " + rsp[0].match(/[0-9]+\.[0-9]+(\.[0-9]+)?/)[0];
        devData.classList.add("help-text");
        devData.style.opacity = "0.2";
        devData.style.padding = "15px";
        document.getElementById("settings").appendChild(devData);
    }).catch(function (e) { console.error(e); });
}

function batteryGen(level) {
    let l = Math.round(level * 7);
    let txt;
    if (l > 6) txt = "battery_full";
    else txt = "battery_" + l + "_bar";
    return "<span class=\"material-icons\" style=\"font-size:inherit; vertical-align:sub;\"> " + txt + " </span>";
}

// ~~~~~ ALWAYS ON DISPLAY ~~~~~
function aod() {
    if (player.paused) {
        toastMessage(text.noSelectedRadio);
        return;
    }

    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    else {
        if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen();
        else {
            toastMessage(text.notSupported);
            return;
        }
    }

    let aodBg = document.createElement("div");
    aodBg.id = "aod-bg";
    let bg = document.createElement("div");
    bg.id = "aod";

    aodBg.appendChild(bg);
    document.body.appendChild(aodBg);
    document.body.style.overflow = "hidden";

    let clock = document.createElement("p");
    let battery = null;
    if ('getBattery' in navigator) navigator.getBattery().then(function (bat) { battery = bat; }).catch(function (e) { console.log(e); });

    let clockInterval = setInterval(updateAOD, 15000);
    clock.classList.add("clock");

    let controls = document.createElement("div");
    controls.id = "aod-controls";

    let controlArr = document.getElementsByClassName("controls");
    for (let i = 0; i < controlArr.length; i++) {
        let control = controlArr[i].cloneNode(true);
        if (i == 1) control.id = "aod-play";
        else control.id = "";
        controls.appendChild(control);
    }

    let xButton = document.createElement("button");
    xButton.innerText = "close";
    xButton.classList.add("material-icons");
    xButton.classList.add("aod-x");
    xButton.onclick = function () {
        let titleContainer = document.querySelector("#playing .section-header");
        titleContainer.insertBefore(document.getElementById("radio-title"), titleContainer.firstChild);
        document.getElementById("big-logo-container").appendChild(document.getElementById("big-logo"));
        document.getElementById("song-link").appendChild(document.getElementById("song-info"));

        clearInterval(clockInterval);
        if (!player.paused && wLock && !document.getElementById("wake-lock").checked) {
            wLock.release().then(function () { wLock = null; }).catch(function (error) { console.error(error); });
            if (!wLock) console.log("wake lock released");
        }
        document.body.style.overflow = "auto";
        document.body.removeChild(aodBg);
        if (document.exitFullscreen) document.exitFullscreen();
        else document.webkitExitFullscreen();
    }

    updateAOD();
    bg.appendChild(document.getElementById("radio-title"));
    bg.appendChild(clock);
    bg.appendChild(document.getElementById("big-logo"));
    bg.appendChild(document.getElementById("song-info"));
    bg.appendChild(controls);
    bg.appendChild(xButton);

    function updateAOD() {
        let date = new Date();
        let minutes = date.getMinutes(Date.now());
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let clkString = date.getHours(Date.now()) + ":" + minutes;
        if (battery) clkString += "        •        " + Math.round(battery.level * 100) + "%" + batteryGen(battery.level);

        if (clock.innerHTML != "" && clock.innerHTML != clkString) {
            if (player.paused) {
                xButton.click();
                return;
            }
            let bgHeight = aodBg.offsetHeight;
            let maxPos = bgHeight - bgHeight / 10;
            maxPos = maxPos - bg.offsetHeight;
            bg.style.top = Math.floor(Math.random() * maxPos) + "px";
        }
        clock.innerHTML = clkString;
    }

    if (!player.paused && !wLock) {
        try {
            navigator.wakeLock.request('screen').then(function (res) { wLock = res; }).catch(function (e) { console.log(e); });
        } catch (e) {
            console.log(e);
        }
    }
}

const toast = {
    opacity: null,
    remove: null
}

function toastMessage(message) {
    let exists = document.getElementById("toast");
    if (exists) {
        document.getElementById("contentID").removeChild(exists);
        clearTimeout(toast.opacity);
        clearTimeout(toast.remove);
    }
    let container = document.createElement("div");
    container.id = "toast";
    let span = document.createElement("span");
    span.innerText = message;
    container.appendChild(span);
    document.getElementById("contentID").appendChild(container);
    toast.opacity = setTimeout(function () {
        container.style.opacity = '0';
    }, 6500);
    toast.remove = setTimeout(function () {
        let exists = document.getElementById("toast");
        if (exists) document.getElementById("contentID").removeChild(exists);
    }, 7500);
}

// ~~~~~~ CHROMECAST BEALLITASOK ~~~~~~

function initCastApi() {
    var context = cast.framework.CastContext.getInstance();
    context.setOptions({
        receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });
    var context = cast.framework.CastContext.getInstance();
    context.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
        function (event) {
            if (event.sessionState == cast.framework.SessionState.SESSION_STARTED) {
                startCast();
            }
            if (event.sessionState == cast.framework.SessionState.SESSION_ENDED) {
                player.load();
                player.play();
            }
        })
};

function startCast() {
    try {
        var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
        if (castSession && np) {
            var mediaInfo = new chrome.cast.media.MediaInfo(player.src, 'audio/mpeg');
            mediaInfo.metadata = new chrome.cast.media.MusicTrackMediaMetadata();
            mediaInfo.metadata.title = r.get(np).name;
            mediaInfo.metadata.artist = text.title;
            mediaInfo.metadata.images = [{ url: "https://simpleradio.netlify.app/img/stations/" + np + ".png" }, { url: "https://simpleradio.netlify.app/img/stations/0custom.png" }];
            var request = new chrome.cast.media.LoadRequest(mediaInfo);
            castSession.loadMedia(request).then(
                function () { console.log('Cast Load succeed'); },
                function (errorCode) { console.log('Cast Error code: ' + errorCode); });
            player.pause();
        }
    } catch (error) {
        console.log("No cast SDK loaded");
    }
}

initPage();
