// Translations
const translations = {
    fa: {
        nav: { about: "درباره من", skills: "مهارت‌ها", tools: "ابزارها و تکنولوژی‌ها", portfolio: "نمونه‌کارها", contact: "ارتباط" },
        hero: {
            badge: "برنامه‌نویس پایتون و توسعه‌دهنده فرانت‌اند",
            title: "پارسا دهقانی",
            description: "برنامه‌نویس پایتون و توسعه‌دهنده فرانت‌اند. تمرکز روی ساخت محصولات کاربردی با کد تمیز و تجربه کاربری بهینه.",
            viewPortfolio: "نمونه‌کارها",
            contact: "تماس با من",
            profile: {
                title: "توسعه رابط کاربری و ابزارهای پشتیبان",
                description: "توسعه فرانت‌اند با HTML، CSS و JavaScript و ساخت ابزارهای خودکارسازی با پایتون."
            }
        },
        about: {
            title: "درباره من",
            p1: "برنامه‌نویس پایتون و توسعه‌دهنده فرانت‌اند با تمرکز روی HTML و CSS. در حال توسعه پروژه‌های وب با رویکرد کد تمیز و تجربه کاربری بهینه.",
            p2: "تمرکز روی جزئیات، کیفیت کد و همکاری مؤثر. هر پروژه فرصتی برای یادگیری و ساخت محصولات کاربردی است.",
            p3: "این وب‌سایت برای معرفی پروژه‌ها و به اشتراک گذاشتن تجربیات توسعه یافته است.",
            beliefs: {
                title: "رویکرد کاری",
                "1": { title: "یادگیری مستمر", desc: "هر پروژه فرصتی برای کشف ابزار و تکنیک‌های تازه است." },
                "2": { title: "زیبایی در سادگی", desc: "رابط کاربری مؤثر کاربر را به هدفش می‌رساند." },
                "3": { title: "همکاری مفید", desc: "ارتباط شفاف و بازخورد سازنده پایه همکاری مؤثر است." }
            }
        },
        skills: {
            title: "مهارت‌های کلیدی",
            description: "ترکیبی از توسعه سمت کاربر و ساخت ابزارهای پشتیبان با پایتون که کمک می‌کند ایده‌ها سریع‌تر به محصول تبدیل شوند.",
            expanding: "در حال گسترش",
            python: {
                concept: "Abstraction",
                description: "اتومات‌سازی، اسکریپت‌نویسی و ساخت ابزارهای پشت صحنه برای پشتیبانی از پروژه‌های وب."
            },
            html: {
                concept: "Structure",
                description: "معماری صفحات تمیز و قابل توسعه برای تجربه کاربری شفاف."
            },
            css: {
                concept: "Presentation",
                description: "طراحی‌های واکنش‌گرا، انیمیشن‌های ظریف و رعایت جزئیات بصری."
            },
            js: {
                concept: "Logic",
                description: "تعامل‌های کاربر محور و پیاده‌سازی رفتارهای پویا در فرانت‌اند."
            }
        },
        tools: {
            title: "ابزارها و تکنولوژی‌ها",
            description: "ابزارهایی که هر روز برای کدنویسی، نسخه‌بندی و تحویل پروژه‌ها استفاده می‌کنم.",
            items: {
                vscode: {
                    name: "Visual Studio Code",
                    role: "ویرایشگر اصلی با lint/format، دیباگ و افزونه‌های بهره‌وری برای تحویل تمیز."
                },
                github: {
                    name: "GitHub",
                    role: "میزبانی ریپوها، issue/PR و اتوماسیون CI برای حفظ نظم و هماهنگی تیم."
                },
                devtools: {
                    name: "Chrome DevTools",
                    role: "پروفایل‌گیری Performance، بررسی Network و دیباگ UI در لحظه."
                }
            }
        },
        portfolio: {
            title: "نمونه‌کارها",
            description: "چند پروژه‌ای که با تمرکز روی تجربه کاربری، سرعت و تمیزی کد توسعه داده‌ام.",
            collaborate: "برای همکاری",
            viewOnline: "مشاهده آنلاین",
            digikala: {
                title: "کلون صفحه اصلی دیجی‌کالا",
                description: "بازطراحی واکنش‌گرا از صفحه اصلی دیجی‌کالا با Bootstrap برای تمرین ساختاردهی ماژولار و چینش محتوای پیچیده."
            },
            panelModir: {
                title: "پنل مدیر",
                description: "پنل مدیریتی کامل برای مدیریت محصولات، سفارشات، کاربران و نظرات با رابط کاربری مدرن و واکنش‌گرا."
            },
            next: {
                title: "نمونه‌کار بعدی در راهه",
                description: "به‌محض آماده شدن، پروژه‌ی بعدی رو هم اینجا اضافه می‌کنم تا به‌روزترین کارهام همیشه در دسترس باشه."
            }
        },
        contact: {
            title: "راه‌های ارتباطی",
            description: "برای همکاری، گفتگو درباره پروژه‌ها یا هر سوالی که دارید، در تماس باشید.",
            email: "ایمیل",
            phone: "تلفن",
            github: "گیت‌هاب",
            copy: "کپی",
            open: "باز کردن",
            form: {
                title: "تماس با من",
                description: "برای پروژه‌های جدید یا همکاری، پیام خود را ارسال کنید.",
                name: "نام شما",
                namePlaceholder: "نام و نام خانوادگی",
                nameError: "لطفاً نام خود را وارد کنید",
                email: "ایمیل",
                emailError: "لطفاً یک ایمیل معتبر وارد کنید",
                phone: "شماره تلفن",
                phonePlaceholder: "09123456789",
                phoneError: "شماره معتبر وارد کنید (مثال: 09123456789)",
                message: "پیام",
                messagePlaceholder: "پیام خود را بنویسید",
                messageError: "لطفاً پیام خود را وارد کنید (حداقل ۱۰ کاراکتر)",
                submit: "ارسال پیام"
            }
        },
        footer: {
            copyright: "پارسا دهقانی. تمام حقوق محفوظ است.",
            backToTop: "بازگشت به بالا",
            email: "ایمیل",
            github: "گیت‌هاب"
        },
        toast: { copied: "کپی شد" }
    },
    en: {
        nav: { about: "About", skills: "Skills", tools: "Tools & Technologies", portfolio: "Portfolio", contact: "Contact" },
        hero: {
            badge: "Python Developer and Frontend Developer",
            title: "Parsa Dehghani",
            description: "Python programmer and frontend developer. Focused on building practical products with clean code and optimal user experience.",
            viewPortfolio: "Portfolio",
            contact: "Contact Me",
            profile: {
                title: "Frontend and Backend Tools Development",
                description: "Frontend development with HTML, CSS, and JavaScript, and building automation tools with Python."
            }
        },
        about: {
            title: "About Me",
            p1: "Python programmer and frontend developer specializing in HTML and CSS. Developing web projects with a focus on clean code and optimal user experience.",
            p2: "Focus on details, code quality, and effective collaboration. Every project is an opportunity to learn and build practical products.",
            p3: "This website was created to showcase projects and share development experiences.",
            beliefs: {
                title: "Work Approach",
                "1": { title: "Continuous Learning", desc: "Every project is an opportunity to discover new tools and techniques." },
                "2": { title: "Beauty in Simplicity", desc: "An effective user interface guides users to their goal." },
                "3": { title: "Meaningful Collaboration", desc: "Clear communication and constructive feedback are the foundation of effective collaboration." }
            }
        },
        skills: {
            title: "Key Skills",
            description: "A blend of client-side development and Python-powered support tools that help transform ideas into products more quickly.",
            expanding: "Expanding",
            python: {
                concept: "Abstraction",
                description: "Automation, scripting, and building backend tools to support web projects."
            },
            html: {
                concept: "Structure",
                description: "Clean and scalable page architecture for seamless user experiences."
            },
            css: {
                concept: "Presentation",
                description: "Responsive designs, subtle animations, and meticulous attention to visual details."
            },
            js: {
                concept: "Logic",
                description: "User-centered interactions and implementing dynamic behaviors in the frontend."
            }
        },
        tools: {
            title: "Tools & Technologies",
            description: "The stack I rely on daily for coding, versioning, and shipping projects.",
            items: {
                vscode: {
                    name: "Visual Studio Code",
                    role: "Primary editor with lint/format, debugging, and productivity extensions."
                },
                github: {
                    name: "GitHub",
                    role: "Repository hosting, issues/PR workflow, and CI automation to keep work aligned."
                },
                devtools: {
                    name: "Chrome DevTools",
                    role: "Live UI debugging plus performance and network profiling before shipping."
                }
            }
        },
        portfolio: {
            title: "Portfolio",
            description: "A selection of projects I've developed with a focus on user experience, performance, and clean code.",
            collaborate: "For Collaboration",
            viewOnline: "View Online",
            digikala: {
                title: "Digikala Homepage Clone",
                description: "A responsive redesign of Digikala's homepage using Bootstrap, focusing on modular structure and complex content layout."
            },
            panelModir: {
                title: "Manager Panel",
                description: "A complete admin panel for managing products, orders, users, and comments with a modern and responsive user interface."
            },
            next: {
                title: "Next Project Coming Soon",
                description: "I'll add the next project here as soon as it's ready, so my latest work is always available."
            }
        },
        contact: {
            title: "Get in Touch",
            description: "For collaboration, discussions about projects, or any questions you have, feel free to reach out.",
            email: "Email",
            phone: "Phone",
            github: "GitHub",
            copy: "Copy",
            open: "Open",
            form: {
                title: "Contact Me",
                description: "For new projects or collaboration, please send your message.",
                name: "Your Name",
                namePlaceholder: "Full Name",
                nameError: "Please enter your name",
                email: "Email",
                emailError: "Please enter a valid email address",
                phone: "Phone Number",
                phonePlaceholder: "+98 912 345 6789",
                phoneError: "Enter a valid number (e.g. +98 912 345 6789)",
                message: "Message",
                messagePlaceholder: "Write your message",
                messageError: "Please enter your message (minimum 10 characters)",
                submit: "Send Message"
            }
        },
        footer: {
            copyright: "Parsa Dehghani. All rights reserved.",
            backToTop: "Back to Top",
            email: "Email",
            github: "GitHub"
        },
        toast: { copied: "Copied" }
    }
};

