<h1>
    <img align="center" alt="TFG-LOGO" width="1500px" src="https://i.postimg.cc/ZK1gQH02/TFG-banner.png"/>
</h1>

## Table of Contents
**[Development Notes](#development-notes)**<br/>
**[Installation Instructions](#installation-instructions)**<br/>
**[User Journey Showcase](#user-journey-showcase)**<br/>

## Development Notes

**Tech Stack:** Laravel + React + Inertia + MySQL + Tailwind + Stripe API

**To-Do List:**
- [x] Refactor messy routing to better comply with RESTful
- [x] Shipping address details for customers before purchase
- [ ] Admin panel for managing products and active orders
- [ ] Stripe Webhook listener to correctly track order status
- [ ] Ability to update cart item quantity on cart page

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
**Note:** may not represent current state (depends on how often I update these) <br/> <br/>
<img src='https://i.postimg.cc/fbkpVF38/1.png' alt='page-1' width="1200px"/> <br/>
<img src='https://i.postimg.cc/CKttkNkS/2.png' alt='page-2' width="1200px"/> <br/>
<img src='https://i.postimg.cc/2yNKXS0t/3.png' alt='page-3' width="1200px"/> <br/>
<img src='https://i.postimg.cc/Kj7HXhV8/4.png' alt='page-4' width="1200px"/> <br/>
<img src='https://i.postimg.cc/dtBx4vrW/5.png' alt='page-5' width="1200px"/> <br/>
<img src='https://i.postimg.cc/VkZHPR7n/6.png' alt='page-6' width="1200px"/> <br/>
<img src='https://i.postimg.cc/pTz08tPJ/7.png' alt='page-7' width="1200px"/> <br/>
<img src='https://i.postimg.cc/0jvV0HQR/8.png' alt='page-8' width="1200px"/> <br/>
<img src='https://i.postimg.cc/BZ5YnsYq/9.png' alt='page-9' width="1200px"/> <br/>
<img src='https://i.postimg.cc/CLFvZtXb/10.png' alt='page-10' width="1200px"/> <br/>
<img src='https://i.postimg.cc/DyBx163H/11.png' alt='page-11' width="1200px"/> <br/>
<img src='https://i.postimg.cc/Z5nVHNTR/12.png' alt='page-12' width="1200px"/> <br/>
