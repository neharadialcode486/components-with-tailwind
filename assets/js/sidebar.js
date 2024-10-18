const EVENTS_DATA = [
    { date: "26", months: "May", title: "The role of LNG", time: "14:00 - 15:00", location: "Nijenborgh 6, room 1.06" },
    { date: "28", months: "may", title: "Hydrogen: The impact on resources and ecology", time: "10:30 - 12:00", location: "Online" },
    { date: "4", months: "jun", title: "Biodiversity - Sixth mass exctinction", time: "Online", location: "Online" },
    { date: "11", months: "jun", title: "The role of LNG - Part 2", time: "Online", location: "Nijenborgh 6, room 1.06" },
];

const PROGRAMMES_DATA = ['Requirements', 'Events', 'Career event', 'Activities', 'Masterclasses'];

const eventsContainer = document.getElementById('eventsContainer');
const programmesContainer = document.getElementById('programmesContainer');

// Render Events
EVENTS_DATA.forEach(item => {
    const eventElement = document.createElement('div');
    eventElement.className = 'flex justify-between items-center mt-4 w-full';
    eventElement.innerHTML = `
                    <div class="flex flex-col items-center justify-center bg-black md:w-20 md:h-20 sm:h-16 w-14 h-14 sm:w-16 rounded-full">
                        <p class="font-black text-lg sm:text-xl md:text-3xl text-white md:leading-7">${item.date}</p>
                        <p class="font-light text-xs sm:text-sm md:text-lg text-white md:leading-5 capitalize">${item.months}</p>
                    </div>
                    <div class="flex flex-col max-w-[444px] w-8/12 lg:w-full">
                        <p class="font-bold text-sm md:text-base">${item.title}</p>
                        <div class="flex items-center mt-2">
                            <span class="icon clock-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM10.8903 10.0312L10.2653 10.8125C10.0928 11.0281 9.77812 11.0631 9.5625 10.8906C9.56219 10.8903 9.56219 10.8903 9.56219 10.8903L7.46844 9.33656C7.17188 9.09906 6.99938 8.74 6.99969 8.36063V3.49969C6.99969 3.22344 7.22344 2.99969 7.49969 2.99969H8.49969C8.77562 2.99969 8.99969 3.22344 8.99969 3.49969V7.99969L10.8122 9.32781C11.0278 9.50031 11.0625 9.81469 10.89 10.0303C10.8897 10.0303 10.8897 10.0303 10.8897 10.0306L10.8903 10.0312Z" fill="#CDCCC6" />
            </svg></span>
                            <p class="font-normal text-xs ml-1">${item.time}</p>
                            <span class="icon location-icon ml-2 sm:ml-4"><svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7.72998e-07C3.05333 7.72998e-07 0.666664 2.38667 0.666664 5.33333C0.666664 7.67333 4 13.35 5.432 15.6827C5.552 15.876 5.76466 15.996 5.998 15.996C6.22466 15.996 6.44466 15.876 6.56466 15.676C7.99133 13.3427 11.33 7.66933 11.33 5.32267C11.3233 2.376 8.93666 -0.0106659 5.99666 -0.0106659L6 7.72998e-07ZM6 7.66667C4.70666 7.66667 3.66666 6.62 3.66666 5.33333C3.66666 4.04 4.70666 3 6 3C7.28666 3 8.33333 4.04 8.33333 5.33333C8.33333 6.62 7.28666 7.666 6 7.666V7.66667Z" fill="#CDCCC6" />
            </svg></span>
                            <p class="font-normal text-xs ml-1">${item.location}</p>
                        </div>
                    </div>
                    <a href="#" class="w-8 h-8 justify-center items-center flex hover:bg-dark-gray duration-300 ease-linear hover:border-off-yellow group rounded-full border border-dark-gray">
                        <span class="icon right-arrow-icon duration-300 ease-linear group-hover:scale-90"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 8.50001H15.5C15.7733 8.50001 16 8.27334 16 8.00001C16 7.72001 15.7733 7.50001 15.5 7.50001H0.5C0.22 7.50001 0 7.72001 0 8.00001C0 8.27334 0.22 8.50001 0.5 8.50001Z" fill="black" />
                <path d="M8.85333 15.3533L15.8533 8.35334C16.0467 8.15334 16.0467 7.84001 15.8533 7.64001L8.85333 0.640005C8.65333 0.440005 8.34 0.440005 8.14 0.640005C7.94 0.833339 7.94 1.14667 8.14 1.34667L15.14 8.34667V7.63334L8.14 14.6333C7.94 14.8267 7.94 15.14 8.14 15.34C8.33333 15.5333 8.64667 15.5333 8.84667 15.34L8.85333 15.3533Z" fill="black" />
            </svg></span>
                    </a>
                `;
    eventsContainer.appendChild(eventElement);
});

