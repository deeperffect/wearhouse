<div align="center">
  <br />
    <a href="wearhouse.vercel.app" target="_blank">
      <img src="https://i.ibb.co/fq6ScyN/wearh.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
</div>
  <h3 align="center">A Techwear E-Commerce Platform</h3>


## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)


## <a name="introduction">🤖 Introduction</a>

A teachwear and cyberpunk inspired E-Commerce platform. You can buy and sell clothing and accessories, as well as browse user and official blogs or show your own style by posting a blog yourself.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- React
- MongoDB
- TailwindCSS

## <a name="features">🔋 Features</a>

👉 **Authentication and Authorization**: Secure user access with registration, login, and route protection.

👉 **Password hashing**: Passwords are hashed before being saved in the DB.

👉 **Users, Items, Blogs**: Collections for storing the data in Mongo.

👉 **NextJS API**: Serverless back-end routes for the data fetching needed.

👉 **Reusable React components**: Because nobody has the time to write the same code over again :)

👉 **Likes and Favorites**: Users can interact with the different items and blogposts.

👉 **User profile**: Where user's favorites, listed items and posted blogs are being shown.

👉 **Shopping basket functionality**: To add the items you wish to purchase and see the total price.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/deeperffect/wearhouse.git
cd wearhouse
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
npm run dev
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_SECRET=
NEXT_PUBLIC_DB_HOST=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [MongoDB](https://www.mongodb.com/) and (https://www.uuidgenerator.net/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

