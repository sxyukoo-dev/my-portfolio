document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components (Sidenav, Scrollspy, Materialbox)
    // The original script.js handled these, so we'll keep the required initialization.
    M.AutoInit(); 
    
    // Smooth scroll for navigation links (from your provided script)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize AOS (Animate On Scroll) (using the configuration from your provided script)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Initialize Typed.js with themes relevant to Florian's CV
    var typed = new Typed('#typed', {
        strings: [
            "Cybersecurity & Cloud Apprenticeship", 
            "Future IT Security Specialist", 
            "Network Administrator Intern", 
            "Python, HTML, PHP Developer"
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
    });

    // Initialize particles.js (using the exact settings from your provided script)
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00bcd4" // Using the accent color from your CSS
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    // This was in your code but likely not used, commented out for cleaner execution
                    // "src": "img/github.svg", 
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00bcd4",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
    // Animate skill bars on scroll (from your provided script)
    const skillSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress .determinate');

    const animateSkills = () => {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%'; // Reset width for animation
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(skillSection);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    if (skillSection) {
        observer.observe(skillSection);
    }
});