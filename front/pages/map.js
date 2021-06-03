import React, { useRef, useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import Context from './search/context';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN;

const Map = ({ MarkerItemP, zoomP = 12, latP, lngP, page }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const value = useContext(Context);
    const propEffect = page === 'search' ? [page, value.lat, value.lng] : [page];

    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lngP, latP],
            zoom: zoomP,
        });
    }, []);

    useEffect(() => {
        switch (page) {
            case 'search': {
                const activeMarker = new mapboxgl.Marker({ color: '#017CEA' });
                if (value.lng !== undefined && value.lat !== undefined) {
                    activeMarker.setLngLat([value.lng, value.lat]);
                    activeMarker.addTo(map.current);
                }
                return () => {
                    activeMarker.remove(map.current);
                };
            }
            case 'create':
                {
                    const marker = new mapboxgl.Marker({ draggable: true, color: '#017CEA' })
                        .setLngLat([lngP, latP])
                        .addTo(map.current);
                    marker.on('dragend', () => {
                        const coord = marker.getLngLat();
                        map.current.setCenter({ lat: coord.lat, lng: coord.lng });
                    });
                }
                break;
            case 'post':
                {
                    new mapboxgl.Marker({ color: '#017CEA' })
                        .setLngLat([MarkerItemP.lng, MarkerItemP.lat])
                        .addTo(map.current);
                }
                break;
        }
    }, propEffect);
    return <div id="map" ref={mapContainer} />;
};
export default Map;
