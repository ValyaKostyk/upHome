/*for img optimization, gulp plugin...*/
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) { 
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 10) {
                $(".header").addClass("black");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("black");
            }
        });
    });

//lock scroll while mobile menu active
 $(document).ready(function() {
     $('.header__burger').click(function(event){
         $('.header__burger,.header__menu').toggleClass('active');
         $('body').toggleClass('lock');
     });

 });   

/*contact us info locations*/
 const locations = [
    {
        cityName: 'Los Angeles',
        latitude: 34.0194,
        longitude: -118.411
    },
    {
        cityName: 'New York',
        latitude: 40.6643,
        longitude: -73.9385
    },
    {
        cityName: 'Boston',
        latitude: 42.332,
        longitude: -71.0202
    },
    {
        cityName: 'Detroit',
        latitude: 42.383,
        longitude: -83.1022
    }
];

//banner slider

new Swiper('.image-slider', {
    loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },
});



//Google API contact us section

function initGoogleMaps() {
    initMap(34.0194, -118.411);
}

function initMap(latitude, longitude) {
    const mapProp = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 10,
        disableDefaultUI: true
    };
    const mapMarkerUrl = '../img/icons/map_marker.svg';
    const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    const mapMarkerProp = {
        position: mapProp.center,
        map,
        icon: mapMarkerUrl
    };
    const mapMarker = new google.maps.Marker(mapMarkerProp);
}

function createMapPoint(locationNumber) {
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("location__name")[i].innerHTML = locations[locationNumber].cityName;
    }

    stylizeOpenLocation(locations[locationNumber].cityName);
    initMap(locations[locationNumber].latitude, locations[locationNumber].longitude);
}

function createIdsToLocations() {
    locations.map((el, index) => {
        let element = document.getElementsByClassName("location__item")[index];

        element.id = el.cityName.replace(/ /g, '');
    });
}

function stylizeOpenLocation(cityName) {
    locations.map((el, index) => {
        let element = document.getElementsByClassName("location__item")[index];

        cityName === el.cityName ?
            element.style.boxShadow = '20px 20px 50px rgba(0, 0, 0, 0.0758039)' :
            element.style.boxShadow = 'none';
    });
}

document.addEventListener("DOMContentLoaded", createIdsToLocations());

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

