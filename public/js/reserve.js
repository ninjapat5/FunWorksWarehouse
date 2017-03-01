function checkInfo() {

	var firstname = document.forms["create"]["first-name"].value;
	var lastname = document.forms["create"]["last-name"].value;
	var email = document.forms["create"]["email"].value;
	var people = document.forms["create"]["people"].value;
	var date = document.forms["create"]["date"].value;
	var time = document.forms["create"]["time"].value;



	if (firstname == null || firstname == "") {
		alert("Please fill out all the information");
		return false;
	} else {
		if (lastname == null || lastname == "") {
			alert("Please fill out all the information");
			return false;
		} else {
			if (email == null || email == "") {
				alert("Please fill out all the information");
				return false;
			} else {
				if (people == null || people == "") {
					alert("Please fill out all the information");
					return false;
				} else {
					if (date == null || date == "") {
						alert("Please fill out all the information");
						return false;
					} else {
						if (time == null || time == "") {
							alert("Please fill out all the information");
							return false;
						} else {
							return true;
						}
					}
				}
			}
		}
	}	
}