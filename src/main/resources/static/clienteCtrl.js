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
							alert("Inserido com sucesso");
							delete $scope.cliente;
							$scope.clienteForm.$setPristine()
						});
			};
			
			
			

			$scope.apagarClientes = function(clientes) {
				// console.log(clientes);
				$scope.clientes = clientes.filter(function(cliente) {
					// console.log(clientes);
					if (cliente.selecionado) {
						console.log(clientes);
						$http.post("cliente/delete", cliente).success(
								function(resultadoDoResponse) {
									cliente = resultadoDoResponse;
									alert("Dados deletados");
								});
						return cliente;
					} else { 
						return cliente;	
					}
				});
				$scope.listarCliente($scope.clientes);
				$scope.verificarClienteSelecionado($scope.clientes);
			};

			// $scope.isContatoSelecionado = function (clientes) {
			// return clientes.some(function (cliente) {
			// return cliente.selecionado;
			// });
			// };

			$scope.verificarClienteSelecionado = function(clientes) {
				$scope.hasContatoSelecionado = clientes.some(function(cliente) {
					return cliente.selecionado;
				});
			};			
			
			
			
			
			
			
			
		});
