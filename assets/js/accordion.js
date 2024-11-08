const accordion-items = document.querySelectorAll('.accordion-item');

accordion-items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-info');
    const icon = item.querySelector('img');
    const headings = item.querySelectorAll('.accordion-head');
    const line = item.querySelector('.accordion-line');

    header.addEventListener('click', () => {
        const accordionActive = document.querySelector('.accordion-item.active');

        if (accordionActive && accordionActive !== item) {
            accordionActive.classList.remove('active');
            accordionActive.querySelector('.accordion-info').classList.add('hidden');
            accordionActive.querySelector('img').classList.remove('rotate-180');
            accordionActive.querySelectorAll('.accordion-head').forEach(heading => {
                heading.classList.remove('font-semibold');
                heading.classList.add('font-normal');
            });            
            accordionActive.querySelector('.accordion-line').classList.add('hidden');
        }

        item.classList.toggle('active');
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
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
