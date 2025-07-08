// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');

// Slider Variables
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let autoSlideInterval;

// Gallery Comparison Variables
let currentComparisonIndex = 1;
let serviceComparisons = [];
let serviceDots = [];
let totalComparisons = 0;
let autoComparisonInterval;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializeNavbar();
    initializeFAQ();
    initializeGallery();
    initializeComparisonSlider();
    initializeScrollEffects();
    initializeContactForm();
    initializeSmoothScrolling();
});

// Slider Functions
function initializeSlider() {
    if (slides.length === 0) return;
    
    // Start auto slide
    startAutoSlide();
    
    // Initialize first slide
    showSlide(0);
    
    // Initialize touch controls for mobile
    initializeTouchControls();
}

// Touch controls for mobile slider
function initializeTouchControls() {
    const heroSlider = document.querySelector('.hero-slider');
    if (!heroSlider) return;
    
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    let isScrolling = false;
    
    // Touch start
    heroSlider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isScrolling = false;
        
        // Stop auto slide when user touches
        stopAutoSlide();
    }, { passive: true });
    
    // Touch move - determine if user is scrolling vertically
    heroSlider.addEventListener('touchmove', function(e) {
        if (!startX || !startY) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);
        
        // If vertical movement is greater than horizontal, user is scrolling
        if (diffY > diffX) {
            isScrolling = true;
        }
        
        // If horizontal swipe is detected and not scrolling, prevent default
        if (diffX > diffY && diffX > 10) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Touch end - handle swipe
    heroSlider.addEventListener('touchend', function(e) {
        if (!startX || !startY || isScrolling) {
            restartAutoSlide();
            return;
        }
        
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = Math.abs(startY - endY);
        const minSwipeDistance = 50;
        
        // Only trigger swipe if horizontal movement is greater than vertical
        if (Math.abs(diffX) > diffY && Math.abs(diffX) > minSwipeDistance) {
            if (diffX > 0) {
                // Swiped left - go to next slide (right direction)
                changeSlide(1);
            } else {
                // Swiped right - go to previous slide (left direction)
                changeSlide(-1);
            }
        }
        
        // Reset values
        startX = 0;
        startY = 0;
        endX = 0;
        endY = 0;
        
        // Restart auto slide after touch interaction
        restartAutoSlide();
    }, { passive: true });
}

function startAutoSlide() {
    // Clear any existing interval
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
    // Auto slide every 5 seconds
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

function restartAutoSlide() {
    stopAutoSlide();
    // Restart after 3 seconds of inactivity
    setTimeout(startAutoSlide, 3000);
}

function showSlide(n) {
    console.log('showSlide called with n:', n, 'currentSlideIndex:', currentSlideIndex);
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle slide wrapping
    if (n >= totalSlides) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = totalSlides - 1;
    
    console.log('After wrapping - currentSlideIndex:', currentSlideIndex, 'totalSlides:', totalSlides);
    
    // Show current slide and dot
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
        console.log('Activated slide:', currentSlideIndex);
    }
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
        console.log('Activated dot:', currentSlideIndex);
    }
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

function changeSlide(direction) {
    console.log('changeSlide called with direction:', direction);
    
    // Stop auto slide temporarily
    restartAutoSlide();
    
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    console.log('currentSlide called with n:', n);
    
    // Stop auto slide temporarily
    restartAutoSlide();
    
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
}

