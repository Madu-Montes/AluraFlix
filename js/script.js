var listMovies = [
    'https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg',

    'https://images.justwatch.com/poster/265228426/s718/o-sussuro-do-coracao.%7Bformat%7D',

    'https://m.media-amazon.com/images/I/81zeqn6hofL.jpg',

    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil-Kw5z71UaffYZi2-tNt9bIXfYMIGWdvdQ2d9dSJ0LWnykgjLyQTnt5aG_jwwjQZYTQIVUG65JStl_jF08LEaCTnlLDrfex38SsrSoY531VP7s2FRSeZSd84y4SVDw_8wH6n1XwAfW9E1bxd8mtNFGzOA00IIvvx5lFwET374K_m16uTsG79v6ou-/s1122/anime-a-voz-do-sil%C3%AAncio.jpeg',

    'https://br.web.img2.acsta.net/pictures/15/11/10/21/08/171263.jpg',

    'https://i.pinimg.com/236x/7b/39/cf/7b39cf0a79bffb1c610062854d296f50.jpg',

]

//listMovies[0] = 'https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg';

//listMovies[1] = 'https://images.justwatch.com/poster/265228426/s718/o-sussuro-do-coracao.%7Bformat%7D';

//listMovies[2] = 'https://m.media-amazon.com/images/I/81zeqn6hofL.jpg';

for (var i=0; i< listMovies.length; i=i+1) {
    document.write('<img src=' + listMovies[i] + '>');
}
