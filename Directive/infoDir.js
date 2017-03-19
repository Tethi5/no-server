angular.module('myApp').directive('infoDir', function(myService) {
    return {
        restrict: 'E, A',
        link: function(scope, elem, attrs) {
            var ctx = $("#chart")
            var myLineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["2007","2012", "2013", "2014", "2015", "2016", "2017"],
                    datasets: [{
                        label: 'ppm',
                        data: [383.47,391.4, 393.8, 396.1, 397.2, 400, 404.7],
                        backgroundColor: [

                            'rgba(15, 48, 0, 0.86)',

                        ],
                        borderColor: [
                            'rgb(54, 94, 147)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    }
                }
            });

            $('.add').on('click', function() {
                myService.getJson().then(function(response) {
                    var x = (parseFloat(response.data));
                    myLineChart.data.datasets[0].data[7] = x;
                    myLineChart.data.labels[6] = "3/20/2017";
                    myLineChart.update();

                })
                $('.add').on('click', function(){
                $('.list:hidden:first').fadeIn('slow');
            })
        })
      }
    }
});