// Render Programmes
for (let i = 0; i < 2; i++) {
    const programmeElement = document.createElement('div');
    programmeElement.className = 'border border-dark-gray rounded-lg py-8 px-6 mt-4 relative overflow-hidden';
    programmeElement.innerHTML = `
                    <h2 class="font-bold text-lg mb-4">The role of LNG</h2>
                    ${PROGRAMMES_DATA.slice(0, i === 0 ? 5 : 2).map((data, idx) => `
                        <div class="mt-3 max-w-[256px] w-full">
                            <p class="font-normal text-xs">${data}</p>
                            <div class="flex gap-2 mt-0.5">
                                ${idx === 2 ? '' : '<span class="w-1/2 flex bg-black rounded-3xl h-2"></span>'}
                                ${'<span class="flex bg-dark-gray rounded-3xl h-2 w-1/2"></span>'.repeat(idx === 1 || idx === 3 ? 4 : 1)}
                            </div>
                        </div>
                    `).join('')}
                    <span class="flex bg-off-yellow w-[120px] h-[120px] absolute rounded-full -top-11 -right-11"></span>
                    <span class="icon ${i === 0 ? 'lng-icon' : 'hydrogen-icon'} absolute top-4 right-4"></span>
                `;
    programmesContainer.appendChild(programmeElement);
}
const tabsData = [
    {
        title: "Dashboard",
    },
    {
        title: "Events",
    },
    {
        title: "On demand",
    },
    {
        title: "Programmes",
    },
];

