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
