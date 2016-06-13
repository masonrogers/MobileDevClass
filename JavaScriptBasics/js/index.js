window.onload = function()
{
    document.getElementById('btnShow').addEventListener('click', showMe, false);
    
    var btn = document.createElement('Button');
    var text = document.createTextNode('Click Me');
    btn.appendChild(text);
    document.body.appendChild(btn);
    
    var myDiv = document.getElementById('content');
    myDiv.innterHTML = "Georgia College";
    
    var theElements = myDiv.getElementsByClassName('large');
    theElements[0].innerHTML="Georgia College";
};

function showMe()
{
    
    alert("show me");
}
function addNumbers()
{
    
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var result = document.getElementById('result');
    
    result.value = parseInt(num1.value) + parseInt(num2.value);
}

function testJS()
{
    var image = document.getElementById('myImage');
    if (image.src.match('go'))
        image.src = "img/stop.jpg"
    else
        image.src = "img/go.jpg";
}
