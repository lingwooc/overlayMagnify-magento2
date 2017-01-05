define(['mage/utils/wrapper'], function (wrapper) {
	'use strict';
	return function (targetModule) {
		window.console.log("Load the gallery mixin.");

		return targetModule.extend({
			initFullscreenSettings: function () {
				window.console.log("Run the gallery fix.");
				var self = this;

				var result = this._super(); //call parent method
				this.settings.$element.on('mouseup', '.magnifier-large', function () {
					self.openFullScreen();
				});
				return result;
			}
		});
	};
});