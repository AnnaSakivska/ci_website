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
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4d7cff"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
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
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#4d7cff"
          },
          {
            "visibility": "on"
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