const epinames = ["石狩地方北部","石狩地方中部","石狩地方南部","渡島地方北部","渡島地方東部","渡島地方西部","檜山地方","後志地方北部","後志地方東部","後志地方西部","空知地方北部","空知地方中部","空知地方南部","上川地方北部","上川地方中部","上川地方南部","留萌地方中北部","留萌地方南部","宗谷地方北部","宗谷地方南部","網走地方","北見地方","紋別地方","胆振地方西部","胆振地方中東部","日高地方西部","日高地方中部","日高地方東部","十勝地方北部","十勝地方中部","十勝地方南部","釧路地方北部","釧路地方中南部","根室地方北部","根室地方中部","根室地方南部","北海道南西沖","北海道西方沖","石狩湾","北海道北西沖","宗谷海峡","国後島付近","択捉島付近","北海道東方沖","根室半島南東沖","釧路沖","十勝沖","浦河沖","苫小牧沖","内浦湾","宗谷東方沖","網走沖","択捉島南東沖","青森県津軽北部","青森県津軽南部","青森県三八上北地方","青森県下北地方","岩手県沿岸北部","岩手県沿岸南部","岩手県内陸北部","岩手県内陸南部","宮城県北部","宮城県南部","宮城県中部","秋田県沿岸北部","秋田県沿岸南部","秋田県内陸北部","秋田県内陸南部","山形県庄内地方","山形県最上地方","山形県村山地方","山形県置賜地方","福島県中通り","福島県浜通り","福島県会津","津軽海峡","山形県沖","秋田県沖","青森県西方沖","陸奥湾","青森県東方沖","岩手県沖","宮城県沖","三陸沖","福島県沖","茨城県北部","茨城県南部","千葉県南東沖","栃木県北部","栃木県南部","群馬県北部","群馬県南部","埼玉県北部","埼玉県南部","埼玉県秩父地方","千葉県北東部","千葉県北西部","千葉県南部","房総半島南方沖","東京都２３区","東京都多摩東部","東京都多摩西部","神奈川県東部","神奈川県西部","新潟県上越地方","新潟県中越地方","新潟県下越地方","新潟県下越沖","新潟県上中越沖","富山県東部","富山県西部","石川県能登地方","石川県加賀地方","福井県嶺北","福井県嶺南","山梨県中・西部","山梨県東部・富士五湖","長野県北部","長野県中部","長野県南部","岐阜県飛騨地方","岐阜県美濃東部","岐阜県美濃中西部","静岡県伊豆地方","静岡県東部","静岡県中部","静岡県西部","愛知県東部","愛知県西部","三重県北部","三重県中部","三重県南部","三重県南東沖","茨城県沖","関東東方沖","千葉県東方沖","八丈島東方沖","八丈島近海","東京湾","相模湾","伊豆大島近海","伊豆半島東方沖","三宅島近海","新島・神津島近海","駿河湾","駿河湾南方沖","遠州灘","三河湾","伊勢湾","若狭湾","福井県沖","石川県西方沖","能登半島沖","富山湾","佐渡付近","東海道南方沖","滋賀県北部","滋賀県南部","京都府北部","京都府南部","大阪府北部","大阪府南部","兵庫県北部","兵庫県南東部","兵庫県南西部","奈良県","和歌山県北部","和歌山県南部","鳥取県東部","鳥取県中部","鳥取県西部","島根県東部","島根県西部","岡山県北部","岡山県南部","広島県北部","広島県南東部","広島県南西部","徳島県北部","徳島県南部","香川県東部","香川県西部","愛媛県東予","愛媛県中予","愛媛県南予","高知県東部","高知県中部","高知県西部","土佐湾","紀伊水道","大阪湾","播磨灘","瀬戸内海中部","安芸灘","周防灘","伊予灘","豊後水道","山口県北西沖","島根県沖","鳥取県沖","隠岐島近海","兵庫県北方沖","京都府沖","淡路島付近","和歌山県南方沖","山口県北部","山口県西部","山口県東部","山口県中部","福岡県福岡地方","福岡県北九州地方","福岡県筑豊地方","福岡県筑後地方","佐賀県北部","佐賀県南部","長崎県北部","長崎県南西部","長崎県島原半島","熊本県阿蘇地方","熊本県熊本地方","熊本県球磨地方","熊本県天草・芦北地方","大分県北部","大分県中部","大分県南部","大分県西部","宮崎県北部平野部","宮崎県北部山沿い","宮崎県南部平野部","宮崎県南部山沿い","鹿児島県薩摩地方","鹿児島県大隅地方","五島列島近海","天草灘","有明海","橘湾","鹿児島湾","種子島近海","日向灘","奄美大島近海","壱岐・対馬近海","福岡県北西沖","薩摩半島西方沖","トカラ列島近海","奄美大島北西沖","大隅半島東方沖","九州地方南東沖","種子島南東沖","奄美大島北東沖","沖縄本島近海","南大東島近海","沖縄本島南方沖","宮古島近海","石垣島近海","石垣島南方沖","西表島付近","与那国島近海","沖縄本島北西沖","宮古島北西沖","石垣島北西沖","台湾付近","東シナ海","四国沖","鳥島近海","鳥島東方沖","オホーツク海南部","サハリン西方沖","日本海北部","日本海中部","日本海西部","父島近海","千島列島","千島列島南東沖","北海道南東沖","東北地方東方沖","小笠原諸島西方沖","硫黄島近海","小笠原諸島東方沖","南海道南方沖","薩南諸島東方沖","本州南方沖","サハリン南部付近","北西太平洋","マリアナ諸島","黄海","朝鮮半島南部","朝鮮半島北部","中国東北部","ウラジオストク付近","シベリア南部","サハリン近海","アリューシャン列島","カムチャツカ半島付近","北米西部","北米中部","北米東部","中米","南米西部","南米中部","南米東部","北東太平洋","南太平洋","インドシナ半島付近","フィリピン付近","インドネシア付近","グアム付近","ニューギニア付近","ニュージーランド付近","オーストラリア付近","シベリア付近","ロシア西部","ロシア中部","ロシア東部","中央アジア","中国西部","中国中部","中国東部","インド付近","インド洋","中東","ヨーロッパ西部","ヨーロッパ中部","ヨーロッパ東部","地中海","アフリカ西部","アフリカ中部","アフリカ東部","北大西洋","南大西洋","北極付近","南極付近","遠地"];
var filteredData = [];
var targetDate = new Date();
var targetDateText = '';

