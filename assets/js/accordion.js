accordionItems.forEach(item => {
    const header = item.querySelector('.accordionHeader');
    const content = item.querySelector('.accordionInfo');
    const icon = item.querySelector('img');
    const headings = item.querySelectorAll('.accordionHead');
    const line = item.querySelector('.accordionLine');

    header.addEventListener('click', () => {
        const accordionActive = document.querySelector('.accordionItem.active');

        if (accordionActive && accordionActive !== item) {
            accordionActive.classList.remove('active');
            accordionActive.querySelector('.accordionInfo').style.maxHeight = null;
            accordionActive.querySelector('.accordionInfo').classList.add('hidden');
            accordionActive.querySelector('img').classList.remove('rotate-180');
            accordionActive.querySelectorAll('.accordionHead').forEach(heading => {
                heading.classList.remove('font-semibold');
                heading.classList.add('font-normal');
            });
            accordionActive.querySelector('.accordionLine').classList.add('hidden');
        }

        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px'; // Adjust height dynamically
            content.classList.remove('hidden');
            icon.classList.add('rotate-180');
            headings.forEach(heading => {
                heading.classList.add('font-semibold');
                heading.classList.remove('font-normal');
            });
            line.classList.remove('hidden');
        } else {
            content.style.maxHeight = null;
            content.classList.add('hidden');
            icon.classList.remove('rotate-180');
            headings.forEach(heading => {
                heading.classList.remove('font-semibold');
                heading.classList.add('font-normal');
            });
            line.classList.add('hidden');
        }
    });
});
