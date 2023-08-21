fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        for (var i = 0; i <= 3; i++) {

            for (var j = 0; j <= 2; j++) {
                document.querySelector("#row" + (i + 1) + " > #col" + (j + 1) + " >p >b").innerHTML = data[j + (i * 3)].name
                document.querySelector("#row" + (i + 1) + " >  #col" + (j + 1) + "  >p+p").innerHTML = data[j + (i * 3)].email
                document.querySelector("#row" + (i + 1) + " >  #col" + (j + 1) + "  >p+p+p").innerHTML = data[j + (i * 3)].address.street
                document.querySelector("#row" + (i + 1) + " >  #col" + (j + 1) + "  >p+p+p+p").innerHTML = data[j + (i * 3)].address.city
            }

        }
    })
document.querySelector("#row1 >  #col1  >p+p").innerHTML = "sharan"
    .catch((error) => console.error("FETCH ERROR:", error));