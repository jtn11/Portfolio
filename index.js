document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        if (index >= 0 && index < navLinks.length) {
            navLinks[index].classList.add('active');
        }
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);

    const projects = {
        tasknest: {
            title: "Tasknest",
            date: "July 2025 - Present",
            description: "A collaborative task management platform using Next.js, React, TypeScript, and Firebase with real-time updates and secure authentication.",
            points: [
                "Implemented task assignment, workspace collaboration, and integrated a Node.js + Express backend with Firestore for scalable and efficient data handling."
            ],
            tech: ["Next.js", "React", "TypeScript", "Firebase", "Node.js", "Express", "Firestore"]
        },
        summariser: {
            title: "Summariser",
            date: "May 2025",
            description: "A browser extension that generates concise summaries of webpage content using the Google Gemini API.",
            points: [
                "Built a browser extension using JavaScript that extracts webpage content and sends it to the Google Gemini API to generate concise summaries.",
                "Injected custom scripts into active tabs, handled DOM parsing, and implemented API integration for real-time, AI-powered summarization."
            ],
            tech: ["JavaScript", "Google Gemini API", "DOM Manipulation", "Browser Extensions"]
        },
        urlshortener: {
            title: "URL Shortener",
            date: "Undated",
            description: "A basic URL shortener developed to demonstrate core web development principles.",
            points: [
                "Developed a basic URL shortener using Node.js, Express, and EJS templating.",
                "Implemented custom routing to generate and redirect short links."
            ],
            tech: ["Node.js", "Express", "EJS"]
        }
    };

    const projectTabs = document.querySelectorAll('.project-tab');
    const projectContent = document.getElementById('project-content');


    function updateProjectContent(projectName) {
        const project = projects[projectName];
        let techBadges = project.tech.map(t => `<span class="bg-gray-200 text-gray-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">${t}</span>`).join('');

        projectContent.innerHTML = `
        <h4 class="text-2xl font-bold text-[#594d46]">${project.title}</h4>
        <p class="text-sm text-gray-500 mb-4">${project.date}</p>
        <p class="text-gray-600 mb-6">${project.description}</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-gray-600">
            ${project.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
        <div class="flex flex-wrap gap-2 mt-4">
            ${techBadges}
        </div>
    `;
    }

    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            projectTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateProjectContent(tab.dataset.project);
        });
    });

    updateProjectContent('tasknest');

    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['JavaScript', 'React.js', 'Next.js', 'Node.js', 'Java', 'Firebase'],
            datasets: [{
                label: 'Proficiency',
                data: [90, 85, 80, 80, 75, 95],
                backgroundColor: 'rgba(140, 122, 107, 0.2)',
                borderColor: 'rgba(140, 122, 107, 1)',
                pointBackgroundColor: 'rgba(140, 122, 107, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(140, 122, 107, 1)'
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 10,
                        },
                        color: '#333'
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        stepSize: 20
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});