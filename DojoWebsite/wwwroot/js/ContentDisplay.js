// This is the js file that contains the javascript script
// for hiding and displaying the content in the history
// and about section

document.addEventListener('DOMContentLoaded', function () {

    const sectionLinks = Array.from(document.querySelectorAll('ul.about-ul a'));

    const sectionContent = Array.from(document.querySelectorAll('div.selectable'));

    const linkBackground = '#7b7b7b';

    const scrollDiv = this.getElementById('scroll-container')

    let currSection = document.getElementById('welcome');

    let currLink

    for (let i = 0; i < sectionLinks.length; i++) {
        sectionLinks[i].addEventListener('click', function () {

            currSection.style.display = 'none';

            scrollDiv.scrollTo(0, 0)

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