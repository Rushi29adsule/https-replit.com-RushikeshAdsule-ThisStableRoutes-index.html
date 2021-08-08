function Movie(name,release,year,genre,director)
{
    this.name=name;
    this.release=release;
    this.year=year;
    this.genre=genre;
    this.director=director;
}

let Movie1=new Movie('Iron-Man 3','U.S.A','2013','Action/Sci-Fi','Shane Black');
let Movie2=new Movie('Transformers: The Last Knight','U.S.A','2017','Action/Sci-Fi','Michael Bay');
let Movie3=new Movie('Furious 7','U.S.A','2015','Action/Adventure','James Wan');
let Movie4=new Movie('Now You See Me 2','U.S.A','2013','Action/Crime','David Gould');
let Movie5=new Movie('Kingsman:The Golden Circle','U.K','2017','Action Spy','Matthew vaughn');

console.log(Movie1,Movie2,Movie3,Movie4,Movie5);