const projects = document.querySelectorAll('.project');
let currentIndex = 0;

document.querySelector('#nextBtn').addEventListener('click', moveToNextProject);
document.querySelector('#prevBtn').addEventListener('click', moveToPrevProject);

// Tampilkan proyek pertama saat halaman dimuat
projects[currentIndex].style.display = 'block';
projects[currentIndex].style.opacity = '1';

function moveToNextProject() {
    // Set opacity proyek saat ini ke 0 dan geser ke kiri
    projects[currentIndex].style.opacity = '0';
    projects[currentIndex].style.transform = 'translateX(-20px)';

    setTimeout(() => {
        projects[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % projects.length;
        // Set opacity proyek berikutnya ke 1 dan geser kembali ke posisi awal
        projects[currentIndex].style.opacity = '1';
        projects[currentIndex].style.transform = 'translateX(0)';
        projects[currentIndex].style.display = 'block';
    }, 500); // Durasi transisi
}

function moveToPrevProject() {
    // Set opacity proyek saat ini ke 0 dan geser ke kanan
    projects[currentIndex].style.opacity = '0';
    projects[currentIndex].style.transform = 'translateX(20px)';

    setTimeout(() => {
        projects[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        // Set opacity proyek sebelumnya ke 1 dan geser kembali ke posisi awal
        projects[currentIndex].style.opacity = '1';
        projects[currentIndex].style.transform = 'translateX(0)';
        projects[currentIndex].style.display = 'block';
    }, 500); // Durasi transisi
}
