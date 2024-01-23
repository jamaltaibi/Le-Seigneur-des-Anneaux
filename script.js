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
  container.style.width=(65*nb)+"vw";
  for (i=1;i<=nb;i++){
    div=document.createElement("div")
    div.className="lca";
    div.style.backgroundImage="url('../images/lcda/image"+i+".png')"
    container.appendChild(div);
  }
  afficherMasquer();

g.onclick=function(){
if(p<0)
  p++;
  container.style.transform="translate("+p*65+"vw)";
  container.style.transition="all 0.5s ease";
  afficherMasquer();
}
d.onclick=function(){
if(p>-nb+1)
  p--;
  container.style.transform="translate("+p*65+"vw)";
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
});
clique1.addEventListener('click', () => {
  accueil.style.display = 'none';
  le1.style.display = "Block";
})
closeModal.addEventListener('click', function () {
  le1.style.display = 'none';
  accueil.style.display = 'block';
  p = 0; 
  container.style.transform = "translate(" + p * 65 + "vw)";
  container.style.transition = "none"; // 
  afficherMasquer();
});

// // "les deux tour images film"
document.addEventListener("DOMContentLoaded", function(){
  nbrr=10;
  p=0;
  container2=document.getElementById("container2");
  ga=document.getElementById("ga");
  dr=document.getElementById("dr");
  container2.style.width=(65*nbrr)+"vw";
  for (i=1;i<=nbrr;i++){
    div=document.createElement("div")
    div.className="lca";
    div.style.backgroundImage="url('../images/ldt/image"+i+".png')"
    container2.appendChild(div);
  }
  afficherMasquer();

ga.onclick=function(){
if(p<0)
  p++;
  container2.style.transform="translate("+p*65+"vw)";
  container2.style.transition="all 0.5s ease";
  afficherMasquer();
}
dr.onclick=function(){
  if(p>-nbrr+1)
    p--;
    container2.style.transform="translate("+p*65+"vw)";
    container2.style.transition="all 0.5s ease";
  afficherMasquer();
}
function afficherMasquer(){
  if(p==-nbrr+1)
    dr.style.visibility="hidden";
  else
    dr.style.visibility="visible";
  if(p==0)
    ga.style.visibility="hidden";
  else
    ga.style.visibility="visible";
}
});
clique2.addEventListener('click', () => {
  accueil.style.display = 'none';
  le2.style.display = "block";
})
closeModal2.addEventListener('click', function () {
  le2.style.display = 'none';
  accueil.style.display = 'block';
  p = 0; 
  container2.style.transform = "translate(" + p * 65 + "vw)";
  container2.style.transition = "none"; // 
  afficherMasquer();
  
});

// // // "le retour du roi images film"
document.addEventListener("DOMContentLoaded", function(){
  nbr=19;
  p=0;
  container3=document.getElementById("container3");
  gau=document.getElementById("gau");
  dro=document.getElementById("dro");
  container3.style.width=(65*nbr)+"vw";
  for (i=1;i<=nbr;i++){
    div=document.createElement("div")
    div.className="lca";
    div.style.backgroundImage="url('../images/lrdr/image"+i+".png')"
    container3.appendChild(div);
  }
  afficherMasquer();

gau.onclick=function(){
if(p<0)
  p++;
  container3.style.transform="translate("+p*65+"vw)";
  container3.style.transition="all 0.5s ease";
  afficherMasquer();
}
dro.onclick=function(){
if(p>-nbr+1)
  p--;
  container3.style.transform="translate("+p*65+"vw)";
  container3.style.transition="all 0.5s ease";
  afficherMasquer();
}
function afficherMasquer(){
  if(p==-nbr+1)
    dro.style.visibility="hidden";
  else
    dro.style.visibility="visible";
  if(p==0)
    gau.style.visibility="hidden";
  else
    gau.style.visibility="visible";
}
});
clique3.addEventListener('click', () => {
  accueil.style.display = 'none';
  le3.style.display = "block";
})
closeModal3.addEventListener('click', function () {
  le3.style.display = 'none';
  accueil.style.display = 'block';
  p = 0; 
  container3.style.transform = "translate(" + p * 65 + "vw)";
  container3.style.transition = "none"; // 
  afficherMasquer();
});
