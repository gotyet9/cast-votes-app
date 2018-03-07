export const checkEmailAuth = () => {
    let email=localStorage.getItem('email')
    if(email){
        return true
    }
    else{
        return false
    }
}