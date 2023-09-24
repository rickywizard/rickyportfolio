window.addEventListener('load', () => {
    setTimeout(() => {
        hideLoadingScreen();
    }, 5000);
    setupNavItems(); 
    showPage('homePage');
});

// loading screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
  
      // Setelah menghilangkan loading screen, tampilkan halaman beranda (home)
      const homePage = document.getElementById('homePage');
      homePage.style.opacity = '1';
    }, 500); 
    startBounceAnimation();
}
  
// show page
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        const pageId = navItem.getAttribute('data-page');
        showPage(pageId);
    });
});

function showPage(pageId) {
    pages.forEach((page) => {
        page.style.opacity = '0';
    });

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.style.opacity = '1';
    }
    startBounceAnimation();
    startZoomAnimation();
}

// navbar
function setupNavItems() {
    const navItems = document.querySelectorAll('.nav-item');

    // Fungsi untuk menghapus status "aktif" dari semua ikon
    function deactivateAll() {
        navItems.forEach((item) => {
            item.classList.remove('active');
        });
    }

    // Event listener untuk mengatur efek hover dan status "aktif" pada ikon saat diklik
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Hapus status "aktif" dari semua ikon
            deactivateAll();

            // Tambahkan status "aktif" pada ikon yang diklik
            item.classList.add('active');
        });

        // Event listener untuk mengembalikan efek hover saat mouse meninggalkan ikon
        item.addEventListener('mouseleave', () => {
            // Hapus status "aktif" jika tidak ada ikon yang diklik
            if (!item.classList.contains('active')) {
                item.classList.remove('hover');
            }
        });

        // Event listener untuk mengatur efek hover saat mouse mengarahkan ke ikon
        item.addEventListener('mouseenter', () => {
            // Tambahkan efek hover jika tidak ada ikon yang diklik
            if (!item.classList.contains('active')) {
                item.classList.add('hover');
            }
        });
    });

    // Tambahkan efek "aktif" pada ikon "Home" saat halaman dimuat pertama kali
    const homeNavItem = document.querySelector('[data-page="homePage"]');
    homeNavItem.classList.add('active');
}

function startBounceAnimation() {
    const h1 = document.querySelector('.bouncing-text1');
    const h2 = document.querySelector('.bouncing-text2');
    const icons = document.querySelector('.social-icons');

    h1.style.animation = 'none';
    h1.offsetHeight;
    h1.style.animation = null;
    h1.style.animation = 'bounceIn 1.5s ease-in-out';

    h2.style.visibility = 'hidden';
    icons.style.visibility = 'hidden';

    setTimeout(() => {
        h2.style.visibility = 'visible';
        h2.style.animation = 'none';
        h2.offsetHeight;
        h2.style.animation = null;
        h2.style.animation = 'bounceIn 1.5s ease-in-out';
    }, 500);

    setTimeout(() => {
        icons.style.visibility = 'visible';
        icons.style.animation = 'none';
        icons.offsetHeight;
        icons.style.animation = null;
        icons.style.animation = 'bounceIn 1.5s ease-in-out';
    }, 1000);
}

function startZoomAnimation() {
    const img = document.querySelector('.about-image img');
    const text = document.querySelector('.about-text');

    img.style.animation = 'none';
    img.offsetHeight;
    img.style.animation = null;
    img.style.animation = 'zoom 2s ease-in-out';

    text.style.visibility = 'hidden';

    setTimeout(() => {
        text.style.visibility = 'visible';
        text.style.animation = 'none';
        text.offsetHeight;
        text.style.animation = null;
        text.style.animation = 'zoom 2s ease-in-out';
    }, 500);
}
