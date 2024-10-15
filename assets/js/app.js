    const monthlyTab = document.getElementById('monthlyTab');
    const fourMonthsTab = document.getElementById('fourMonthsTab');
    const monthlyContent = document.getElementById('monthlyContent');
    const fourMonthsContent = document.getElementById('fourMonthsContent');
  
    monthlyTab.addEventListener('click', () => {
      monthlyTab.classList.add('bg-orange-400', 'text-white');
      monthlyTab.classList.remove('bg-white', 'text-orange-400');
      fourMonthsTab.classList.remove('bg-orange-400', 'text-white');
      fourMonthsTab.classList.add('bg-white', 'text-orange-400');
      monthlyContent.classList.remove('hidden');
      fourMonthsContent.classList.add('hidden');
    });
  
    fourMonthsTab.addEventListener('click', () => {
      fourMonthsTab.classList.add('bg-orange-400', 'text-white');
      fourMonthsTab.classList.remove('bg-white', 'text-orange-400');
      monthlyTab.classList.remove('bg-orange-400', 'text-white');
      monthlyTab.classList.add('bg-white', 'text-orange-400');
      monthlyContent.classList.add('hidden');
      fourMonthsContent.classList.remove('hidden');
    });