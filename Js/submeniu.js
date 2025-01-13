function toggleSubMenu(button) {
    const subMenu = button.parentElement.nextElementSibling; // Submeniul este după `.section-header`
    if (subMenu && subMenu.classList.contains("sub-menu")) {
      subMenu.classList.toggle("open"); // Adaugă/scoate clasa `open`
      
      // Schimbă textul butonului
      if (subMenu.classList.contains("open")) {
        button.textContent = "-"; // Dacă submeniul este deschis, afișează "-"
      } else {
        button.textContent = "+"; // Dacă submeniul este închis, afișează "+"
      }
    }
  }