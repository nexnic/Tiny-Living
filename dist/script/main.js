// Strict mode on 
    'use strict'


// Function for feed 
function feed() {
    // Check the array
   

    tlFeed.forEach(tiny => {
        console.log(tiny.title)
        fsh.innerHTML += `
        <div class="col-lg-8">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('${tiny.image}'); background-position: center; background-size: cover;">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" >
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                        ${tiny.title}
                    </h3>
                    <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                            <img src="${tiny.meta.UserImage}" alt="User image" width="32" height="32" class="rounded-circle border border-white">
                        </li>
                        <li class="d-flex align-items-center me-3">
                        <small>
                            ${tiny.place}
                        </small>
                    </li>
                    <li class="d-flex align-items-center">
                        <button type="button" class="btn btn-primary"> Edit</button>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        `

    })
}

feed() 