document.querySelectorAll('button[data-category]').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.product').forEach(product => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Initial display of all products
document.querySelector('button[data-category="all"]').click();
