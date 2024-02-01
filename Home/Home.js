// قم بالعثور على العنصر الذي يحمل الهوية "logoutBtn"
const logoutBtn = document.getElementById('logoutBtn');

// أضف مراقب لحدث النقر
logoutBtn.addEventListener('click', function() {
    // في هذا المكان، قم بتنفيذ الأمور الخاصة بتسجيل الخروج، مثل إرسال معلومات الخروج أو تحويل المستخدم لصفحة تسجيل الدخول
     window.location.href = '../lognin/login.html'; // قم بتغيير اسم الصفحة حسب اسم صفحة تسجيل الدخول الخاصة بك
    alert('تم تسجيل الخروج بنجاح!');
});