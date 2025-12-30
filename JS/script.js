// Data Penginapan (DATABASE)
// Tambahkan penginapan baru di sini, otomatis muncul di website
const accommodations = [
    {
        name: "Villa Andhita",
        rating: 4.8,
        desc: "Villa Andhita hadir dengan konsep modern yang menawarkan pengalaman liburan mewah dan eksklusif. Dilengkapi kolam renang, restoran, hingga ATV.",
        tag: "Rekomendasi Utama",
        tagColor: "bg-sand-gold",
        mainImg: "IMAGES/PENGINAPAN/VILLA-ANDHITA/1.webp",
        thumbs: [
            "IMAGES/PENGINAPAN/VILLA-ANDHITA/1.webp",
            "IMAGES/PENGINAPAN/VILLA-ANDHITA/2.webp",
            "IMAGES/PENGINAPAN/VILLA-ANDHITA/VA-1.jpeg",
            "IMAGES/PENGINAPAN/VILLA-ANDHITA/4.webp",
            "https://images.unsplash.com/photo-1572331165267-854da2b00cc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" // Placeholder
        ],
        facilities: [
            { icon: "fas fa-swimming-pool", text: "Pool" },
            { icon: "fas fa-wifi", text: "WiFi" },
            { icon: "fas fa-tv", text: "AC/TV" },
            { icon: "fas fa-motorcycle", text: "ATV" }
        ],
        links: {
            traveloka: "https://www.traveloka.com/id-id/hotel/indonesia/villa-andhita-garut-9000003351766",
            booking: "https://www.booking.com/Share-9otiw0x",
            instagram: "https://www.instagram.com/villa.andhita/"
        }
    },
    {
        name: "Pondok Sarimbit",
        rating: 4.0,
        desc: "Penginapan sederhana namun nyaman dengan pemandangan laut lepas yang memukau. Sangat cocok untuk backpacker dan keluarga kecil yang ingin menikmati deburan ombak.",
        tag: "Terpopuler",
        tagColor: "bg-ocean-blue",
        mainImg: "IMAGES/PENGINAPAN/PONDOK-SARIMBIT.jpeg",
        thumbs: [
            "IMAGES/PENGINAPAN/PONDOK-SARIMBIT.jpeg",
            "IMAGES/PENGINAPAN/PONDOK-SARIMBIT-2.jpeg",
            "IMAGES/PENGINAPAN/PONDOK-SARIMBIT-3.jpeg",
        ],
        facilities: [
            { icon: "fas fa-bed", text: "2 Bed" },
            { icon: "fas fa-coffee", text: "Sarapan" },
            { icon: "fas fa-parking", text: "Parkir Luas" },
            { icon: "fas fa-fan", text: "Kipas" }
        ],
        links: null // No specific OTA links, will show "Hubungi Pemilik"
    },
    {
        name: "Villa Delta",
        rating: 4.9,
        desc: "Nikmati kesejukan alami di bawah rindangnya pohon cemara. Tersedia kolam renang, restoran, hingga ATV.",
        tag: "Nuansa Alam",
        tagColor: "bg-eco-green",
        mainImg: "IMAGES/PENGINAPAN/VILLA-DELTA.jpeg",
        thumbs: [
            "IMAGES/PENGINAPAN/VILLA-DELTA.jpeg",
            "IMAGES/PENGINAPAN/VILLA-DELTA-2.jpeg",
            "IMAGES/PENGINAPAN/VILLA-DELTA-3.jpeg",

        ],
        facilities: [
            { icon: "fas fa-swimming-pool", text: "Pool" },
            { icon: "fas fa-wifi", text: "WiFi" },
            { icon: "fas fa-tv", text: "AC/TV" },
            { icon: "fas fa-motorcycle", text: "ATV" },
            { icon: "fas fa-shower", text: "Toilet" },
            { icon: "fas fa-utensils", text: "Warung" }
        ],
        links: null
    },
    {
        name: "Villa Basisir",
        rating: 4.7,
        desc: "Resort premium dengan akses langsung ke bibir pantai. Ideal untuk bulan madu atau liburan keluarga besar. Dilengkapi fasilitas air panas dan balkon pribadi.",
        tag: "Eksklusif",
        tagColor: "bg-purple-600",
        mainImg: "IMAGES/PENGINAPAN/VILLA-BASISIR.jpeg",
        thumbs: [
            "IMAGES/PENGINAPAN/VILLA-BASISIR.jpeg",

        ],
        facilities: [
            { icon: "fas fa-hot-tub", text: "Air Panas" },
            { icon: "fas fa-wifi", text: "WiFi Kencang" },
            { icon: "fas fa-umbrella-beach", text: "Private Beach" },
            { icon: "fas fa-coffee", text: "Cafe" }
        ],
        links: null
    },
    {
        name: "Villa Katiga Saung Panyileukan",
        rating: 4.7,
        desc: "Resort premium dengan akses langsung ke bibir pantai. Ideal untuk bulan madu atau liburan keluarga besar. Dilengkapi fasilitas air panas dan balkon pribadi.",
        tag: "Eksklusif",
        tagColor: "bg-purple-600",
        mainImg: "IMAGES/PENGINAPAN/VILLA-KATIGA-SAUNG-PANYILEUKAN.jpeg",
        thumbs: [
            "IMAGES/PENGINAPAN/VILLA-KATIGA-SAUNG-PANYILEUKAN.jpeg",

        ],
        facilities: [
            { icon: "fas fa-hot-tub", text: "Air Panas" },
            { icon: "fas fa-wifi", text: "WiFi Kencang" },
            { icon: "fas fa-umbrella-beach", text: "Private Beach" },
            { icon: "fas fa-coffee", text: "Cafe" }
        ],
        links: null
    }
];

