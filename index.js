const $observeSection = document.querySelector('.buttonHolder');
const options = {
  root: null,
  rootMargin: '200px',
  threshold: 1
};

function trackScrollPosition(element, onChange){
    const observer = new IntersectionObserver(
        function(entries){
            let scrollPosition;
            if(entries[0].intersectionRatio === 1){
                scrollPosition = 0;
            }
            else{
                scrollPosition = 1;
            }
            onChange(scrollPosition, entries[0]);
            console.log({scrollPosition});
        }, options);

    observer.observe(element);
    return observer;
}

trackScrollPosition($observeSection, (scrollPosition) => {
    $observeSection.dataset.scrollPosition = scrollPosition;
    console.log(scrollPosition);
})
