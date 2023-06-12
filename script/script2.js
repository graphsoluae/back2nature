

const blogSection = document.querySelector('.blog');
const serviceSection = document.querySelector('.service');

const news_link = document.querySelectorAll('a[href^="#"]');



news_link.forEach(anchor => {
    anchor.addEventListener('click', function (e) {


        if (e.target.innerText.trim() === 'NEWS') {
            e.preventDefault();
            blogSection.scrollIntoView({ behavior: "smooth" });
        }
        if (e.target.innerText.trim() === 'CONTACT US') {
            e.preventDefault();
            blogSection.scrollIntoView({ behavior: "smooth" });
        }
        if (e.target.innerText.trim() === 'SERVICES') {
            e.preventDefault();
            serviceSection.scrollIntoView({ behavior: "smooth" });
        }

    });
});