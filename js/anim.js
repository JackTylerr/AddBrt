    function toggleMenu() {
      var menu = document.getElementById("menu");
      menu.classList.toggle("open");
    }

    function handleMenuItemClick(itemNumber) {
      console.log("Нажата кнопка " + itemNumber);
    }

    function closeMenu() {
      var menu = document.getElementById("menu");
      menu.classList.remove("open");
    }