function initMap() {
  // Your locaiton
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    center: loc,
    zoom: 14
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc.lat, map: map });
}

// Sticky menu background
window.addEventListener('scroll', () =>
  window.scrollY > 150
    ? (document.querySelector('#navbar').style.opacity = 0.9)
    : (document.querySelector('#navbar').style.opacity = 1)
);

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
