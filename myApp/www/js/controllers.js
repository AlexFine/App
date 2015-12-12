angular.module('starter.controllers', ['ngPDFViewer'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('learnCtrl', ['$scope', 'PDFViewerService', function ($scope, pdf, $ionicModal, $ionicPopup, $timeout) {
    var explore;
    var tips;
    var tutorials;
    $scope.checkedArr = [];

    $scope.checkSelect = function (type) {
        if (type === 'Explore') {
            if (explore == false) {
                var explore = true;
            } else if (explore == true) {
                var explore = false;
            }
        }
        if (type === 'Tips') {
            var explore = true;
        }
        if (type === 'Tutorials') {
            var explore = true;
        }
    };



    $scope.pdfs = [
        {
            title: 'PDF Guide',
            link: '../img/PDF%20Guide%20v2.pdf',
            description: 'General',
            id: 1
        },
        {
            title: 'Adding Pictures and Video to iPhone Messages',
            link: '../img/explore/Adding%20Pictures%20and%20Video%20to%20iPhone%20Messages.pdf',
            description: 'Explore',
            id: 2
        },
        {
            title: 'Amazon',
            link: '../img/explore/Amazon.pdf',
            description: 'Explore',
            id: 3
        },
        {
            title: 'Alarms',
            link: '../img/explore/Alarms.pdf',
            description: 'Explore',
            id: 4
        },
        {
            title: 'Apple ID',
            link: '../img/explore/Apple%20ID.pdf',
            description: 'Explore',
            id: 5
        }
        ]


    // Triggered on a button click, or some other target
    $scope.showPopup = function () {
      
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: 'Enter Wi-Fi Password',
            subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
      }
    ]
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
    };
    // A confirm dialog
    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };

    // An alert dialog
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Don\'t eat that!',
            template: 'It might taste good'
        });
        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
           $scope.viewer = pdf.Instance("viewer");
    
        $scope.nextPage = function () {
            $scope.viewer.nextPage();
        };
    
        $scope.prevPage = function () {
            $scope.viewer.prevPage();
        };
    
        $scope.pageLoaded = function (curPage, totalPages) {
            $scope.currentPage = curPage;
            $scope.totalPages = totalPages;
        };
    


    //   $ionicModal.fromTemplateUrl('templates/search.html', {
    //    scope: $scope,
    //    animation: 'slide-in-up'
    //  }).then(function(modal) {
    //    $scope.modal = modal;
    //  });
    //  $scope.openModal = function() {
    //    $scope.modal.show();
    //  };
    //  $scope.closeModal = function() {
    //    $scope.modal.hide();
    //  };
    //  //Cleanup the modal when we're done with it!
    //  $scope.$on('$destroy', function() {
    //    $scope.modal.remove();
    //  });
    //  // Execute action on hide modal
    //  $scope.$on('modal.hidden', function() {
    //    // Execute action
    //  });
    //  // Execute action on remove modal
    //  $scope.$on('modal.removed', function() {
    //    // Execute action
    //  });

}])

.controller('PDFlistCtrl', ['$scope', 'PDFViewerService', function ($scope, $stateParams, pdf) {
    //    $scope.viewer = pdf.Instance("viewer");

    $scope.nextPage = function () {
        $scope.viewer.nextPage();
    };

    $scope.prevPage = function () {
        $scope.viewer.prevPage();
    };

    $scope.pageLoaded = function (curPage, totalPages) {
        $scope.currentPage = curPage;
        $scope.totalPages = totalPages;
    };

}])

.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
        {
            title: 'Reggae',
            id: 1
        },
        {
            title: 'Chill',
            id: 2
        },
        {
            title: 'Dubstep',
            id: 3
        },
        {
            title: 'Indie',
            id: 4
        },
        {
            title: 'Rap',
            id: 5
        },
        {
            title: 'Cowbell',
            id: 6
        }
  ];
})

.controller('HomeCtrl', ['$scope', function ($scope, pdf, $ionicPopup, $timeout) {
//    $scope.pdfs = [
//        {
//            title: 'Reggae',
//            link: ' '
//        },
//        {
//            title: 'Chill',
//            link: 2
//        },
//        {
//            title: 'Dubstep',
//            link: 3
//        },
//        {
//            title: 'Indie',
//            link: 4
//        },
//        {
//            title: 'Rap',
//            link: 5
//        },
//        {
//            title: 'Rap',
//            link: 5
//        },
//        {
//            title: 'Rap',
//            link: 5
//        },
//        {
//            title: 'Rap',
//            link: 5
//        },
//        {
//            title: 'Cowbell',
//            link: 6
//        }
//        ]

    //    $scope.viewer = pdf.Instance("viewer");
    //
    //    $scope.nextPage = function () {
    //        $scope.viewer.nextPage();
    //    };
    //
    //    $scope.prevPage = function () {
    //        $scope.viewer.prevPage();
    //    };
    //
    //    $scope.pageLoaded = function (curPage, totalPages) {
    //        $scope.currentPage = curPage;
    //        $scope.totalPages = totalPages;
    //    };
    
    // Triggered on a button click, or some other target
  $scope.data = {}
  
  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Dont eat that!',
      template: 'It might taste good'
    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };
    
}])

.controller('PlaylistCtrl', function ($scope, $stateParams) {});