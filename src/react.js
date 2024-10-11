const hamburger = document.getElementById('hamburger');
        const closeBtn = document.getElementById('close');
        const menu = document.getElementById('menu');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            hamburger.classList.toggle('hidden');
            closeBtn.classList.toggle('hidden');
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            hamburger.classList.toggle('hidden');
            closeBtn.classList.toggle('hidden');
        });
