angular.module("vendas").controller(
		"produtoCtrl",
		function($scope, $http) {
			$scope.produtos = [];

			$scope.listarProduto = function() {
				$http.post("produto/listar").success(function(data) {
					$scope.produtos = data;

					console.log(data);
				});
			};

			$scope.novoProduto = function(produto) {
				$http.post("produto/novo", produto).success(
						function(resultadoDoResponse) {
							$scope.produto = resultadoDoResponse;
							alert("Inserido com sucesso");
							delete $scope.produto;
							$scope.prodForm.$setPristine()
						});
			};

			$scope.apagarProdutos = function(produtos) {
				// console.log(produtos);
				$scope.produtos = produtos.filter(function(produto) {
					// console.log(produtos);
					if (produto.selecionado) {
						console.log(produtos);
						$http.post("produto/delete", produto).success(
								function(resultadoDoResponse) {
									produto = resultadoDoResponse;
									alert("Dados deletados");
								});
						return produto;
					} else { 
						return produto;	
					}
				});
				$scope.listarProduto($scope.produtos);
				$scope.verificarProdutoSelecionado($scope.produtos);
			};

			// $scope.isContatoSelecionado = function (produtos) {
			// return produtos.some(function (produto) {
			// return produto.selecionado;
			// });
			// };

			$scope.verificarProdutoSelecionado = function(produtos) {
				$scope.hasContatoSelecionado = produtos.some(function(produto) {
					return produto.selecionado;
				});
			};
		});

//
// $scope.novoProduto = function(produto) {
// $http.post("produto/salvar", produto).success(function(data) {
// console.log(data);
// this.listarProduto();
// });
// };
//
// $scope.editarProduto = function(produto) {
// alert(produto.nome);
// };
// });
