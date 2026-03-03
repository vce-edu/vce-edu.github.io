document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-glow');
    const interactiveElements = document.querySelectorAll('a, button, .track-card, input');

    // Restore default cursor and make glow a background effect
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            // Background Parallax based on mouse (only if exists)
            const mesh = document.querySelector('.mesh-gradient');
            if (mesh) {
                const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
                const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
                mesh.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll Progress
    const progressBar = document.querySelector('.scroll-progress');
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Progress
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + "%";

        // Navbar scrolled state & Mobile transform
        if (navbar) {
            // Background & Padding state
            if (scrollTop > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Mobile specific scroll transformation (ONLY ON HOME PAGE)
            const isHomePage = document.querySelector('.hero');
            if (isHomePage && window.innerWidth <= 768) {
                if (scrollTop > lastScrollTop && scrollTop > 50) {
                    // Scrolling Down
                    navbar.style.transform = 'translateY(20px)';
                } else {
                    // Scrolling Up
                    navbar.style.transform = 'translateY(0)';
                }
            } else {
                // Reset transform for desktop or other pages
                navbar.style.transform = 'translateY(0)';
            }
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Reveal Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .brand-tagline').forEach(el => observer.observe(el));

    // Magnetic Buttons (Fixed for UX - less aggressive)
    const magneticBtns = document.querySelectorAll('.btn-ripple, .btn-outline, .logo');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) { // Only on desktop
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            }
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // 3D Tilt Effect for Cards (Disabled on mobile for UX)
    const cards = document.querySelectorAll('.track-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
        });
    });

    // Stats Counter
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const startCounting = () => {
        if (animated) return;
        animated = true;
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            let count = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    stat.innerText = Math.ceil(count) + (target === 98 ? '%' : '+');
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target + (target === 98 ? '%' : '+');
                }
            };
            updateCount();
        });
    };

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startCounting();
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }
    // Split-Text Animations for Headlines (Fixed to prevent mid-word wrapping)
    const splitHeadlines = document.querySelectorAll('.bg-gradient-text');
    splitHeadlines.forEach(headline => {
        const words = headline.innerText.split(' ');
        headline.innerHTML = '';
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.whiteSpace = 'nowrap';

            word.split('').forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.innerText = char;
                charSpan.style.display = 'inline-block';
                charSpan.style.opacity = '0';
                charSpan.style.transform = 'translateY(20px)';
                charSpan.style.transition = `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${(wordIndex * 5 + charIndex) * 0.02}s`;
                wordSpan.appendChild(charSpan);
            });

            headline.appendChild(wordSpan);
            if (wordIndex < words.length - 1) {
                headline.appendChild(document.createTextNode(' '));
            }
        });
    });

    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('span').forEach(span => {
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                });
            }
        });
    }, { threshold: 0.5 });

    splitHeadlines.forEach(h => textObserver.observe(h));

    // Refined Cursor Click Feedback
    document.addEventListener('mousedown', () => {
        if (cursor) {
            cursor.style.width = '250px';
            cursor.style.height = '250px';
            cursor.style.background = 'radial-gradient(circle, rgba(106, 0, 122, 0.15) 0%, transparent 70%)';
        }
    });

    document.addEventListener('mouseup', () => {
        if (cursor) {
            cursor.style.width = '400px';
            cursor.style.height = '400px';
            cursor.style.background = 'radial-gradient(circle, rgba(106, 0, 122, 0.06) 0%, transparent 70%)';
        }
    });

    // Floating Scholarship Banner
    const scholarshipFloat = document.getElementById('scholarshipFloat');
    const scholarshipClose = document.getElementById('scholarshipClose');

    if (scholarshipFloat && scholarshipClose) {
        // Show banner with animation after 2 seconds
        setTimeout(() => {
            scholarshipFloat.classList.add('show');
        }, 2000);

        // Close button functionality
        scholarshipClose.addEventListener('click', () => {
            scholarshipFloat.classList.remove('show');
            scholarshipFloat.classList.add('hide');

            // Remove from DOM after animation
            setTimeout(() => {
                scholarshipFloat.style.display = 'none';
            }, 400);
        });
    }

    // Course Filtering (for courses.html)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    if (filterBtns.length > 0 && courseCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const category = btn.getAttribute('data-category');

                // Filter courses
                courseCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // --- Course Modal Logic ---
    const courseModal = document.getElementById('courseModal');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

    const courseData = {
        'adca': {
            title: 'ADCA',
            subtitle: 'Advance Diploma in Computer Application',
            badge: 'Most Popular',
            feeStructure: [
                { duration: '14 Months', total: '₹8,400', monthly: '₹600/mon' },
                { duration: '7 Months', total: '₹7,000', monthly: '₹1,000/mon' },
                { duration: '4 Months', total: '₹8,800', monthly: '₹2,200/mon' }
            ],
            description: 'The Advance Diploma in Computer Application (ADCA) is a comprehensive program designed to provide students with a deep understanding of computer applications. It covers everything from essential office productivity tools to advanced accountancy and professional graphic design, ensuring students are industry-ready.',
            syllabus: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Tally 9', 'Tally Prime', 'Photoshop', 'CorelDraw', 'LibreOffice', 'Typing (Hindi + English)', 'Python (Optional)', 'Busy (Optional)'],
            benefits: 'Any one optional as per your choice. Get certified for diverse administrative and technical roles.'
        },
        'mdca': {
            title: 'MDCA',
            badge: 'Master',
            subtitle: 'Master Diploma in Computer Application',
            feeStructure: [
                { duration: '14 Months', total: '₹15,400', monthly: '₹1,100/mon' },
                { duration: '7 Months', total: '₹15,000', monthly: '₹2,200/mon' }
            ],
            description: 'Master Diploma in Computer Application (MDCA) is our flagship premium program. It integrates advanced modules in accounting, e-commerce, and software development. Eligible students also benefit from our exclusive free laptop distribution scheme to support their learning journey.',
            syllabus: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Tally 9', 'Tally Prime', 'Photoshop', 'CorelDraw', 'LibreOffice', 'Typing (Hindi + English)', 'Busy', 'Marg', 'E-Commerce', 'Coding'],
            benefits: 'Includes a free laptop scheme and intensive placement assistance.'
        },
        'olevel': {
            title: 'O Level',
            subtitle: 'Ordinary Level - NIELIT Certification',
            badge: 'Government Certified',
            feeStructure: [
                { duration: '12 Months', total: '₹21,000', monthly: 'without Laptop' },
                { duration: '7 Months', total: '₹25,000', monthly: 'with Laptop' }
            ],
            description: 'The NIELIT "O" Level course is a prestigious foundation-level IT program recognized by the Government of India. It prepares students for state and central government jobs by providing deep knowledge in IT tools, network basics, web publishing, Python, and IoT.',
            syllabus: ['M1-R5: IT Tools and Network Basics', 'M2-R5: Web Designing & Publishing', 'M3-R5: Programming through Python', 'M4-R5: Internet of Things (IoT)', 'PR1-R5: Practical (M1-M4)', 'PJ1-R5: Project'],
            benefits: 'Government-recognized certification valid for state and central government jobs.'
        },
        'webdesign': {
            title: 'Web Designing',
            badge: 'Skill Development',
            subtitle: 'Frontend Development (HTML, CSS, JavaScript)',
            feeStructure: [
                { duration: '12 Months', total: '₹13,800', monthly: '₹1,150/mon' }
            ],
            description: 'Master the art of creating stunning, responsive websites using modern frontend technologies. This course covers everything from semantic HTML and advanced CSS layouts to JavaScript interactivity and modern design tools like Figma.',
            syllabus: ['HTML5 & Semantic Web', 'CSS3 Layouts', 'JavaScript Essentials', 'Java Basics', 'Web Fundamentals', 'Figma Design', 'Publishing & Deployment'],
            benefits: 'Build a professional portfolio while learning latest frontend trends.'
        },
        'fullstack': {
            title: 'Full Stack Development',
            subtitle: 'Complete Web Development Bootcamp',
            badge: 'High Demand',
            feeStructure: [
                { duration: '6 Months', total: '₹13,200', monthly: '₹2,200/mon' }
            ],
            description: 'Our Intensive Full Stack Development bootcamp is designed for aspiring software engineers. It covers the entire MERN stack, including MongoDB, Express.js, React, and Node.js, along with TypeScript, Tailwind CSS, and Git for modern software production.',
            syllabus: ['HTML & CSS + Tailwind', 'JavaScript + TypeScript', 'Figma Design', 'Git + Github', 'Node.js Backend', 'MERN Stack', 'DBMS (SQL/NoSQL)', 'Angular.js Basics', 'Vue.js Basics'],
            benefits: 'Fast-track your career into high-paying software engineering roles.'
        },
        'aidev': {
            title: 'AI Development',
            subtitle: 'Artificial Intelligence Development',
            badge: 'Future Tech',
            feeStructure: [
                { duration: '10 Months', total: '₹30,000', monthly: '₹3,000/mon' }
            ],
            description: 'Explore the frontiers of technology with our AI Development course. Learn to build intelligent systems, work with large datasets, and implement machine learning algorithms using industry-standard Python libraries like NumPy and Scikit-Learn.',
            syllabus: ['Intro to AI', 'Intro to Machine Learning', 'Python (Numpy, SckitLearn)', 'Building Basic Models', 'Models Integration', 'Practical AI Implementation'],
            benefits: 'Learn to build the technologies of tomorrow, today.'
        },
        'ccc': {
            title: 'CCC',
            subtitle: 'Course On Computer Concepts',
            badge: 'Certification',
            feeStructure: [
                { duration: '3 Months', total: '₹3,000', monthly: '₹1,000/mon' }
            ],
            description: 'The CCC course is designed to provide essential IT literacy. It is a mandatory requirement for many government job applications in India and covers basic office tools, internet security, and digital financial services.',
            syllabus: ['Libre Writer', 'Libre Calc', 'Libre Impress', 'Computer Fundamentals', 'Internet', 'Digital Financial Services', 'Communication and Collaboration', 'GUI based Operating Systems'],
            benefits: 'Essential for various government job applications and basic literacy.'
        },
        'dcst': {
            title: 'DCST',
            subtitle: 'Diploma in Computer Software',
            badge: 'Diploma',
            feeStructure: [
                { duration: '6 Months', total: '₹3,000', monthly: '₹500/mon' }
            ],
            description: 'Diploma in Computer Software focuses on practical training for essential business software. It provides deep knowledge in MS Office, Tally 9, and professional keyboard skills to prepare students for diverse administrative roles.',
            syllabus: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Tally 9', 'Typing (English)', 'Computer Fundamentals', 'Internet', 'GUI based Operating System'],
            benefits: 'Cost-effective diploma for comprehensive software knowledge.'
        },
        'cca': {
            title: 'CCA',
            subtitle: 'Certificate in Computer Awareness',
            badge: 'Quick Cert',
            feeStructure: [
                { duration: '3 Months', total: '₹3,000', monthly: '₹1,000/mon' }
            ],
            description: 'The Certificate in Computer Awareness is a short-term intensive course for beginners. It builds immediate digital literacy by focusing on Windows operating systems, MS Office basics, and essential creative tools like Paint and Notepad.',
            syllabus: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Notepad', 'Paint', 'Windows (8, 10, 11)'],
            benefits: 'Perfect for housewives, seniors, or students needing a quick start.'
        },
        'dca-adcst': {
            title: 'DCA+ADCST',
            subtitle: 'Computer Application + Advance Software',
            badge: 'Fast Track',
            feeStructure: [
                { duration: '4 Months', total: '₹6,000', monthly: '₹1,500/mon' }
            ],
            description: 'A specialized dual-certification fast-track program. It combines core computer applications with advanced software training, including Tally Prime and graphic design, delivered in an accelerated timeframe.',
            syllabus: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Tally Prime', 'Photoshop', 'CorelDraw', 'Typing (Hindi + English)', 'Busy (Optional)'],
            benefits: 'Two certifications in just 4 months at a bundled price.'
        },
        'languages': {
            title: 'Computer Languages',
            subtitle: 'Advance Diploma in Languages',
            badge: 'Programming',
            feeStructure: [
                { duration: '6 Months', total: '₹6,000', monthly: '₹1,000/mon' }
            ],
            description: 'Deep dive into the core logic of programming. This course covers industry-standard languages like C and C++ (including Data Structures and OOP), Python for data analysis, and Java fundamentals for software development.',
            syllabus: ['C (with Stack and Queue)', 'C++ (with OOP)', 'Python (with Numpy)', 'Java Fundamentals'],
            benefits: 'Affordable entry into the world of professional programming basics.'
        },
        'dcst-adcst': {
            title: 'DCST+ADCST',
            subtitle: 'Computer Application + Advance Software',
            badge: 'Comprehensive',
            feeStructure: [
                { duration: '10 Months', total: '₹5,500', monthly: '₹550/mon' }
            ],
            description: 'Our most comprehensive combined diploma program. It covers the entire spectrum of modern computer software and applications, from accounting with Tally Prime to creative design with Photoshop, and essential IT fundamentals.',
            syllabus: ['MS Word', 'MS Excel', 'MS PowerPoint', 'Tally 9', 'Tally Prime', 'Photoshop', 'Typing (Hindi + English)', 'Computer Fundamentals', 'Internet', 'GUI Based OS'],
            benefits: 'Total mastery of software applications for professional roles.'
        }
    };

    const openModal = (courseKey) => {
        const data = courseData[courseKey];
        if (!data) return;

        modalContent.innerHTML = `
            <div class="modal-header">
                <span class="modal-badge">${data.badge}</span>
                <h2>${data.title}</h2>
                <p class="course-subtitle">${data.subtitle}</p>
            </div>
            <div class="modal-body">
                <div class="modal-body-content">
                    <div class="modal-main">
                        <h3>About the Course</h3>
                        <p>${data.description}</p>
                        <h3>Syllabus</h3>
                        <ul class="syllabus-list">
                            ${data.syllabus.map(item => `<li><span class="syllabus-icon">✦</span> ${item}</li>`).join('')}
                        </ul>
                        <h3>Career Benefits</h3>
                        <p>${data.benefits}</p>
                    </div>
                    <div class="modal-sidebar">
                        ${data.feeStructure ? `
                            <div class="sidebar-item">
                                <label>Fees Structure</label>
                                <div class="fee-list">
                                    ${data.feeStructure.map(fee => `
                                        <div class="fee-option">
                                            <span class="fee-duration">${fee.duration}</span>
                                            <div class="fee-details">
                                                <span class="fee-total">${fee.total}</span>
                                                <small class="fee-monthly">(${fee.monthly})</small>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : `
                            <div class="sidebar-item">
                                <label>Duration</label>
                                <span>${data.duration}</span>
                            </div>
                            <div class="sidebar-item">
                                <label>Course Fee</label>
                                <span>${data.fee}</span>
                            </div>
                        `}
                        <div class="sidebar-item">
                            <label>Certification</label>
                            <span>Included</span>
                        </div>
                        <div class="sidebar-item">
                            <label>Experience Required</label>
                            <span>Beginner Friendly</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="#enroll" class="btn-ripple" onclick="(function(){document.getElementById('courseModal').classList.remove('active'); document.body.classList.remove('modal-open');})()">Enroll in this Course</a>
            </div>
        `;

        courseModal.classList.add('active');
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        courseModal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };

    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const courseKey = btn.getAttribute('data-course');
            openModal(courseKey);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && courseModal.classList.contains('active')) {
            closeModal();
        }
    });

});
