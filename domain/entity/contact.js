class Contact {
    constructor (description, name, surname, email, telephone){
        this.description = description;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.telephone = telephone;
    }

    static toJson(array){
        return "desde Contact";
        // asjson.push({ 'name': rows[i].name, 'surname': rows[i].surname });
    }
}
module.exports = Contact;