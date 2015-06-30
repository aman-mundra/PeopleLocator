//Rough outline of code for the People Locator Project

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//constructor for the Employee
function Employee (name, roomID, email)
{
	this.name = name;
	this.roomID = roomID;
	this.email = email; 
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function EList()
{
	this.employees = [];
	this.firstindex = 0;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Employee information below will eventually be replaced with some data from a database (or excel file) */

//Creating an array to hold all the employees (of type Elist)
var employeeList = new EList();

//Creating individual employees
//TO DO: Replace the manual additions to the array with a 'PUSH' command
var employee1 = new Employee("Aman Mundra", "D3-1", "aman.s.mundra@gmail.com"); //parameters inside parenthesis 
//employeeList.employees[0] = employee1;
var employee2 = new Employee("John Doe", "D4-1", "john.doe@gmail.com");
//employeeList.employees[1] = employee2;
var employee3 = new Employee("Jane Doe", "D4-2", "jane.doe@gmail.com");
//employeeList.employees[2] = employee3;
var employee4 = new Employee("Shuchu Han", "D4-2", "shuchu.han@gmail.com");
//employeeList.employees[3] = employee4;
var employee5 = new Employee("Rudy Thomas", "D4-3", "rudy.thomas@gmail.com");
//employeeList.employees[4] = employee5;
var employee6 = new Employee("Jesse Daniels", "D4-3", "jesse.daniels@gmail.com");
//employeeList.employees[5] = employee6;
var employee7 = new Employee("Alvin Mathew", "D4-4", "alvin.mathew@gmail.com");
//employeeList.employees[6] = employee7;
var employee8 = new Employee("Kelly Ann", "D4-4", "kelly.ann@gmail.com");
//employeeList.employees[7] = employee8;
var employee9 = new Employee("Ben Chipkin", "D4-4", "ben.chipkin@gmail.com");
//employeeList.employees[8] = employee9;
var employee10 = new Employee("Kyle Peabody", "D4-4", "kyle.peabody@gmail.com");
//employeeList.employees[9] = employee10;
employeeList.employees.push(employee1, employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Console test to see if the employeelist array is working.
//Status: test works and prints out all the info for employee1 at array location [0]


	for (key in employeeList.employees[0])
		{
			console.log("<p>", key, ": ", employee1[key], "</p>");
		}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Console test to see cycling through the employees
//Status: Running with correct information

/*for (key in employee1)
{
	console.log(key, ": ", employee1[key]);
}
*/
	
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Declaration of global variable USERINPUT
var userinput = "";

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Fixing the name search method

var button1 = document.getElementById("button1");

button1.onclick = function()
{
	console.log("Button1 was clicked"); //This is just for testing purposes to ensure button is working
	userinput = prompt("Enter the name of the employee:");
	{
		for (var i = 0; i < employeeList.employees.length; i++)
		{
				if (employeeList.employees[i].hasOwnProperty(key))
				{
					if (employeeList.employees[i].name === userinput)
					{
						document.write("<p> Name: ", employeeList.employees[i].name, "</p>");
						document.write("<p> RoomID: ", employeeList.employees[i].roomID, "</p>");
						document.write("<p> Email: ", employeeList.employees[i].email, "</p>");
						document.write("<p> --------------------------------------------</p>");
					}
				}
		}
	}
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var button2 = document.getElementById("button2");

button2.onclick = function()
{
	console.log("Button2 was clicked");
	userinput = prompt("Enter a RoomID: ");
	{
		for (var i = 0; i < employeeList.employees.length; i++)
		{
				if (employeeList.employees[i].hasOwnProperty(key))
				{
					if (employeeList.employees[i].roomID === userinput)
					{
						document.write("<p> Name: ", employeeList.employees[i].name, "</p>");
						document.write("<p> RoomID: ", employeeList.employees[i].roomID, "</p>");
						document.write("<p> Email: ", employeeList.employees[i].email, "</p>");
						document.write("<p> --------------------------------------------</p>");
					}
				}
		}
	}
}



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXTINCT CODE: has been replaced with a loop
//This code is left behind for reference purposes only. 
//the for-in statements below need to be changed into loops to make the code more efficient
/*
var button1 = document.getElementById("button1");

button1.onclick = function()
{
	console.log("Button1 Registered");
	userinput = prompt("Enter the name of the employee:");
	
	{
		
		for (key in employee1)
		{
			if (employee1.hasOwnProperty(key))
			{
				if(employee1[key] === userinput)
				{
					for (key in employee1)
						{
							document.write("<p>", key, ": ", employee1[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee2)
		{
			if (employee2.hasOwnProperty(key))
			{
				if(employee2[key] === userinput)
				{
					for (key in employee2)
						{
							document.write("<p>", key, ": ", employee2[key], "</p>");
						}
				}
			}
		}

		for (key in employee3)
		{
			if (employee3.hasOwnProperty(key))
			{
				if(employee3[key] === userinput)
				{
					for (key in employee3)
						{
							document.write("<p>", key, ": ", employee3[key], "</p>");
						}
				}
			}
		}

		for (key in employee4)
		{
			if (employee4.hasOwnProperty(key))
			{
				if(employee4[key] === userinput)
				{
					for (key in employee4)
						{
							document.write("<p>", key, ": ", employee4[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee5)
		{
			if (employee5.hasOwnProperty(key))
			{
				if(employee5[key] === userinput)
				{
					for (key in employee5)
						{
							document.write("<p>", key, ": ", employee5[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee6)
		{
			if (employee6.hasOwnProperty(key))
			{
				if(employee6[key] === userinput)
				{
					for (key in employee6)
						{
							document.write("<p>", key, ": ", employee6[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee7)
		{
			if (employee7.hasOwnProperty(key))
			{
				if(employee7[key] === userinput)
				{
					for (key in employee7)
						{
							document.write("<p>", key, ": ", employee7[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee8)
		{
			if (employee8.hasOwnProperty(key))
			{
				if(employee8[key] === userinput)
				{
					for (key in employee8)
						{
							document.write("<p>", key, ": ", employee8[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee9)
		{
			if (employee9.hasOwnProperty(key))
			{
				if(employee9[key] === userinput)
				{
					for (key in employee9)
						{
							document.write("<p>", key, ": ", employee9[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee10)
		{
			if (employee10.hasOwnProperty(key))
			{
				if(employee10[key] === userinput)
				{
					for (key in employee10)
						{
							document.write("<p>", key, ": ", employee10[key], "</p>");
						}
				}
			}
		}
	
	}
	
	
	
};
*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Extinct code
/*

var button2 = document.getElementById("button2");

button2.onclick = function()
{
	console.log("Button2 Functioning");
	userinput = prompt("Enter the room number: ");
	
	{
		
		for (key in employee1)
		{
			if (employee1.hasOwnProperty(key))
			{
				if(employee1[key] === userinput)
				{
					for (key in employee1)
						{
							document.write("<p>", key, ": ", employee1[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee2)
		{
			if (employee2.hasOwnProperty(key))
			{
				if(employee2[key] === userinput)
				{
					for (key in employee2)
						{
							document.write("<p>", key, ": ", employee2[key], "</p>");
						}
				}
			}
		}

		for (key in employee3)
		{
			if (employee3.hasOwnProperty(key))
			{
				if(employee3[key] === userinput)
				{
					for (key in employee3)
						{
							document.write("<p>", key, ": ", employee3[key], "</p>");
						}
				}
			}
		}

		for (key in employee4)
		{
			if (employee4.hasOwnProperty(key))
			{
				if(employee4[key] === userinput)
				{
					for (key in employee4)
						{
							document.write("<p>", key, ": ", employee4[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee5)
		{
			if (employee5.hasOwnProperty(key))
			{
				if(employee5[key] === userinput)
				{
					for (key in employee5)
						{
							document.write("<p>", key, ": ", employee5[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee6)
		{
			if (employee6.hasOwnProperty(key))
			{
				if(employee6[key] === userinput)
				{
					for (key in employee6)
						{
							document.write("<p>", key, ": ", employee6[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee7)
		{
			if (employee7.hasOwnProperty(key))
			{
				if(employee7[key] === userinput)
				{
					for (key in employee7)
						{
							document.write("<p>", key, ": ", employee7[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee8)
		{
			if (employee8.hasOwnProperty(key))
			{
				if(employee8[key] === userinput)
				{
					for (key in employee8)
						{
							document.write("<p>", key, ": ", employee8[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee9)
		{
			if (employee9.hasOwnProperty(key))
			{
				if(employee9[key] === userinput)
				{
					for (key in employee9)
						{
							document.write("<p>", key, ": ", employee9[key], "</p>");
						}
				}
			}
		}
		
		for (key in employee10)
		{
			if (employee10.hasOwnProperty(key))
			{
				if(employee10[key] === userinput)
				{
					for (key in employee10)
						{
							document.write("<p>", key, ": ", employee10[key], "</p>");
						}
				}
			}
		}
	
	}
	
	
	
};
*/


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Searching for a user
//BRING THIS CODE BACK var userinput = prompt("Enter the name of the employee:")

/*if (userinput === "employee1")
{
	for (key in employee1)
	{
		document.write("<p>", key, ": ", employee1[key], "</p>");
	}
}
*/

//code to keep again
//THESE MULTIPLE FOR-IN STATEMENTS WILL BE REPLACED WITH A SINGULAR SEARCH METHOD THAT SEARCHES ALL EMPLOYEES




/*Employee.prototype.hasOwnValue = function(userinput)
{
	for (var prop in this)
	{
		if (this.hasOwnProperty(prop) && this[prop] === userinput)
		{
			document.write("Yes");
		}
		
		else
		{
			console.log("False");
		}
	}
}
*/

//Code copied from website

/*Object.prototype.hasOwnValue = function(val) {
    for(var prop in this) {
        if(this.hasOwnProperty(prop) && this[prop] === val) {
            return true;   
        }
    }
    return false;
};
*/

//Some more code copied from site
/*
var x = {
    someProperty: "findMe"
};
if(x.hasOwnValue("findMe")) {
    //Found it!
}
*/

/*for(var prop in x) {
    if(x.hasOwnProperty(prop)) {
        if(x[prop] === "myValue") {
            //Found myValue!
        }
    }
}
*/

/*
Functionality ideas...search for employee by name or room ID
Add radio buttons to decide between searching a room or searching an employee name
*/