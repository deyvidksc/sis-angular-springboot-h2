angular.module("vendas").controller(
		"clienteCtrl",
		function($scope, $http) {
			$scope.clientes = [];

			$scope.listarCliente = function() {
				$http.post("cliente/listar").success(function(data) {
					$scope.clientes = data;
					console.log(data);
				});
			};

			$scope.novoCliente = function(cliente) {
				$http.post("cliente/novo", cliente).success(
						function(resultadoDoResponse) {
							$scope.cliente = resultadoDoResponse;
						});
			};
		});
