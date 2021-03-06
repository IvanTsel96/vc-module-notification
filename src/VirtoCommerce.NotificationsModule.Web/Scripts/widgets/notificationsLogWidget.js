angular.module('virtoCommerce.notificationsModule')
.controller('virtoCommerce.notificationsModule.notificationsLogWidgetController', ['$scope', 'platformWebApp.bladeNavigationService', function ($scope, bladeNavigationService) {
	var blade = $scope.widget.blade;

	blade.showLog = function () {
		var newBlade = {
            id: 'notificationAttachmentsWidgetChild',
            title: 'notifications.widgets.notificationsLogWidget.blade-title',
			titleValues: { id: blade.currentEntity.id },
			notificationType: blade.currentEntity.type,
			languages: blade.currentEntity.languages,
            subtitle: 'notifications.widgets.notificationsLogWidget.blade-subtitle',
            controller: 'virtoCommerce.notificationsModule.notificationsJournalController',
			template: 'Modules/$(VirtoCommerce.Notifications)/Scripts/blades/notifications-journal.tpl.html'
		};
		bladeNavigationService.showBlade(newBlade, blade);
	};
}]);
