# Rentwave

RentWave is a system to facilitate the rental of goods between users of the platform.

Users can use the website to: 
- Create an account
- List items in a variety of categories
- Rent items
- Message other users about items
- Write reviews related to past rentals.

## Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Use `npm run dev` to run it.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database

MySQL is used for the database and MySQL Workbench can be used to manage it.

The database.sql file can be used to create the database and the files in the dbdata folder can be used to put sample data into the database.

There are 6 tables in the database:
- Users
- ItemCategories
- Items
- Rentals
- Reviews
- Messages