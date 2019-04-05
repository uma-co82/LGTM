$(function() {

    //　画像ランダム取得(https://lgtmoon.herokuapp.com/)
    var min = 2;
    var max =  17269;
    var img_num = Math.floor(Math.random() * (max + 1 - min)) + min;
    var img_num2 = Math.floor(Math.random() * (max + 1 - min)) + min;
    var img_num3 = Math.floor(Math.random() * (max + 1 - min)) + min;
    $('.img1').attr({
      'src' : "https://lgtmoon.herokuapp.com/images/" + img_num, 'value' : "![LGTM](https://lgtmoon.herokuapp.com/images/" + img_num + ")"
    });
    $('.img2').attr({
      'src' : "https://lgtmoon.herokuapp.com/images/" + img_num2, 'value' : "![LGTM](https://lgtmoon.herokuapp.com/images/" + img_num2 + ")"
    });
    $('.img3').attr({
      'src' : "https://lgtmoon.herokuapp.com/images/" + img_num3, 'value' : "![LGTM](https://lgtmoon.herokuapp.com/images/" + img_num3 + ")"
    });
    $('img').on('error', function(){
        $(this).attr({
          'src' : 'https://lgtmoon.herokuapp.com/images/13906', 'value' : "![LGTM](https://lgtmoon.herokuapp.com/images/13906)"
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
        var build_markdown = '![LGTM](' + selected_lgtm_link + ')';

        // contentsに送る
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,
                JSON.stringify(build_markdown),
                function (response) {
                });
        });
    });
});
