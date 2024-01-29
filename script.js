const accueil = document.getElementById(`accueil`);
const le1 = document.getElementById('le1');
const le2 = document.getElementById(`le2`);
const le3 = document.getElementById('le3');
const clique1 = document.getElementById('clique1');
const clique2 = document.getElementById('clique2');
const clique3 = document.getElementById('clique3');

const closeModal = document.getElementById('closeModal');
const closeModal2 = document.getElementById('closeModal2');
const closeModal3 = document.getElementById('closeModal3');


// "la communtauté de l'anneau images film"

document.addEventListener("DOMContentLoaded", function(){
  nb=10;
  p=0;
  container=document.getElementById("container");
  g=document.getElementById("g");
  d=document.getElementById("d");
  container.style.width=(60*nb)+"vw";

  for (i=1;i<=nb;i++){
    div=document.createElement("div")
    div.className="lca";
    div.style.backgroundImage="url('../images/lcda/image"+i+".png')"
    container.appendChild(div);
  }

g.onclick=function(){
if(p<0) p++;
  container.style.transform="translate("+p*60+"vw)";
  container.style.transition="all 0.5s ease";
  afficherMasquer();
}
d.onclick=function(){
if(p>-nb+1) p--;
  container.style.transform="translate("+p*60+"vw)";
  container.style.transition="all 0.5s ease"; 
  afficherMasquer();
} 
function afficherMasquer(){
  if(p==-nb+1)
    d.style.visibility="hidden";
  else
    d.style.visibility="visible";
  if(p==0)
    g.style.visibility="hidden";
  else
    g.style.visibility="visible";
}

function autoScroll() {
  p--;
  if (p <= -nb + 0){ 
      p = 0;
  }
  container.style.transform = "translate(" + p * 60 + "vw)";
  container.style.transition = "all 0.5s ease";
  afficherMasquer();
}
setInterval(autoScroll, 5000);

clique1.addEventListener('click', () => {
  accueil.style.display = 'none';
  le1.style.display = "Block";
  afficherMasquer();
})

closeModal.addEventListener('click', function () {
  le1.style.display = 'none';
  accueil.style.display = 'block';
  p = 0; 
  
  container.style.transform = "translate(" + p * 60 + "vw)";
  container.style.transition = "none"; 
});
});


// // "les deux tour images film"
document.addEventListener("DOMContentLoaded", function(){
  nbrr=10;
  p2=0;
  container2=document.getElementById("container2");
  ga=document.getElementById("ga");
  dr=document.getElementById("dr");
  container2.style.width=(60*nbrr)+"vw";
  for (i=1;i<=nbrr;i++){
    div=document.createElement("div")
    div.className="lca";
    div.style.backgroundImage="url('../images/ldt/image"+i+".png')"
    container2.appendChild(div);
  }
  afficherMasquer();

ga.onclick=function(){
if(p2<0)
  p2++;
  container2.style.transform="translate("+p2*60+"vw)";
  container2.style.transition="all 0.5s ease";
  afficherMasquer();
}
dr.onclick=function(){
  if(p2>-nbrr+1)
    p2--;
    container2.style.transform="translate("+p2*60+"vw)";
    container2.style.transition="all 0.5s ease";
  afficherMasquer();
}
function afficherMasquer(){
  if(p2==-nbrr+1)
    dr.style.visibility="hidden";
  else
    dr.style.visibility="visible";
  if(p2==0)
    ga.style.visibility="hidden";
  else
    ga.style.visibility="visible";
}

function autoScroll2() {
  p2--;
  if (p2 <= -nbrr + 0){ p2 = 0; }
  container2.style.transform = "translate(" + p2 * 60 + "vw)";
  container2.style.transition = "all 0.5s ease";
  afficherMasquer();
}
setInterval(autoScroll2, 5000);

clique2.addEventListener('click', () => {
  accueil.style.display = 'none';
  le2.style.display = "block";
})
closeModal2.addEventListener('click', function () {
  le2.style.display = 'none';
  accueil.style.display = 'block';
  p2 = 0; 

  container2.style.transform = "translate(" + p2 * 60 + "vw)";
  container2.style.transition = "none"; // 
  afficherMasquer();
  
});
});

// // // "le retour du roi images film"
document.addEventListener("DOMContentLoaded", function(){
  nbr=19;
  p3=0;
  container3=document.getElementById("container3");
  gau=document.getElementById("gau");
  dro=document.getElementById("dro");
  container3.style.width=(60*nbr)+"vw";
  for (i=1;i<=nbr;i++){
    div=document.createElement("div")
    div.className="lca";
    div.style.backgroundImage="url('../images/lrdr/image"+i+".png')"
    container3.appendChild(div);
  }
  afficherMasquer();

gau.onclick=function(){
if(p3<0)
  p3++;
  container3.style.transform="translate("+p3*60+"vw)";
  container3.style.transition="all 0.5s ease";
  afficherMasquer();
}
dro.onclick=function(){
if(p3>-nbr+1)
  p3--;
  container3.style.transform="translate("+p3*60+"vw)";
  container3.style.transition="all 0.5s ease";
  afficherMasquer();
}
function afficherMasquer(){
  if(p3==-nbr+1)
    dro.style.visibility="hidden";
  else
    dro.style.visibility="visible";
  if(p3==0)
    gau.style.visibility="hidden";
  else
    gau.style.visibility="visible";
}

function autoScroll3() {
  p3--;
  if (p3 <= -nbr + 0){
    p3 = 0;
  }
  container3.style.transform = "translate(" + p3 * 60 + "vw)";
  container3.style.transition = "all 0.5s ease";
  afficherMasquer();
}
setInterval(autoScroll3, 5000);

clique3.addEventListener('click', () => {
  accueil.style.display = 'none';
  le3.style.display = "block";
})
closeModal3.addEventListener('click', function () {
  le3.style.display = 'none';
  accueil.style.display = 'block';
  p3 = 0; 
  container3.style.transform = "translate(" + p3 * 60 + "vw)";
  container3.style.transition = "none"; // 
  afficherMasquer();
});
});
