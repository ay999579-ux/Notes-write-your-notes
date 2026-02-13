# 📝 Creates Notes

A stunning, modern note-taking application built with **React** and **Tailwind CSS**. 
This project features a distinct **Glassmorphism** UI/UX and a custom text-formatting engine that ensures readability by automatically wrapping text every 10 words.

## ✨ Features

* **🎨 Glassmorphism Design:** Beautiful UI using backdrop filters, conic gradients, and semi-transparent layers.
* **⚡ Smart Text Formatting:** Custom logic that automatically inserts a line break after every 10 words to maintain a clean card layout.
* **🔄 Full CRUD Operations:**
    * **Create:** Add new notes with real-time formatting.
    * **Read:** View notes in a responsive grid layout or detailed view.
    * **Update:** Edit existing notes with pre-filled data.
    * **Delete:** Remove notes instantly with a confirmation check.
* **📱 Responsive:** Fully responsive layout that works on different screen sizes.
* **🔔 Interactive UI:** Hover effects, glow animations, and smooth transitions using React Router.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite/CRA)
* **Routing:** React Router DOM (v6)
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios
* **Icons:** React Icons (FontAwesome, Material Design, Ionicons)

## 🚀 Getting Started

### Prerequisites
Make sure you have a backend server running on `http://localhost:3000` with the following endpoints:
* `POST /created` - To save a note
* `PUT /updated/:id` - To edit a note
* `DELETE /deleted/:id` - To delete a note

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/creates-notes.git](https://github.com/your-username/creates-notes.git)
    ```

2.  **Install dependencies**
    ```bash
    cd creates-notes
    npm install
    ```

3.  **Run the application**
    ```bash
    npm run dev
    # or
    npm start
    ```

## 🧩 Key Components

* **`Add.jsx`**: Handles input logic with the 10-word wrap algorithm before sending to the database.
* **`Edit.jsx`**: Fetches existing state via Router, allows modification, and updates the backend.
* **`View.jsx`**: A detailed read-only view that preserves the specific whitespace formatting (`whitespace-pre-wrap`).
* **`Cards.jsx`**: A reusable UI component with hover glow effects and quick-action buttons.



---
Made with ❤️ using React