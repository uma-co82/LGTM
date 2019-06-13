$(function() {
    // 受信側 other tab -> contents(popup/option -> contents)
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        // ダブルクオーテーションを外す
        var contents = message.slice(1).slice(0, -1);
        var already_text = $('#new_comment_field').val();
        var textarea_element = $('.ProseMirror p');
        copyMarkDownToClipboard(contents);
        // 変更されたら上書き
        $('#new_comment_field').change(function() {
            var already_text = $('#new_comment_field').val();
        });
        // 既に記述がある時は改行して挿入,無い場合は改行せずに挿入
        if (already_text) {
            $('#new_comment_field').val(already_text + "\n" + contents);
        } else {
            $('#new_comment_field').val(contents);
        }
        // submitボタンのdisabledを解除
        $('#partial-new-comment-form-actions > .btn-primary').prop("disabled", false);
        return;
    });

    function copyMarkDownToClipboard(textVal){
        var copyFrom = document.createElement("textarea");
        copyFrom.textContent = textVal;
        var bodyElm = document.getElementsByTagName("body")[0];
        bodyElm.appendChild(copyFrom);
        copyFrom.select();
        var retVal = document.execCommand('copy');
        bodyElm.removeChild(copyFrom);
        return retVal;
    }
});
