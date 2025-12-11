// 花瓣飘落特效
class PetalEffect {
    constructor() {
        this.container = document.getElementById('petal-container');
        this.petalColors = ['#e84a5f', '#ff847c', '#fecea8', '#99b898', '#6c5ce7']; // 花瓣颜色数组
        this.petalCount = 30; // 同时显示的花瓣数量
        this.init();
    }

    // 初始化花瓣
    init() {
        // 循环创建花瓣
        for (let i = 0; i < this.petalCount; i++) {
            this.createPetal();
        }
    }

    // 创建单个花瓣
    createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        // 随机设置花瓣样式
        this.setRandomStyle(petal);

        // 添加到容器
        this.container.appendChild(petal);

        // 花瓣动画结束后移除并重新创建
        petal.addEventListener('animationend', () => {
            this.container.removeChild(petal);
            this.createPetal();
        });
    }

    // 设置花瓣随机样式
    setRandomStyle(petal) {
        // 随机颜色
        const color = this.petalColors[Math.floor(Math.random() * this.petalColors.length)];
        petal.style.backgroundColor = color;

        // 随机大小 (10-20px)
        const size = Math.random() * 10 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;

        // 随机初始位置 (水平)
        const startX = Math.random() * window.innerWidth;
        petal.style.left = `${startX}px`;
        petal.style.top = '-20px'; // 从顶部外开始

        // 随机飘落时间 (5-15秒)
        const fallTime = Math.random() * 10 + 5;
        petal.style.animationDuration = `${fallTime}s`;

        // 随机水平偏移量 (-100 到 100px)
        const xOffset = Math.random() * 200 - 100;
        petal.style.setProperty('--x-offset', `${xOffset}px`);

        // 随机旋转初始角度
        const rotate = Math.random() * 360;
        petal.style.transform = `rotate(${rotate}deg)`;

        // 随机透明度 (0.6-0.9)
        const opacity = Math.random() * 0.3 + 0.6;
        petal.style.opacity = opacity;
    }
}

// 页面加载完成后初始化花瓣特效
window.addEventListener('load', () => {
    new PetalEffect();
});

// 窗口大小改变时重新调整花瓣位置
window.addEventListener('resize', () => {
    const petals = document.querySelectorAll('.petal');
    petals.forEach(petal => {
        const startX = Math.random() * window.innerWidth;
        petal.style.left = `${startX}px`;
    });
});