$(document).ready(function(){
    
    $("#generate").on("click",function(){
        let directLink = '';
        let url = $("#fileUrl").val();
        var urlCount = url.split(','),
        i;
        for (i = 0; i < urlCount.length; i++ ){
            url = urlCount[i].trim().split('/');
            directLink += ' <div class="position-relative m-1 m-md-2 d-inline-block"> <img src="https://drive.google.com/uc?id=' + url[5] +'" /> <button class="btn btn-warning" id="copy" data-link=https://drive.google.com/uc?id=' + url[5] +'>Copy</button></div> ';
            document.getElementById('result').innerHTML = directLink;
        }
    });

    $("html").delegate("#copy", "click", function(){
     
        let text = $(this).data("link");
        let input = document.createElement('input');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        $.toast({
            text: 'Link copied to clipboard!',
            position: 'top-right',
            stack: false,
            icon: 'success'
        });
    });
});