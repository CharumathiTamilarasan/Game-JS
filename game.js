var random=Math.round(Math.random()*100);
var live=10;
function sub()
{
    console.log(random);
    var g2=document.getElementById('g2').value;
    live--;
    if(random==g2)
    {
        location.href="./win.html";
    }
    else if(live==0)
    {
        location.href="./loss.html";
    }
    else if((random>g2)&&live!=0)
    {
        document.getElementById('h').innerHTML="Remaining live is "+live;
        document.getElementById('high').innerHTML="Your guess is low";
    }
    else if((random<g2)&&live!=0)
    {
        document.getElementById('h').innerHTML="Remaining live is "+live;
        document.getElementById('high').innerHTML="Your guess is high";
    }
}
function back()
{
    location.href="./index.html";
}