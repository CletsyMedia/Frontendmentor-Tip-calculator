let billInput,peopleInput, percent, active, customTip, peopleError, tipAmount, totalAmount, resetBtn;

billInput = document.getElementById("bill");
peopleInput = document.getElementById("noOfPeople");
percent = document.querySelectorAll(".tipPercent");
active = document.querySelector(".active");
customTip = document.getElementById("customTip");
peopleError = document.querySelector(".error");
tipAmount - document.querySelector('#tipAmt');
totalAmount = document.querySelector('#total');
resetBtn = document.querySelector('.reset');
btnColor = document.querySelector('.reset')


const calResult =(input)=>{
    let billing = Number((billInput).value);
    let numOfPeople = Number((peopleInput).value);
    let tip = `${((billing * input) / numOfPeople).toFixed(2)}`;
    let totalAmountBill = `${((billing + billing * input) /numOfPeople).toFixed(2)}`;

    document.getElementById('tipAmt').textContent = tip;
    document.getElementById('total').textContent = totalAmountBill;

    return;
};
percent.forEach((tipPercent)=>{
    tipPercent.onclick=()=>{
        let percentBtn = Number((tipPercent.textContent.replace("%", "")) / 100);
        active.classList.remove('active');
        customTip.value ="";

        tipPercent.classList.add('active');
        active = tipPercent;
        
        let billing = Number((billInput).value);
        let numOfPeople = Number((peopleInput).value);
        if(billing <= 0 || !Number(billing)){
            billInput.style.border="1px solid rgb(255, 0, 0)";
            return;
        }
        billInput.style.border="1px solid transparent";

        if(numOfPeople <= 0 || !Number(numOfPeople)){
            peopleError.innerText = "Can't be zero!";
            peopleInput.style.border="1px solid rgb(255, 0, 0)";
            return;
        }
        peopleInput.style.border = "1px solid transparent";
        peopleError.innerText = "";
        btnColor.classList.add("active");
        active = btnColor;

        calResult(percentBtn)
    };
});

billInput.onclick=()=>{
    customTip.value="";
    peopleInput.value="";
    active.classList.remove('active');
}

peopleInput.onclick=()=>{
    customTip.value="";
    active.classList.remove('active');
}
customTip.addEventListener("input", ()=>{
    let customValue = Number((customTip).value);
    active.classList.remove('active');
    active = customTip;
    let billing = Number((billInput).value);
        let numOfPeople = Number((peopleInput).value);
        if(billing <= 0 || !Number(billing)){
            billInput.style.border="1px solid rgb(255, 0, 0)";
            return;
        }
        billInput.style.border="1px solid transparent";

        if(numOfPeople <= 0 || !Number(numOfPeople)){
            peopleError.innerText = "Can't be zero!";
            peopleInput.style.border="1px solid rgb(255, 0, 0)";
            return;
        }
        peopleInput.style.border = "1px solid transparent";
        peopleError.innerText = "";
        btnColor.classList.add("active");
        active = btnColor;

        calResult(customValue);
});
resetBtn.addEventListener('click', ()=>{
    customTip.value = '';
    peopleInput.value = '';
    billInput.value = '';
    document.getElementById('tipAmt').textContent = '0.00';
    document.getElementById('total').textContent ='0.00';
    active.classList.remove('active')
    const defaultactive = document.querySelector('.default');
    active = defaultactive;
    billInput.style.border = "none";
    peopleInput.style.border = "none";

  })







