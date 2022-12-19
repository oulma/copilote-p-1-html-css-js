let con=0;

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then(res => res.json())
.then(data => {

    for(let i=0 ; i<10;i++){

        //console.log(data[i].id);

        if(i<=4){

            let result = document.querySelector('.card-container');
            result.innerHTML+=`<div class="card">
            <img class="img-card" src="${data[i].thumbnailUrl}" alt="Avatar" style="width:100%">
            <div class="container">
            <h4><b>${data[con].title}</b></h4> 
            </div>
          </div>`
        }else{



            let result = document.querySelector('.card-container1');
            result.innerHTML+=`<div class="card">
            <img class="img-card" src="${data[i].thumbnailUrl}" alt="Avatar" style="width:100%">
            <div class="container">
              <h4><b>${data[con].title}</b></h4> 
            </div>
          </div>`


        }

        con++;
    }
}
     );


// .catch(err => console.log(err))
//   .then(response => console.log(response.id))
//   .then(json => console.log(response))

 



  


