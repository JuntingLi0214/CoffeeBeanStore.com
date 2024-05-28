const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
for (const item of faqItems) {
    item.classList.remove('active');
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}
