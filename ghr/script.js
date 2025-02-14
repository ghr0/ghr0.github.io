        function rotateAvatar() {
            const avatar = document.getElementById('avatar');
            avatar.classList.add('rotate');
            setTimeout(() => {
                avatar.classList.remove('rotate');
            }, 800); // 动画持续时间与CSS中的动画时间一致
        }