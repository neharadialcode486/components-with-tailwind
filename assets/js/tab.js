// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tabsInfo');
const tabHeads = document.querySelectorAll('.tabHead'); 

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const isActiveTab = document.querySelector('.tab.active');
        if (isActiveTab) {
            isActiveTab.classList.remove('active', 'bg-gradient-to-r', 'from-[#18FF9E]', 'to-[#1EA56C]');
        }
        const isActiveTabHead = document.querySelector('.tabHead.active');
        if (isActiveTabHead) {
            isActiveTabHead.classList.remove('active', 'text-[#18FF9E]', 'bg-[#151619]');
            isActiveTabHead.classList.add('text-white');
        }
        contents.forEach(content => content.classList.add('hidden'));
        tab.classList.add('active', 'bg-gradient-to-r', 'from-[#18FF9E]', 'to-[#1EA56C]');
        
        const tabHead = tab.querySelector('.tabHead');
        tabHead.classList.add('active', 'text-[#18FF9E]', 'bg-[#151619]');
        tabHead.classList.remove('text-white');
        const target = tab.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        targetContent && targetContent.classList.remove('hidden');
    });
});

// Accordion
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
            accordionActive.querySelector('img').src = './assets/images/svg/plus.svg';                   
        }
        item.classList.toggle('active');
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-[180deg]');
        icon.classList.toggle('duration-[1s]');
        icon.src = item.classList.contains('active') 
            ? './assets/images/svg/minus.svg' 
            : './assets/images/svg/plus.svg';
    });
});
