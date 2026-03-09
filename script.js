const places = [
    // Theatres
    { name: "AMB Cinemas", category: "Theatres", rating: 4.8, description: "Superplex in Gachibowli with luxury seating and cutting-edge technology.", lat: 17.4578, lng: 78.3638 },
    { name: "Prasads Multiplex", category: "Theatres", rating: 4.5, description: "Iconic cinematic experience located near Hussain Sagar Lake.", lat: 17.4126, lng: 78.4651 },
    { name: "PVR Next Galleria", category: "Theatres", rating: 4.4, description: "Modern movie theatre in Punjagutta with great screen quality.", lat: 17.4262, lng: 78.4526 },
    { name: "INOX GVK One", category: "Theatres", rating: 4.3, description: "Premium cinema inside GVK One Mall, Banjara Hills.", lat: 17.4193, lng: 78.4485 },
    { name: "Cinepolis Manjeera Mall", category: "Theatres", rating: 4.4, description: "High-quality screens for a great movie experience in Kukatpally.", lat: 17.4916, lng: 78.3905 },
    { name: "PVR Inorbit Mall", category: "Theatres", rating: 4.5, description: "Popular multiplex with immersive sound in Madhapur.", lat: 17.4338, lng: 78.3866 },
    { name: "Asian Radhika Multiplex", category: "Theatres", rating: 4.2, description: "Affordable and classic cinema located in Kapra.", lat: 17.4852, lng: 78.5630 },
    { name: "AAA Cinemas", category: "Theatres", rating: 4.6, description: "Allu Arjun's modern and luxurious cinema in Ameerpet.", lat: 17.4429, lng: 78.4449 },
    
    // Cafes
    { name: "Roastery Coffee House", category: "Cafes", rating: 4.7, description: "Specialty coffee brewed locally with a stunning courtyard ambiance.", lat: 17.4208, lng: 78.4116 },
    { name: "Autumn Leaf Cafe", category: "Cafes", rating: 4.5, description: "Pet-friendly cafe surrounded by greenery in Jubilee Hills.", lat: 17.4334, lng: 78.4042 },
    { name: "Theory Cafe", category: "Cafes", rating: 4.4, description: "Classy and minimalistic interiors paired with great food.", lat: 17.4352, lng: 78.4061 },
    { name: "True Black Cafe", category: "Cafes", rating: 4.6, description: "Boutique coffee shop known for authentic and strong blends.", lat: 17.4361, lng: 78.4055 },
    { name: "Cafe Niloufer", category: "Cafes", rating: 4.8, description: "Legendary cafe famous for its Osmania biscuits and Irani Chai.", lat: 17.3995, lng: 78.4617 },
    { name: "Conçu", category: "Cafes", rating: 4.7, description: "European-style cafe acclaimed for its high-end exquisite desserts.", lat: 17.4325, lng: 78.4068 },
    { name: "The Hole In The Wall Cafe", category: "Cafes", rating: 4.4, description: "Cozy vibes and excellent massive English breakfasts.", lat: 17.4329, lng: 78.4023 },
    { name: "Heart Cup Coffee", category: "Cafes", rating: 4.3, description: "Lively spot featuring great music, drinks, and coffee.", lat: 17.4285, lng: 78.4079 },
    
    // Restaurants
    { name: "Paradise Biryani", category: "Restaurants", rating: 4.3, description: "World-famous iconic Hyderabadi Dum Biryani since 1953.", lat: 17.4419, lng: 78.4866 },
    { name: "Shah Ghouse", category: "Restaurants", rating: 4.4, description: "Renowned for its midnight Biryani, Haleem, and Irani Chai.", lat: 17.3773, lng: 78.4746 },
    { name: "Bawarchi", category: "Restaurants", rating: 4.5, description: "One of the most reputed spots at RTC X Roads for authentic biryani.", lat: 17.3941, lng: 78.4972 },
    { name: "Chutneys", category: "Restaurants", rating: 4.5, description: "Famous for its wide variety of chutneys and South Indian thalis.", lat: 17.4170, lng: 78.4485 },
    { name: "Absolute Barbecues", category: "Restaurants", rating: 4.6, description: "Lively grill restaurant featuring a massive buffet of global dishes.", lat: 17.4262, lng: 78.4116 },
    { name: "Ohri's Jiva Imperia", category: "Restaurants", rating: 4.2, description: "An elaborate and grand vegetarian buffet offering multiple cuisines.", lat: 17.4258, lng: 78.4526 },
    { name: "Exotica", category: "Restaurants", rating: 4.6, description: "Beautiful rooftop dining featuring Mughlai and North Indian cuisine.", lat: 17.4182, lng: 78.4491 },
    { name: "Cafe Bahar", category: "Restaurants", rating: 4.4, description: "Classic Hyderabadi joint renowned for authentic Biryani and Haleem.", lat: 17.4014, lng: 78.4820 },
    
    // Tourist Places
    { name: "Charminar", category: "Tourist Places", rating: 4.8, description: "A spectacular square monument and mosque constructed in 1591.", lat: 17.3616, lng: 78.4747 },
    { name: "Golconda Fort", category: "Tourist Places", rating: 4.7, description: "Historical magnificent fortress and former capital of the Qutb Shahi dynasty.", lat: 17.3833, lng: 78.4011 },
    { name: "Ramoji Film City", category: "Tourist Places", rating: 4.6, description: "The largest integrated film city in the world offering guided tours.", lat: 17.2511, lng: 78.6811 },
    { name: "Hussain Sagar Lake", category: "Tourist Places", rating: 4.5, description: "Heart-shaped lake built in 1562, famous for its large monolithic Buddha statue.", lat: 17.4239, lng: 78.4738 },
    { name: "Birla Mandir", category: "Tourist Places", rating: 4.7, description: "Beautifully carved marble Hindu temple built on a 280-feet high hillock.", lat: 17.4062, lng: 78.4690 },
    { name: "Salar Jung Museum", category: "Tourist Places", rating: 4.7, description: "Renowned art museum with a vast collection strictly from the Salar Jung family.", lat: 17.3714, lng: 78.4804 },
    { name: "Chowmahalla Palace", category: "Tourist Places", rating: 4.6, description: "The breathtakingly elegant palace of the Nizams of Hyderabad state.", lat: 17.3578, lng: 78.4717 },
    { name: "Qutb Shahi Tombs", category: "Tourist Places", rating: 4.5, description: "Historic, intricately carved tombs of the Qutb Shahi dynasty rulers.", lat: 17.3995, lng: 78.3963 },

    // Hospitals
    { name: "Apollo Hospitals Jubilee Hills", category: "Hospitals", rating: 4.5, description: "Leading multi-specialty care and advanced medical hospital in Jubilee Hills.", lat: 17.4216, lng: 78.4098 },
    { name: "Yashoda Hospitals Somajiguda", category: "Hospitals", rating: 4.4, description: "Premier medical facility offering top-notch healthcare services.", lat: 17.4269, lng: 78.4552 },
    { name: "CARE Hospitals Banjara Hills", category: "Hospitals", rating: 4.3, description: "Advanced specialty hospital focused on complex surgeries in Banjara Hills.", lat: 17.4144, lng: 78.4487 },
    { name: "KIMS Hospitals Secunderabad", category: "Hospitals", rating: 4.5, description: "One of the best multi-specialty and research hospitals in Secunderabad.", lat: 17.4411, lng: 78.4844 },
    { name: "AIG Hospitals Gachibowli", category: "Hospitals", rating: 4.7, description: "State-of-the-art facility specializing highly in gastroenterology and more.", lat: 17.4435, lng: 78.3644 },
    { name: "Medicover Hospitals", category: "Hospitals", rating: 4.3, description: "Modern hospital equipped with advanced medical technologies in Hi-Tech City.", lat: 17.4452, lng: 78.3855 },
    { name: "Continental Hospitals", category: "Hospitals", rating: 4.4, description: "JCI and NABH accredited premium healthcare facility in Nanakramguda.", lat: 17.4145, lng: 78.3444 },
    { name: "Sunshine Hospitals", category: "Hospitals", rating: 4.4, description: "Renowned multi-specialty hospital primarily known globally for orthopedics.", lat: 17.4414, lng: 78.4842 }
];

