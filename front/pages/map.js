import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import Context from './search/context';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAP_TOKEN;

const Map = ({ MarkerItemP, zoomP = 12, latP, lngP, page }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(lngP);
    const [lat] = useState(latP);
    const [zoom] = useState(zoomP);
    const [markerItem] = useState(MarkerItemP);
    const value = useContext(Context);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });
    });

    switch (page) {
        case 'search':
            useEffect(() => {
                const activeMarker = new mapboxgl.Marker({ color: '#017CEA' });
                if (value.lng !== undefined && value.lat !== undefined) {
                    activeMarker.setLngLat([value.lng, value.lat]);
                    activeMarker.addTo(map.current);
                }
                return () => {
                    activeMarker.remove(map.current);
                };
            }, [value.lat, value.lng]);
            break;
        case 'create':
            useEffect(() => {
                const marker = new mapboxgl.Marker({ draggable: true, color: '#017CEA' })
                    .setLngLat([lng, lat])
                    .addTo(map.current);
                marker.on('dragend', () => {
                    const coord = marker.getLngLat();
                    map.current.setCenter({ lat: coord.lat, lng: coord.lng });
                });
            });
            break;
        case 'post':
            useEffect(() => {
                new mapboxgl.Marker({ color: '#017CEA' })
                    .setLngLat([markerItem.lng, markerItem.lat])
                    .addTo(map.current);
            });
            break;
    }
    return <div id="map" ref={mapContainer} />;
};
export default Map;