// Navigation Functions
function initializeNavbar() {
    const navOverlay = document.getElementById('nav-overlay');
    const navClose = document.getElementById('nav-close');
    const body = document.body;
    
    // Open menu function
    function openMenu() {
        if (navToggle && navMenu) {
            navToggle.classList.add('active');
            navMenu.classList.add('active');
            if (navOverlay) navOverlay.classList.add('active');
            
            // Prevent background scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            
            // Hide fixed action buttons
            const fixedButtons = document.querySelector('.fixed-buttons');
            if (fixedButtons) {
                fixedButtons.style.opacity = '0';
                fixedButtons.style.visibility = 'hidden';
                fixedButtons.style.transform = 'translateY(20px)';
            }
        }
    }
    
    // Close menu function
    function closeMenu() {
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
            
            // Restore background scroll
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            
            // Show fixed action buttons
            const fixedButtons = document.querySelector('.fixed-buttons');
            if (fixedButtons) {
                fixedButtons.style.opacity = '';
                fixedButtons.style.visibility = '';
                fixedButtons.style.transform = '';
            }
        }
    }
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    
    // Close button
    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }
    
    // Overlay click to close
    if (navOverlay) {
        navOverlay.addEventListener('click', (e) => {
            if (e.target === navOverlay) {
                closeMenu();
            }
        });
        
        // Touch events for mobile
        navOverlay.addEventListener('touchstart', (e) => {
            if (e.target === navOverlay) {
                e.preventDefault();
                closeMenu();
            }
        });
    }
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Close mobile menu when clicking outside navbar
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
            // Check if click is outside navbar area
            const navbar = document.querySelector('.navbar');
            const isClickInside = navbar && navbar.contains(e.target);
            const isToggleButton = navToggle && navToggle.contains(e.target);
            
            if (!isClickInside && !isToggleButton) {
                closeMenu();
            }
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // For mobile, prevent default and handle scroll after menu closes
            if (window.innerWidth <= 768 && link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                closeMenu();
                
                // Wait for menu close animation to complete before scrolling
                setTimeout(() => {
                    const target = document.querySelector(link.getAttribute('href'));
                    if (target) {
                        const navbar = document.querySelector('.navbar');
                        let navbarHeight = 80;
                        let extraOffset = 20; // Default extra padding
                        
                        if (navbar) {
                            navbarHeight = navbar.offsetHeight;
                        }
                        
                        // Special handling for about section in mobile
                        if (link.getAttribute('href') === '#about') {
                            // Find the section header within about section for better positioning
                            const aboutHeader = target.querySelector('.section-header h2');
                            if (aboutHeader) {
                                // Calculate position to show "Hakkımızda" title at the top
                                const headerPosition = aboutHeader.getBoundingClientRect().top + window.pageYOffset;
                                window.scrollTo({
                                    top: Math.max(0, headerPosition - navbarHeight - 10),
                                    behavior: 'smooth'
                                });
                                return;
                            } else {
                                // Fallback: minimal offset to show section title at top
                                extraOffset = 10;
                            }
                        }
                        
                        const offsetTop = target.offsetTop - navbarHeight - extraOffset;
                        
                        window.scrollTo({
                            top: Math.max(0, offsetTop),
                            behavior: 'smooth'
                        });
                    }
                }, 300); // Wait for menu close animation
            } else {
                closeMenu();
            }
            
            // Update active nav link with smooth transition
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Handle resize to close menu on desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
}

function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// FAQ Functions
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Gallery Functions
function initializeGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Initialize Service Comparison
    initializeServiceComparison();
}

// Gallery Comparison Slider Functions
function initializeComparisonSlider() {
    // Re-select elements after DOM is loaded
    serviceComparisons = document.querySelectorAll('.service-comparison');
    serviceDots = document.querySelectorAll('.service-dot');
    totalComparisons = serviceComparisons.length;
    
    console.log('Initializing comparison slider...');
    console.log('Found comparisons:', serviceComparisons.length);
    console.log('Found dots:', serviceDots.length);
    
    if (serviceComparisons.length === 0) return;
    
    // Start auto comparison slide
    startAutoComparison();
    
    // Initialize first comparison
    showComparison(1);
    
    // Add click and touch support for dots
    serviceDots.forEach((dot, index) => {
        console.log('Setting up dot', index + 1, 'with data-index:', dot.getAttribute('data-index'));
        
        // Click events for desktop and mobile
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetIndex = parseInt(dot.getAttribute('data-index')) || (index + 1);
            console.log('Dot clicked! Index:', index + 1, 'Target:', targetIndex);
            currentComparison(targetIndex);
        });
        
        // Touch events for mobile (additional support)
        dot.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetIndex = parseInt(dot.getAttribute('data-index')) || (index + 1);
            console.log('Dot touched! Index:', index + 1, 'Target:', targetIndex);
            currentComparison(targetIndex);
        });
    });
    
    // Add swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const comparisonContainer = document.querySelector('.service-comparison-container');
    if (comparisonContainer) {
        comparisonContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        comparisonContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next
                changeComparison(1);
            } else {
                // Swipe right - previous
                changeComparison(-1);
            }
        }
    }
}

