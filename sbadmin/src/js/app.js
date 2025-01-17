let app = angular.module('myApp', ['ui.router', 'cp.ngConfirm', 'ngMask']);

app.config([
    '$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlROuterProvider){
        $urlROuterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<h3>Home</h3>'
            })
            .state('about', {
                url: '/about',
                template: '<h3>About</h3>'
            })
            .state('user', {
                url: '/user',
                templateUrl: './pages/user/grid.html',
                controller: function($scope, $ngConfirm){
                    $scope.grid = [
                        {id:1, name: 'Alexandre Budny', email: 'alexandre.budny1@gmail.com'},
                        {id:2, name: 'Diogo Muneratto', email: 'digomuneratto@gmail.com'}
                    ]

                    $scope.modal= function(data){
                        $ngConfirm({
                            title: 'Editar',
                            contentUrl: './pages/user/form.html',
                            scope: $scope,
                            type: 'red',
                            typeAnimeted: true,
                            columnClass: "xlarge",
                            theme: 'dark',
                            type: 'dark',
                            buttons:{
                                save:{
                                    text: "Salvar",
                                    btnClass: 'btn-green',
                                    action: function(){
                                        alert('Enviar')
                                    }
                                },
                                cancel:{
                                    text: "Cancelar",
                                    btnClass: 'btn-red',
                                    action: function(){
                                        alert('Enviar')
                                    }
                                }
                                
                                    
                                
                            }
                        })
                    }
                }
            })
}])