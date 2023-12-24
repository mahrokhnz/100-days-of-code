const inputs = document.getElementsByTagName('input')
const submit = document.querySelector('.submit')
const reason = document.getElementById('reason')

const inputsArray = [...inputs]

function submitHandler() {
    inputsArray?.map((input) => {
        if (input.type === 'text') {
            if (input.validity.tooShort) {
                input.setCustomValidity("I am expecting a longer text, at least 4 character!");
            } else {
                input.setCustomValidity("");
            }
        }

        if (input.type === 'number') {
            if (input.validity.rangeUnderflow) {
                input.setCustomValidity("You should be older to fill out this form!");
            } else {
                input.setCustomValidity("");
            }
        }

        if (input.type === 'email') {
            if (input.validity.typeMismatch) {
                input.setCustomValidity("I am expecting an email address!");
            } else {
                input.setCustomValidity("");
            }
        }
    })

    if (reason.validity.tooShort) {
        reason.setCustomValidity("I am expecting a longer text, at least 10 character!");
    } else {
        reason.setCustomValidity("");
    }
}

submit.addEventListener('click', submitHandler)