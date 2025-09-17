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
            date: "July 2025",
            description: "A collaborative task management platform using Next.js, React, TypeScript, and Firebase with real-time updates and secure authentication.",
            points: [
                "Implemented task assignment, workspace collaboration, and integrated a Node.js + Express backend with Firestore for scalable and efficient data handling."
            ],
            tech: ["Next.js", "React", "TypeScript", "Firebase", "Node.js", "Express", "Firestore"]
        },
        summariser: {
            title: "AI Summariser",
            date: "Aug 2025",
            description: "A browser extension that generates concise summaries of webpage content using the Google Gemini API.",
            points: [
                "Built a browser extension using JavaScript that extracts webpage content and sends it to the Google Gemini API to generate concise summaries.",
                "Injected custom scripts into active tabs, handled DOM parsing, and implemented API integration for real-time, AI-powered summarization."
            ],
            tech: ["JavaScript", "Google Gemini API", "DOM Manipulation", "Browser Extensions"]
        },
        aiagent: {

            title: "AI Agent Orchestration Tool",
            date: "Sept 2025",
            description: "Engineered a meta-agent with the Google Agent Development Kit (ADK) that can dynamically generate executable Python scripts for specialized AI agents based on natural language descriptions.",
            points: [
                "Demonstrated proficiency in agentic workflows by building a single agent that can perform a complex, multi-step task and also serve as a general conversational assistant.",
                "Showcased an understanding of multi-agent system principles and conditional logic, allowing the agent to dynamically switch between acting as a builder or a chatbot based on user intent.",
                "Gained practical experience in orchestrating tool use and agent behavior, goal-oriented AI systems beyond simple conversational models."
            ],
            tech: ["Google ADK", "Python", "NLP", "Agentic Workflows"]

        },
        ragchatbot: {
            title: "RAG-Powered AI Chatbot",
            date: "Sept 2025",
            description: "A Retrieval-Augmented Generation (RAG) chatbot designed to deliver context-aware responses over private datasets.",
            points: [
                "Configured and deployed a local Llama 3.1:8B model using Ollama for low-latency inference without relying on external APIs.",
                "Integrated Flowise with a vector database and embedding model to enable semantic search and prompt augmentation.",
                "Implemented conversational memory for contextual continuity across queries.",
                "Explored modern LLM concepts such as embeddings, context injection, and prompt engineering while building a full-stack AI pipeline."
            ],
            tech: ["Ollama", "Llama 3.1:8B", "Flowise", "Vector Database", "Embeddings"]
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

    const copyEmailBtn = document.getElementById('copy-email-btn');
    const emailLink = document.getElementById('email-link');
    const copySuccessMsg = document.getElementById('copy-success-msg');

    copyEmailBtn.addEventListener('click', () => {
        const email = emailLink.innerText;
        navigator.clipboard.writeText(email).then(() => {
            copySuccessMsg.textContent = 'Email copied to clipboard!';
            setTimeout(() => {
                copySuccessMsg.textContent = '';
            }, 2000);
        });
    });
});