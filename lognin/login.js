const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'Prof.Dr.Amany_Sarhan', password: '123456' },
    { username: 'Prof.Dr.Hesham_Arafat', password: '123456' },
    { username: 'Omar_El-Dalil', password: '123456' },
  ];
  
  function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
  
    const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);
  
    if (user) {
      alert('You have successfully logged in!');

      window.location.href = '../Home/home.html'; 
    } else {
      alert('login failed. Please check your username and password.');
    }
  }
  
  // إضافة مراقب لحدث تحميل الصفحة
  document.addEventListener('DOMContentLoaded', function () {
    // إضافة مراقب لحدث النقر على الزر
    document.getElementById('loginButton').addEventListener('click', login);
  });
  