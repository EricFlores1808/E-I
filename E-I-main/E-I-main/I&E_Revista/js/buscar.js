// Obtener una lista de todos los usuarios y sus publicaciones
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      console.log('Usuario:', user.name);
      fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((response) => response.json())
        .then((posts) => {
          console.log('Publicaciones:');
          posts.forEach((post) => {
            console.log('  -', post.title);
          });
        })
        .catch((error) => console.error('Error al obtener las publicaciones:', error));
    });
  })
  .catch((error) => console.error('Error al obtener los usuarios:', error));
