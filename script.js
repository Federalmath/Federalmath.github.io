// نمونه اولیه حل ریاضی
function solveMath() {
    const input = document.getElementById('userInput').value.trim();
    const output = document.getElementById('output');
    output.innerHTML = ""; // پاک کردن نتیجه قبلی

    if (!input) {
        output.innerHTML = "لطفاً یک سوال وارد کنید.";
        return;
    }

    // بررسی نوع عملیات ساده (نمونه)
    if (input.startsWith("d/dx")) {
        // مشتق
        const expr = input.replace("d/dx", "").trim();
        output.innerHTML += <p>مشتق ${expr} را محاسبه می‌کنیم:</p>;
        output.innerHTML += <p>مرحله 1: تابع را مشخص می‌کنیم: ${expr}</p>;
        output.innerHTML += <p>مرحله 2: قانون مشتق را اعمال می‌کنیم</p>;
        output.innerHTML += <p>مرحله 3: نتیجه: 2x (اگر مثال x^2 باشد)</p>;
    } else if (input.startsWith("lim")) {
        // حد
        output.innerHTML += <p>محاسبه حد ... (نمونه)</p>;
        output.innerHTML += <p>مرحله 1: تابع را بررسی می‌کنیم</p>;
        output.innerHTML += <p>مرحله 2: جایگذاری مقدار حد</p>;
        output.innerHTML += <p>مرحله 3: نتیجه</p>;
    } else if (input.startsWith("∫") || input.startsWith("int")) {
        // انتگرال
        output.innerHTML += <p>محاسبه انتگرال ... (نمونه)</p>;
        output.innerHTML += <p>مرحله 1: تابع را مشخص می‌کنیم</p>;
        output.innerHTML += <p>مرحله 2: از قانون انتگرال استفاده می‌کنیم</p>;
        output.innerHTML += <p>مرحله 3: نتیجه</p>;
    } else {
        output.innerHTML = "این سوال پشتیبانی نمی‌شود. لطفاً از قالب d/dx، lim یا ∫ استفاده کنید.";
    }
}