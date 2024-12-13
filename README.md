# Naija Japa PostgreSQL App

To enhance my full-stack development skills, I am transitioning from using non-relational databases (MongoDB) to relational databases (PostgreSQL, MySQL), in alignment with industry best practices.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

The challenge for this project revolves around building a comprehensive filtering and display system for Nigerian users based on various attributes such as age, gender, marital status, city, religion, and more. Users are able to filter individuals from different countries (e.g., Canada, South Africa, UK, etc.), with the application dynamically fetching data based on the selected filter criteria. Key challenges include managing asynchronous data fetching from multiple Supabase tables, ensuring a seamless user experience with loading states, and handling edge cases where no data is found. Additionally, integrating and updating multiple filter components based on user selection requires proper state management and efficient rendering. The project aims to provide an intuitive interface for exploring detailed profiles of Nigerians abroad while ensuring optimal performance and user interaction.

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/naija-japa-postgresql-app](https://github.com/traez/naija-japa-postgresql-app)
- Live Site URL: [https://naija-japa-postgresql-app.vercel.app/](https://naija-japa-postgresql-app.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Typescript
- Nodejs      
- Supabase    
- PostgreSQL       
- Tailwind CSS      

### What I learned
   
- **Exploring Mockaroo for Data Generation**  
I used `mockaroo.com` as an alternative to `mockaron.com` for generating mock data. Mockaroo provided a more customizable and versatile solution for creating realistic datasets that helped in testing my application.  
- **Using Route Handlers to Transfer Data Between Next.js Files**  
I learned how to use a Route Handler to extract and write data from one Next.js file to another. This functionality allows for seamless data flow between components and APIs, improving the structure and organization of my Next.js project.  
- **Using Postman and Supabase REST API**  
I learned how to use Postman and the Supabase REST API to populate a table in Supabase. This hands-on approach helped me understand how to interact with Supabase directly for database operations and testing API endpoints efficiently.  
- **Choosing Between Client-Side and Server-Side Filtering**  
I learned that choosing between client-side and server-side filtering depends on factors like dataset size, update frequency, and user experience. Client-side filtering, where data is fetched once from Supabase and filtered locally, is efficient for small to medium datasets. It offers faster subsequent operations and reduces server requests but can increase client memory usage and initial load time. Server-side filtering, where data is queried directly from Supabase for each filter operation, is better for large datasets and ensures up-to-date results. However, it adds server load and potential latency. A balanced approach in a Next.js app could involve server-side filtering for larger datasets or frequently updated data while leveraging caching, pagination, or static generation to optimize performance and user experience.    
- **Supabase and RPC for Raw SQL Queries**  
I learned that Supabase supports executing raw SQL queries through the RPC (Remote Procedure Call) function. Any SQL query not supported by PostgREST can be accomplished by creating a Postgres function and calling it via the RPC method. However, executing raw SQL queries directly from the client can lead to potential risks, such as SQL injection attacks. Therefore, it's important to secure the database from these threats by using appropriate access controls and policies.  
- **Using Supabase Client for Direct Updates**  
I learned that it’s possible to update Supabase directly from the client by using a `supabaseClientComponentClient`. However, this approach can expose the Supabase URL to the client, which could lead to security risks such as unauthorized access. To prevent such issues, I refactored my project to avoid exposing the Supabase URL to the client, preferring to handle updates via server actions or route handlers (API routes), which offer more control.    
- **Securing Supabase with Row-Level Security (RLS) and Policies**  
Supabase operates by receiving requests from a client, which means that the Supabase URL will be exposed to the user. However, Supabase provides Row-Level Security (RLS) and policies similar to Google Firestore's Rules to secure data. It's essential to always set up RLS and policies for every table in your Supabase database to protect against unauthorized access.  
- **Understanding ORMs and Their Benefits**  
I learned that the essence of an ORM (Object-Relational Mapper) is to simplify and streamline the interaction between an application and a relational database. ORMs like Prisma, Drizzle, Sequelize, and others abstract away raw SQL queries, allowing developers to interact with the database using their programming language (e.g., JavaScript/TypeScript). Supabase’s ORM-like tool, the Supabase Client, offers a JavaScript/TypeScript API for interacting with PostgreSQL databases, making database queries and data manipulations easier and more developer-friendly.  
- **Preventing Supabase Project Pausing with GitHub Actions**  
While building this project, I implemented a GitHub Actions workflow to prevent my Supabase project from automatically pausing due to inactivity. This automated solution runs a scheduled job twice a week, pinging the Supabase database with a simple query. By setting up this workflow, I learned how to leverage GitHub Actions for maintaining database activity, ensuring continuous availability of my application's backend. This experience taught me the importance of proactive measures in cloud service management and improved my skills in DevOps practices, particularly in automating maintenance tasks for serverless databases.    

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Zeeofor Technologies](https://zeeofortech.vercel.app/)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
