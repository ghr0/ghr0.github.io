        function rotateAvatar() {
            const avatar = document.getElementById('avatar');
            avatar.classList.add('rotate');
            setTimeout(() => {
                avatar.classList.remove('rotate');
            }, 800);
        }