const contactLocationsDOM = document.getElementsByClassName('contact-location')
const componyBranchDOM = document.getElementById('branch')
let map
const contactsLocations = [
  {
    name: 'hauptsitz',
    street: 'Station-Ost 7',
    zip: '6023 Rothenburg',
    number: '+41 625 61 11 22',
    location: { lat: 47.086, lng: 8.2532 }
  },
  {
    name: 'oensingen',
    street: 'Ostringstrasse 17',
    zip: '4702 Oensingen',
    number: '+41 623 98 61 61',
    location: { lat: 47.282, lng: 7.722 }
  },
  {
    name: 'bern',
    street: 'Sägestrasse 76',
    zip: '3098 Köniz',
    number: '+41 625 61 11 22',
    location: { lat: 46.924, lng: 7.412 }
  },
  {
    name: 'thalwil',
    street: 'Gewerbestrasse 12',
    zip: '8800 Thalwil',
    number: '+41 625 61 11 22',
    location: { lat: 47.285, lng: 8.566 }
  },
  {
    name: 'grabs',
    street: 'Station-Ost 7',
    zip: '6023 Rothenburg',
    number: '+41 625 61 11 22',
    location: { lat: 47.086, lng: 8.2532 }

  },
  {
    name: 'zürich',
    street: 'Ostringstrasse 17',
    zip: '4702 Oensingen',
    number: '+41 623 98 61 61',
    location: { lat: 47.282, lng: 7.722 }
  },
  {
    name: 'burgdorf',
    street: 'Sägestrasse 76',
    zip: '3098 Köniz',
    number: '+41 625 61 11 22',
    location: { lat: 46.924, lng: 7.412 }

  },
  {
    name: 'solothurn',
    street: 'Sägestrasse 76',
    zip: '3098 Köniz',
    number: '+41 625 61 11 22',
    location: { lat: 46.924, lng: 7.412 }
  },
]; // giving addresses seem wrong, so these should be change as well

[...contactLocationsDOM].forEach(el => el.addEventListener('click', onAddressChange))

function onAddressChange() {
  const branch = contactsLocations.find(x => x.name === event.target.id)
  let address = `
  <h4 class="montserrat-14 semibold-text">${branch.name}</h4>
  <span class="montserrat-14">${branch.street} <br> ${branch.zip} <br> Switzerland</span>
  <a class="montserrat-14 thin-text purple-text semibold-text" href="tel:${branch.number}">${branch.number}</a>
  `;
  [...contactLocationsDOM].forEach(el => el.classList.remove('active-location'))
  componyBranchDOM.innerHTML = address
  event.target.classList.add('active-location')
  map.setCenter(branch.location)
}

function initMap() {
  const styledMapType = new google.maps.StyledMapType(
    [
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": "100"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "lightness": "0"
          },
          {
            "color": "#4d7cff"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "color": "#4d7cff"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "lightness": 60
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fafafa"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e8e8e8"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#d7e6f4"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.place_of_worship",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ebf2fa"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#6f6f6f"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#4d7cff"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ],
    { name: "Styled Map" }
  )

  let myLocation = {
    center: { lat: 47.086, lng: 8.2532 },
    zoom: 11,
    styles: styledMapType,
    mapTypeControlOptions: {
      mapTypeIds: [
        "roadmap",
        "satellite",
        "hybrid",
        "terrain",
        "styled_map",
      ],
    },
  }

  map = new google.maps.Map(document.getElementById("map"), myLocation)
  map.mapTypes.set("styled_map", styledMapType)
  map.setMapTypeId("styled_map")
}