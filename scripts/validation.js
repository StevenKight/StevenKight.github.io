// TODO #2: add constants referecing the HTML objects in the Emergency Contact section

const emergencyNotice = document.querySelector("#emergencyNotice");

const emergencyContactFirst = document.querySelector("#emergencyContactFirst");
const emergencyContactLast = document.querySelector("#emergencyContactLast");
const emergencyContactRelation = document.querySelector("#emergencyContactRelation");
const emergencyContactPhone = document.querySelector("#emergencyContactPhone");

/**
  * Example starter JavaScript for disabling form submissions if 
  * there are invalid fields  
  * 
  * Do not modify this function.
  */ 
 (function () {
    'use strict';
    window.addEventListener('load', validationEventHandler, false);
  })();

  /**
   * Event handler for the validation of the form data.
   */
  function validationEventHandler() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {

        let emergencyValid = checkEmergencyValid();

        // *** TODO #5 modify this condition ***
        if (form.checkValidity() === false || emergencyValid === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }

  /** TODO #4
   * Validates the emergency contact information. If any of the 
   * emergency contact fields are filled out, then ALL fields 
   * must be filled out. We cannot allow a form to submit with only
   * partial emergency contact information filled out.
   * 
   * @returns true if the emergency contact information is valid
   */
  
  function checkEmergencyValid() {
    let emergencyFirst = (emergencyContactFirst.value !== "");
    let emergencyLast = (emergencyContactLast.value !== "");
    let emergencyRelation = (emergencyContactRelation.value !== "--- Select an Emergency Relation ---");
    let emergencyPhone = (emergencyContactPhone.value !== "");

    console.log(emergencyFirst + " " + emergencyLast + " " + emergencyRelation + " " + emergencyPhone);

    if (emergencyFirst && emergencyLast && emergencyRelation && emergencyPhone) {
      setEmergencyNoticeClass("invisible");
      return true;
    } else if (!emergencyFirst && !emergencyLast && !emergencyRelation && !emergencyPhone) {
      setEmergencyNoticeClass("invisible");
      return true;
    } else {
      setEmergencyNoticeClass("visible");
      return false;
    }
  }


  /** TODO #3
   * set the emergency notice class by either removing or adding
   * the className to the classList.
   * 
   * @param {String} className the name of the class to add to the classList
   */
  
  function setEmergencyNoticeClass(classname) {
    if (classname === 'visible') {
      emergencyNotice.classList.remove("invisible");
      emergencyNotice.classList.add("visible");
    } else {
      emergencyNotice.classList.remove("visible");
      emergencyNotice.classList.add("invisible");
    }
  }