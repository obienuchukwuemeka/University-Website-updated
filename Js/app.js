    function showMenu() {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('show');
    }

    /* Close menu when a link is clicked */
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('show');
        });
    });

        function showMenu() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('show');
        }

        function filterFaculties(group, btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.faculty-card').forEach(card => {
                if (group === 'all' || card.dataset.group === group) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        }

                function showMenu() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('show');
        }

        function filterFaculties(group, btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.faculty-card').forEach(card => {
                if (group === 'all' || card.dataset.group === group) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // ============================================
// POSTDEGREE PAGE - JAVASCRIPT
// ============================================

// Mobile menu toggle
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('show');
});

// Faculty filter
const filterButtons = document.querySelectorAll('.filter-btn');
const facultyCards = document.querySelectorAll('.faculty-card');

filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {

        filterButtons.forEach(function (b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        const group = btn.getAttribute('data-group');

        facultyCards.forEach(function (card) {
            if (group === 'all' || card.getAttribute('data-group') === group) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.4s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