// Function to Render HTML from Data
function renderAccommodations() {
    const track = document.getElementById('sliderTrack');

    const htmlContent = accommodations.map((item, index) => {
        // Generate Thumbs HTML
        const thumbCount = item.thumbs.length;
        const visibleThumbs = item.thumbs.slice(0, 3);
        const hiddenCount = thumbCount - 3;

        const thumbsHTML = visibleThumbs.map(thumb => `
                    <img onclick="changeMainImage(this, 'main-img-${index}')" src="${thumb}" class="thumb-img w-12 h-12 rounded-lg object-cover border-2 border-white shadow-lg cursor-pointer">
                `).join('');

        const moreCountHTML = hiddenCount > 0 ? `
                    <div class="w-12 h-12 rounded-lg bg-black/60 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-black/80 transition">
                        +${hiddenCount}
                    </div>` : '';

        // Generate Stars HTML
        let starsHTML = '';
        const fullStars = Math.floor(item.rating);
        const hasHalfStar = item.rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>';
        if (hasHalfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';

        // Generate Facilities HTML
        const facsHTML = item.facilities.map(fac => `
                    <div class="flex items-center gap-2 text-gray-700 text-sm"><i class="${fac.icon} text-ocean-blue w-4"></i> ${fac.text}</div>
                `).join('');

        // Generate Buttons HTML
        let buttonsHTML = '';
        if (item.links) {
            buttonsHTML += `<p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Pesan Sekarang:</p>
                                    <div class="flex flex-wrap gap-2">`;
            if (item.links.traveloka) buttonsHTML += `<a href="${item.links.traveloka}" target="_blank" class="ota-btn flex-1 min-w-[100px] bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-center font-medium text-sm transition">Traveloka</a>`;
            if (item.links.booking) buttonsHTML += `<a href="${item.links.booking}" target="_blank" class="ota-btn flex-1 min-w-[100px] bg-blue-900 hover:bg-blue-800 text-white py-2 px-3 rounded-lg text-center font-medium text-sm transition">Booking</a>`;
            if (item.links.instagram) buttonsHTML += `<a href="${item.links.instagram}" target="_blank" class="ota-btn flex-1 min-w-[100px] bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-3 rounded-lg text-center font-medium text-sm transition"><i class="fab fa-instagram"></i> IG</a>`;
            buttonsHTML += `</div>`;
        } else {
            buttonsHTML = `<button class="w-full bg-ocean-blue text-white font-bold py-3 rounded-lg hover:bg-ocean-dark transition shadow-lg">Hubungi Pemilik</button>`;
        }

        return `
                <div class="w-full flex-shrink-0 px-1 md:px-2">
                    <div class="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white h-full">
                        <div class="grid grid-cols-1 lg:grid-cols-2 h-full">
                            <!-- Image Side -->
                            <div class="relative h-64 lg:h-auto group flex flex-col">
                                <div class="relative flex-grow overflow-hidden">
                                    <img id="main-img-${index}" src="${item.mainImg}" alt="${item.name}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300">
                                    ${item.tag ? `<div class="absolute top-4 left-4 ${item.tagColor} text-white px-4 py-1 rounded-full text-sm font-bold shadow-md z-10">${item.tag}</div>` : ''}
                                </div>
                                <div class="absolute bottom-4 right-4 z-20 flex gap-2">
                                    ${thumbsHTML}
                                    ${moreCountHTML}
                                </div>
                            </div>

                            <!-- Content Side -->
                            <div class="p-8 lg:p-12 flex flex-col justify-center">
                                <h3 class="text-2xl font-bold text-ocean-dark mb-1">${item.name}</h3>
                                <div class="flex text-yellow-400 text-sm mb-4">
                                    ${starsHTML}
                                    <span class="text-gray-400 ml-2">(${item.rating}/5)</span>
                                </div>
                                <p class="text-gray-600 mb-6 text-sm leading-relaxed">${item.desc}</p>
                                <div class="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
                                    ${facsHTML}
                                </div>
                                <div class="space-y-3">
                                    ${buttonsHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }).join('');

    track.innerHTML = htmlContent;
}

// --- CORE UTILITIES ---

// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Navbar Transition on Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.replace('py-3', 'py-2');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.replace('py-2', 'py-3');
    }
});

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// IMAGE SWAP LOGIC
function changeMainImage(thumbElement, mainImgId) {
    const mainImg = document.getElementById(mainImgId);
    const newSrc = thumbElement.src;

    // Add fade out effect
    mainImg.style.opacity = '0';

    setTimeout(() => {
        mainImg.src = newSrc;
        // Fade in
        mainImg.style.opacity = '1';
    }, 300); // Wait for transition
}

// --- SLIDER INITIALIZATION ---

// 1. Render data first
renderAccommodations();

// 2. Then Initialize Slider Logic
const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const prevBtnMobile = document.getElementById('prevSlideMobile');
const nextBtnMobile = document.getElementById('nextSlideMobile');
const dotsContainer = document.getElementById('sliderDots');

let currentIndex = 0;
const slides = sliderTrack.children;
const totalSlides = slides.length;

// Create Dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition-all', 'duration-300');
    dot.classList.add(i === 0 ? 'bg-ocean-blue' : 'bg-gray-300'); // Init active state
    dot.classList.add(i === 0 ? 'w-6' : 'w-3'); // Init active width
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const updateDots = () => {
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
        if (i === currentIndex) {
            dots[i].classList.remove('bg-gray-300', 'w-3');
            dots[i].classList.add('bg-ocean-blue', 'w-6');
        } else {
            dots[i].classList.remove('bg-ocean-blue', 'w-6');
            dots[i].classList.add('bg-gray-300', 'w-3');
        }
    }
};

const goToSlide = (index) => {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
};

const nextSlide = () => goToSlide(currentIndex + 1);
const prevSlide = () => goToSlide(currentIndex - 1);

// Event Listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
prevBtnMobile.addEventListener('click', prevSlide);
nextBtnMobile.addEventListener('click', nextSlide);