export const checkValidData=(email, password)=>{

    const isEmailValid =/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);

    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!isEmailValid) return "email is not valid";
    if(!isPassValid) return "try a stronger password";

    return null;
};