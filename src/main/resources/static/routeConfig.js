angular.module("vendas").config(function ($routeProvider) {
	$routeProvider.when("/produto", {
		templateUrl: "produto.html",
		controller: "produtoCtrl"
	});
	$routeProvider.when("/produto/listar", {
		templateUrl: "produtoLista.html",
		controller: "produtoCtrl"
	});
	$routeProvider.when("/cliente", {
		templateUrl: "cliente.html",
		controller: "clienteCtrl"
	});
	$routeProvider.when("/cliente/listar", {
		templateUrl: "clienteLista.html",
		controller: "clienteCtrl"
	});
	$routeProvider.when("/inicio", {
		templateUrl: "index.html",
//		controller: "adminCtrl"
	});
	$routeProvider.when("/sobre", {
		templateUrl: "sobre.html",
//		controller: "adminCtrl"
	});
//	$routeProvider.otherwise({redirectTo: "/inicio"});
});