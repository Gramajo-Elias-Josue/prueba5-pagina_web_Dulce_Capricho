const navLinks = document.querySelectorAll("header nav a")
const logoLink = document.querySelector(".logo")
const sections = document.querySelectorAll("section")
const menuIcon = document.querySelector("#menu-icon")
const navbar = document.querySelector("header nav")
const footerLinks = document.querySelectorAll(".footer-links a");

menuIcon.addEventListener("click", () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
})


const activePage = () => {
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")
    const barsBox = document.querySelector(".bars-box")

    header.classList.remove("active");
    setTimeout(() => {
        header.classList.add("active");

    }, 1100);

    footer.classList.remove("active");
    setTimeout(() => {
        footer.classList.add("active");

    }, 1100);


    navLinks.forEach(link => {
        link.classList.remove("active");
    });
    footerLinks.forEach(link => {
        link.classList.remove("active");
    });

    barsBox.classList.remove("active");
    setTimeout(() => {
        barsBox.classList.add("active");

    }, 1100);

    sections.forEach(section => {
        section.classList.remove("active");
    });

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
}

navLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
        if (!link.classList.contains("active")) {
            activePage();

            link.classList.add("active");

            setTimeout(() => {
                sections[idx].classList.add("active")
            }, 1100);
        }
    })
});

// Agregar event listeners a los enlaces del footer
footerLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
        if (!link.classList.contains("active")) {
            activePage();
            
            // Activar el enlace correspondiente en el footer
            link.classList.add("active");
            
            // Activar el enlace correspondiente en el navbar
            navLinks[idx].classList.add("active");

            setTimeout(() => {
                sections[idx].classList.add("active")
            }, 1100);
        }
    })
});

logoLink.addEventListener("click", () => {
    const barsBox = document.querySelector(".bars-box")
    if (!navLinks[0].classList.contains("active")) {
        activePage();

        navLinks[0].classList.add("active")

        setTimeout(() => {
            sections[0].classList.add("active")
        }, 1100);
    }

    barsBox.classList.remove("active");
    setTimeout(() => {
        barsBox.classList.add("active");

    }, 1100);
})

// ***************************PARA EL CONTACTO POR EMAIL*****************************************************
document.addEventListener('DOMContentLoaded', function () {
    // Inicializa EmailJS con tu ID de usuario
    emailjs.init('TU_USER_ID');

    // Escucha el envío del formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita la recarga de la página

        // Recoge los datos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Envía los datos mediante EmailJS
        emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        }).then(function (response) {
            alert('¡Mensaje enviado con éxito!');
            form.reset(); // Limpia el formulario
        }).catch(function (error) {
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
            console.error('Error:', error);
        });
    });
});

// ######################################AÑO DEL FOOTER############################################
document.getElementById("year").textContent = new Date().getFullYear();
// ######################################EDAD############################################
const fechaNacimiento = new Date('2004-05-05'); // Fecha de nacimiento de Eliana
        const fechaActual = new Date(); // Fecha actual

        // Calcular la edad
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        const mesActual = fechaActual.getMonth();
        const mesNacimiento = fechaNacimiento.getMonth();

        // Ajustar la edad si aún no ha cumplido años este año
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        // Actualizar el texto con la edad calculada
        document.getElementById('edad').textContent = edad;


