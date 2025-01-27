function showCard() {
    const card = document.getElementById('canterMePage');
    card.style.display = "flex" // Adds the 'active' class    
    const cardimg = document.getElementById('cardimg');
    cardimg.classList.add('active'); // Adds the 'active' class
}
