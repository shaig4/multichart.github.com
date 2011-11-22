function CharxFlashHtml(id,w,h,swf,dataUrl )
{
    var swfNode = "";
    if (!swf)
     swf = 'charx.swf';
     
     var key = '3fb31558e602c709a724af93903ebd22e573538d,8b2a9e53348852b3f94277b1b5c700c9f2db8d44,32f896d95109323f8c10c80421f1c38ca1dd196c,3aa66b63663f83cbc379259a3791bdc65ff34c54,b5b1f1b2b8ccefdaff801cbc6978594bafcc0de6,ab5eeb81cd635a0347d29e252e2b1f4bda4b5c3c';
     var flashvars='id='+ id 
             + '&key=' + key 
             + '&dataUrl=' + dataUrl;
     
    if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { 
		// netscape plugin architecture			
		swfNode = '<embed type="application/x-shockwave-flash" src="'+ swf +'" width="'+ w +'" height="'+ h +'"  ';
		swfNode += ' id="'+ id +'" name="'+ id +'" ';
         swfNode += 'wmode="transparent" '; 
		swfNode += ' flashvars="' + flashvars + '" ';
		swfNode += '/>';
	} else { // PC IE			
		swfNode = '<object id="'+ id +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ w +'" height="'+ h +'">';
		swfNode += '<param name="wmode" value="transparent" />';
		swfNode += '<param name="movie" value="'+ swf +'" />';
		swfNode += '<param name="flashvars" value="' + flashvars + '" />';
		swfNode += "</object>";
	}
    return swfNode;
}
function CharxCreate(panelId,id,w,h,swf )
{
	var panel=document.getElementById(panelId);
	if (!panel)
	    return;
    var swfNode = CharxFlashHtml(id,w,h,swf );
    panel.innerHTML=swfNode;
}
function CharxSetData(id,xml)
{
    var chartObj=document.getElementById(id);
	if (!chartObj)
	    return;
   var intr= window.setInterval(function()
   {
        if (chartObj.SetXmlString)
        {
            window.clearInterval(intr);
            try
            {
                chartObj.SetXmlString(xml);
            } catch (e)
            {
            throw (e + '\n' + id);
            }
        }
    },100);
}