// Using Strict mode on 
    'use strict mode';

// Dom Tree 

    // Sign in 
        // Last Feed
            const last_feed_sign = document.querySelector('#last__feed');
        // Header of index 
            const mps = document.querySelector('#modal-index-title');
        // Modal body Index
            const mbi =  document.querySelector('#modal-index-body');
        // modal footer index
            const mfi = document.querySelector('#modal-index-footer');

    // Home Page 
        // Feed section 
            const fsh = document.querySelector('#tl-feed');

    // Profile Site 
        // Head of modal 
            // Modal Header Profile 
                const mhp = document.querySelector('#modal-profile-title')
        // Body of modal
            // Modal Body Profile
                const mbp =  document.querySelector('#modal-profile-body');
        // footer of modal
            // modal Footer Profile
                const mfp =  document.querySelector('#modal-profile-footer');
    





// Function Sign in Or sign up
    // Value1 btn
function signin() {
    // check value 
        

        // Title of model
        mps.innerHTML += `
            Pleas sign in

        `
        mbi.innerHTML += `
        <form method="get" action="/home.html" class="requires-validation">
            <div class="form-label-group pb-3">
                <input type="email" class="form-control" id="inputEmail" required autofocus>
            <label for="inputEmail">Email address</label>
            </div>
            <div class="form-label-group pb-3">
                <input type="password" class="form-control" id="inputPassword" required>
                <label for="inputPassword">Password</label>
                <a href="#">Forgott</a>
            </div>
            <button class="btn btn-small btn-primary" type="submit">Sign in</button>
      </form>
        `
}

function signup() {
    mps.innerHTML =+ ``
    mbi.innerHTML =+ ``
    
    mps.innerHTML += `
        Welcome to Tiny living 
    `
    mbi.innerHTML += `
        <form method="get" class="requires-validation" novalidate>
            <div class="form-label-group pb-3">
                <input type="text" name="firstname" class="form-control" id="firstname">
                <label for="firstname">First Name</label>
            </div>
            <div class="form-label-group pb-3">
                <input type="text" name="lastname" class="form-control" id="lastname">
                <label for="last name">Last name</label>
            </div>
            <div class="form-label-group pb-3">
                <input type="email" class="form-control" id="email">
                <label for="email">Email</label>
            </div>
        </form>
        <button class="btn btn-small btn-primary" type="submit">submit</button>
    `

}



// Function Modal for setting on profile
    // value1 
    function modelprofile(value1) {
        console.log(value1)

        // Reset the Modeler
            mhp.innerHTML + ``
            mbp.innerHTML + ``

        // Profile Title Image
            const pti = 'Change image'
        // Profile Body Image
            const pbi = 'Press save after adding new photo'
        // Profile Title Email 
            const pte =  'Change email'
        // Profile Body Email
            const pbe =  'Press save after adding new email'
        // Profile Title Password
            const ptp = 'Change Password'
        // Profile body Password
            const pbp = 'Press save after adding new password'
        // Profile title bio 
            const ptbio = 'Change Bio'
        // Profile body bio
            const pbbio = 'Press save after adding new bio'
        
        if(value1 === "image") {
            // Use for test
            // console.log('test ok')
            // Headline 
            mhp.innerHTML += `
                ${pti}

            `;
            mbp.innerHTML += `
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"></label>
                    <input type="file" name="" id="upload-email" class="form-control">
                    <p>${pbi}</p>
                </div>
            `
        }
        if(value1 === 'email') {
            console.log('Email start')
            mhp.innerHTML += `
                ${pte}

            `;
            mbp.innerHTML += `
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"></label>
                    <input type="email" name="" id="Change-email" class="form-control">
                    <p>${pbe}</p>
                </div>
            `;
        }
        if(value1 === 'password') {
            mhp.innerHTML += `
                ${ptp}
            `
            mbp.innerHTML += `
                <div class="mb-3">
                        <label for="recipient-name" class="col-form-label"></label>
                        <input type="password" name="" id="Change-password" class="form-control">
                        <p>${pbp}</p>
                </div>
            `
        }
        if(value1 === 'bio') {
            mhp.innerHTML += `
                ${ptbio}
            `
            mbp.innerHTML += `
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label"></label>
                    <input type="text" name="" id="Change-bio" class="form-control"></input>
                    <p>${pbbio}</p>
                </div>
            `
        }
    }
