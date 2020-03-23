# Mutation

## REST API Mutation application

### Request

`GET`

http://mutation-env.eba-xqvvbtab.us-east-1.elasticbeanstalk.com/api/stats

### Response

    HTTP/1.1 200 OK
    Date: Thu, 22 Mar 2020 11:42:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Thing

### Request

`POST`

  http://mutation-env.eba-xqvvbtab.us-east-1.elasticbeanstalk.com/api/mutation

  body (JSON)
  
  {
	  "dna": ["ATGCGA","w","w","AGAAGG","CCCCTA","w"]
  }
### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    true/false 
