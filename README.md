# NODE-EXPRESS TEMPLATE PROJECT

## DONE

* Eslint validates our own guidelines: [https://github.com/icapps/coding-guidelines/tree/master/Web]()
* Editorconfig is geconfigureerd
* README.md
* 'docs' directory
  * .env.sample file which is like real .env file with dummy values
* Code coverage (istanbul)
* Test directory:
  * backend (NodeJS): mocha / chai / sinon
  * test helper
  * mocha.opts
* Migration directory
* Seeds directory

## TODO
* 'docs' directory
  * serve/build/test/deploy process
  * special notes
  * special processes
  * mocked data; e.g. debug.loginUser() via console should be documented
  * testing (setup/running/continuous integration)
  * database migration scripts
  * reference to deeper documentation in /docs directory
* all api endpoints should be documented through Swagger
* all methods should have a JSdoc block: http://usejsdoc.org/
* contract testing for api
* Security
  * Security HTTP Headers
    * Strict-Transport-Security enforces secure (HTTP over SSL/TLS) connections to the server
    * X-Frame-Options provides clickjacking protection
    * X-XSS-Protection enables the Cross-site scripting (XSS) filter built into most recent web browsers
    * X-Content-Type-Options prevents browsers from MIME-sniffing a response away from the declared content-type
    * Content-Security-Policy prevents a wide range of attacks, including Cross-site scripting and other cross-site injections
  * Brute Force Protection
  * Cookie Flags The following is a list of the attributes that can be set for each cookie and what they mean:
    * secure - this attribute tells the browser to only send the cookie if the request is being sent over HTTPS.
    * HttpOnly - this attribute is used to help prevent attacks such as cross-site scripting, since it does not allow the cookie to be accessed via JavaScript.
  * Cookie Scope
    * domain - this attribute is used to compare against the domain of the server in which the URL is being requested. If the domain matches or if it is a sub-domain, then the path attribute will be checked next.
    * path - in addition to the domain, the URL path that the cookie is valid for can be specified. If the domain and path match, then the cookie will be sent in the request.
    * expires - this attribute is used to set persistent cookies, since the cookie does not expire until the set date is exceeded
  * CSRF
  * XSS
  * SQL Injection
  * Command Injection
  * Denial of Service
    * account lockout
    * Regular Expression (https://www.npmjs.com/package/safe-regex)

## Install

## Testing

## Coverage

## Dependencies

## Contributing

### Coding guidelines

## License


