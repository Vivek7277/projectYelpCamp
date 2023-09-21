mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: campground.geometry.coordinates,
        zoom: 10,
    });

new mapboxgl.Maker()
    .setLngLat(campground.geometry.coordinates)
    .addTo(map)