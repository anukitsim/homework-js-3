var moviesObj = {
    nameCinema: "Cavea Cinema",
    adressCinema:{ //inner object
    
          city: "Tbilisi",
           adress: "x steet 5"
    
    },
     
       movieLanguages: ["English", "Georgian",],
    
        movies: [ //array of objects
                   {
    
                    name: "Birdmam",
                      rating: 7.3
                  },
    
                  {
                       name: "Dark Knight" ,
                       rating: 8.4 ,
                    } ,
    
                    {
                        name: "trainspotting",
                        rating: 8.1
                    }
                 ]
                
                }

                // format string before dispaying on the screen

                var moviesList = " "; // this will hold list of movies

                //get each movie from the objects list

                for(i in moviesObj["movies"]){
                    moviesList += "name: " + moviesObj["movies"][i]["name"] + ", rating:" + moviesObj["movies"][i]["rating"] + "<br>";
                }

                var cinemaString = 'Cinema: ' +moviesObj['nameCinema'] + "<br>" + "city: " + moviesObj["adressCinema"]["city"] + "<br>" + " adress:"
                + moviesObj["adressCinema"]["adress"] + "<br>" + "<br>" + "movies: " + "<br>" + moviesList + "languages: " + moviesObj["movieLanguages"];


                // display data, from html paragrapg tag

                document.getElementById("cinema_data").innerHTML = cinemaString;


               
               
               
    