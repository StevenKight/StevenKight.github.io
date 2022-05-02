app.component('resume', {
    data(){
        return {
            resume: false
        }
    },
    methods: {
        toggleSection(){
            this.resume = !this.resume;
        }
    },
    props: {
        
    },
    template: /* html */
    `
    <div class="accordion">
        <div class="accord-item">
            <h2 class="accord-header" id="headingOne">
                <button class="accord-button" type="button" @click="toggleSection()">
                    Resume
                    <i class="arrow" :class="{up: resume, down: !resume}"></i>
                </button>
            </h2>
            <div id="collapseResume">
                <div class="accord-body" :class="{show: resume, hidden: !resume}">
                    <div class="row mb-3 mt-4">
                        <div class="col">
                        <label class="form-label" for="firstname">First Name<sup>*</sup></label>
                        <input type="text" 
                            placeholder="First Name" 
                            id="firstname" name="firstname" 
                            class="form-control"
                            required>
                            <div class="invalid-feedback">
                            Please provide your first name.
                            </div>
                        </div>
                        <div class="col">
                        <label class="form-label" for="lastname">Last Name<sup>*</sup></label>
                        <input type="text" 
                            placeholder="Last Name" 
                            id="lastname" name="lastname" 
                            class="form-control"
                            >
                            <div class="invalid-feedback">
                            Please provide your last name.
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <label class="form-label" for="address1">Address Line 1<sup>*</sup></label>
                        <input type="text" 
                            placeholder="123 Example Street" 
                            id="address1" name="address1"
                            class="form-control"
                            >
                        </div>
                        <div class="col">
                        <label class="form-label" for="address2">Address Line 2</label>
                        <input type="text" 
                            placeholder="Suite 900" 
                            id="address2" name="address2"
                            class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <label class="form-label" for="city">City<sup>*</sup></label>
                        <input type="text" 
                            placeholder="Roswell" 
                            id="city" name="city"
                            class="form-control"
                            >
                        </div>
                        <div class="col">
                        <label class="form-label" for="physicalstate">State<sup>*</sup></label>
                        <select name="physicalstate" id="physicalstate" 
                            class="form-select"
                            >
                            <option value="">Choose ... </option>
                            <option value="AL">Alabama</option>
                            <option value="GA" selected>Georgia</option>
                            <option value="TN">Tennessee</option>
                            <option value="SC">South Caroline</option>
                            <option value="Fl">Florida</option>
                        </select>
                        </div>
                        <div class="col">
                        <label class="form-label" for="zip">Zip<sup>*</sup></label>
                        <input type="text" 
                            placeholder="30075" 
                            id="zip" name="zip"
                            class="form-control"
                            >
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                        <label class="form-label" for="phone">Phone<sup>*</sup></label>
                        <input type="tel" 
                            placeholder="000-000-0000" 
                            id="phone" name="phone" 
                            class="form-control"
                            >
                        </div>                  
                        <div class="col">
                        <label class="form-label" for="email">Email</label>
                        <input type="email" 
                            placeholder="info@example.com" 
                            id="email" name="email"
                            class="form-control"
                            >
                        </div>
                    </div>
                </div> 
            </div>
        </div> 
    </div>
    `
});

