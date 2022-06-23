function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 49.04,
            lng: 37.57
        },
        zoom: 14,
        mapId: 'a1a301cfa3a88cc',
        map: map,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,

    });

    const markers = [
        [
            "Time out beach",
            //49.038679252501154, 37.58223062565399
            49.038679252501154,
            37.58223062565399,
            "img/beach-svgrepo-com.svg",
            50,
            50,
            'Timeout is a public beach on the banks of the Seversky Donets River. On the beach there is a bar, inflatable slides and catamaran rental',
            "img/beach.jpg"
        ],

        [
            "Lavra Church",
            //49.02814579765573, 37.56752139144384
            49.02814579765573,
            37.56752139144384,
            "img/church-svgrepo-com.svg",
            50,
            50,
            'Svyatogorsk Lavra is a male monastery of the Donetsk diocese of the Ukrainian Orthodox Church of the Moscow Patriarchate in the city of Svyatogorsk, Donetsk region.',
            "img/lavra.jpg"
        ],

        [
            "School",
            //49.03919020991499, 37.57012277191763
            49.03919020991499,
            37.57012277191763,
            "img/school-svgrepo-com.svg",
            50,
            50,
            `Svyatogorsk secondary school No. 1 is the only school on the territory of Svyatogorsk.`,
            "img/school.jpg"
        ],

        [
            "Emerald Town",
            //49.05182634796754, 37.551393888256975
            49.05182634796754,
            37.551393888256975,
            "img/forest-svgrepo-com.svg",
            50,
            50,
            `Emerald Town "is a Sanatorium and Health Center for the Social Rehabilitation of Orphans and Children deprived of parental care`,
            "img/emerald.jpg"
        ],

        [
            "Bouchee cafe",
            //49.03664511054437, 37.55344373939993
            49.03664511054437,
            37.55344373939993,
            "img/cafe-svgrepo-com.svg",
            50,
            50,
            `Gorgeous cafe!`,
            "img/cafe.jpg"
        ]
    ];

    markers.forEach(marker => {
        const currentMarker = marker;

        const newMarker = new google.maps.Marker({
            //49.03868780030244, 37.58223793025838
            position: {
                lat: currentMarker[1],
                lng: currentMarker[2]
            },
            map,
            title: currentMarker[0],
            icon: {
                url: currentMarker[3],
                scaledSize: new google.maps.Size(currentMarker[4], currentMarker[5])
            },
            animation: google.maps.Animation.DROP,
        });
    
        const contentStirng = `
        <div class = "img-marker-holder">
            <img src= ${currentMarker[7]} alt ="Place">
        </div>
        <div class = "marker-description">
            <p>${currentMarker[6]}</p>
        </div>
        `;

        const infowindow = new google.maps.InfoWindow({
            content: contentStirng,
        });
    
        newMarker.addListener("click", () => {
            infowindow.open({
                anchor: newMarker,
                map,
                shouldFocus: true,
            });
        });
    });

    
}