function startAutoComparison() {
    // Clear any existing interval
    if (autoComparisonInterval) {
        clearInterval(autoComparisonInterval);
    }
    // Auto slide every 4 seconds
    autoComparisonInterval = setInterval(() => {
        changeComparison(1);
    }, 4000);
}

function stopAutoComparison() {
    if (autoComparisonInterval) {
        clearInterval(autoComparisonInterval);
        autoComparisonInterval = null;
    }
}

function restartAutoComparison() {
    stopAutoComparison();
    // Restart after 3 seconds of inactivity
    setTimeout(startAutoComparison, 3000);
}

function showComparison(n) {
    console.log('showComparison called with n:', n);
    console.log('Current totalComparisons:', totalComparisons);
    console.log('serviceComparisons length:', serviceComparisons.length);
    console.log('serviceDots length:', serviceDots.length);
    
    // Set the current index first
    currentComparisonIndex = n;
    
    // Handle wrapping
    if (currentComparisonIndex > totalComparisons) currentComparisonIndex = 1;
    if (currentComparisonIndex < 1) currentComparisonIndex = totalComparisons;
    
    console.log('Final currentComparisonIndex:', currentComparisonIndex);
    
    // Remove active class from all comparisons and dots
    serviceComparisons.forEach((comparison, idx) => {
        comparison.classList.remove('active');
        console.log('Removed active from comparison', idx + 1);
    });
    serviceDots.forEach((dot, idx) => {
        dot.classList.remove('active');
        console.log('Removed active from dot', idx + 1);
    });
    
    // Show current comparison and activate dot
    const currentComparison = serviceComparisons[currentComparisonIndex - 1];
    const currentDot = serviceDots[currentComparisonIndex - 1];
    
    console.log('Trying to activate comparison at index:', currentComparisonIndex - 1);
    console.log('Current comparison element:', currentComparison);
    console.log('Current dot element:', currentDot);
    
    if (currentComparison) {
        currentComparison.classList.add('active');
        console.log('✅ Activated comparison:', currentComparisonIndex);
    } else {
        console.log('❌ No comparison found at index:', currentComparisonIndex - 1);
    }
    
    if (currentDot) {
        currentDot.classList.add('active');
        console.log('✅ Activated dot:', currentComparisonIndex);
    } else {
        console.log('❌ No dot found at index:', currentComparisonIndex - 1);
    }
}

function changeComparison(direction) {
    // Stop auto slide temporarily
    restartAutoComparison();
    
    currentComparisonIndex += direction;
    showComparison(currentComparisonIndex);
}

function currentComparison(n) {
    console.log('currentComparison called with n:', n);
    
    // Stop auto slide temporarily
    restartAutoComparison();
    
    // Directly call showComparison with the target index
    showComparison(n);
}

// Service Comparison Functions
let currentServiceIndex = 0;

function initializeServiceComparison() {
    // Add smooth transitions and initialize first service
    const serviceComparisons = document.querySelectorAll('.service-comparison');
    serviceComparisons.forEach(service => {
        service.style.transition = 'opacity 0.5s ease-in-out';
    });
    
    // Add image hover effects for better user interaction
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    imageWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        
        wrapper.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
        });
        
        wrapper.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
}

function changeServiceComparison(direction) {
    const serviceComparisons = document.querySelectorAll('.service-comparison');
    const serviceDots = document.querySelectorAll('.service-dot');
    const totalServices = serviceComparisons.length;
    
    // Remove active class from current service and dot
    serviceComparisons[currentServiceIndex].classList.remove('active');
    serviceDots[currentServiceIndex].classList.remove('active');
    
    // Calculate new index
    currentServiceIndex += direction;
    
    if (currentServiceIndex >= totalServices) {
        currentServiceIndex = 0;
    } else if (currentServiceIndex < 0) {
        currentServiceIndex = totalServices - 1;
    }
    
    // Add active class to new service and dot
    serviceComparisons[currentServiceIndex].classList.add('active');
    serviceDots[currentServiceIndex].classList.add('active');
}

function showServiceComparison(index) {
    const serviceComparisons = document.querySelectorAll('.service-comparison');
    const serviceDots = document.querySelectorAll('.service-dot');
    
    // Remove active class from current service and dot
    serviceComparisons[currentServiceIndex].classList.remove('active');
    serviceDots[currentServiceIndex].classList.remove('active');
    
    // Set new index
    currentServiceIndex = index;
    
    // Add active class to new service and dot
    serviceComparisons[currentServiceIndex].classList.add('active');
    serviceDots[currentServiceIndex].classList.add('active');
}

