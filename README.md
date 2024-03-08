# Affaldsguiden
 Affaldsguiden lavet af Niklas Christiansen D.08/03/24

 ## Installation
 1.Start med at hente projektet
 2. Naviger til rodmappen
 3. Åben en terminal og skriv følgende kommando:
 ```
npm install
```
4. Derefter skriv det her for start den op
```
npm run dev
```
5. Husk og lav din egen .env file
```
# Port Number
PORT = 3000

# Database Credentials
DBHOST = [localhost]
DBNAME = [database_name]
DBUSER = [database_user]
DBPASSWD = [database_password]

# Token keys ############

# Token Access Key
TOKEN_ACCESS_KEY = myprivatekey # SECRET STRING 
TOKEN_ACCESS_EXPIRATION_SECS = 3600 # NUMBER OF EXPIRATION SECONDS: 1 HOUR

# Token Refresh Key
TOKEN_REFRESH_KEY = myprivaterefreshkey # SECRET STRING 
TOKEN_REFRESH_EXPIRATION_SECS = 86400 # NUMBER OF EXPIRATION SECONDS: 1 DAY
```
nu skulle den køre på en localhost 😊
