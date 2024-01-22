async function slider() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YThjYzk1ZWU4ZDZjZTBmNmZkNjFjMGY2MTQ5NWRjYSIsInN1YiI6IjY1OWIyMmUwYmQ1ODhiNGRmODA0YWQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qk7yMUSyMNxb9Sj8aqtY9srgnfc4SBKD6D3vodc4o0c'
    }
  };

  const busca = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options);
  const resposta = await busca.json();

  if (resposta.results) {
    const sections = document.querySelectorAll(".carrousel"); // Seleciona todas as seções do slider

    const img = document.createElement('img');
    img.className = "slide_img";

    const slide = document.createElement('div');
    slide.className = "slide";

    resposta.results.forEach((filme, index) => {
      const imgClone = img.cloneNode(); // Clona o elemento img
      imgClone.src = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
      imgClone.alt = filme.title;

      const slideClone = slide.cloneNode(); // Clona o elemento slide
      slideClone.appendChild(imgClone); // Adiciona a imagem ao slide

      sections[index % sections.length].appendChild(slideClone); // Adiciona o slide à seção correspondente
    });

  }
}

async function myList() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YThjYzk1ZWU4ZDZjZTBmNmZkNjFjMGY2MTQ5NWRjYSIsInN1YiI6IjY1OWIyMmUwYmQ1ODhiNGRmODA0YWQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qk7yMUSyMNxb9Sj8aqtY9srgnfc4SBKD6D3vodc4o0c'
    }
  };
  
  const busca = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
  const resposta = await busca.json();

  if (resposta.results) { 
    const filmes = resposta.results;

    filmes.forEach((filme, index) => {
      const posterUrl = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
      let section;
    
      if (index < 5) {
        section = document.querySelector('.mylist');
      } else if (index < 10) {
        section = document.querySelector('.mylist');
      } else if (index < 15) {
        section = document.querySelector('.mylist');
      } else {
        section = document.querySelector('.mylist');
      } 
    
      if (section) {
        const img = document.createElement('img');
        img.src = posterUrl;
        img.alt = filme.title;
        img.classList.add('poster-img', '-animation');
        section.appendChild(img);
      }
    });
    
  }
}

async function rated() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YThjYzk1ZWU4ZDZjZTBmNmZkNjFjMGY2MTQ5NWRjYSIsInN1YiI6IjY1OWIyMmUwYmQ1ODhiNGRmODA0YWQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qk7yMUSyMNxb9Sj8aqtY9srgnfc4SBKD6D3vodc4o0c'
    }
  };

  const busca = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  const resposta = await busca.json();

  if(resposta.results) {
    const filmes = resposta.results;

    filmes.forEach((filme, index) => {
      const posterUrl = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
      let section;
    
      if (index < 5) {
        section = document.querySelector('.rated');
      } else if (index < 10) {
        section = document.querySelector('.rated');
      } else if (index < 15) {
        section = document.querySelector('.rated');
      } else {
        section = document.querySelector('.rated');
      } 
    
      if (section) {
        const img = document.createElement('img');
        img.src = posterUrl;
        img.alt = filme.title;
        img.classList.add('poster-img', '-animation');
        section.appendChild(img);
      }
    })

    
  }
}

async function come() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YThjYzk1ZWU4ZDZjZTBmNmZkNjFjMGY2MTQ5NWRjYSIsInN1YiI6IjY1OWIyMmUwYmQ1ODhiNGRmODA0YWQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qk7yMUSyMNxb9Sj8aqtY9srgnfc4SBKD6D3vodc4o0c'
    }
  };
  
  const busca = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  const resposta = await busca.json()

  if(resposta.results) {
    const filmes = resposta.results 

    filmes.forEach((filme, index) => {
      const posterUrl = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
      let section;
    
      if (index < 5) {
        section = document.querySelector('.come');
      } else if (index < 10) {
        section = document.querySelector('.come');
      } else if (index < 15) {
        section = document.querySelector('.come');
      } else {
        section = document.querySelector('.come');
      } 
    
      if (section) {
        const img = document.createElement('img');
        img.src = posterUrl;
        img.alt = filme.title;
        img.classList.add('poster-img', '-animation');
        section.appendChild(img);
      }
    })
  }
   
}



document.addEventListener('DOMContentLoaded', slider);
document.addEventListener('DOMContentLoaded', myList);
document.addEventListener('DOMContentLoaded', rated);
document.addEventListener('DOMContentLoaded', come);

