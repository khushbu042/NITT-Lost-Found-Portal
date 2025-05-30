# NITT Lost & Found Portal

A web-based portal for students of NIT Trichy to report **lost** or **found** items on campus. It provides a centralized, user-friendly platform to ensure that lost items can be located and returned efficiently.

## Features

- Student Signup/Login with authentication
- Post a **Lost** or **Found** item with relevant details
- Search items by name or status
- Filter through item status (Lost/Found)
- Upload item image and description
- search functionality

## Tech Stack
- React.js    : Frontend framework                    
- TailwindCSS : Utility-first CSS framework           
- Node.js     : Backend runtime environment           
- Express.js  : Backend framework                     
- MongoDB     : NoSQL database                        
- Cloudinary  : Image storage and management          
- JWT         : Secure authentication with cookies

## How to Run Locally

### 1. Clone the repository
- git clone https://github.com/khushbu042/NITT-Lost-Found-Portal.git
- cd NITT-Lost-Found-Portal

### 2. Set up environment variables
- build .env file
- copy .env.sample file
- add your own key

### 3. Install dependencies
#### Backend
- cd backend
- npm install

#### Frontend
- cd ../frontend
- npm install

### 4. Start the project
#### Start backend
- cd backend
- npm run dev
#### Start frontend
- cd ../frontend
- npm run dev

## Future Scope
- Admin approval flow
- Email notifications
- Forgot password / Reset link
- Sorting by date or popularity
- QR-based claim system

## Author
- Khushbu Mourya (https://github.com/khushbu042)
- MCA Graduate, NIT Trichy
- Email: khushbumourya066@gmail.com


