function scrollFunction() {
    if (document.documentElement.scrollTop > 200) { // نجلب المسافة العُلوية من شريط التمرير إلى أعلى المستند و نقارنها بالقيمة 200
        document.getElementById("navbar").classList.add("noTransparrent"); // نضيف الصنف في حالة تحقق الشرط
    } else {
        document.getElementById("navbar").classList.remove("noTransparrent"); // نحذف الصنف في الحالة المعاكسة
    }
}
window.onscroll = function () {
    scrollFunction();
}

window.onload = function () {
    let website = new CountUp('website-count', 0, 250, 0, 2.5);
    website.start();
    let app = new CountUp('app-count', 0, 1000, 0, 2.5);
    app.start();
    let user = new CountUp('user-count', 0, 10000, 0, 2.5);
    user.start();
    let vedio = new CountUp('vedio-count', 0, 30, 0, 2.5);
    vedio.start();
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

document.getElementById("fullYear").innerHTML = new Date().getFullYear();