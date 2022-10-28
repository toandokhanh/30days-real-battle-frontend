// Hàm xử lý validate
const validate = (inputElement, rule) => {
    const errorElement = inputElement.parentElement.querySelector('.form-message');
    const errorMessage = rule.check(inputElement.value)
                    if(errorMessage){
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.remove('valid');
                        inputElement.parentElement.classList.add('invalid');
                    }else {
                        inputElement.parentElement.classList.remove('invalid');
                        inputElement.parentElement.classList.add('valid');

                    }
}

// đối tượng
const validator = (opstion) => {
    //lấy element của form cần validate
    const formElement = document.querySelector(opstion.form)
    if(formElement){
        opstion.rules.forEach((rule) => {
            const inputElement = formElement.querySelector(rule.selector);
            if(inputElement){
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                    console.log(inputElement, rule);
                }
            }
        });
    }


}

// định nghĩa các rules
validator.isRequired = (selector, message) => {
    return {
        selector:selector,
        check: (value) => {
            return value.trim() ? undefined : message || "Nhập sai ! Vui lòng nhập lại";
        }
    }
}
validator.isEmail = (selector, message) => {
    return {
        selector:selector,
        check: (value) => {
            const regex = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
            return regex.test(value) ? undefined : message || "Nhập sai ! Vui lòng nhập lại";
        }
    }
}

validator.isPassword = (selector, message) => {
    return {
        selector:selector,
        check: (value) => {
            const regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            return regex.test(value) ? undefined : message || "Nhập sai ! Vui lòng nhập lại";
        }
    }
}
validator.isPhone = (selector, message) => {
    return {
        selector:selector,
        check: (value) => {
            const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
            return regex.test(value) ? undefined : message || "Nhập sai ! Vui lòng nhập lại";
        }
    }
}
validator.isConfirmPassword = (selector, condition, message) => {
    return {
        selector:selector,
        condition:condition,
        check: (value) => {
            const password = document.querySelector(condition);
            console.log(password.value);
            return value === password.value ? undefined : message || "Nhập sai ! Vui lòng nhập lại";
        }
    }
}