// Theme and Language Management
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLang = localStorage.getItem('lang') || 'fa';

document.addEventListener('DOMContentLoaded', function () {
    // Initialize theme and language
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    // Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Navbar scroll effect and background animation - Optimized with throttling
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    
    if (navbar || body) {
        let ticking = false;
        let lastScrollY = 0;
        
        // Throttle function for better performance
        function updateOnScroll() {
            const scrollY = window.scrollY;
            
            // Navbar shadow - only update if scroll position changed significantly
            if (navbar && Math.abs(scrollY - lastScrollY) > 5) {
                if (scrollY > 10) {
                    navbar.classList.add('shadow-sm');
                    navbar.classList.add('navbar-compact');
                } else {
                    navbar.classList.remove('shadow-sm');
                    navbar.classList.remove('navbar-compact');
                }
            }
            
            // Background animation on scroll - move shapes with parallax
            if (body) {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const scrollProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
                
                // Change opacity based on scroll (more visible as you scroll)
                const baseOpacity = 0.8;
                const scrollOpacity = Math.min(baseOpacity + (scrollProgress * 0.15), 0.95);
                body.style.setProperty('--scroll-opacity', scrollOpacity.toString());
                
                // Move shapes with parallax effect - reduced movement for better performance
                const scrollOffsetX1 = scrollProgress * 200;
                const scrollOffsetY1 = scrollProgress * -160;
                const scrollOffsetX2 = scrollProgress * -220;
                const scrollOffsetY2 = scrollProgress * 180;
                
                body.style.setProperty('--scroll-offset-x1', `${scrollOffsetX1}px`);
                body.style.setProperty('--scroll-offset-y1', `${scrollOffsetY1}px`);
                body.style.setProperty('--scroll-offset-x2', `${scrollOffsetX2}px`);
                body.style.setProperty('--scroll-offset-y2', `${scrollOffsetY2}px`);
            }
            
            lastScrollY = scrollY;
            ticking = false;
        }
        
        // Use requestAnimationFrame for smooth scrolling
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        }, { passive: true });
        
        // Initial call
        updateOnScroll();
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections except hero (which should be visible immediately)
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Hero section should be visible immediately
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.classList.add('visible');
    }

    // Skills cards intersection observer - more precise timing
    const skillsObserverOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, we can stop observing
                skillsObserver.unobserve(entry.target);
            }
        });
    }, skillsObserverOptions);

    // Observe skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        skillsObserver.observe(card);
    });

    // Tools cards intersection observer
    const toolsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                toolsObserver.unobserve(entry.target);
            }
        });
    }, skillsObserverOptions);

    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        toolsObserver.observe(card);
    });

    // Portfolio items intersection observer
    const portfolioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                portfolioObserver.unobserve(entry.target);
            }
        });
    }, skillsObserverOptions);

    // Observe portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        portfolioObserver.observe(item);
    });

    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    if (contactForm) {
        [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
            if (input) {
                input.addEventListener('blur', () => validateField(input));
                input.addEventListener('input', () => {
                    if (input.classList.contains('is-invalid')) {
                        validateField(input);
                    }
                });
            }
        });

        function isValidPhone(value) {
            if (!value) return true;

            if (!/^[\d\s+\-()]+$/.test(value)) return false;

            const digits = value.replace(/\D/g, '');

            if (digits.length < 10 || digits.length > 15) return false;

            if (/^09\d{9}$/.test(digits)) return true;
            if (/^989\d{9}$/.test(digits)) return true;
            if (/^00989\d{9}$/.test(digits)) return true;
            if (/^0[1-9]\d{9,10}$/.test(digits)) return true;
            if (/^[1-9]\d{9,14}$/.test(digits)) return true;

            return false;
        }

        function validateField(field) {
            const value = field.value.trim();
            let isValid = true;

            if (field === nameInput) {
                isValid = value.length >= 2;
            } else if (field === emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value);
            } else if (field === phoneInput) {
                isValid = isValidPhone(value);
            } else if (field === messageInput) {
                isValid = value.length >= 10;
            }

            if (isValid) {
                field.classList.remove('is-invalid');
                if (value) field.classList.add('is-valid');
                else field.classList.remove('is-valid');
            } else {
                field.classList.remove('is-valid');
                field.classList.add('is-invalid');
            }

            return isValid;
        }

        const SCRIPT_URL =
            "https://script.google.com/macros/s/AKfycbz3loXmGLWjeHENuc0wA2eFP-DdFTTOc6GZBJd5P67nJp09r2EikZbedDkfl0RORgQ/exec";

        contactForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const fields = [
                nameInput,
                emailInput,
                phoneInput,
                messageInput
            ];

            let isFormValid = true;

            fields.forEach(field => {
                if (!validateField(field)) {
                    isFormValid = false;
                }
            });

            if (!isFormValid) {
                return;
            }

            const submitBtn =
                contactForm.querySelector('button[type="submit"]');

            const originalText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = "در حال ارسال...";

            try {

                const formData = new FormData();
            
                formData.append("name", nameInput.value.trim());
                formData.append("email", emailInput.value.trim());
                formData.append("phone", phoneInput.value.trim());
                formData.append("message", messageInput.value.trim());
            
                const response = await fetch(
                    SCRIPT_URL,
                    {
                        method: "POST",
                        body: formData
                    }
                );

                const result = await response.json();

                if (result.success) {
                    alert("پیام با موفقیت ارسال شد");

                    contactForm.reset();

                    fields.forEach(field => {
                        field.classList.remove(
                            "is-valid",
                            "is-invalid"
                        );
                    });
                } else {
                    alert("خطا در ذخیره اطلاعات");
                }
            } catch (error) {
                console.error(error);
                alert(
                    "خطا در ارتباط با سرور. اتصال اینترنت را بررسی کنید."
                );
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // Copy to clipboard
    const toast = document.getElementById('copyToast');
    const toastText = document.getElementById('copyToastText');
    let toastTimeout;

    function showToast(message) {
        if (!toast) return;
        if (toastText) {
            toastText.textContent = message;
        }
        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2600);
    }

    function copyToClipboard(value, message) {
        if (!value) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value).then(() => {
                showToast(message || translations[currentLang].toast.copied + ': ' + value);
            }).catch(() => {
                fallbackCopy(value, message);
            });
        } else {
            fallbackCopy(value, message);
        }
    }

    function fallbackCopy(value, message) {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast(message || translations[currentLang].toast.copied + ': ' + value);
        } catch (error) {
            showToast(currentLang === 'fa' ? 'برای کپی روی متن راست‌کلیک کنید.' : 'Right-click to copy.');
        }
        document.body.removeChild(textarea);
    }

    document.querySelectorAll('.contact-item[data-copy]').forEach((item) => {
        item.addEventListener('click', () => {
            const value = item.getAttribute('data-copy');
            const labelKey = item.getAttribute('data-i18n-label') || 'contact.email';
            const label = getNestedTranslation(labelKey);
            const message = currentLang === 'fa' 
                ? `${label} کپی شد: ${value}`
                : `${label} copied: ${value}`;
            copyToClipboard(value, message);
        });
    });

    document.querySelectorAll('.contact-pop').forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-contact');
            const message = currentLang === 'fa' 
                ? `ایمیل من کپی شد: ${value}`
                : `My email copied: ${value}`;
            copyToClipboard(value, message);
        });
    });

    // Theme toggle
    // Theme toggle with checkbox
    const themeControllers = document.querySelectorAll('.theme-controller');
    themeControllers.forEach(controller => {
        // Set initial state
        controller.checked = currentTheme === 'dark';
        
        controller.addEventListener('change', (e) => {
            currentTheme = e.target.checked ? 'dark' : 'light';
            applyTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
            
            // Sync all checkboxes
            themeControllers.forEach(cb => {
                cb.checked = currentTheme === 'dark';
            });
        });
    });

    // Language toggle
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fa' ? 'en' : 'fa';
            applyLanguage(currentLang);
            localStorage.setItem('lang', currentLang);
        });
    }

    // Hamburger Menu Functionality
    const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn');
    const hamburgerCloseBtn = document.getElementById('hamburgerCloseBtn');
    const hamburgerMenuOverlay = document.getElementById('hamburgerMenuOverlay');
    const hamburgerNavLinks = document.querySelectorAll('.hamburger-nav-link');

    function openHamburgerMenu() {
        if (hamburgerMenuOverlay && hamburgerMenuBtn) {
            hamburgerMenuOverlay.style.display = 'block';
            // Force reflow
            hamburgerMenuOverlay.offsetHeight;
            hamburgerMenuOverlay.classList.add('active');
            hamburgerMenuBtn.classList.add('active');
            body.style.overflow = 'hidden';
        }
    }

    function closeHamburgerMenu() {
        if (hamburgerMenuOverlay && hamburgerMenuBtn) {
            hamburgerMenuOverlay.classList.remove('active');
            hamburgerMenuBtn.classList.remove('active');
            body.style.overflow = '';
            // Hide after transition
            setTimeout(() => {
                if (!hamburgerMenuOverlay.classList.contains('active')) {
                    hamburgerMenuOverlay.style.display = 'none';
                }
            }, 300);
        }
    }

    // Open menu
    if (hamburgerMenuBtn) {
        hamburgerMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openHamburgerMenu();
        });
    }

    // Close menu
    if (hamburgerCloseBtn) {
        hamburgerCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeHamburgerMenu();
        });
    }

    // Close menu when clicking overlay
    if (hamburgerMenuOverlay) {
        hamburgerMenuOverlay.addEventListener('click', (e) => {
            if (e.target === hamburgerMenuOverlay) {
                closeHamburgerMenu();
            }
        });
    }

    // Close menu when clicking nav links
    hamburgerNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeHamburgerMenu();
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburgerMenuOverlay && hamburgerMenuOverlay.classList.contains('active')) {
            closeHamburgerMenu();
        }
    });

    // Update hamburger menu theme toggles
    const hamburgerLangToggle = hamburgerMenuOverlay ? hamburgerMenuOverlay.querySelector('.lang-toggle') : null;
    
    // Hamburger theme toggle is already handled by theme-controller selector above

    if (hamburgerLangToggle) {
        hamburgerLangToggle.addEventListener('click', () => {
            currentLang = currentLang === 'fa' ? 'en' : 'fa';
            applyLanguage(currentLang);
            localStorage.setItem('lang', currentLang);
        });
    }

    // Handle window resize - close menu on desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 767.98 && hamburgerMenuOverlay && hamburgerMenuOverlay.classList.contains('active')) {
                closeHamburgerMenu();
            }
        }, 250);
    });
});

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Update all checkboxes
    const themeControllers = document.querySelectorAll('.theme-controller');
    themeControllers.forEach(controller => {
        controller.checked = theme === 'dark';
    });
}

function applyLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const text = getNestedTranslation(key);
        if (text) {
            el.textContent = text;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = getNestedTranslation(key);
        if (text) {
            el.placeholder = text;
        }
    });

    // Update labels for contact items
    document.querySelectorAll('[data-i18n-label]').forEach((el) => {
        const key = el.getAttribute('data-i18n-label');
        const text = getNestedTranslation(key);
        if (text && el.hasAttribute('data-label')) {
            el.setAttribute('data-label', text);
        }
    });
}

function getNestedTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

// Particle Network Animation
(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };
    let mouseLastMove = 0;
    let animationId;
    const mouseActiveMs = 120;

    function clearMouseTarget() {
        mouse.x = null;
        mouse.y = null;
    }

    function isMouseActive() {
        return mouse.x !== null && (performance.now() - mouseLastMove) < mouseActiveMs;
    }
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2.5 + 1.5;
            this.opacity = Math.random() * 0.6 + 0.4;
            this.baseOpacity = this.opacity;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Keep particles in bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));
            
            // Mouse interaction — only while cursor is actively moving
            if (isMouseActive()) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle) * force * 0.02;
                    this.vy += Math.sin(angle) * force * 0.02;
                    this.opacity = Math.min(1, this.opacity + force * 0.1);
                } else {
                    this.opacity = Math.max(this.baseOpacity, this.opacity - 0.01);
                }
            } else {
                this.opacity += (this.baseOpacity - this.opacity) * 0.05;
            }
            
            // Limit velocity
            const maxSpeed = 1;
            const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (speed > maxSpeed) {
                this.vx = (this.vx / speed) * maxSpeed;
                this.vy = (this.vy / speed) * maxSpeed;
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = getParticleColor();
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    
    // Get particle color based on theme
    function getParticleColor() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return isDark ? 'rgba(76, 201, 240, 1)' : 'rgba(108, 92, 231, 1)';
    }
    
    function getLineColor() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        return isDark ? 'rgba(76, 201, 240, 0.5)' : 'rgba(108, 92, 231, 0.5)';
    }
    
    // Initialize particles
    function initParticles() {
        particles = [];
        // Increase particle count for more density
        const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    initParticles();
    
    // Draw connections
    function drawConnections() {
        const maxDistance = 180;
        const lineColor = getLineColor();
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = lineColor;
                    ctx.globalAlpha = opacity;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Mouse tracking — influence only during movement, not when cursor is idle
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouseLastMove = performance.now();
    });
    
    document.addEventListener('mouseleave', clearMouseTarget);
    window.addEventListener('blur', clearMouseTarget);
    
    // Start animation
    animate();
    
    // Reinitialize on theme change
    const observer = new MutationObserver(() => {
        initParticles();
    });
    
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
    
    // Reinitialize on resize
    window.addEventListener('resize', () => {
        initParticles();
    });
})();