// Scroll Effects
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .area-card, .feature-item, .gallery-item');
    animateElements.forEach(el => observer.observe(el));
    
    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Contact Form
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !phone || !service) {
        showNotification('Lütfen gerekli alanları doldurun.', 'error');
        return;
    }
    
    // Validate phone number (basic Turkish phone validation)
    const phoneRegex = /^(\+90|0)?[5][0-9]{9}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        showNotification('Lütfen geçerli bir telefon numarası girin.', 'error');
        return;
    }
    
    // Create WhatsApp message
    const whatsappMessage = createWhatsAppMessage(name, phone, service, message);
    
    // Open WhatsApp
    window.open(`https://wa.me/905416275061?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    // Show success message and reset form
    showNotification('Mesajınız WhatsApp\'a yönlendirildi!', 'success');
    contactForm.reset();
}

function createWhatsAppMessage(name, phone, service, message) {
    const serviceNames = {
        'carpet': 'Halı Yıkama',
        'sofa': 'Koltuk Yıkama',
        'blanket': 'Yorgan/Battaniye Yıkama',
        'curtain': 'Stor Perde Yıkama'
    };
    
    let whatsappMessage = `Merhaba! Çiçek Halı Yıkama'dan hizmet talep ediyorum.\n\n`;
    whatsappMessage += `👤 Ad Soyad: ${name}\n`;
    whatsappMessage += `📞 Telefon: ${phone}\n`;
    whatsappMessage += `🏠 Hizmet: ${serviceNames[service] || service}\n`;
    
    if (message && message.trim()) {
        whatsappMessage += `💬 Mesaj: ${message}\n`;
    }
    
  
    
    return whatsappMessage;
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calculate dynamic navbar height for better positioning
                const navbar = document.querySelector('.navbar');
                let navbarHeight = 80; // Default height
                let extraOffset = 0;
                
                if (navbar) {
                    navbarHeight = navbar.offsetHeight;
                }
                
                // Add extra padding for mobile devices
                if (window.innerWidth <= 768) {
                    extraOffset = 20; // Extra padding for mobile
                    
                    // Special offset for about section in mobile
                    if (this.getAttribute('href') === '#about') {
                        extraOffset = 60; // More padding for about section
                    }
                } else {
                    // Desktop handling for about section
                    if (this.getAttribute('href') === '#about') {
                        // Find the section header within about section for better positioning
                        const aboutHeader = target.querySelector('.section-header h2');
                        if (aboutHeader) {
                            // Calculate position to show "Hakkımızda" title at the top
                            const headerPosition = aboutHeader.getBoundingClientRect().top + window.pageYOffset;
                            window.scrollTo({
                                top: Math.max(0, headerPosition - navbarHeight - 15),
                                behavior: 'smooth'
                            });
                            return;
                        } else {
                            extraOffset = 15; // Fallback: minimal offset
                        }
                    }
                }
                
                const offsetTop = target.offsetTop - navbarHeight - extraOffset;
                
                window.scrollTo({
                    top: Math.max(0, offsetTop), // Ensure we don't scroll to negative position
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const debouncedScrollHandler = debounce(handleNavbarScroll, 10);
window.addEventListener('scroll', debouncedScrollHandler);

// Loading Screen (Optional)
function hideLoadingScreen() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
}

// Hide loading screen when page is fully loaded
window.addEventListener('load', hideLoadingScreen);

// Phone number formatting
function formatPhoneNumber(input) {
    const value = input.value.replace(/\D/g, '');
    let formatted = value;
    
    if (value.length >= 10) {
        formatted = value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    }
    
    input.value = formatted;
}

// Apply phone formatting to phone inputs
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', () => formatPhoneNumber(input));
});

// Image lazy loading fallback (if IntersectionObserver is not supported)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src || image.src;
                    imageObserver.unobserve(image);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

// Initialize lazy loading
lazyLoadImages();

// Global functions (needed for HTML onclick attributes)
window.changeSlide = changeSlide;
window.currentSlide = currentSlide;


// Performance monitoring (Optional)
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            console.log(`Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        }
    });
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        margin-left: 10px;
    }
    
    .notification-close:hover {
        opacity: 0.7;
    }
`;
document.head.appendChild(style); 