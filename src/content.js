
//chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse){
    console.log(request.text);
    if(request.text == "hello"){
        console.log('working');
        var para = document.getElementsByTagName('p');
        for (var i=0; i<para.length; ++i){
            para[i].innerHTML = 'Random String :)';
            para[i].style['background-color'] = '#C036F3';
        }
        var e = document.getElementsByTagName("*");
        for(var i = 0; i < e.length; i++) {
            e[i].style.fontFamily = "Comic Sans MS";
        }
        //replace images
        var filenames = ["a1.jpg", "a2.jpg", "a3.jpg"];
        var imgs =  document.getElementsByTagName('img');

        for (let imgElt of imgs) {
          let r = Math.floor(Math.random() * filenames.length);
          let file = 'Pictures/' + filenames[r];
          let url = chrome.extension.getURL(file);
          imgElt.src = url;
          console.log(url);
        }
    }
}
