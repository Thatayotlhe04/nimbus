let foodOptions = [
    "🍕 Pizza",
    "🍔 Burger",
    "🍚 Pap",
    "🥗 Salad",
    "🌮 Tacos",
    "🍩 Donut",
    "🍜 Noodles",
    "🥪 Sandwich",
    "🍦 Ice Cream"
  ];
  
  const display = document.getElementById('food-display');
  const button = document.getElementById('Tellme-button');
  const addButton = document.getElementById('add-button');
  const newFoodInput = document.getElementById('new-food');
  
  button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * foodOptions.length);
    display.textContent = foodOptions[randomIndex];
  });
  
  addButton.addEventListener('click', () => {
    const newFood = newFoodInput.value.trim();
    if (newFood) {
      foodOptions.push(newFood);
      newFoodInput.value = '';
      alert(`${newFood} added to the list! 😋`);
    }
  });
  