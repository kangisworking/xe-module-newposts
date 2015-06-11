function addReplaceVar(varStr) {
    //jQuery('textarea[name=content]').val(jQuery('textarea[name=content]').val() + varStr);
    //jQuery('textarea[name=content]').focus();
	target = jQuery('textarea[name=content]');
	cursor = getCursor(target);
	appendAtCursor(target, cursor, varStr);
}
(function($) {
	jQuery(function($) {
		// replace var
        $('.notiReplaceVar').click(function() {
            addReplaceVar('%' + $(this).attr('var') + '%');
            return false;
        });
	});
}) (jQuery);

function getCursor(el) {
        if (el.prop("selectionStart")) 
		{
            return el.prop("selectionStart");
        } 
		else if (document.selection) 
		{
            el.focus();

            var r = document.selection.createRange();
            if (r == null) {
                return 0;
            }

            var re = el.createTextRange(),
            rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint('EndToStart', re);

            return rc.text.length;
        }
        return 0;
    };

function appendAtCursor($target, cursor, $value) {
        var value = $target.val();
        if (cursor != value.length) 
		{
            var startPos = $target.prop("selectionStart");
            var scrollTop = $target.scrollTop;
            $target.val(value.substring(0, cursor) + ' ' + $value + ' ' + value.substring(cursor, value.length));
            $target.prop("selectionStart", startPos + $value.length);
            $target.prop("selectionEnd", startPos + $value.length);
            $target.scrollTop = scrollTop;
        } 
		else if (cursor == 0)
        {
            $target.val($value + ' ' + value);
        } 
		else 
		{
            $target.val(value + ' ' + $value);
        }
    };






jQuery(document).ready(function() {
    jQuery("#time_switch").click(function() {
       if (jQuery(this).is(":checked")) { 
          jQuery("#time_start").prop("disabled", true);
          jQuery("#time_end").prop("disabled", true);
		  jQuery("#reserv_switch").prop("disabled", true);
		  jQuery("#reserv_switch").prop("checked", false);
       } else {
          jQuery("#time_start").prop("disabled", false);  
          jQuery("#time_end").prop("disabled", false);  
		  jQuery("#reserv_switch").prop("disabled", false);
       }
    });

	if(jQuery("#time_switch").is(":checked")) 
	{
		console.log("checked");
		jQuery("#time_start").prop("disabled", true);
		jQuery("#time_end").prop("disabled", true);
		jQuery("#reserv_switch").prop("disabled", true);
	}
});
