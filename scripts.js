// "la communtauté de l'anneau images film"
document.addEventListener("DOMContentLoaded", function(){
    nbr=10;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(65*nbr)+"vw";
    for (i=1;i<=nbr;i++){
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
  if(p>-nbr+1)
    p--;
    container.style.transform="translate("+p*65+"vw)";
    container.style.transition="all 0.5s ease"; 
    afficherMasquer();
  } 
function afficherMasquer(){
    if(p==-nbr+1)
      d.style.visibility="hidden";
    else
      d.style.visibility="visible";
    if(p==0)
      g.style.visibility="hidden";
    else
      g.style.visibility="visible";
  }
});

// // "les deux tour images film"
document.addEventListener("DOMContentLoaded", function(){
  nbr=10;
  p=0;
  container2=document.getElementById("container2");
  g=document.getElementById("g");
  d=document.getElementById("d");
  container2.style.width=(65*nbr)+"vw";
  for (i=1;i<=nbr;i++){
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
  if(p>-nbr+1)
    p--;
    container2.style.transform="translate("+p*65+"vw)";
    container2.style.transition="all 0.5s ease";
  afficherMasquer();
}
function afficherMasquer(){
  if(p==-nbr+1)
    dr.style.visibility="hidden";
  else
    dr.style.visibility="visible";
  if(p==0)
    ga.style.visibility="hidden";
  else
    ga.style.visibility="visible";
}
});

// // // "le retour du roi images film"
document.addEventListener("DOMContentLoaded", function(){
  nbr=10;
  p=0;
  container3=document.getElementById("container3");
  g=document.getElementById("g");
  d=document.getElementById("d");
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