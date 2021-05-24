$(document).ready(function () {
  // getting the countries name
  $.get("https://restcountries.eu/rest/v2/all", function (data) {
    for (const iter of data) {
      //putting data from api into the selection area
      $("#countries").append(`<option>${iter["name"]}</option>`);
    
    }
    $("#countries").change(function (e) { 
        e.preventDefault();
        $.get("https://restcountries.eu/rest/v2/all", function (data) {
            let country = data.find((element)=>  element.name == $("#countries option:selected").text());
            //setting country info 
            $(".country-info").find("h1").text(country.name);
            $("#nativename").text(`Native Name: ${country.nativeName}`);
            $("#capital").text(`capital: ${country.capital}`);
            $("#region").text(`region: ${country.region}`);
            $("#population").text(`population : ${country.population}`);
            $("#language").text(`Languages : ${country.languages[0].name}`);
            $("#timezone").text(`TimeZone : ${country.timezones[0]}`);
            // end of setting coutnry info
            //setting calling code of the country
            $(".country-callingcode").find("p").text(country.callingCodes[0]);
            //end of setting 
            //setting country flag image
            $("img").attr("src", country.flag);

    });
  });
})});
