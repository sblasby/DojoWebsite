document.addEventListener('DOMContentLoaded', function () {

    const sectionLinks = Array.from(document.querySelectorAll('ul.about-ul a'));

    const sectionContent = Array.from(document.querySelectorAll('div.section-container'));

    const linkBackground = '#7b7b7b';

    sectionContent[0].style.display = 'block';

    let currSection = sectionContent[0];

    let currLink = sectionLinks[0];

    for (let i = 0; i < sectionLinks.length; i++) {
        sectionLinks[i].addEventListener('click', function () {

            currSection.style.display = '';
            currSection = sectionContent[i];
            currSection.style.display = 'block';

            currLink.style.backgroundColor = '';
            currLink = sectionLinks[i];
            currLink.style.background = linkBackground;

        })

    }
})