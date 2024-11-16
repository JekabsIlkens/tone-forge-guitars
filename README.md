<h1>
    <img align="left" alt="TFG-LOGO" width="75px" src="https://i.postimg.cc/NFc36wMx/TFG-nbg.png"/>
    | Tone Forge Guitars | eCommerce
</h1>

**Tech Stack:** Laravel + React + Inertia + MySQL + Tailwind + Stripe API

### Ensure you have the following installed:
- PHP (version 8.2 or later)
- Composer (for PHP dependencies)
- Node/npm (for frontend dependencies and asset building)
- MySQL or PostgreSQL (for a local database server)

## Instructions on how to install and run the application:

### Clone the repository on your local machine and step into the project directory:
```shell
git clone https://github.com/JekabsIlkens/tone-forge-guitars.git

cd tone-forge-guitars
```

### Open .env.example and configure the database credentials to match your local setup:
```shell
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
```

### Run the setup script to install dependencies and prepare the database:
```shell
setup.bat
```

### Run the start script to launch the local development server:
```shell
start.bat
```

### If you encounter any issues execute these commands manually in the specified order:
```shell
copy .env.example .env              # Creates the environment configuration file
composer install                    # Installs the required PHP dependencies
npm install                         # Installs the required front-end dependencies
npm run build                       # Builds the required front-end assets
php artisan key:generate            # Generates the application key
php artisan migrate:fresh           # Runs the database migrations
php artisan db:seed                 # Seeds the database

npm run dev                         # Starts the Vite development server
php artisan serve                   # Starts the Laravel server
```
