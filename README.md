# Installation

## Import SQL Database
`mysql -u root -p simpleview < simpleview_backup.sql`

## Create and Configure backend/.env File
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

# Application Screenshot
![Application Screenshot](screenshot.png?raw=true "Application Screenshot")