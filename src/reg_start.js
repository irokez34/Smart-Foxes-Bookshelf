// Конфігурація бази данних
const firebaseConfig = {
    apiKey: "AIzaSyA9CLWz8je6lpN_T6IoDYOeBn4bsK9jSK8",
    authDomain: "bookshelf-smart-foxes.firebaseapp.com",
    projectId: "bookshelf-smart-foxes",
    storageBucket: "bookshelf-smart-foxes.appspot.com",
    messagingSenderId: "719401160352",
    appId: "1:719401160352:web:0617680c3d6e31123ec3c5",
    measurementId: "G-7B8E53CR8P"
  };
  firebase.initializeApp(firebaseConfig);
  let auth = firebase.auth();
  let database = firebase.database();
  
  // Відкриття модалки
  function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  
  // Закриття модалки
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  // Функція для показу рєєстраційної форми при перемиканні
  function showRegistrationForm() {
    document.getElementById('registration_form').style.display = 'block';
    document.getElementById('login_form').style.display = 'none';
  }
  // Функція для показу форми логіну при перемиканні
  function showLoginForm() {
    document.getElementById('registration_form').style.display = 'none';
    document.getElementById('login_form').style.display = 'block';
  }
  // Функція для реєстрації
  function register() {
    let name = document.getElementById('registration_name').value;
    let email = document.getElementById('registration_email').value;
    let password = document.getElementById('registration_password').value;
    let confirmPassword = document.getElementById('registration_confirm_password').value;
  // Валідація
    if (validate_field(name) == false || validate_email(email) == false || validate_password(password) == false || password !== confirmPassword) {
        alert('Registration failed. Please check your inputs.');
        return;
    }
  // Запис нового користувача
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            let user = auth.currentUser;
            let database_ref = database.ref();
            let user_data = {
                name: name,
                email: email,
                last_login: Date.now()
            };
            database_ref.child('users/' + user.uid).set(user_data);
            alert('Registration successful!');
        })
        .catch(function (error) {
            let error_code = error.code;
            let error_message = error.message;
            alert(error_message);
        });
  }
  // Функція для логіну
  function login() {
    let email = document.getElementById('login_email').value;
    let password = document.getElementById('login_password').value;
  
  // Валідація
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Login failed. Please check your inputs.');
        return;
    }
  // Перевірка,чи наявний користувач у базі данних
    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            let user = auth.currentUser;
            let database_ref = database.ref();
            let user_data = {
                last_login: Date.now()
            };
            database_ref.child('users/' + user.uid).update(user_data);
            alert('Login successful!');
        })
        .catch(function (error) {
          // Повідомлення про помилку
            let error_code = error.code;
            let error_message = error.message;
            alert(error_message);
        });
  }
  // Функції валідації
  function validate_email(email) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
  }
  function validate_password(password) {
    return password.length >= 6;
  }
  function validate_field(field) {
    return field.trim() !== '';
  }  