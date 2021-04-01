const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');
const form = document.querySelector('.mf-form');
const declaration = document.getElementById('declaration');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const now = new Date();
    const candidate = {
        NameSurname: form.q1.value,
        year: form.q2.value,
        email: form.q3.value,
        phone: form.q4.value,
        dataName: form.q5.value,
        rodo: form.q6.value,
        permission: form.q7.value,
        send_at: firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('name_of_collection_from_firestore').add(candidate).then(()=>{
        console.log('candidate added');
    }).catch(err =>{
        console.log(arr);
    })
    scrollTo(0,0);
    form.classList.add('d-none');
    result.classList.remove('d-none');
    declaration.classList.add('d-none');
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;;
        if(output === 99){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 30);
    
    setTimeout(() => {
        result2.classList.remove('d-none');
    },3000); // after 3 seconds

      var templateParams = {
          name: form.q3.value,
      };
     
       emailjs.send('service_generatedCode', 'template_generatedCode', templateParams)
           .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
           }, function(error) {
              console.log('FAILED...', error);
           });
})