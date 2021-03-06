

let pressedKeys = [];

function addNewKey(numberOfKey) {
    newKey = {
        keyNumber: numberOfKey,
        timesPressed: 1
    }
    pressedKeys.push(newKey);
}

function addPressedKeys(numberOfKey) {
    let timesPressed = findKey(numberOfKey);
    return timesPressed;
}

function findKey(keyNumber) {
    let numberFound = false;
    let result = 0;
    pressedKeys.some(key => { 
        if (key.keyNumber == keyNumber) { 
            result = key.timesPressed + 1;
            key.timesPressed = result;
            numberFound = true;
            return result; 
        }
    } );
    if (numberFound == false) {
        addNewKey(keyNumber);
        result = 1;
    }
    
    return result;
}

function playSound(div) {
    
    let dataKey = div.getAttribute('data-key');
    let fileList = document.querySelectorAll('audio');
    console.dir(div);
    fileList.forEach((item)=> {
        if (item.dataset.key == parseInt(dataKey)) {
            item.currentTime = 0;
            item.play();
            div.classList.add("playing");
            //div.classList.add("pushed");
            item.addEventListener("ended", () => {
                div.classList.remove("playing");
            });
            let pxAdjust = 10 * addPressedKeys(item.dataset.key);
            
            div.style.transform = `translateY(${pxAdjust}px)`;
        }
    })
    
}

