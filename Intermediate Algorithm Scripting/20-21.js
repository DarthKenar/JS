const Person = function(first, last) {

    let firstName = first
    let lastName = last
  
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
    this.getFullName = () => this.getFirstName + " " + this.getLastName;
  
    this.setFirstName = (first) => firstName = first;
    this.setLastName = (last) => lastName = last;
    this.setFullName = function(first, last) {
      this.firstName(first);
      this.lastName(last);
      return this.getFullName
    };
  };

  //

  
