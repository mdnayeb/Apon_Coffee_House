// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Menu Data
const menuData = {
    COFFEE: [
        { name: 'Espresso (এসপ্রেসো)', sizes: ['Small $2', 'Medium $3', 'Large $4'], keyword: 'espresso' },
        { name: 'Latte (ল্যাটে)', sizes: ['Small $3', 'Medium $4', 'Large $5'], keyword: 'latte' },
        { name: 'Cappuccino (ক্যাপুচিনো)', sizes: ['Small $3.5', 'Medium $4.5', 'Large $5.5'], keyword: 'cappuccino' }
    ],
    'FAST FOOD': [
        { name: 'Burger (বার্গার)', sizes: ['Regular $5', 'Large $7'], keyword: 'burger' },
        { name: 'Fries (ফ্রাইজ)', sizes: ['Small $2', 'Large $4'], keyword: 'fries' },
        { name: 'Pizza Slice (পিজ্জা স্লাইস)', sizes: ['$3'], keyword: 'pizza-slice' }
    ],
    'INDIAN FOOD': [
        { name: 'Butter Chicken (বাটার চিকেন)', sizes: ['Half $8', 'Full $15'], keyword: 'butter-chicken' },
        { name: 'Biryani (বিরিয়ানি)', sizes: ['Veg $6', 'Chicken $10'], keyword: 'biryani' },
        { name: 'Naan (নান)', sizes: ['$2'], keyword: 'naan' }
    ],
    PIZZA: [
        { name: 'Margherita (মার্গেরিটা)', sizes: ['Small $10', 'Medium $15', 'Large $20'], keyword: 'margherita-pizza' },
        { name: 'Pepperoni (পেপেরোনি)', sizes: ['Small $12', 'Medium $17', 'Large $22'], keyword: 'pepperoni-pizza' }
    ],
    'MILKSHAKE & LACCHI': [
        { name: 'Vanilla Milkshake (ভ্যানিলা মিল্কশেক)', sizes: ['$4'], keyword: 'vanilla-milkshake' },
        { name: 'Lacchi (লাচ্ছি)', sizes: ['$3'], keyword: 'lassi' }
    ],
    'SMOOTHIE & JUICE': [
        { name: 'Berry Smoothie (বেরি স্মুদি)', sizes: ['$5'], keyword: 'berry-smoothie' },
        { name: 'Orange Juice (অরেঞ্জ জুস)', sizes: ['$3'], keyword: 'orange-juice' }
    ]
};

// Populate Menu
const menuContainer = document.querySelector('.menu-categories');
Object.keys(menuData).forEach(category => {
    const catDiv = document.createElement('div');
    catDiv.className = 'category';
