var bulb=0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src="on .jpg";
        bulb=1;

    }
    else{

        document.getElementById("image").src="off b.jpg";
        bulb=0;
    }
}