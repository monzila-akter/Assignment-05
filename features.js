
const historyBtn = document.getElementById('show-history-btn');
const donationBtn = document.getElementById('show-donation-btn');

// call function for donation section

document.getElementById('show-donation-btn').addEventListener('click', function(){
    donationBtn.classList.add('text-black', "bg-lime-400", "border-none");
    donationBtn.classList.remove('bg-gray-200', 'bg-lime-300', 'text-gray-600')
    historyBtn.classList.remove('text-black', 'bg-lime-400');
    historyBtn.classList.add('bg-gray-200', 'text-gray-600');
      
    getSectionById('donation-section');
       
})


// call function for history section  

historyBtn.addEventListener('click', function(){
    historyBtn.classList.add("text-black", "bg-lime-400", "border-none");
    donationBtn.classList.remove('text-black', 'bg-lime-300', 'bg-lime-400');
    donationBtn.classList.add('bg-gray-200', 'text-gray-600');
    historyBtn.classList.remove('text-gray-600',  'bg-gray-200')
    

    getSectionById('history-section');
})