// ============================================
// SECURITY MEASURES - Source Code Protection
// ============================================

// Disable right-click context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Disable text selection (with exceptions for form inputs)
document.addEventListener('selectstart', (e) => {
    // Allow selection in form inputs and textareas
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return true;
    }
    e.preventDefault();
    return false;
});

// Disable drag and drop
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

// Disable keyboard shortcuts for saving/viewing source
document.addEventListener('keydown', (e) => {
    // Disable Ctrl+S (Save)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
    
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+C (Element Inspector)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+K (Console in Firefox)
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+P (Print - can save as PDF)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
    }
});

// Disable print screen (limited effectiveness, but helps)
document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshot disabled');
    }
});

// Blur content when tab is not active (prevents screenshot tools)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.filter = 'blur(10px)';
        document.body.style.userSelect = 'none';
    } else {
        document.body.style.filter = 'none';
    }
});

// Disable copy to clipboard
document.addEventListener('copy', (e) => {
    // Allow copying from form inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return true;
    }
    e.clipboardData.setData('text/plain', '');
    e.preventDefault();
    return false;
});

// Disable cut
document.addEventListener('cut', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return true;
    }
    e.preventDefault();
    return false;
});

// Prevent image saving via right-click or drag
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });
    
    img.style.pointerEvents = 'none';
    img.style.userSelect = 'none';
    img.style.webkitUserSelect = 'none';
});

// Add watermark protection
(function() {
    const style = document.createElement('style');
    style.textContent = `
        body::after {
            content: 'Protected Content';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 4rem;
            color: rgba(0, 0, 0, 0.03);
            pointer-events: none;
            z-index: 9999;
            font-weight: bold;
            white-space: nowrap;
            user-select: none;
            -webkit-user-select: none;
        }
        
        @media (prefers-color-scheme: dark) {
            body::after {
                color: rgba(255, 255, 255, 0.03);
            }
        }
    `;
    document.head.appendChild(style);
})();

// Detect and prevent Developer Tools
(function() {
    const devtools = {
        open: false,
        orientation: null
    };
    
    const threshold = 160;
    
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                document.body.innerHTML = '<h1 style="text-align:center;padding:50px;color:red;">Developer Tools Detected!</h1>';
                console.clear();
            }
        } else {
            devtools.open = false;
        }
    }, 500);
})();

// Clear console periodically
(function() {
    setInterval(() => {
        console.clear();
    }, 1000);
})();
