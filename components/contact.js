app.component('contact-form', {
    props: {},
    template: /* html */
    `
    <form action="scripts\contactSubmitted.php" 
        method="post" enctype="text/plain">
        <div class="row mb-3 mt-4">
            <div class="col">
                <label class="form-label" for="firstname">First Name<sup>*</sup></label>
                <input type="text" 
                placeholder="First Name" 
                id="firstname" name="firstname" 
                class="form-control" required>
                <div class="invalid-feedback">
                    Please provide your first name.
                </div>
            </div>
            <div class="col">
                <label class="form-label" for="lastname">Last Name<sup>*</sup></label>
                <input type="text" 
                placeholder="Last Name" 
                id="lastname" name="lastname" 
                class="form-control" required>
                <div class="invalid-feedback">
                    Please provide your last name.
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col">
                <label class="form-label" for="phone">Phone</label>
                <input type="tel" 
                placeholder="000-000-0000" 
                id="phone" name="phone" 
                class="form-control">
            </div>                  
            <div class="col">
                <label class="form-label" for="email">Email<sup>*</sup></label>
                <input type="email" 
                placeholder="info@example.com" 
                id="email" name="email"
                class="form-control" required>
                <div class="invalid-feedback">
                    Please provide your email.
                </div>
            </div>
        </div>
        <div class="row mb-3 mt-5">
            <button class="col-3 contactButton" type="submit" value="Send">Submit</button>
            <button class="col-3 contactButton" type="reset" value="Reset">Reset</button>
        </div>
    </form>
    `
});