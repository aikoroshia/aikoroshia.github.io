// Translation dictionary
const translations = {
    'en': {
        'home': 'Home',
        'resume': 'Resume',
        'about': 'About',
        'portfolio': 'Portfolio',
        'projects': 'Projects',
        'welcomeMessage': 'Welcome to my website 💜',
        'constructionMessage': 'Some parts of it are still in construction, but feel free to take a look around!',
        'homeTitle': 'Hello! I\'m <span>Kelly.</span>',
        'homeSubtitle': 'I\'m a <span></span>',
        'resumeButton': 'Check out my resume!',
        'aboutTitle': 'Hey there! 💖',
        'aboutIntro': 'I\'m Kelly Lio, a second-year Software Engineering student at McGill University! ✨',
        'aboutDescription': 'I love bringing ideas to life, whether it\'s through coding, drawing, or designing. When I\'m not debugging, you\'ll probably find me doodling, working on creative projects, or getting lost in a good manga. 🎨📖💻',
        'aboutThanks': 'Thanks for stopping by! 🌸',
        'portfolioTitle': 'Posts made for GameDev McGill\'s instagram on Figma',
        'portfolioMore': 'More to be added... but you can check out my <a href="https://ringed-cattle-494.notion.site/Kelly-Lio-Design-Portfolio-19489f682ee28013abf0de4172d96b4c" class="portfolio-link">Notion portfolio</a> in the meantime!',
        'projectsMessage': 'Website in construction...'
    },
    'fr': {
        'home': 'Accueil',
        'resume': 'Résumé',
        'about': 'À propos',
        'portfolio': 'Portfolio',
        'projects': 'Projets',
        'welcomeMessage': 'Bienvenue sur mon site web 💜',
        'constructionMessage': 'Certaines parties sont encore en construction, mais n\'hésitez pas à explorer!',
        'homeTitle': 'Salut! Je suis <span>Kelly.</span>',
        'homeSubtitle': 'Je suis <span></span>',
        'resumeButton': 'Consultez mon CV!',
        'aboutTitle': 'Salut! 💖',
        'aboutIntro': 'Je m\'appelle Kelly Lio, je suis étudiante en génie logiciel en deuxième année à l\'Université McGill! ✨',
        'aboutDescription': 'J\'aime donner vie à des idées, que ce soit par le code, le dessin ou le design. Quand je ne suis pas en train de déboguer, vous me trouverez probablement à gribouiller, travailler sur des projets créatifs ou me perdre dans un bon manga. 🎨📖💻',
        'aboutThanks': 'Merci de votre visite! 🌸',
        'portfolioTitle': 'Publications réalisées pour Instagram de GameDev McGill sur Figma',
        'portfolioMore': 'Plus à venir... mais vous pouvez consulter mon <a href="https://ringed-cattle-494.notion.site/Kelly-Lio-Design-Portfolio-19489f682ee28013abf0de4172d96b4c" class="portfolio-link">portfolio Notion</a> en attendant!',
        'projectsMessage': 'Site web en construction...'
    }
};

// Language toggle functionality
function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'fr' : 'en';
    localStorage.setItem('language', newLang);
    applyTranslation(newLang);
}

function applyTranslation(lang) {
    // Update navigation
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });

    // Page-specific translations
    const pageName = document.body.className;
    
    switch(pageName) {
        case 'home-page':
            // Use innerHTML to preserve HTML tags like <span>
            const homeTitle = document.querySelector('.home-content h1');
            if (homeTitle) {
                homeTitle.innerHTML = translations[lang]['homeTitle'];
            }

            const homeSub = document.querySelector('.home h4');
            if (homeSub) {
                homeSub.textContent = translations[lang]['welcomeMessage'];
            }

            const homeP = document.querySelector('.home p');
            if (homeP) {
                homeP.textContent = translations[lang]['constructionMessage'];
            }

            const resumeBtn = document.querySelector('.home .btn');
            if (resumeBtn) {
                resumeBtn.textContent = translations[lang]['resumeButton'];
            }
            break;
        
        case 'about-page':
            const aboutH1 = document.querySelector('.about h1');
            if (aboutH1) {
                aboutH1.textContent = translations[lang]['aboutTitle'];
            }

            const aboutParagraphs = document.querySelectorAll('.about p');
            if (aboutParagraphs.length >= 3) {
                aboutParagraphs[0].textContent = translations[lang]['aboutIntro'];
                aboutParagraphs[1].textContent = translations[lang]['aboutDescription'];
                aboutParagraphs[2].textContent = translations[lang]['aboutThanks'];
            }
            break;
        
        case 'portfolio-page':
            const portfolioTitle = document.querySelector('.portfolio-titles h1');
            if (portfolioTitle) {
                portfolioTitle.textContent = translations[lang]['portfolioTitle'];
            }

            const portfolioMore = document.querySelector('.portfolio-titles h2');
            if (portfolioMore) {
                portfolioMore.innerHTML = translations[lang]['portfolioMore'];
            }
            break;

        case 'projects-page':
            const projectsH1 = document.querySelector('.projects h1');
            if (projectsH1) {
                projectsH1.textContent = translations[lang]['projectsMessage'];
            }
            break;
    }

    // Update language toggle button
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.textContent = lang === 'en' ? 'FR' : 'EN';
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    
    // Create language toggle button
    const langToggleBtn = document.createElement('button');
    langToggleBtn.id = 'lang-toggle';
    langToggleBtn.className = 'btn lang-btn';
    langToggleBtn.addEventListener('click', toggleLanguage);
    
    // Add to header
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(langToggleBtn);
    }

    // Apply initial translation
    applyTranslation(savedLang);
});