const button = document.getElementById("open");
const menu = document.getElementById("mobile");
const openElement = document.querySelector(".open");

        button.addEventListener('click', () => {
            openElement.classList.toggle('active');
            if (menu.style.opacity === '1') {
                menu.style.opacity = '0';
                document.body.style.overflow = 'auto';
                menu.style.pointerEvents = 'none';
                button.style.borderTopColor = '#fff';   
            } else {
                menu.style.opacity = '1';
                document.body.style.overflow = 'hidden';
                menu.style.pointerEvents = 'all';
                button.style.borderTopColor = 'transparent';
            }
        });

const navlinkMobile = document.querySelectorAll("#mobile .nav-mobile a");

    navlinkMobile.forEach(link => {
        link.addEventListener('click', () => {
            menu.style.opacity = '0';
            document.body.style.overflow = 'auto';
            menu.style.pointerEvents = 'none';
            openElement.classList.remove('active');
            button.style.borderTopColor = '#fff';
        });
    });

const popups = document.querySelectorAll('.alert');

    popups.forEach(popups => {
        popups.onclick = function () {
            Swal.fire({
                icon: "error",
                title: "<h5 style='color:#fff'>Em breve...</h5>",
                text: "Estou atualmente trabalhando nos meus projetos. Em breve, estará disponível aqui!",
                background: "#181827",
            });
        };
    });


function linkedin () {
    Swal.fire({
        icon: "warning",
        title: "<h5 style='color:#fff'>Em breve...</h5>",
        text: "Em breve abrirei meu linkedin.",
        background: "#181827",
        iconColor: "#0094a4",
    });
}