(function (window, undefined) {
    window.Asc.plugin.init = function () {
        this.callCommand(function() {
            var oDocument = Api.GetDocument();
            var oParagraph = Api.CreateParagraph();
            oParagraph.AddText("Hello world!");
            oDocument.InsertContent([oParagraph]);
        }, true);
    };
    window.Asc.plugin.button = function()
	{
		this.executeCommand("close", "");
	};
})(window, undefined);