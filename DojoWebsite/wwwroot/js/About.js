document.addEventListener('DOMContentLoaded', function () {

    const sectionLinks = Array.from(document.querySelectorAll('ul.about-ul a'));

    const sectionContent = Array.from(document.querySelectorAll('div.selectable'));

    const linkBackground = '#7b7b7b';

    let currSection = document.getElementById('welcome');

    let currLink

    for (let i = 0; i < sectionLinks.length; i++) {
        sectionLinks[i].addEventListener('click', function () {

            currSection.style.display = 'none';  

            if (currLink !== undefined) {
                currLink.style.backgroundColor = '';
            }

            //Reselecting a link will deselect it and welcome comes back
            if (currLink === sectionLinks[i]) {
                currLink = undefined;
                currSection = document.getElementById('welcome');
                currSection.style.display = 'flex';

            }
            else {
                currLink = sectionLinks[i];
                currSection = sectionContent[i];
                currLink.style.backgroundColor = linkBackground;
                currSection.style.display = 'block';
            }

            

        })

    }
})