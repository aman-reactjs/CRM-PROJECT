# CRM Application

A responsive Customer Relationship Management (CRM) application built with Next.js and React. This application helps users manage leads, view lead information, search and filter leads, and perform basic lead management operations through a clean and responsive interface.

## 📌 Project Overview

The CRM Application is designed to manage customer leads in an organized way.

Users can add new leads by entering information such as name, email, phone number, company, lead source, lead status, and notes. The application also provides a dashboard where leads can be viewed, searched, filtered, edited, and deleted.

The project uses API integration to fetch initial data and Local Storage to persist lead data on the client side.

---

## ✨ Features Implemented

### 1. Lead Management

- Add new leads
- Edit existing leads
- Delete leads
- View lead information
- Store lead information in Local Storage
- Automatically generate a unique ID for newly added leads

### 2. Lead Form

The lead form contains the following fields:

- Lead Name
- Email
- Phone Number
- Company Name
- Lead Source
- Lead Status
- Notes

### 3. Form Validation

Client-side validation is implemented for the lead form.

Validation includes:

- Name is required
- Phone number must contain 10 digits
- Email must be a valid Gmail address
- Company name is required
- Lead source must be selected
- Lead status must be selected
- Notes are required

Validation messages are displayed below the respective fields.

### 4. Search and Filter

The CRM dashboard provides search and filtering functionality to easily find specific leads.

Users can search leads and filter them according to their information/status.

### 5. Lead Status

Leads can have different statuses:

- New
- Contacted
- Follow-up
- Converted
- Lost

### 6. API Integration

The application uses Axios to communicate with an API.

Initial lead/user data is fetched from an API and displayed in the dashboard.

The project currently uses JSONPlaceholder for API testing and demonstration.

### 7. Local Storage

Lead data is stored in the browser's Local Storage.

This allows the application to preserve lead data when the page is refreshed.

The application checks Local Storage first and uses API data when local lead data is not available.

### 8. Success and Error Notifications

The application provides notifications for important actions.

For example:

- Successfully created lead
- API/request errors
- Other operation-related messages

Success messages are displayed with a green notification, while errors are displayed with a red notification.

### 9. Dark and Light Theme

The application supports:

- Light Mode
- Dark Mode

Theme management is handled using React Context.

### 10. Responsive Design

The CRM application is designed to work across different screen sizes:

- Desktop
- Tablet
- Mobile

The UI uses responsive Tailwind CSS classes for different screen sizes.

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React.js
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- CSS3

### Libraries & Tools

- Axios – API requests
- React Context API – Theme and notification management
- Local Storage – Client-side data persistence
- Next.js App Router – Application routing
- Git & GitHub – Version control
- Vercel – Deployment

---

## 📂 Project Structure

```text
CRM_Project/
│
├── app/
│   ├── dashboard/
│   │   └── page.jsx
│   │
│   ├── leadsform/
│   │   └── page.jsx
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── filterComponent/
│   │   └── SearchFilter.jsx
│   │
│   └── ui/
│
├── context/
│   ├── ThemeContext.jsx
│   └── SuccessFullyMsg.jsx
│
├── customHook/
│   ├── useForm.jsx
│   └── useSearchFilter.jsx
│
├── public/
│
├── package.json
└── README.md

Deploy Link = [https://jobaaj-crm-application.vercel.app/]