targetDate.setHours(targetDate.getHours() - 42);
targetDate.setMinutes(targetDate.getMinutes() - 30);
targetDateText = (('0000'+targetDate.getFullYear()).slice(-4))+(('00'+(targetDate.getMonth()+1)).slice(-2))+(('00'+targetDate.getDate()).slice(-2));

var map = L.map('map', {
    center: [36, 137],
    zoom: 5,
    zoomSnap: 0.5,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 150
});
var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
});
map.attributionControl.addAttribution('データ: 気象庁 震源リスト');
tileLayer.addTo(map);

function changeTab(tab) {
    document.getElementById('list').classList = tab=='list'?'is-active':'';
    document.getElementById('count').classList = tab=='count'?'is-active':'';
    document.getElementById('filter').classList = tab=='filter'?'is-active':'';
    document.getElementById('dldata').classList = tab=='dldata'?'is-active':'';
    document.getElementById('list_tab_content').style.display = tab=='list'?'':'none';
    document.getElementById('count_tab_content').style.display = tab=='count'?'':'none';
    document.getElementById('filter_tab_content').style.display = tab=='filter'?'':'none';
    document.getElementById('dldata_tab_content').style.display = tab=='dldata'?'':'none';
}

function plot(date, options) {
    filteredData = [];
    for (const layer of Object.entries(map._layers)) {
        if (layer[1].options.type && layer[1].options.type == 'marker') {
            layer[1].remove();
        }
    }
    document.getElementById('list_table').innerHTML = '';
    document.getElementById('count_table').innerHTML = '';
    fetch('https://raw.githubusercontent.com/iku55/hypolistjson/main/data/'+date+'.json')
    .then(response => {
        if (response.status == 200) {
            return response.json();
        } else {
            alert('データなし。データ追加までお待ちください。');
        }
    })
    .then(data => {
        if (!data) {
            return;
        }

        var count = {};

        for (const hypocenter of data) {
            if (options.minimumMagnitude && options.minimumMagnitude > Number(hypocenter.magnitude)) {
                continue;
            }
            if (options.maximumMagnitude && options.maximumMagnitude < Number(hypocenter.magnitude)) {
                continue;
            }
            if (options.epicenterNames && !options.epicenterNames.includes(hypocenter.name)) {
                continue;
            }
            filteredData.push(hypocenter);
            if (!count[hypocenter.name]) {
                count[hypocenter.name] = 0;
            }
            count[hypocenter.name]++;
            var color;
            var size;
            if (hypocenter.magnitude == null) {
                size = 3;
            } else {
                size = Number(hypocenter.magnitude) * 3;
            }
            if (Number(hypocenter.depth) >= 300) color = '#00d';
            else if (Number(hypocenter.depth) >= 100) color = '#dd4';
            else if (Number(hypocenter.depth) >= 30) color = '#da0';
            else if (Number(hypocenter.depth) >= 0) color = '#d00';
            else color = '#000';
            
            var marker = L.circleMarker([hypocenter.latitude,hypocenter.longitude],{
                radius: size,
                color: color,
                type: 'marker'
            })
            .bindPopup(hypocenter.time+'<br>'+hypocenter.name+'<br>M'+hypocenter.magnitude+'<br>深さ'+hypocenter.depth+'km');
            marker.addTo(map);
            var newRow = document.getElementById('list_table').insertRow();
            var link = document.createElement('a');
            link.dataset.leaflet_id = marker._leaflet_id;
            link.onclick = (e) => {
                map._layers[e.target.dataset.leaflet_id].openPopup();
                map.setView(L.featureGroup([map._layers[e.target.dataset.leaflet_id]]).getBounds().getCenter(), 9);
            }
            link.appendChild(document.createTextNode(new Date(hypocenter.time).toLocaleString()))
            newRow.insertCell().appendChild(link);
            newRow.insertCell().appendChild(document.createTextNode(hypocenter.name));
            newRow.insertCell().appendChild(document.createTextNode(hypocenter.magnitude?hypocenter.magnitude:'不明'));
        }

        count = Object.entries(count);
        count.sort((a, b) => b[1] - a[1]);
        for (const c of count) {
            var newRow = document.getElementById('count_table').insertRow();
            newRow.insertCell().appendChild(document.createTextNode(c[0]));
            newRow.insertCell().appendChild(document.createTextNode(c[1]));
        }
    });
}

