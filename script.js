document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const gallery = document.querySelectorAll('.gallery a');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();

        gallery.forEach(function (item) {
            const itemId = item.getAttribute('id').toLowerCase();

            if (itemId.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
