const gameBoxes = document.querySelector('div#gameBoxes');
const markers = document.querySelector('ul#markers');

let index = Math.round((gameBoxes.scrollTop/gameBoxes.clientHeight)/1.1652323580034423);
markers.children[index].classList.add('activeMarker');

gameBoxes.addEventListener("scroll", (event) => {
    if (index != Math.round((gameBoxes.scrollTop/gameBoxes.clientHeight)/1.1652323580034423)) {
        index = Math.round((gameBoxes.scrollTop/gameBoxes.clientHeight)/1.1652323580034423);
        for (let i = 0; i < markers.children.length; i++) {
            const element = markers.children[i];
            element.classList.remove('activeMarker');
        }
        markers.children[index].classList.add('activeMarker');
    }
});
