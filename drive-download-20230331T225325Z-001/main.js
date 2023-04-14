//https://teachablemachine.withgoogle.com/models/NXu6Y-tZg/


function startClassification()
{
//O código abaixo ajuda a pedir permissão para usar o microfone do dispositivo
  navigator.mediaDevices.getUserMedia({ audio: true});
//O código abaixo declara uma variavel para guardar um modelo treinado de classificação de sons
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NXu6Y-tZg/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

function gotResults(error, results){
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'posso ouvir - '+results[0].label;
    document.getElementById("result_confidence").innerHTML = 'precisão - '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";

    var img = document.getElementById('alien1');
    var img1 = document.getElementById('alien2');
    var img2 = document.getElementById('alien3');
    var img3 = document.getElementById('alien4');
    
    if (results[0].label == "Palmas") {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    }
    else if (results[0].label == "Assobio") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    }
    else if (results[0].label == "estalo") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
    }else{
      
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
    }

  }
}