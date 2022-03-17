const mediaQuery = window.matchMedia('(max-width: 497px)')
const mediaQuery2 = window.matchMedia('(min-width: 498px)')

const search = document.getElementById('searchJS');
const toggler = document.getElementById('buttonJS');

function handleTabletChange(e) {
    if (e.matches) {
        toggler.parentNode.removeChild(toggler);
        search.parentNode.insertBefore(toggler, search);
        search.style.margin = "5px auto";
        // search.style.width = "80%"
        console.log('Media Query 1 Matched!')
    }
}


function handleTabletChange2(e) {
    if (e.matches) {
        search.parentNode.removeChild(search);
        toggler.parentNode.insertBefore(search, toggler);
        search.style.margin = "0px 10px";
        // search.style.width = "40%"
        console.log('Media Query 2 Matched!')
    }
}



mediaQuery.addListener(handleTabletChange)

handleTabletChange(mediaQuery)

mediaQuery2.addListener(handleTabletChange2)

handleTabletChange2(mediaQuery2)