const svgIcons = [
    ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3281_766)">
                    <path d="M0.78999 0.780001C0.59999 0.960001 0.48999 1.22 0.48999 1.48V12.49C0.48999 13.04 0.92999 13.49 1.48999 13.49H9.48999C10.04 13.49 10.49 13.04 10.49 12.49V1.49C10.49 0.930001 10.04 0.490001 9.48999 0.490001L1.48999 0.470001C1.21999 0.470001 0.96999 0.570001 0.77999 0.760001L0.78999 0.780001Z" />
                    <path d="M22.5 0.493001L14.5 0.503001C13.94 0.503001 13.5 0.943001 13.5 1.503V6.503C13.5 7.053 13.94 7.503 14.5 7.503H22.5C23.05 7.503 23.5 7.053 23.5 6.503V1.48C23.5 0.920001 23.05 0.480001 22.5 0.480001V0.493001Z" />
                    <path d="M10.2 23.21C10.38 23.02 10.49 22.76 10.49 22.5V17.5C10.49 16.94 10.04 16.5 9.48999 16.5H1.48999C0.92999 16.5 0.48999 16.94 0.48999 17.5V22.48C0.48999 23.03 0.92999 23.48 1.48999 23.48L9.48999 23.49C9.74999 23.49 9.99999 23.379 10.19 23.189L10.2 23.21Z" />
                    <path d="M22.5 10.508H14.5C13.94 10.508 13.5 10.948 13.5 11.508V22.508C13.5 23.058 13.94 23.508 14.5 23.508L22.5 23.488C23.05 23.488 23.5 23.038 23.5 22.488V11.5C23.5 10.94 23.05 10.5 22.5 10.5V10.508Z" />
                </g>
                <defs>
                    <clipPath id="clip0_3281_766">
                        <rect width="24" height="24"  />
                    </clipPath>
                </defs>
            </svg>`,
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.75 3H18.5V0.5625C18.5 0.253125 18.2469 0 17.9375 0H16.0625C15.7531 0 15.5 0.253125 15.5 0.5625V3H9.5V0.5625C9.5 0.253125 9.24687 0 8.9375 0H7.0625C6.75313 0 6.5 0.253125 6.5 0.5625V3H4.25C3.00781 3 2 4.00781 2 5.25V21.75C2 22.9922 3.00781 24 4.25 24H20.75C21.9922 24 23 22.9922 23 21.75V5.25C23 4.00781 21.9922 3 20.75 3ZM20.4688 21.75H4.53125C4.37656 21.75 4.25 21.6234 4.25 21.4688V7.5H20.75V21.4688C20.75 21.6234 20.6234 21.75 20.4688 21.75Z" />
</svg>
`,
    `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 2H5C2.23 2 0 4.23 0 7V17C0 19.76 2.23 21.99 5 22H19C21.76 21.99 23.99 19.76 24 17V7C23.99 4.23 21.76 2 19 2ZM22 17C22 18.65 20.65 20 19 20H5C3.34 20 2 18.65 2 17V7C2 5.34 3.34 4 5 4H19C20.65 4 22 5.34 22 7V17Z" />
<path d="M15.93 10.658L10.16 7.768V7.76C9.41 7.38 8.51 7.68 8.14 8.43C8.03 8.63 7.98 8.86 7.98 9.1V14.86C7.97 15.68 8.65 16.359 9.47 16.359C9.7 16.359 9.93 16.299 10.14 16.199L15.9 13.309C16.64 12.929 16.94 12.029 16.57 11.289C16.42 10.989 16.18 10.759 15.89 10.609L15.93 10.658Z" />
</svg>
`,
    `<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 3.35649e-06H2.50001C1.39001 3.35649e-06 0.500011 0.890003 0.500011 2V22.4C0.460011 22.98 0.759011 23.53 1.25901 23.82C1.77901 24.07 2.38901 24.03 2.86901 23.69L9.71401 19.26C9.87401 19.15 10.084 19.15 10.254 19.26L17.1 23.69C17.74 24.18 18.68 24.06 19.17 23.41C19.39 23.11 19.5 22.74 19.47 22.38V1.98C19.47 0.870003 18.57 -0.0199966 17.47 -0.0199966L17.5 3.35649e-06ZM7.58601 13.719L4.78001 10.649H4.77901C4.38901 10.249 4.40901 9.609 4.79901 9.229C5.18901 8.839 5.82901 8.859 6.20901 9.249C6.21901 9.259 6.22901 9.269 6.23901 9.279L8.89901 12.179L14.239 4.921C14.559 4.471 15.189 4.37 15.629 4.7C16.069 5.02 16.169 5.65 15.839 6.09L10.369 13.52C9.79901 14.32 8.67901 14.52 7.86901 13.95C7.74901 13.86 7.63901 13.77 7.54901 13.66L7.58601 13.719Z" />
</svg>
`
];

const header = document.getElementById('header');
const tabsContainer = document.getElementById('tabs');
const menuToggle = document.getElementById('menu-toggle');
let open = false;
let activeTab = 0;

const renderTabs = () => {
    tabsContainer.innerHTML = '';
    tabsData.forEach((tab, idx) => {
        const isActive = activeTab === idx;
        const tabElement = document.createElement('div');
        tabElement.className = "flex items-center gap-4";
        tabElement.innerHTML = `
                    <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-off-yellow' : 'bg-black'}"></span>
                    <a href="/${tab.title.toLowerCase()}" class="text-base flex items-center gap-4 font-normal ${isActive ? 'text-off-yellow tabsActive' : 'text-white tabs'}">
                        ${svgIcons[idx]} <!-- Insert the correct SVG based on index -->
                        ${tab.title}
                    </a>`;

        tabElement.addEventListener('click', (e) => {
            e.preventDefault();
            handleTabClick(idx, tab.title);
        });

        tabsContainer.appendChild(tabElement);
    });
};

const handleTabClick = (idx, title) => {
    activeTab = idx;
    window.history.pushState(null, '', `/${title.toLowerCase()}`);
    renderTabs();
};

const toggleMenu = () => {
    open = !open;
    header.classList.toggle('menu-open', open);
    header.classList.toggle('menu-closed', !open);
    menuToggle.textContent = open ? 'Close' : 'Menu';
};

menuToggle.addEventListener('click', toggleMenu);

renderTabs();