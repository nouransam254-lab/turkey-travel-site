document.addEventListener("DOMContentLoaded", () => {
    
    // 1. دالة التحكم في الجداول (المدن والكلمات)
    function setupToggle(btnId, tableId, showTxt, hideTxt) {
        const btn = document.getElementById(btnId);
        const table = document.getElementById(tableId);
        if (btn && table) {
            btn.onclick = function(e) {
                e.preventDefault(); // بيمنع النط عند اللوجو
                if (table.style.display === "none" || table.style.display === "") {
                    table.style.display = "table";
                    this.textContent = hideTxt;
                } else {
                    table.style.display = "none";
                    this.textContent = showTxt;
                }
            };
        }
    }

    // 2. تشغيل الجداول
    setupToggle("showCitiesBtn", "citiesTable", "Show Cities", "Hide Cities");
    setupToggle("showWordsBtn", "wordsTable", "Show Words", "Hide Words");

    // 3. كود زرار الحجز (Booking)
    const bookBtn = document.getElementById("bookBtn");
    const bookingModal = document.getElementById("bookingModal");
    if (bookBtn && bookingModal) {
        bookBtn.onclick = function(e) {
            e.preventDefault();
            bookingModal.style.display = "block";
        };
    }

    // 4. حركة صور الأكل (لو الـ CSS ممسوح)
    const images = document.querySelectorAll(".food-box img, .food-item img, .hero-container img");
    images.forEach(img => {
        img.style.transition = "transform 0.4s ease";
        img.onmouseover = () => img.style.transform = "scale(1.1)";
        img.onmouseout = () => img.style.transform = "scale(1)";
    });

});




// 1. تعريف العناصر
const modal = document.getElementById('bookingModal');
const openBtn = document.getElementById('openBooking'); // ده الـ ID اللي في زرار الـ Hero عندك
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('bookingForm');

// 2. فتح النافذة
openBtn.onclick = function() {
    modal.style.display = "block";
}

// 3. قفل النافذة عند الضغط على X
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 4. قفل النافذة عند الضغط في أي مكان بره الصندوق
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 5. رسالة نجاح عند الحجز
form.onsubmit = function(e) {
    e.preventDefault();
    alert("Booking Successful! We will contact you soon.");
    modal.style.display = "none";
}