const placesGrid = document.getElementById('placesGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('noResults');
const locationBtn = document.getElementById('locationBtn');

let currentCategory = 'All';
let searchQuery = '';
let userLocation = null;
let isLocationFilterActive = false;

// Default Render
renderCards(places);

// Event Listeners
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    filterAndRender();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update Active Button Style
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        currentCategory = e.target.getAttribute('data-category');
        filterAndRender();
    });
});

locationBtn.addEventListener('click', () => {
    if (isLocationFilterActive) {
        // Turn off location filter
        isLocationFilterActive = false;
        locationBtn.classList.remove('active');
        userLocation = null;
        filterAndRender();
    } else {
        // Request Location
        if (navigator.geolocation) {
            locationBtn.style.opacity = '0.5'; // loading state
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    isLocationFilterActive = true;
                    locationBtn.classList.add('active');
                    locationBtn.style.opacity = '1';
                    filterAndRender();
                },
                (error) => {
                    locationBtn.style.opacity = '1';
                    alert('Unable to retrieve your location. Please allow location access.');
                    console.error("Error getting location:", error);
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    }
});

// Logic functions
function calculateDistance(lat1, lon1, lat2, lon2) {
    // Haversine formula
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; 
    return distance;
}

function filterAndRender() {
    let filteredPlaces = places;
    
    // Filter by Category
    if (currentCategory !== 'All') {
        filteredPlaces = filteredPlaces.filter(place => place.category === currentCategory);
    }
    
    // Filter by Search Query
    if (searchQuery) {
        filteredPlaces = filteredPlaces.filter(place => 
            place.name.toLowerCase().includes(searchQuery) ||
            place.description.toLowerCase().includes(searchQuery)
        );
    }

    // Filter by Location and Sort
    if (isLocationFilterActive && userLocation) {
        filteredPlaces = filteredPlaces.map(place => {
            return {
                ...place,
                distance: calculateDistance(userLocation.lat, userLocation.lng, place.lat, place.lng)
            };
        }).filter(place => place.distance <= 15); // Show places within 15km
        
        // Sort by distance
        filteredPlaces.sort((a, b) => a.distance - b.distance);
    }
    
    renderCards(filteredPlaces);
}

function renderCards(data) {
    placesGrid.innerHTML = '';
    
    if (data.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        data.forEach(place => {
            const card = document.createElement('div');
            card.classList.add('place-card');
            
            let distanceHtml = '';
            if (place.distance !== undefined) {
                distanceHtml = `<p style="color: var(--primary-color); font-weight: 600; font-size: 0.85rem; margin-top: 8px;">📍 ${place.distance.toFixed(1)} km away</p>`;
            }

            card.innerHTML = `
                <div>
                    <div class="card-header">
                        <h3 class="card-title">${place.name}</h3>
                        <div class="card-rating">
                            ★ ${place.rating}
                        </div>
                    </div>
                    <span class="card-category">${place.category}</span>
                    ${distanceHtml}
                    <p class="card-desc mt-2">${place.description}</p>
                </div>
                <button class="map-btn" onclick="openMap('${place.name.replace(/'/g, "\\'")}')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    View on Map
                </button>
            `;
            
            placesGrid.appendChild(card);
        });
    }
}

function openMap(name) {
    const query = encodeURIComponent(name + ' Hyderabad');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
}
