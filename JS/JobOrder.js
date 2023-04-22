document.addEventListener("DOMContentLoaded", function(event) {
    
  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)
      
  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
      toggle.addEventListener('click', ()=>{
          // show navbar
          nav.classList.toggle('show')
          // change icon
          toggle.classList.toggle('bx-x')
          // add padding to body
          bodypd.classList.toggle('body-pd')
          // add padding to header
          headerpd.classList.toggle('body-pd')
          })
      }
  }
  
  showNavbar('header-toggle','nav-bar','body-pd','header')
  
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')
  
  function colorLink(){
      if(linkColor){
          linkColor.forEach(l=> l.classList.remove('active'))
          this.classList.add('active')
      }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  // Your code to run since DOM is loaded and ready
});


$(document).ready(function() {

  // Get the timestamp of the last fetched data
  const lastTimestamp = $('#users-container').data('last-timestamp')
  
  // Define a function to fetch the data from the server
  function fetchData() {
    $.ajax({
      url: '/jobs?timestamp=' + lastTimestamp,
      type: 'GET',
      dataType: 'json',
      success: function(jobs) {
        // Update the HTML with the fetched data
        let html = ''
        for (let i = 0; i < jobs.length; i++) {
          html += '<div class="deleteContainer">';
          html += '<button class="deleteButton" onclick="deleteJob(' + i + ')">';
          html += '<div class="material-symbols-sharp" style="color: red;">delete</div>';
          html += '</button>';
          html += '</div>';
          html += '<div class="clickable-item' + i + '" onclick="showEntry(' + i + ')" data-id="' + jobs[i]._id + '" style="overflow: hidden; margin-top: -50px; margin-bottom: 10px;">';
          html += '<div class="project_prog">';
          html += '<span class="material-symbols-sharp">analytics</span>';
          html += '<div class="middle">';
          html += '<div class="left">';
          html += '<h3>Type of Work:' + jobs[i].TypeOfWork + '</h3>';
          html += '<h1>Client Name:' + jobs[i].name + '</h1>';
          html += '</div>';
          html += '</div>';
          html += '<small class="text-muted">Last 24 Hours</small>';
          html += '</div>';
          html += '<div class="additional-info" style="display: none;" id="info-' + i + '">';
          html += '<table class="table">';
          html += '<tr>';
          html += '<th style="width: auto;">Starting Date</th>';
          html += '<td>' + jobs[i].StartingDate + '</td>';
          html += '</tr>';
          html += '<tr>';
          html += '<th style="width: auto;">Expected Finish Date</th>';
          html += '<td>' + jobs[i].ExpectedFinishDate + '</td>';
          html += '</tr>';
          html += '<tr>';
          html += '<th style="width: auto;">Area</th>';
          html += '<td>' + jobs[i].Area + '</td>';
          html += '</tr>';
          html += '<tr>';
          html += '<th style="width: auto;">Unit</th>';
          html += '<td>' + jobs[i].Unit + '</td>';
          html += '</tr>';
          html += '<tr>';
          html += '<th style="width: auto;">Location</th>';
          html += '<td>' + jobs[i].Location + '</td>';
          html += '</tr>';
          html += '</table>';
          html += '</div>';
          html += '</div>';
        }
        $('#jobs-container').html(html);
      },
      error: function() {
        console.log('Error fetching data from the server')
      }
    })
  }

  // Call the fetchData function immediately
  fetchData();

  // Call the fetchData function every 1 seconds
  // setInterval(fetchData, 1000)
});

// Get the clickable items and the info table
const infoTable = document.querySelector('#info-table tbody')
const infoTC= document.querySelector('.info-table-container')
const dataContainer = document.querySelector('.data-container')

// Hide the data container by default
dataContainer.style.display = 'none'

// Loop through each clickable-item div and add a click event listener
function showEntry(number){
  const info = document.querySelector(`#info-${number}`).innerHTML

  // Populate the info table with the additional info
  infoTable.innerHTML = info

  // Show the data container
  dataContainer.style.display = 'block'
}

// const RFopenModalButtons = document.querySelectorAll('[data-modal-target="#RFmodal"]')
// const RFcloseModalButtons = document.querySelectorAll('[data-close-buttonRF]')
// const RFoverlay = document.getElementById('RFoverlay')

// RFopenModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     RFopenModal(modal)
//   })
// })

// RFoverlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.RFmodal.active')
//   modals.forEach(modal => {
//     RFcloseModal(modal)
//   })
// })

// RFcloseModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.RFmodal')
//     RFcloseModal(modal)
//   })
// })

// function RFopenModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   RFoverlay.classList.add('active')
// }

// function RFcloseModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   RFoverlay.classList.remove('active')
// }

// When the user clicks outside of the modal, close it
window.onclick = function(event) {
  // Get the modal elementconst
  const modalJO = document.getElementById('exampleModalJO')
  // Get the modal element
  const modalFR = document.getElementById('exampleModalFR')
  if (event.target === modalFR) {
    modalFR.style.display = "none"
  } else if (event.target === modalJO){
    modalJO.style.display = "none"
  }
}