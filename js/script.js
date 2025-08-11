// Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        // Mouse tracking
        const mouse = new THREE.Vector2();
        const mouseInfluence = new THREE.Vector3();
        let mouseActive = false;

        // Particle system setup
        const particleCount = 800;
        const particles = [];
        const particleGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        const particleColors = new Float32Array(particleCount * 3);
        const particleSizes = new Float32Array(particleCount);

        // Circle formation parameters
        const maxRadius = 4;
        const spiralArms = 3;

        // Create particles in galaxy-like circular formation
        for (let i = 0; i < particleCount; i++) {
            const t = i / particleCount;
            const radius = Math.pow(Math.random(), 0.5) * maxRadius;
            const spiralAngle = t * Math.PI * 1.5;
            const armOffset = Math.floor(Math.random() * spiralArms) * (2 * Math.PI / spiralArms);
            let angle = spiralAngle + armOffset;
            angle += (Math.random() - 0.5) * 0.5;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const z = (Math.random() - 0.5) * 0.3;

            const particle = {
                position: new THREE.Vector3(x, y, z),
                originalPosition: new THREE.Vector3(x, y, z),
                velocity: new THREE.Vector3(0, 0, 0),
                size: Math.random() * 0.3 + 0.02,
                radius: radius,
                angle: angle,
                spiralSpeed: 0.001 + Math.random() * 0.002
            };

            particles.push(particle);

            particlePositions[i * 1] = particle.position.x;
            particlePositions[i * 1 + 1] = particle.position.y;
            particlePositions[i * 3 + 2] = particle.position.z;
            particleSizes[i] = particle.size;
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
        particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));

        const particleMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 }
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                void main() {
                    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                    float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
                    gl_FragColor = vec4(vColor, alpha * 0.9);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);

        camera.position.z = 8;

        document.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            mouseInfluence.x = mouse.x * 6;
            mouseInfluence.y = mouse.y * 6;
            mouseInfluence.z = 0;
            mouseActive = true;
        });

        document.addEventListener('mouseleave', () => {
            mouseActive = false;
        });

        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;

            for (let i = 0; i < particleCount; i++) {
                const particle = particles[i];
                particle.angle += particle.spiralSpeed;
                const newX = Math.cos(particle.angle) * particle.radius;
                const newY = Math.sin(particle.angle) * particle.radius;
                particle.originalPosition.x = newX;
                particle.originalPosition.y = newY;

                if (mouseActive) {
                    const distance = particle.position.distanceTo(mouseInfluence);
                    if (distance < 3) {
                        const direction = new THREE.Vector3()
                            .subVectors(particle.position, mouseInfluence)
                            .normalize();
                        const force = direction.multiplyScalar(0.03 * (3 - distance) / 3);
                        particle.velocity.add(force);
                    }
                }

                particle.position.add(particle.velocity);

                const returnForce = new THREE.Vector3()
                    .subVectors(particle.originalPosition, particle.position)
                    .multiplyScalar(0.015);
                particle.velocity.add(returnForce);

                particle.velocity.multiplyScalar(0.94);

                const normalizedRadius = particle.radius / maxRadius;
                const hue = 0.8 - normalizedRadius * 0.15;
                const saturation = 0.8 + normalizedRadius * 0.2;
                const lightness = 0.3 + (1 - normalizedRadius) * 0.4;
                const color = new THREE.Color().setHSL(hue, saturation, lightness);

                particlePositions[i * 3] = particle.position.x;
                particlePositions[i * 3 + 1] = particle.position.y;
                particlePositions[i * 3 + 2] = particle.position.z;

                particleColors[i * 3] = color.r;
                particleColors[i * 3 + 1] = color.g;
                particleColors[i * 3 + 2] = color.b;
            }

            particleGeometry.attributes.position.needsUpdate = true;
            particleGeometry.attributes.color.needsUpdate = true;

            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();

document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15
    };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
});
 

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const loading = submitBtn.querySelector('.loading');
            const responseMessage = document.getElementById('responseMessage');
            
            // Show loading state
            btnText.style.display = 'none';
            loading.style.display = 'inline';
            submitBtn.disabled = true;
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    showMessage(responseMessage, result.message, 'success');
                    this.reset();
                    
                    // Add success animation
                    submitBtn.classList.add('success-animation');
                    setTimeout(() => {
                        submitBtn.classList.remove('success-animation');
                    }, 2000);
                } else {
                    throw new Error(result.message || 'Something went wrong');
                }
            } catch (error) {
                showMessage(responseMessage, 'Error: ' + error.message, 'error');
            } finally {
                // Reset button state
                btnText.style.display = 'inline';
                loading.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }
    
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = `response-message ${type} show`;
        element.style.display = 'block';
        
        setTimeout(() => {
            element.classList.remove('show');
            setTimeout(() => {
                element.style.display = 'none';
            }, 300);
        }, 5000);
    }
});
