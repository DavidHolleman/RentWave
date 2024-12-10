# Rentwave

RentWave is a system to facilitate the rental of goods between users of the platform.

Users can use the website to: 
- Create an account / Login / Logout / Change Password
- Search for items in a variety of categories
- Rent items from other users
- Message other users about items
- Write reviews related to past rentals

Project Report: https://docs.google.com/document/d/1v6i5F3iigGgFt_4nLyAMU0H7qEKmHC4T/edit?usp=sharing&ouid=114172747205478512791&rtpof=true&sd=true

Presentation: https://docs.google.com/presentation/d/1ltnCCQd2hEKDX7rN4tXYdv8u8XFZd0lp-UfNP-cnR1A/edit?usp=sharing

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
