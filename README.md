# E-commerce website using MERN!
## URL: https://myamazonpage.herokuapp.com/

## Client:
Move to the client directory and run the following code in the terminal
`- npm install`

The client port `3000`

## Server:
Move to the server directory and run the following code in the terminal
`- npm install`
`- npm i nodemon`

The server port `5000`

## Testing the API using POSTMAN:
Create a collection name `myamazon`
**1. SIGN UP api test**
- Start the server `nodemon app.js`

    > Create a New Request Signup
    > Change to POST and URL: http://localhost:5000/register

- In the Headers section:
	- Key: Content-Type
	- Value: application/json

- In the Body section:

		{
			"name":"<username>",
			"email":"<user-email-id>",
			"phone":<user-mobile>,
			"password":"<user-password>",
			"cpassword":"<user-password>"
		}
- Then Send the request 
**Status Code and Response**

	| Status | Message |
	|--|--|
	| 422 |  Email already exist |
	| 422| Please specify all fields |
	|201| User registered successfully
**1. SIGN IN api test**
- Start the server `nodemon app.js`

    > Create a New Request Login
    > Change to POST and URL: http://localhost:5000/login

- In the Headers section:
	- Key: Content-Type
	- Value: application/json

- In the Body section:

		{
			"email":"<user-email-id>",
			"password":"<user-password>",
		}
- Then Send the request 
**Status Code and Response**

	| Status | Message |
	|--|--|
	| 400 |  Email or password does not match |
	| 422| Please specify all fields |
	|200| User login successfully