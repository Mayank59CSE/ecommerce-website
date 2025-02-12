# 🏥 Medical E-commerce Website

## 🌟 Overview

Welcome to the **Medical E-commerce Website**, a feature-rich and user-friendly platform for purchasing medicines online. Built using **Django (Python)** for the backend and **HTML, CSS, and JavaScript** for the frontend, this project ensures a seamless, secure, and efficient shopping experience.

## 🚀 Key Features

- 🛡 **User Authentication** – Secure sign-up and login functionality.
- 💊 **Medicine Browsing & Search** – Find medicines easily with an intuitive search system.
- 🛒 **Shopping Cart & Order Management** – Add products to the cart and manage orders effortlessly.
- 💳 **Payment Gateway Integration** – Razorpay testing payment gateway implemented for secure transactions.
- 📱 **Responsive Design** – Works smoothly on all devices.
- 🔍 **Advanced Search** – Quickly locate medicines using filters and search functionality.
- 📸 **Screenshots** – A visual preview of the platform is provided below.

## 🛠 Technologies Used

- **Backend:** Django (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** SQLite (default)
- **Static Files:** Stored in the `assets` folder
- **Payment Gateway:** Razorpay (Testing Mode)

## 🔧 Installation Guide

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone <repo_link>
   cd <project_directory>
   ```
2. **Set up a virtual environment:**
   ```bash
   python -m venv env
   source env/bin/activate  # For macOS/Linux
   env\Scripts\activate     # For Windows
   ```
3. **Install required dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Run database migrations:**
   ```bash
   python manage.py migrate
   ```
5. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

## 🌐 Usage Instructions

1. Open `http://127.0.0.1:8000/` in your browser.
2. Register or log in to explore all features.
3. Browse medicines and add them to your cart.
4. Proceed to checkout and complete your order using Razorpay's test payment gateway.

## 📂 Project Structure

```
project_root/
│── myapp/
│   ├── templates/         # HTML templates
│   ├── assets/            # CSS, JS, Images
│   ├── models.py          # Database models
│   ├── views.py           # Backend logic
│── db.sqlite3             # Database file
│── manage.py              # Django management script
│── requirements.txt       # Required dependencies
```

## 📸 Screenshots

Here are some previews of the Medical E-commerce Website:

![Screenshot (168)](assets/Screenshot (168).png)
![Screenshot (169)](assets/Screenshot (169).png)
![Screenshot (170)](assets/Screenshot (170).png)
...
![Screenshot (197)](assets/Screenshot (197).png)


## 🤝 Contributing

We welcome contributions! Feel free to fork this repository, report issues, and submit pull requests to improve the platform.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

🚀 **Happy Coding & Stay Healthy!** 💙

