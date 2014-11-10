

var productInCart = [];
var val;

angular.module('menu.controllers', [])
    .controller('ViewCtrl', ['$http', function ($http) {
        var menu = this;
        menu.products = [];
        $http.get('res/foods.json').success (function(data){
            menu.products = data;
        });
    }])
    .controller('DescriptionCtrl', ['$scope', function($scope){

    }])
    .controller('TabCtrl', ['$scope', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    }])
    .controller('CartCtrl', ['$scope', function(){
        this.cart = productInCart;
        this.val = val;

        this.getOrders = function(){
            return this.orders;
        };

        this.addToCart = function(food){
            for(var key in productInCart){
                if(productInCart[key].id === food.id){
                    alert("Уже было добавленно");
                    return;
                }
            }
            productInCart.push(food);
            this.orders++;
            alert(food.name + " " + "добавленно");
        };

        this.removeFromCart = function(food){
            productInCart.pop(food);
            this.orders--;
        };

        this.getSum = function(){
            this.val = 0;
            for (var key in productInCart){
                this.val += productInCart[key].price * productInCart[key].piece;
            }
            return this.val;
        };

        this.add = function(food){
            food.piece++;
            this.sum();
        };

        this.sub = function(food){
            food.piece--;
            if (food.piece < 1) {
                food.piece = 1;
            }
            this.sum();
        };

    }])
    .controller('MenuCtrl', ['$scope', function(){
            this.getOrders = function(){
                return productInCart.length;
            };

            this.selectCategory = function(setCategory){
                this.category = setCategory;
            };

            this.selectProduct = function(setProduct){
                this.product = setProduct;
            };

            this.getProduct = function(){
                return this.product;
            };
    }]);


