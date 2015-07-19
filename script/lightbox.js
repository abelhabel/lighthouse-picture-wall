function Lightbox(source, w, h)
{
    var outer = document.createElement('div');
    outer.className = "outer";
    document.getElementsByTagName('body')[0].appendChild(outer);
    
    var frame = document.createElement('div');
    frame.className = "lbFrame";
    frame.style.width = w + "px";
    frame.style.height = h + "px";
    frame.scrolling = "no";
    outer.appendChild(frame);

    var img = document.createElement('img');
    img.src = source.getElementsByTagName('img')[0].src
    frame.appendChild(img);
    
    outer.addEventListener('click', function(e)
    {
        if(e.target !== frame)
        {
            outer.parentNode.removeChild(outer);
        }
    }, false);
    console.log(source.getElementsByTagName('img'))
}

window.onload = function()
{
    members = document.getElementsByClassName('member');
    for(var i = 0; i < members.length; i += 1)
    {
        members[i].addEventListener('click', function(){Lightbox(this, 400, 400)}, false);
    }
}