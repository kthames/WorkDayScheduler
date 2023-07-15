let store;//global array to store work items
const hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];//to display 9-5 work hours
//current date and time in header
currentDay.innerHTML = dayjs().format('dddd, MMMM D | h:mm A');
//create each time slot, compare to current hour for past, present and future tense
hours.forEach((hour,i) => {
  let rH = i+9;
  let cH = dayjs().format('H');

  main.innerHTML += `
  <div class="row time-block ${rH>cH ? 'future' : rH<cH ? 'past' : 'present'}">
    <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
    <textarea id = "plannerText${i}" class="col-8 col-md-10 description" rows="3"></textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>`;
});
//upon clicking any save button all values are saved into array and saved to local storage
$('button').click(function(e){
  e.preventDefault();
  storeWork = [];

  storeWork[0] = $('#plannerText0').val();
  storeWork[1] = $('#plannerText1').val();
  storeWork[2] = $('#plannerText2').val();
  storeWork[3] = $('#plannerText3').val();
  storeWork[4] = $('#plannerText4').val();
  storeWork[5] = $('#plannerText5').val();
  storeWork[6] = $('#plannerText6').val();
  storeWork[7] = $('#plannerText7').val();
  storeWork[8] = $('#plannerText8').val();

  console.log(storeWork);

  saveWorkToStorage(storeWork);

})

// Takes the array of work items and saves them in localStorage.
function saveWorkToStorage(savedWork) {
  localStorage.setItem('savedWork', JSON.stringify(savedWork));
  console.log("saved");
}

//checks for values and returns saved work items array
function readWorkFromStorage() {
  var work = localStorage.getItem('savedWork');
  if (work) {
    work = JSON.parse(work);
  } else {
    work = [];
  }
  return work;
}

//prints text from local storage to DOM
function printWorkText() {

  storedWork = readWorkFromStorage();
  console.log(storedWork);

  $('#plannerText0').val(storedWork[0]);
  $('#plannerText1').val(storedWork[1]);
  $('#plannerText2').val(storedWork[2]);
  $('#plannerText3').val(storedWork[3]);
  $('#plannerText4').val(storedWork[4]);
  $('#plannerText5').val(storedWork[5]);
  $('#plannerText6').val(storedWork[6]);
  $('#plannerText7').val(storedWork[7]);
  $('#plannerText8').val(storedWork[8]);

}

//called upon page loading to print saved work items
printWorkText();