var epiname_filter = [];
function searchEpiName() {
    var items = epinames.filter(name => name.includes(document.getElementById('search_box').value));
    document.getElementById('search_result').innerHTML = '';
    if (items.length == 0) {
        document.getElementById('search_result').innerHTML = '<li><a>なし</a></li>';
    }
    for (const item of items) {
        document.getElementById('search_result').innerHTML += '<li><a onclick="addEpiName(\''+item+'\');">'+item+'</a></li>';
    }
}
function addEpiName(name) {
    if (!epiname_filter.includes(name)) {
        epiname_filter.push(name);
    }
    document.getElementById('filter_button').innerText = '震央地名フィルター('+epiname_filter.length+'項目を選択中)';
    document.getElementById('epiname_filter_targets').innerHTML = '';
    for (const name of epiname_filter) {
        document.getElementById('epiname_filter_targets').innerHTML += '<div class="tags has-addons" style="margin-bottom: 0; margin-right: 5px;"><span class="tag is-light">'+name+'</span><span class="tag is-delete" onclick="removeEpiName(\''+name+'\');"></span></div>';
    }
}
function removeEpiName(name) {
    if (epiname_filter.includes(name)) {
        epiname_filter = epiname_filter.filter(d => d !== name);
    }
    document.getElementById('filter_button').innerText = '震央地名フィルター('+epiname_filter.length+'項目を選択中)';
    document.getElementById('epiname_filter_targets').innerHTML = '';
    for (const name of epiname_filter) {
        document.getElementById('epiname_filter_targets').innerHTML += '<div class="tags has-addons" style="margin-bottom: 0; margin-right: 5px;"><span class="tag is-light">'+name+'</span><span class="tag is-delete" onclick="removeEpiName(\''+name+'\');"></span></div>';
    }
}
function clearEpiName() {
    epiname_filter = [];
    document.getElementById('filter_button').innerText = '震央地名フィルター(0項目を選択中)';
    document.getElementById('epiname_filter_targets').innerHTML = '';
}

function runFilter() {
    var options = {};
    if (epiname_filter.length !== 0) {
        options.epicenterNames = epiname_filter;
    }
    if (document.getElementById('min_mag').value !== '') {
        options.minimumMagnitude = Number(document.getElementById('min_mag').value);
    }
    if (document.getElementById('max_mag').value !== '') {
        options.maximumMagnitude = Number(document.getElementById('max_mag').value);
    }
    plot(targetDateText, options);
    changeTab('list');
}
function clearFilter() {
    clearEpiName();
    document.getElementById('min_mag').value = '';
    document.getElementById('max_mag').value = '';
    plot(targetDateText, {});
    changeTab('list');
}

function downloadAsCsv() {
    var withBom = document.getElementById('bomcheckbox').checked;
    var data = "時刻,緯度,経度,深さ,マグニチュード,震央地名\n";
    for (const hypocenter of filteredData) {
        data += hypocenter.time+','+hypocenter.latitude+','+hypocenter.longitude+','+hypocenter.depth+','+hypocenter.magnitude+','+hypocenter.name+'\n';
    }
    const filename = 'hypolist_'+targetDateText+'.csv';
    const blob = new Blob([(withBom?new Uint8Array([0xef, 0xbb, 0xbf]):''),data], {type: 'text/csv'});
    const url = (window.URL || window.webkitURL).createObjectURL(blob);
    const download = document.createElement('a');
    download.href = url;
    download.download = filename;
    download.click();
    (window.URL || window.webkitURL).revokeObjectURL(url);
}

function onChangeDate() {
    if (document.getElementById('date').value == '') return;
    if (new Date(document.getElementById('date').value).getTime() < new Date('2021-08-01').getTime()) {
        return;
    }
    targetDateText = document.getElementById('date').value.replaceAll('-','');
    targetDate = new Date(document.getElementById('date').value.replaceAll('-','/'));
    if (document.getElementById('use_filter_new').checked) {
        runFilter();
    } else {
        plot(targetDateText, {});
    }
}

document.getElementById('date').min = '2021-08-01';
document.getElementById('date').max = targetDateText.substring(0, 4)+'-'+targetDateText.substring(4, 6)+'-'+targetDateText.substring(6, 8);
document.getElementById('date').value = targetDateText.substring(0, 4)+'-'+targetDateText.substring(4, 6)+'-'+targetDateText.substring(6, 8);
changeTab('list');
searchEpiName();
plot(targetDateText, {});