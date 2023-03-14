/*! charCount v1.0 | (c) @ashiqulshourav */
Element.prototype.characterCounting = function(options) {
    // options default value
    options = options || {};
    var maxChar = options.maxChar || 50;
    var buttonHideText = options.buttonHideText || "Show Less";
    var buttonShowText = options.buttonShowText || "Show More";

    const numbers = []; // get all paragraph content length
    const items = this.querySelectorAll('p');

    items.forEach((item, index) => {
        numbers.push(item.innerText.length) // get the content length
    });

    let index = getIndex(numbers);
    let getVisibleCharacters = getVisibleCharacter(numbers, index);
    hideCharacter(items, index)

    // hide rest element which is out of maxChar
    for (let i = index + 1; i < numbers.length; i++) {
        items[i].style.display = "none";
    }

    // get all visible elements character 
    function getVisibleCharacter(arr, index) {
        let elementsContents, totalChar;
        if (index === 0) {
            return totalChar = maxChar;
        } else if (index === 1) {
            totalChar = maxChar - arr[0];
            return totalChar;
        } else {
            elementsContents = arr.slice(0, index);
            total = elementsContents.reduce((prev, curr) => {
                return prev + curr;
            }, 0);
            totalChar = maxChar - total;
            return totalChar
        }
    }

    // find out the index of element which element makes result greater than maxChar
    function getIndex(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum >= maxChar) {
                return i;
            }
        }
    }

    // hide character from the index element 
    function hideCharacter(arr, index) {
        let selectedElement = arr[index].innerHTML;
        let displayedChar = selectedElement.slice(0, getVisibleCharacters);
        let hideChar = selectedElement.slice(getVisibleCharacters, arr[index].innerHTML.length);
        arr[index].innerHTML = `${displayedChar}<span class="end-dots">...</span>`;

        // append a button 
        let moreContentButton = document.createElement('button');
        moreContentButton.classList.add("content-toggle-btn");
        moreContentButton.innerText = buttonShowText;
        arr[index].parentNode.appendChild(moreContentButton);

        // Event Listener for button
        arr[index].parentNode.querySelector('button').addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle("less-content");

            if (this.classList.contains('less-content')) {
                this.innerText = buttonHideText;
                items[index].querySelector('.end-dots').remove;
                arr[index].innerHTML = `${displayedChar}${hideChar}`;

                for (let i = index + 1; i < numbers.length; i++) {
                    items[i].setAttribute('style', ` block`)
                }
            } else {
                this.innerText = buttonShowText;
                arr[index].innerHTML = `${displayedChar}<span class="end-dots">...</span>`;

                for (let i = index + 1; i < numbers.length; i++) {
                    items[i].style.display = "none";
                }
            }
        })
    }
}