    // ============pricing table tabs================
    const monthlyTab = document.getElementById('monthlyTab');
    const fourMonthsTab = document.getElementById('fourMonthsTab');
    const monthlyContent = document.getElementById('monthlyContent');
    const fourMonthsContent = document.getElementById('fourMonthsContent');
  
    monthlyTab.addEventListener('click', () => {
      monthlyTab.classList.add('bg-[#EBA15B]', 'text-white');
      monthlyTab.classList.remove('bg-white', 'text-black');
      fourMonthsTab.classList.remove('bg-[#EBA15B]', 'text-white');
      fourMonthsTab.classList.add('bg-white', 'text-black');
      monthlyContent.classList.remove('hidden');
      fourMonthsContent.classList.add('hidden');
    });
  
    fourMonthsTab.addEventListener('click', () => {
      fourMonthsTab.classList.add('bg-[#EBA15B]', 'text-white');
      fourMonthsTab.classList.remove('bg-white', 'text-black');
      monthlyTab.classList.remove('bg-[#EBA15B]', 'text-white');
      monthlyTab.classList.add('bg-white', 'text-black');
      monthlyContent.classList.add('hidden');
      fourMonthsContent.classList.remove('hidden');
    });