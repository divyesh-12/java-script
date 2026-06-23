function getfullname(person){
    return `${person.firstname} ${person.lastname}`;
}

const coustmer = {
        firstname : "divyesh",
        lastname : "chavda",
        age : 21
    };
console.log(getfullname(coustmer));
