// Common shared function here-----


// get input value by id
function getInputFieldValueById (id){
   const inputValue = document.getElementById(id).value;
   const inputValueNumber = Number(inputValue);
   return inputValueNumber; 
}

// get text value by id

function getTextFieldValueById (id){
   const textValue = document.getElementById(id).innerText;
   const textValueNumber = Number(textValue);
   return textValueNumber;
}

// get the section value by id

function getSectionById (id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the section by provided id

    document.getElementById(id).classList.remove('hidden');
    
}