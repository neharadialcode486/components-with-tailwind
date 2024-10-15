const accordionItems = document.querySelectorAll('.accordionItem');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordionHeader');
    const content = item.querySelector('.accordionInfo');
    const icon = item.querySelector('img');
    
    header.addEventListener('click', () => {
        const accordionActive = document.querySelector('.accordionItem.active');
        
        if (accordionActive && accordionActive !== item) {
            accordionActive.classList.remove('active');
            accordionActive.querySelector('.accordionInfo').classList.add('hidden');
            accordionActive.querySelector('img').classList.remove('rotate-[180deg]');
                }
        item.classList.toggle('active');
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-[180deg]');
    });
});
