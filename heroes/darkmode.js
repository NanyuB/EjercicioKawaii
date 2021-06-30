
 let isNightMode = false;
 function darkMode() {
     let sun = document.getElementById("sun");
     let moon = document.getElementById("moon");
     
    isNightMode = !isNightMode;
    document.body.classList.toggle('dark');
    if (isNightMode){
        sun.style.display = "block";
        moon.style.display = "none";
        document.getElementById('estilos').href = 'estilos.css';
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
        document.getElementById('estilos').href = 'heroes.css';
    }
  }


