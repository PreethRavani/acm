document.addEventListener('DOMContentLoaded', () => {
      // Loading screen logic
      const loadingScreen = document.getElementById('loadingScreen');
      const body = document.body;
      if (loadingScreen && body) {
        setTimeout(() => {
          loadingScreen.classList.add('hide');
          body.classList.remove('loading');
        }, 2500);
      }

      // Scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down, .reveal-text').forEach((element) => {
        observer.observe(element);
      });

      // Event cards animation (horizontal scroll tied to page scroll)
      const eventsSection = document.querySelector('.events-slider');
      if (eventsSection) {
        const handleScroll = () => {
          const rect = eventsSection.getBoundingClientRect();
          const elementCenter = window.innerHeight / 2;
          const scrollAmount = (elementCenter - rect.top) * 0.5;
          eventsSection.scrollLeft = Math.max(0, scrollAmount);
        };
        window.addEventListener('scroll', handleScroll);
      }

      // Hamburger menu
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
      if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          hamburger.classList.toggle('active');
        });
      }

      // Nav link clicks
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          navLinks?.classList.remove('active');
          hamburger?.classList.remove('active');
        });
      });

      // Scroll progress bar
      const updateScrollProgress = () => {
        const scrollbar = document.querySelector('.scroll-progress');
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        if (scrollbar) {
          scrollbar.style.width = scrolled + '%';
        }
      };
      window.addEventListener('scroll', updateScrollProgress);
    });