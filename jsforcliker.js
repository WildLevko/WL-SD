let counter = 0;
let lastClickTime = 0;
const minClickInterval = 100; // ms — разрешаем кликать быстро (10 кликов/сек)

function inc() {
    const now = Date.now();
    if (now - lastClickTime < minClickInterval) {
        return; // игнорируем слишком быстрые клики
    }
    lastClickTime = now;
    counter++;
    upd();
}

function upd() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = counter;

    // плавная анимация увеличения
    counterElement.parentElement.style.transform = "scale(1.1)";
    setTimeout(() => {
        counterElement.parentElement.style.transform = "scale(1)";
    }, 150);
}
