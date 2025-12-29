// Data Bahasa
const translations = {
    id: {
        "nav-home": "Beranda", "nav-pack": "Paket", "nav-book": "Booking",
        "hero-title": "Jelajahi Surga Dunia di Indonesia",
        "hero-desc": "Layanan perjalanan eksklusif dengan harga kompetitif dan guide berpengalaman.",
        "btn-explore": "Mulai Petualangan", "pack-title": "Paket Terpopuler",
        "p1-name": "Eksotisme Bali", "p1-desc": "4 Hari 3 Malam - Hotel & Transportasi Termasuk.",
        "p2-name": "Surga Raja Ampat", "p2-desc": "5 Hari 4 Malam - Diving & Island Hopping.",
        "p3-name": "Golden Sunrise Bromo", "p3-desc": "2 Hari 1 Malam - Jeep & Dokumentasi.",
        "btn-book": "Pesan", "book-title": "Formulir Pemesanan",
        "lbl-name": "Nama Lengkap", "lbl-pack": "Pilih Destinasi",
        "lbl-date": "Tanggal Keberangkatan", "btn-send": "Kirim via WhatsApp",
        "footer": "Hak Cipta Dilindungi."
    },
    en: {
        "nav-home": "Home", "nav-pack": "Packages", "nav-book": "Booking",
        "hero-title": "Explore World's Paradise in Indonesia",
        "hero-desc": "Exclusive travel services with competitive prices and experienced guides.",
        "btn-explore": "Start Adventure", "pack-title": "Popular Packages",
        "p1-name": "Exotic Bali", "p1-desc": "4 Days 3 Nights - Hotel & Transport Included.",
        "p2-name": "Raja Ampat Paradise", "p2-desc": "5 Days 4 Nights - Diving & Island Hopping.",
        "p3-name": "Bromo Golden Sunrise", "p3-desc": "2 Days 1 Night - Jeep & Documentation.",
        "btn-book": "Book Now", "book-title": "Booking Form",
        "lbl-name": "Full Name", "lbl-pack": "Choose Destination",
        "lbl-date": "Departure Date", "btn-send": "Send via WhatsApp",
        "footer": "All Rights Reserved."
    }
};

// Fungsi Ganti Bahasa
const langSwitch = document.getElementById('lang-switch');
langSwitch.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        elem.textContent = translations[lang][key];
    });
}

// WhatsApp Form Handler
document.getElementById('waForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const pack = document.getElementById('custPackage').value;
    const date = document.getElementById('custDate').value;
    const phone = "628123456789"; // Ganti Nomor Anda

    const message = `Halo Admin, saya ingin memesan paket travel:%0A- Nama: ${name}%0A- Paket: ${pack}%0A- Tanggal: ${date}`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});

// Mobile Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});