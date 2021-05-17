const closedEmo = document.querySelector('.closed');
const OpenEmo = document.querySelector('.open');
const mouth = document.querySelector('.mouth')

closedEmo.addEventListener('click', () =>{
      if(OpenEmo.classList.contains('open')){
            OpenEmo.classList.add('active');
            closedEmo.classList.remove('active');
      }

});


OpenEmo.addEventListener('click', () =>{
      if(closedEmo.classList.contains('closed')){
            closedEmo.classList.add('active');
            OpenEmo.classList.remove('active');
      }
});




// OpenEmo.addEventListener('click', () =>{
//       if(closedEmo.classList.contains('active')){
//             closedEmo.classList.add('active');
//             OpenEmo.classList.remove('active');
//       }
// });
