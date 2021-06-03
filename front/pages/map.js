export default function Map({ MarkerItem, zoom = 12, center, page }) {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: zoom,
    });
    if (page == 'search') {
        const item = document.querySelector('.search__list-article');
        const element = document.querySelectorAll('.search__item-article');
        const ActiveMarker = new mapboxgl.Marker({ color: '#017CEA' });
        item.addEventListener('mouseover', (e) => {
            for (let i = 0; i < e.path.length; i++) {
                for (let j = 0; j < element.length; j++) {
                    if (e.path[i] == element[j]) {
                        ActiveMarker.setLngLat([
                            MarkerItem[parseInt(e.path[i].attributes[1].value) - 1].long,
                            MarkerItem[parseInt(e.path[i].attributes[1].value) - 1].lat,
                        ]);
                        ActiveMarker.addTo(map);
                    }
                }
            }
        });
        item.addEventListener('mouseout', () => {
            ActiveMarker.remove(map);
        });
        for (let i = 0; i < MarkerItem.length; i++) {
            let el = document.createElement('div');
            el.className = 'fas fa-dot-circle';
            el.style.color = '#017CEA';
            let marker = new mapboxgl.Marker(el);
            marker.setLngLat([MarkerItem[i].long, MarkerItem[i].lat]);
            marker.addTo(map);
        }
    } else if (page == 'create') {
        let marker = new mapboxgl.Marker({ draggable: true, color: '#017CEA' })
            .setLngLat(center)
            .addTo(map);
        marker.on('dragend', () => {
            let coord = marker.getLngLat();
            map.setCenter({ lat: coord.lat, lng: coord.lng });
        });
    } else {
        let marker = new mapboxgl.Marker({ color: '#017CEA' });
        marker.setLngLat([MarkerItem[0].long, MarkerItem[0].lat]);
        marker.addTo(map);
    }
    return <></>;
}
