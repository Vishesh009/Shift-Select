const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheck;

function handleCheck(e) {
    //Check whether the shift key is down or not
    //Check whether we are checking it or not
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //Main code
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastCheck){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });

    }

    lastCheck =this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));