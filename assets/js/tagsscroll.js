const innerContainer = document.querySelector('.crypto-token-tag-inner');
let isAppending = false; // To prevent simultaneous appends

window.onscroll = function() {
    // If we're near the bottom of the container, append another set of tags
    if (!isAppending && window.scrollY + window.innerHeight > innerContainer.clientHeight - 100) {
        isAppending = true;
        
        const originalList = document.querySelector('.crypto-token-tag-list');
        const clonedList = originalList.cloneNode(true);
        innerContainer.appendChild(clonedList);

        // Reset the flag after a small delay
        setTimeout(() => {
            isAppending = false;
        }, 100);
    }

    // If we're near the top and there's more than one list, remove the last one
    if (window.scrollY < 100 && innerContainer.children.length > 1) {
        innerContainer.lastChild.remove();
    }
    
    // Calculate the percentage of the page that's been scrolled
    const scrollPercent = (window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);

    // Apply the translation
    const maxTranslateX = -600;
    const translateXValue = maxTranslateX * scrollPercent;
    innerContainer.style.transform = `translateX(${translateXValue}px)`;
}