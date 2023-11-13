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
const auth = firebase.auth();
const database = firebase.database();

// Функція для закриття модального вікна
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.location.href="../index.html"
}

// Функція для показу форми реєстрації
function showRegistrationForm() {
  document.getElementById("registration_form").style.display = "flex";
  document.getElementById("login_form").style.display = "none";
}

// Функція для показу форми входу
function showLoginForm() {
  document.getElementById("registration_form").style.display = "none";
  document.getElementById("login_form").style.display = "flex";
}

// Функція для реєстрації
function register() {
  let name = document.getElementById('registration_name').value;
  let email = document.getElementById('registration_email').value;
  let password = document.getElementById('registration_password').value;

  if (!validate_field(name) || !validate_email(email) || !validate_password(password)) {
    alert('Registration failed. Please check your inputs.');
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      let user = auth.currentUser;
      let database_ref = database.ref();
      let user_data = {
        name: name,
        email: email,
        last_login: Date.now()
      };
      database_ref.child('users/' + user.uid).set(user_data);
      alert('Registration successful!');
      clearRegistrationForm();
      document.location.href="../index.html"
    })
    .catch((error) => {
      alert(`Registration failed: ${error.message}`);
    });
}

// Функція для входу
function login() {
  let email = document.getElementById('login_email').value;
  let password = document.getElementById('login_password').value;

  if (!validate_email(email) || !validate_password(password)) {
    alert('Login failed. Please check your inputs.');
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      let user = auth.currentUser;
      let database_ref = database.ref();
      let user_data = {
        last_login: Date.now()
      };
      database_ref.child('users/' + user.uid).update(user_data);
      alert('Login successful!');
      displayUserInfo(user);
      clearLoginForm();
      document.location.href="../index.html"

    })
    .catch((error) => {
      alert(`Login failed: ${error.message}`);
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

// Функція для очищення полів форми реєстрації
function clearRegistrationForm() {
  document.getElementById('registration_name').value = '';
  document.getElementById('registration_email').value = '';
  document.getElementById('registration_password').value = '';
}

// Функція для очищення полів форми входу
function clearLoginForm() {
  document.getElementById('login_email').value = '';
  document.getElementById('login_password').value = '';
}

// Функція для виведення імені користувача
function displayUserInfo(user) {
  const userInfoContainer = document.getElementById('user_info');
  userInfoContainer.textContent = `Welcome, ${user.displayName || user.email}!`;
}

// Додавання слухача подій до елементів
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('closeModalButton').addEventListener('click', closeModal);
  document.getElementById('showRegistrationFormButton').addEventListener('click', showRegistrationForm);
  document.getElementById('showLoginFormButton').addEventListener('click', showLoginForm);
  document.getElementById('registerButton').addEventListener('click', register);
  document.getElementById('loginButton').addEventListener('click', login);

  // keydown для реєстрації по клавіші Enter
  document.getElementById('registration_form').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      register();
    }
  });

  // keydown для входу по клавіші Enter
  document.getElementById('login_form').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      login();
    }
  });
});
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
    })
    .catch((error) => {
      console.error('Помилка входу через Google:', error);
    });
}
document.getElementById('googleSignInButton').addEventListener('click', loginWithGoogle);