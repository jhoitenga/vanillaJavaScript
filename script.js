const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://weatherapi-com.p.rapidapi.com/timezone.json?q=64108");
xhr.setRequestHeader(
  "X-RapidAPI-Key",
  "455a2a2430mshfb6021f3092028bp1a4ebfjsn49aa6d57aed2"
);
xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");

xhr.send(data);
