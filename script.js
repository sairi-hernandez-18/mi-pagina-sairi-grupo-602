
function mostrarmensaje() {
    let mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = "🐾 cuida y protege a los animales";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity= "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);

}

function mostrarMensaje2() {
    let mensaje = document.getElementById("mensaje2");

        mensaje.innerHTML = "🐾 si tienes mascostas tu dever es cuidar de ellos";
        mensaje.style.display = "block";

        setTimeout(() => {
            mensaje.style.opacity= "1";
            mensaje.style.transform = "translateY(0)";
        }, 50);

      setTimeout(() => {
        msg.style.opacity = "0";
      }, 3000);
    }
        
        
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            body.classList.add('dark');
            themeToggle.checked = true;
        }

        function toggleTheme() {
            if (themeToggle.checked) {
                body.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                document.querySelector('.switch-label').textContent = 'Modo Claro';
            } else {
                body.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                document.querySelector('.switch-label').textContent = 'Modo Oscuro';
            }
        }
        themeToggle.addEventListener('change', toggleTheme);

   
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    body.classList.add('dark');
                    themeToggle.checked = true;
                    document.querySelector('.switch-label').textContent = 'Modo Claro';
                } else {
                    body.classList.remove('dark');
                    themeToggle.checked = false;
                    document.querySelector('.switch-label').textContent = 'Modo Oscuro';
                }
            }
        });


       
        document.querySelector('.whatsapp-float').addEventListener('click', function() {

        });
    function toggleAccordion(element) {
            const content = element.nextElementSibling;
            content.classList.toggle('active');
        }
        function toggleText(btn) {
    const short = btn.parentElement.previousElementSibling;
    const full = btn.parentElement;
    
    if (btn.textContent.includes('más')) {
        short.style.display = 'none';
        full.style.display = 'block';
        btn.textContent = 'leer menos';
    } else {
        short.style.display = 'block';
        full.style.display = 'none';
        btn.textContent = '...leer más';
    }
}
 
        window.onscroll = function() {
            const btn = document.querySelector('.scroll-top');
            if (window.pageYOffset > 3000) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        };

      
        function goToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        document.addEventListener('keydown', (e) => {
    if (['ArrowUp','ArrowDown'].includes(e.key)) {
        e.preventDefault();
        window.scrollBy(0, e.key === 'ArrowDown' ? 50 : -50);
    }
});
