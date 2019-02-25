

//// START SERVER

node index


///// SAY HELLO ( via Postman )  WITH:

http://localhost:3000/hello

http method: POST

Posting an empty or non existent post object: 

RETURNS:

{
    "'Hello' back atacha!": "Did you want to post something?"
}

Posting an object such as: 

{"HI -": "Anyone out there?"}

RETURNS: 

{
    "'Hello' back atacha! You posted this:": {
        "HI -": "Anyone out there?"
    }
}



