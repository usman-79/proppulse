document.addEventListener('DOMContentLoaded', () => {
    // Budget Input Functionality
    const budgetInput = document.getElementById('budget-dynamic-text');
    
    if (budgetInput) {
        budgetInput.addEventListener('focus', function() {
            // Clear placeholder when focused
            if (this.value === '') {
                this.placeholder = '';
            }
        });
        
        budgetInput.addEventListener('blur', function() {
            // Restore placeholder if empty
            if (this.value === '') {
                this.placeholder = 'Type Budget (e.g. 700k)';
            }
        });
    }

    // Location Pill Listener
    const locationBtn = document.querySelector('.location-pill');
    if (locationBtn) {
        locationBtn.addEventListener('click', () => {
            alert("This would trigger the geolocation API to find high-growth suburbs near the user.");
        });
    }

    // GHL Modal Logic
    const modal = document.getElementById('ghl-modal');
    const closeBtn = document.querySelector('.modal-close-btn');
    const ctaButtons = document.querySelectorAll('.magnet-button'); // Target all CTA buttons

    function openModal() {
        if (modal) modal.classList.add('active');
    }

    function closeModal() {
        if (modal) modal.classList.remove('active');
    }

    // Attach to all CTA buttons
    document.querySelectorAll('.magnet-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close listeners
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            // Close if clicking the overlay background (not the container)
            if (e.target === modal) {
                closeModal();
            }
        });
    }



});

    // 3D Tilt Effect
    const consoleContainer = document.querySelector('.hero-section');
    const glassConsole = document.querySelector('.glass-console');

    if (consoleContainer && glassConsole) {
        consoleContainer.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
            glassConsole.style.transform = `rotateY(${xAxis}deg) rotateX(${10 + yAxis}deg)`;
        });
    }

    // Magnet Button Effect
    const btns = document.querySelectorAll('.magnet-button');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // CSS vars not used in this iteration of button style but kept for future
        });
    });

    // Location Pill Listener
    const locationBtn = document.querySelector('.location-pill');
    if (locationBtn) {
        locationBtn.addEventListener('click', () => {
            alert("This would trigger the geolocation API to find high-growth suburbs near the user.");
        });
    }

    // GHL Modal Logic
    const modal = document.getElementById('ghl-modal');
    const closeBtn = document.querySelector('.modal-close-btn');
    const ctaButtons = document.querySelectorAll('.magnet-button'); // Target all CTA buttons

    function openModal() {
        if (modal) modal.classList.add('active');
    }

    function closeModal() {
        if (modal) modal.classList.remove('active');
    }

    // Attach to all CTA buttons
    document.querySelectorAll('.magnet-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close listeners
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            // Close if clicking the overlay background (not the container)
            if (e.target === modal) {
                closeModal();
            }
        });
    }



});
