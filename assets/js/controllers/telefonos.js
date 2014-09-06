var app = angular.module('phonecatApp', []);

app.controller('PhoneListCtrl', function ($scope) {

	$scope.hola = "Ola K Ase";

  $scope.phones = [
    {'name': 'iPhone','age':3},
    {'name': 'Android','age':2},
    {'name': 'Windows Phone', 'age':1}
  ];

  $scope.empleados = [
  	{nombre:'Fabian', apellido:'Marin',email:'fabian@conexus202.com',salario:430000,ingreso:new Date()},
  	{nombre:'Juan', apellido:'Lopez',email:'juan@conexus202.com',salario:800000,ingreso:new Date()},
  	{nombre:'Andres', apellido:'Perez',email:'andres@conexus202.com',salario:1000000,ingreso:new Date()}
  ];


  $scope.ordenar = function(orden) {
  	console.log(orden)
  	$scope.orderGrid = orden;
  };
});