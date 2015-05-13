hrApp.service('MathService', function () {
        return {
            add: function (a, b) {
                return a + b;
            },

            substract: function (a, b) {
                return a - b;
            },

            multiply: function(a, b) {
                return a * b;
            },

            divide: function(a, b) {
                if (b == 0)
                    return 0;
                else
                    return a / b;
            }
        }
    }
);