document.getElementById("feedbackForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;
             
            const formMessage = document.getElementById("formMessage");
            formMessage.textContent = "Спасибо, ${name}! Ваше сообщение "${subject}" успешно отправлено. Я свяжусь с вами по email ${email} в ближайшее время.";
            formMessage.style.display = "block";
            formMessage.style.backgroundColor = "#1a2a1a";
            formMessage.style.color = "#a0d8a0";
            formMessage.style.border = "1px solid #2d5a2d";
            formMessage.style.padding = "15px";
            formMessage.style.borderRadius = "5px";
            formMessage.style.marginTop = "20px";
            formMessage.style.border = "1px solid #c3e6cb";
            
            document.getElementById("feedbackForm").reset();
            
            formMessage.scrollIntoView({ behavior: "smooth" });
            
            setTimeout(() => {
                formMessage.style.display = "none";
            }, 10000);
        });

         document.addEventListener("DOMContentLoaded", function() {
            const burgerMenu = document.getElementById("burgerMenu");
            const mainNav = document.getElementById("mainNav");
            
            burgerMenu.addEventListener("click", function() {
      
                burgerMenu.classList.toggle("active");
                mainNav.classList.toggle("active");
                document.body.classList.toggle("menu-open");
            });
            
            const navLinks = mainNav.querySelectorAll("a");
            navLinks.forEach(link => {
                link.addEventListener("click", function() {
                    burgerMenu.classList.remove("active");
                    mainNav.classList.remove("active");
                    document.body.classList.remove("menu-open");
                });
            });
            
            window.addEventListener("resize", function() {
                if (window.innerWidth > 768) {
                    burgerMenu.classList.remove("active");
                    mainNav.classList.remove("active");
                    document.body.classList.remove("menu-open");
                }
            });
        });
