# Installation

## Import SQL Database
`mysql -u username -p simpleview < simpleview_backup.sql;`

## Create backend/.env File
```
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=simpleview
```

## Run the install-all Script
`npm run install-all`

# Usage
## Start the Application
`npm start`