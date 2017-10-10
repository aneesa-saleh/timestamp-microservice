# Timestamp Microservice
Returns a JSON object with unix epoch time and raw time. It works if you pass either unix time or a date string.

## Usage
Pass a date string or unix time as a parameter in the url. Passing an invalid string or unix time will return a JSON object with null values.

### Example

https://timestamp-ms.herokuapp.com/December%2015,%202015
https://timestamp-ms.herokuapp.com/1450137600

Output:

`{ "unix": 1450137600, "natural": "December 15, 2015" }`

