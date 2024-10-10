function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  async function fetchUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    document.getElementById('user').innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <img src="${user.picture.thumbnail}" alt="Profilkép">
        <p>Email: ${user.email}</p>
        <p>Telefonszám: ${user.phone}</p>
    `;
}