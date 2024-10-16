const accordionItems = document.querySelectorAll('.accordionItem');

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
            accordionActive.querySelector('.accordionInfo').classList.add('hidden');
            accordionActive.querySelector('img').classList.remove('rotate-180');
            accordionActive.querySelectorAll('.accordionHead').forEach(heading => {
                heading.classList.remove('font-semibold');
                heading.classList.add('font-normal');
            });            
            accordionActive.querySelector('.accordionLine').classList.add('hidden');
        }

        item.classList.toggle('active');
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
        
        // Toggle font-weight classes
        if (item.classList.contains('active')) {
            headings.forEach(heading => {
                heading.classList.add('font-semibold');
                heading.classList.remove('font-normal');
            });
            line.classList.remove('hidden');
        } else {
            headings.forEach(heading => {
                heading.classList.remove('font-semibold');
                heading.classList.add('font-normal');
            });
            line.classList.add('hidden');
        }
    });
});
