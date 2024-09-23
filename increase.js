// add money to card balance



document.getElementById('donation-btn').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('add-money-input');
    const balance = getTextFieldValueById('balance');
    const availableBalance = getTextFieldValueById('available-balance')
    const modal = document.getElementById('my_modal_1');


    if(isNaN(addMoney) || addMoney > availableBalance || addMoney <= 0){
        alert('Invalid Donation Amount ! Please try again.');
        return;
    }
     
    const newBalance = balance + addMoney;
    const newAvailableBalance = availableBalance - addMoney;
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('available-balance').innerText = newAvailableBalance;
    modal.showModal();

// show the transaction history inner texts
const date = new Date();
const dateString = date.toString();

// Show the transaction history
const div = document.createElement('div');
div.classList.add('border-2', 'p-5', 'rounded-xl', 'space-y-4');

div.innerHTML = `
    <h2 class="text-xl font-bold">${addMoney} Taka is donated for Flood-2024 at Noakhali, Bangladesh</h2>
    <p class="text-gray-600">Date: ${dateString}</p>
`;

document.getElementById('history-container').appendChild(div);

})

// card two

document.getElementById('donation-btn-2').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('add-money-input-2');
    const balance = getTextFieldValueById('balance-2');
    const availableBalance = getTextFieldValueById('available-balance')
    const modal = document.getElementById('my_modal_1')


    if(isNaN(addMoney) || addMoney > availableBalance || addMoney <= 0){
        alert('Invalid Donation Amount ! Please try again.');
        return;
    }
     
    const newBalance = balance + addMoney;
    const newAvailableBalance = availableBalance - addMoney;
    document.getElementById('balance-2').innerText = newBalance;
    document.getElementById('available-balance').innerText = newAvailableBalance;
    modal.showModal();


// show the transaction history inner texts
const date = new Date();
const dateString = date.toString();

// Show the transaction history
const div = document.createElement('div');
div.classList.add('border-2', 'p-5', 'rounded-xl', 'space-y-4');

div.innerHTML = `
    <h2 class="text-xl font-bold">${addMoney} Taka is Donated for Flood Relief in Feni, Bangladesh</h2>
    <p class="text-gray-600">Date: ${dateString}</p>
`;

document.getElementById('history-container').appendChild(div);
})

// card three

document.getElementById('donation-btn-3').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('add-money-input-3');
    const balance = getTextFieldValueById('balance-3');
    const availableBalance = getTextFieldValueById('available-balance')
    const modal = document.getElementById('my_modal_1')


    if(isNaN(addMoney) || addMoney > availableBalance || addMoney <= 0){
        alert('Invalid Donation Amount ! Please try again.');
        return;
    }
     
    const newBalance = balance + addMoney;
    const newAvailableBalance = availableBalance - addMoney;
    document.getElementById('balance-3').innerText = newBalance;
    document.getElementById('available-balance').innerText = newAvailableBalance;
    modal.showModal();


// show the transaction history inner texts
const date = new Date();
const dateString = date.toString();

// Show the transaction history
const div = document.createElement('div');
div.classList.add('border-2', 'p-5', 'rounded-xl', 'space-y-4');

div.innerHTML = `
    <h2 class="text-xl font-bold">${addMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
    <p class="text-gray-600">Date: ${dateString}</p>
`;

document.getElementById('history-container').appendChild(div);
})



