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
tileLayer.addTo(map);

function changeTab(tab) {
    document.getElementById('list').classList = tab=='list'?'is-active':'';
    document.getElementById('count').classList = tab=='count'?'is-active':'';
    document.getElementById('filter').classList = tab=='filter'?'is-active':'';
    document.getElementById('list_tab_content').style.display = tab=='list'?'':'none';
    document.getElementById('count_tab_content').style.display = tab=='count'?'':'none';
    document.getElementById('filter_tab_content').style.display = tab=='filter'?'':'none';
}

function plot(date, options) {
    for (const layer of Object.entries(map._layers)) {
        if (layer[1].options.type && layer[1].options.type == 'marker') {
            layer[1].remove();
        }
    }
    document.getElementById('list_table').innerHTML = '';
    document.getElementById('count_table').innerHTML = '';
    fetch('https://raw.githubusercontent.com/iku55/hypolistjson/main/data/'+date+'.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);

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

        console.log(count);
        count = Object.entries(count);
        count.sort((a, b) => b[1] - a[1]);
        for (const c of count) {
            var newRow = document.getElementById('count_table').insertRow();
            newRow.insertCell().appendChild(document.createTextNode(c[0]));
            newRow.insertCell().appendChild(document.createTextNode(c[1]));
        }
    });
}

function runFilter() {
    var options = {};
    if (document.getElementById('epiname_filter').selectedOptions.length !== 0) {
        options.epicenterNames = Array.from(document.getElementById('epiname_filter').selectedOptions, o => o.getAttribute('value'));
    }
    if (document.getElementById('min_mag').value !== '') {
        options.minimumMagnitude = Number(document.getElementById('min_mag').value);
    }
    if (document.getElementById('max_mag').value !== '') {
        options.maximumMagnitude = Number(document.getElementById('max_mag').value);
    }
    plot('20220316', options);
    changeTab('list');
}
function clearFilter() {
    plot('20220316', {});
    changeTab('list');
}

changeTab('list');
plot('20220316', {});