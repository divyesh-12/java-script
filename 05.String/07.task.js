const getdomain = (email) => {
    let split_email = email.split("@")
    return `Domain : ${split_email[1]}`;
}
console.log(getdomain("divyesh@outlook.com"))