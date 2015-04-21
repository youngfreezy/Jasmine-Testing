function AddressBook(){

	this.contacts = [];
	this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb){
	var self = this;

	//testing for async
	
	setTimeout(function(){

		self.initialComplete = true;
		if(cb){
			return cb();
		}
	}, 3);
}

AddressBook.prototype.addContact= function(contact){
	this.contacts.push(contact);
	}

AddressBook.prototype.getContact= function(index){
	return this.contacts[index];
	}

AddressBook.prototype.deleteContact = function(index){
	this.contacts.splice(index,1);
}