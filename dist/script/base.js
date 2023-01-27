// Using Strict mode on 
    'use strict mode';

// Dom Tree 

    // Profile Site 
        // Head of modal 
            // Modal Header Profile 
            const mhp = document.querySelector('#modal-Profile-title')
        // Body of modal
            // Modal Body Profile
            const mbp =  document.querySelector('#modal-Profile-body');
        












// Function Modal for setting on profile
    // value1 
    function modelprofile(value1) {
        console.log(value1)

        // Profile Title Image
            const pti = 'Change image'
        // Profile Body Image
            const pbi = 'Press save ofter adding image'

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
    }

