// Use strice mode on 
'use strict';

// Dom Tree 
    // Profile feed 
        const pf =  document.querySelector("#Profile_feed");


// Last Post
// This only show 3 last post 
function lastPost() {
    let pLenght = tlFeed.length
    
    tlFeed.forEach(tf => {
        pf.innerHTML += `
        <div class="col-lg-2 col-mb-4 pb-3">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('${tf.image}'); background-position: center; background-size: cover;">
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1" >
                    <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                        ${tf.title}
                    </h3>
                    <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                            <img src="${tf.meta.UserImage}" alt="User image" width="32" height="32" class="rounded-circle border border-white">
                        </li>
                        <li class="d-flex align-items-center me-3">
                            <small>
                            ${tf.place}
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
    });
}

lastPost()