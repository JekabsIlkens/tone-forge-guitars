<h1>
    <img align="center" alt="TFG-LOGO" width="1500px" src="https://i.postimg.cc/ZK1gQH02/TFG-banner.png"/>
</h1>

## Table of Contents
**[Development Notes](#development-notes)**<br>
**[Installation Instructions](#installation-instructions)**<br>
**[User Journey Showcase](#user-journey-showcase)**<br>

## Development Notes

**Tech Stack:** Laravel + React + Inertia + MySQL + Tailwind + Stripe API

**To-Do List:**
- [ ] Ability to update cart item quantity on cart page
- [ ] Stripe Webhook listener to correctly track order status
- [x] Shipping address details for customers before purchase
- [ ] Admin panel for managing products and active orders

## Installation Instructions:

### Ensure you have the following installed:
- PHP (version 8.2 or later)
- Composer (for PHP dependencies)
- Symfony CLI (for serving over https)
- Node/npm (for frontend dependencies and asset building)
- MySQL or PostgreSQL (for a local database server)

### Clone the repository on your local machine and step into the project directory:
```shell
git clone https://github.com/JekabsIlkens/tone-forge-guitars.git

cd tone-forge-guitars
```

### Open .env.example, add your Stripe API test keys and local database credentials:
```shell
STRIPE_KEY=public_key_test
STRIPE_SECRET=secret_key_test

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
symfony serve                       # Starts the Symfony server
```

## User Journey Showcase:
<img src='https://i.postimg.cc/y6v1xJrN/1.png' alt='page-1' width="1200px"/> <br/>
<img src='https://i.postimg.cc/158QzvqW/2.png' alt='page-2' width="1200px"/> <br/>
<img src='https://i.postimg.cc/Pqjs2hFc/3.png' alt='page-3' width="1200px"/> <br/>
<img src='https://i.postimg.cc/T1j1kBsG/4.png' alt='page-4' width="1200px"/> <br/>
<img src='https://i.postimg.cc/ryYB75P5/5.png' alt='page-5' width="1200px"/> <br/>
<img src='https://i.postimg.cc/mg7KcJ2S/6.png' alt='page-6' width="1200px"/> <br/>
<img src='https://i.postimg.cc/Tw3s4Pjk/7.png' alt='page-7' width="1200px"/> <br/>
<img src='https://i.postimg.cc/gjwTGBT8/8.png' alt='page-8' width="1200px"/> <br/>
<img src='https://i.postimg.cc/RVHD8yfz/9.png' alt='page-9' width="1200px"/> <br/>
<img src='https://i.postimg.cc/t4dmR62S/10.png' alt='page-10' width="1200px"/> <br/>
