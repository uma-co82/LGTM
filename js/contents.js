$(function() {
    // 受信側 other tab -> contents(popup/option -> contents)
    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        // ダブルクオーテーションを外す
        var contents = message.slice(1).slice(0, -1);
        var already_text = $('#new_comment_field').val();
        // 変更されたら上書き
        $('#new_comment_field').change(function() {
            var already_text = $('#new_comment_field').val();
        });
        $('#new_comment_field').val(already_text + "\n" + contents);
        return;
    });
});
