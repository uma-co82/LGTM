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
                $(this).attr('src', 'https://lgtmoon.herokuapp.com/images/13906');
            });

            $('#re-acquisition').click(function() {
                location.reload();
            });
            
            
            $('.lgtm-list li').click(function() {
                // GitHubの場合
                var textarea_element = $('.new_comment_field');
                var already_text_val = $('#new_comment_field').val();
                var selected_lgtm_link = $(this).find('img').attr('src');
                var build_markdown = '![LGTM](' + selected_lgtm_link + ')';
                textarea_element.val(already_text_val + '\n' + build_markdown);

                // BitBucketの場合
                // var textarea_element = $('.ProseMirror');
                // var selected_lgtm_link = $(this).find('img').attr('src');
                // var build_html = '<div layout="center" contenteditable="false">' +
                //                  '<div class="media-single center sc-hgRTRy ksNUAd" width="400" height="300">' +
                //                  '<div class="sc-kIWQTW diyOWi"><div class="sc-eQGPmX kHejiU">' +
                //                  '<div class="sc-dXLFzO dBzutI sc-isBZXS dPcuUF"><div class="wrapper">' +
                //                  '<div class="img-wrapper">' +
                //                  '<div class="media-card  sc-eMRERa vltQz" style="background-image: url("' +
                //                  selected_lgtm_link + '");">' +
                //                  '</div></div></div></div></div></div></div><div></div></div>'
                // textarea_element.append(selected_lgtm_html);
            });
        });