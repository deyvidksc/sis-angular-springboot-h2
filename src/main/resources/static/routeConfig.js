angular.module("vendas").config(function ($routeProvider) {
	$routeProvider.when("/produto", {
		templateUrl: "produto.html",
		controller: "produtoCtrl"
	});
	$routeProvider.when("/cliente", {
		templateUrl: "cliente.html",
		controller: "clienteCtrl"
	});
	$routeProvider.when("/inicio", {
		templateUrl: "index.html",
//		controller: "adminCtrl"
	});
//	$routeProvider.otherwise({redirectTo: "/inicio"});
});