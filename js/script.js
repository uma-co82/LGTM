$(function() {

    //　画像ランダム取得(https://lgtmoon.herokuapp.com/)
    const MIN = 2;
    const MAX =  20062;
    const URL = "https://lgtmoon.herokuapp.com/images/";
    const MD = "![LGTM](https://lgtmoon.herokuapp.com/images/";
    var img_num = Math.floor(Math.random() * (MAX + 1 - MIN)) + MIN;
    var img_num2 = Math.floor(Math.random() * (MAX + 1 - MIN)) + MIN;
    var img_num3 = Math.floor(Math.random() * (MAX + 1 - MIN)) + MIN;

    $('.img1').attr({
      'src' : `${URL}${img_num}`, 'value' : `${MD}${img_num})`
    });
    $('.img2').attr({
      'src' : `${URL}${img_num2}`, 'value' : `${MD}${img_num2})`
    });
    $('.img3').attr({
      'src' : `${URL}${img_num3}`, 'value' : `${MD}${img_num3})`
    });
    $('img').on('error', function(){
        var any_img = Math.floor(Math.random() * (MAX + 1 - MIN)) + MIN;
        $(this).attr({
          'src' : `${URL}${any_img}`, 'value' : `${MD}${any_img})`
        });
    });

    // 画像のリロード
    $('#re-acquisition').click(function() {
        location.reload();
    });

    // 画像の挿入
    $('.lgtm-list li').click(function() {
        // GitHubの場合
        var selected_lgtm_link = $(this).find('img').attr('src');
        var build_markdown = `![LGTM](${selected_lgtm_link})`;

        // contentsに送る
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,
                JSON.stringify(build_markdown),
                function (response) {
                });
        });

        // modal挿入
        modalResize();
        $("#dialog").fadeIn("slow");
        $(window).resize(modalResize);
        function modalResize(){
          var w = $(window).width();
          var h = $(window).height();
 
          var cw = $("#dialog").outerWidth();
          var ch = $("#dialog").outerHeight();
 
          $("#dialog").css({
              "left": ((w - cw)/2) + "px",
              "top": ((h - ch)/2) + "px"
          });
        }
        function noneModal() {
          $("#dialog").fadeOut("slow");
        }
        window.setTimeout(noneModal(), 2200);
    });
});
