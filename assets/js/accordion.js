const accordionItems = document.querySelectorAll('.accordionItem');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordionHeader');
    const content = item.querySelector('.accordionInfo');
    const icon = item.querySelector('img');
    const headings = item.querySelectorAll('.accordionHead');

    header.addEventListener('click', () => {
        const accordionActive = document.querySelector('.accordionItem.active');

        if (accordionActive && accordionActive !== item) {
            accordionActive.classList.remove('active');
            accordionActive.querySelector('.accordionInfo').classList.add('hidden');
            accordionActive.querySelector('img').classList.remove('rotate-180');
            accordionActive.querySelectorAll('.accordionHead').forEach(heading => {
                heading.classList.remove('font-semibold');
                heading.classList.add('font-normal');
            });
        }
        item.classList.toggle('active');
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
        if (item.classList.contains('active')) {
            headings.forEach(heading => {
                heading.classList.add('font-semibold');
                heading.classList.remove('font-normal');
            });
        } else {
            headings.forEach(heading => {
                heading.classList.remove('font-semibold');
                heading.classList.add('font-normal');
            });
        }
    });
});
