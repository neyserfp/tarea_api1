window.addEventListener("load", function(){

    let v1 = document.getElementById('v1');
    let b1 = document.getElementById('b1');

    //test_api(v1.value);

    b1.addEventListener("click", function(){
        test_api(v1.value);
    });


    
});

function test_api(v1){

    // Identificar contenedores
    let c1 = document.getElementById('c1');
    let c2 = document.getElementById('c2');
    let divc2 = document.getElementById('divc2');

    let ajax1 = new XMLHttpRequest();
    ajax1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let obj = this.responseText;
            let obj1 = JSON.parse(obj);
            let heroes = obj1.results;

            // Eliminar todos los hijos
            while (divc2.firstChild) {
                divc2.removeChild(divc2.firstChild);
            }

            heroes.forEach((h) => {
                console.log(h.name);

                // Recoger Poderes
                let intelligence = h.powerstats.intelligence;
                let strength = h.powerstats.strength;
                let speed = h.powerstats.speed;
                let durability = h.powerstats.durability;
                let power = h.powerstats.power;
                let combat = h.powerstats.combat;

                // Crear Elementos de Card
                var div1 = document.createElement('div');
                var div2 = document.createElement('div');
                div1.setAttribute('class','col-2 p-1');
                div2.setAttribute('class','card');
                //div2.setAttribute('style','width: 18rem;');
                var img1 = document.createElement('img');
                img1.setAttribute("src",h.image.url);
                img1.setAttribute("class","card-img-top");

                var div3 = document.createElement('div');
                div3.setAttribute('class','card-body');
                var h5 = document.createElement('h5');
                h5.setAttribute('class','card-title');
                h5.innerHTML = "ID: "+h.id;
                var p1 = document.createElement('p');
                p1.innerHTML = h.name

                var ul1 = document.createElement('ul');
                ul1.setAttribute('class','list-group list-group-flush');
                var li1 = document.createElement('li');
                li1.setAttribute('class','list-group-item');
                li1.innerHTML = h.biography["full-name"];
                var li2 = document.createElement('li');
                li2.setAttribute('class','list-group-item');
                li2.innerHTML = h.appearance.gender;

                // Intelligence
                var div4 = document.createElement('div');
                div4.innerHTML = "Intelligence";
                div4.setAttribute('class','p-1');
                var div5 = document.createElement('div');
                div5.setAttribute('class','progress progress-xs m-2');
                var div6 = document.createElement('div');
                div6.setAttribute('class','progress-bar progress-bar-danger');
                div6.setAttribute('style','width: '+intelligence+'%');

                // Strength
                var div7 = document.createElement('div');
                div7.innerHTML = "Strength";
                div7.setAttribute('class','p-1');
                var div8 = document.createElement('div');
                div8.setAttribute('class','progress progress-xs m-2');
                var div9 = document.createElement('div');
                div9.setAttribute('class','progress-bar bg-warning');
                div9.setAttribute('style','width: '+strength+'%');

                // Speed
                var div10 = document.createElement('div');
                div10.innerHTML = "Speed";
                div10.setAttribute('class','p-1');
                var div11 = document.createElement('div');
                div11.setAttribute('class','progress progress-xs m-2');
                var div12 = document.createElement('div');
                div12.setAttribute('class','progress-bar bg-success');
                div12.setAttribute('style','width: '+speed+'%');




                divc2.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(img1);
                div2.appendChild(div3);
                div2.appendChild(ul1);
                div2.appendChild(div4);
                div2.appendChild(div5);
                div2.appendChild(div7);
                div2.appendChild(div8);
                div2.appendChild(div10);
                div2.appendChild(div11);

                div3.appendChild(h5);
                div3.appendChild(p1);

                ul1.appendChild(li1);
                ul1.appendChild(li2);
                div5.appendChild(div6);
                div8.appendChild(div9);
                div11.appendChild(div12);


              });
    

        }
}

// Utiliza CORS Anywhere como proxy
let proxyUrl = "https://corsproxy.io/?";
let apiUrl = "https://superheroapi.com/api/10226920053841937/search/"+v1;

ajax1.open("GET", proxyUrl + apiUrl, true);
ajax1.send();
}
