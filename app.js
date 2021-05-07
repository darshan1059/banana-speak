var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
//outputDiv.innerText = "Darshan";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server : try again after sometime");
}


function clickHandler() {

    //console.log("clicked");
    //console.log("input", txtInput.value)
    // outputDiv.innerText = "asasasaa" + txtInput;

    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        // .then(json => console.log(json.contents.translated))
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            // var translatedText = console.log(json.contents.translated);
            //outputDiv.innerText = translatedText.value;
        })
        .catch(errorHandler)


};

btnTranslate.addEventListener("click", clickHandler)