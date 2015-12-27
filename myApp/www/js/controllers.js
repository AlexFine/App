angular.module('starter.controllers', [])

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

.controller('learnCtrl', function ($scope, $ionicModal) {


    $scope.tutorials = false;
    $scope.tips = false;
    $scope.explore = false;
    $scope.pdfs = [
        {
            title: 'Pocket Guide',
            link: '/img/PDF%20Guide%20v2.pdf',
            description: 'General',
            id: 0
        },
        {
            title: 'Basic Internet Uses Guide',
            link: '/img/Tutorials/Basic%20Internet%20Uses%20Guide.pdf',
            description: 'Tutorial',
            id: 1
        },
        {
            title: 'Cell Phone Survival Guide',
            link: '/img/Tutorials/Cell%20Phone%20Survival%20Guide.pdf',
            description: 'Tutorial',
            id: 2
        },
        {
            title: 'Creating a Facebook Account',
            link: '/img/Tutorials/Creating%20a%20Facebook%20Account.pdf',
            description: 'Tutorial',
            id: 3
        },
        {
            title: 'Creating a Skype Account',
            link: '/img/Tutorials/Creating%20a%20Skype%20Account.pdf',
            description: 'Tutorial',
            id: 4
        },
        {
            title: 'Creating an Email Account',
            link: '/img/Tutorials/Creating%20an%20Email%20Account.pdf',
            description: 'Tutorial',
            id: 5
        },
        {
            title: 'Flickr',
            link: '/img/Tutorials/Flickr.pdf',
            description: 'Tutorial',
            id: 6
        },
        {
            title: 'iMovie',
            link: '/img/Tutorials/iMovie.pdf',
            description: 'Tutorial',
            id: 7
        },
        {
            title: 'Interactions in Facebook',
            link: '/img/Tutorials/Interactions%20in%20Facebook.pdf',
            description: 'Tutorial',
            id: 8
        },
        {
            title: 'Making and Receiving FaceTime Calls',
            link: '/img/Tutorials/Making%20and%20Receiving%20FaceTime%20Calls.pdf',
            description: 'Tutorial',
            id: 9
        },
        {
            title: 'Navigating the Windows Operating System',
            link: '/img/Tutorials/Navigating%20the%20Windows%20Operating%20System.pdf',
            description: 'Tutorial',
            id: 10
        },
        {
            title: 'Sending and Receiving an Email',
            link: '/img/Tutorials/Sending%20and%20Receiving%20an%20Email.pdf',
            description: 'Tutorial',
            id: 11
        },
        {
            title: 'Using iPhone and iPad',
            link: '/img/Tutorials/Using%20iPhone%20and%20iPad.pdf',
            description: 'Tutorial',
            id: 12
        },
        {
            title: 'Video Conferencing through Skype',
            link: '/img/Tutorials/Video%20Conferencing%20through%20Skype.pdf',
            description: 'Tutorial',
            id: 13
        },
        {
            title: 'Tips April 12-18',
            link: '/img/Tips/Tips%20April%2012-18.pdf',
            description: 'Tips',
            id: 14
        },
        {
            title: 'Tips April 19-25',
            link: '/img/Tips/Tips%20April%2019-25.pdf',
            description: 'Tips',
            id: 15
        },
        {
            title: 'Tips April 26 - May 2',
            link: '/img/Tips/Tips%20April%2026%20-%20May%202.pdf',
            description: 'Tips',
            id: 16
        },
        {
            title: 'Tips April 5-11',
            link: '/img/Tips/Tips%20April%205-11.pdf',
            description: 'Tips',
            id: 17
        },
        {
            title: 'Tips February 1-7',
            link: '/img/Tips/Tips%20Feb%201-7.pdf',
            description: 'Tips',
            id: 18
        },
        {
            title: 'Tips February 15-21',
            link: '/img/Tips/Tips%20Feb%2015-21.pdf',
            description: 'Tips',
            id: 19
        },
        {
            title: 'Tips February 22-28',
            link: '/img/Tips/Tips%20Feb%2022-28.pdf',
            description: 'Tips',
            id: 20
        },
        {
            title: 'Tips February 8-14',
            link: '/img/Tips/Tips%20Feb%208-14.pdf',
            description: 'Tips',
            id: 21
        },
        {
            title: 'Tips January 11-17',
            link: '/img/Tips/Tips%20Jan%2011-17.pdf',
            description: 'Tips',
            id: 22
        },
        {
            title: 'Tips January 18-24',
            link: '/img/Tips/Tips%20Jan%2018-24.pdf',
            description: 'Tips',
            id: 23
        },
        {
            title: 'Tips January 25-31',
            link: '/img/Tips/Tips%20Jan%2025-31.pdf',
            description: 'Tips',
            id: 24
        },
        {
            title: 'Tips January 4-10',
            link: '/img/Tips/Tips%20Jan%204-10.pdf',
            description: 'Tips',
            id: 25
        },
        {
            title: 'Tips March 1-7',
            link: '/img/Tips/Tips%20Mar%201-7.pdf',
            description: 'Tips',
            id: 26
        },
        {
            title: 'Tips March 15-21',
            link: '/img/Tips/Tips%20Mar%2015-21.pdf',
            description: 'Tips',
            id: 27
        },
        {
            title: 'Tips March 22-28',
            link: '/img/Tips/Tips%20Mar%2022-28.pdf',
            description: 'Tips',
            id: 28
        },
        {
            title: 'Tips March 29 - April 4',
            link: '/img/Tips/Tips%20Mar%2029%20-%20April%204.pdf',
            description: 'Tips',
            id: 29
        },
        {
            title: 'Tips March 8-14',
            link: '/img/Tips/Tips%20Mar%208-14.pdf',
            description: 'Tips',
            id: 30
        },
        {
            title: 'Tips May 10-16',
            link: '/img/Tips/Tips%20May%2010-16.pdf',
            description: 'Tips',
            id: 31
        },
        {
            title: 'Tips May 17-23',
            link: '/img/Tips/Tips%20May%2017-23.pdf',
            description: 'Tips',
            id: 32
        },
        {
            title: 'Tips May 3-9',
            link: '/img/Tips/Tips%20May%203-9.pdf',
            description: 'Tips',
            id: 33
        },
        {
            title: 'Adding Pictures and Video to iPhone Messages',
            link: '/img/Explore/Adding%20Pictures%20and%20Video%20to%20iPhone%20Messages.pdf',
            description: 'Explore',
            id: 34
        },
        {
            title: 'Alarms',
            link: '/img/Explore/Alarms.pdf',
            description: 'Explore',
            id: 35
        },
        {
            title: 'Amazon',
            link: '/img/Explore/Amazon.pdf',
            description: 'Explore',
            id: 36
        },
        {
            title: 'Apple ID',
            link: '/img/Explore/Apple%20ID.pdf',
            description: 'Explore',
            id: 37
        },
        {
            title: 'Camera',
            link: '/img/Explore/Camera.pdf',
            description: 'Explore',
            id: 38
        },
        {
            title: 'Creating a Facebook Group',
            link: '/img/Explore/Creating%20a%20Facebook%20Group.pdf',
            description: 'Explore',
            id: 39
        },
        {
            title: 'Customization Options in an Email Message',
            link: '/img/Explore/Customization%20Options%20in%20an%20Email%20Message.pdf',
            description: 'Explore',
            id: 40
        },
        {
            title: 'Email Additions',
            link: '/img/Explore/Email%20Additions.pdf',
            description: 'Explore',
            id: 41
        },
        {
            title: 'Email Signature',
            link: '/img/Explore/Email%20Signature.pdf',
            description: 'Explore',
            id: 42
        },
        {
            title: 'Facebook Messenger App',
            link: '/img/Explore/Facebook%20Messenger%20App.pdf',
            description: 'Explore',
            id: 43
        },
        {
            title: 'Google Apps',
            link: '/img/Explore/Google%20Apps.pdf',
            description: 'Explore',
            id: 44
        },
        {
            title: 'Google Translate',
            link: '/img/Explore/Google%20Translate.pdf',
            description: 'Explore',
            id: 45
        },
        {
            title: 'Instagram',
            link: '/img/Explore/Instagram.pdf',
            description: 'Explore',
            id: 46
        },
        {
            title: 'iPhone and iPad App Grouping',
            link: '/img/Explore/iPhone%20and%20iPad%20App%20Grouping.pdf',
            description: 'Explore',
            id: 47
        },
        {
            title: 'iTunes',
            link: '/img/Explore/iTunes.pdf',
            description: 'Explore',
            id: 48
        },
        {
            title: 'Maps',
            link: '/img/Explore/Maps.pdf',
            description: 'Explore',
            id: 49
        },
        {
            title: 'Microsoft Office',
            link: '/img/Explore/Microsoft%20Office.pdf',
            description: 'Explore',
            id: 50
        },
        {
            title: 'Microsoft PowerPoint',
            link: '/img/Explore/Microsoft%20PowerPoint.pdf',
            description: 'Explore',
            id: 51
        },
        {
            title: 'Netflix',
            link: '/img/Explore/Netflix.pdf',
            description: 'Explore',
            id: 52
        },
        {
            title: 'Notes',
            link: '/img/Explore/Notes.pdf',
            description: 'Explore',
            id: 53
        },
        {
            title: 'Siri',
            link: '/img/Explore/Siri.pdf',
            description: 'Explore',
            id: 54
        },
        {
            title: 'Snapfish',
            link: '/img/Explore/Snapfish.pdf',
            description: 'Explore',
            id: 55
        },
        {
            title: 'Twitter',
            link: '/img/Explore/Twitter.pdf',
            description: 'Explore',
            id: 56
        },
        {
            title: 'Using Drafts',
            link: '/img/Explore/Using%20Drafts.pdf',
            description: 'Explore',
            id: 57
        },
        {
            title: 'Windows File System',
            link: '/img/Explore/Windows%20File%20System.pdf',
            description: 'Explore',
            id: 58
        },
        {
            title: 'YouTube',
            link: '/img/Explore/YouTube.pdf',
            description: 'Explore',
            id: 59
        }

    ]

    var defaultOptions = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
    };
    $scope.openPdf = function (num) {
        console.log($scope.pdfs[num]["link"]);
        path = "http://alexfine.github.io" + $scope.pdfs[num]["link"]
            //PDFReader.open(path);
        console.log(path);
        window.open(path, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
        console.log(path);
    };

    $scope.options = {
        content: 'Menu',
        isOpen: false,
        toggleOnClick: true,
        items: [
            {
                content: 'About',
                onclick: function () {
                    console.log('About');
                }
    }
  ]
    };

 
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });
})

.controller('PDFlistCtrl', ['$scope', function ($scope, $stateParams) {
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

.controller('PlaylistsCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {


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

.controller('HomeCtrl', ['$scope', '$ionicPopup', function ($scope, pdf, $ionicPopup, $timeout) {


    // Triggered on a button click, or some other target
    $scope.data = {}

    // Triggered on a button click, or some other target
    $scope.showPopup = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Dont eat that!',
            template: 'It might taste good'
        });
        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };

}])

.controller('PlaylistCtrl', function ($scope, $stateParams) {})
    .controller('pdfList', function ($scope) {

    })
    .controller('help', function ($scope, $http, $log, $timeout) {

        // Inititate the promise tracker to track form submissions.


        //$scope.link = "mailto:"+email.to+"?subject="+encodeURIComponent(email.subject)+"&body="+encodeURIComponent(email.body);
        // Form submit handler.
        console.log($scope.link)
        $scope.submit = function (form) {
            // Trigger validation flag.
            $scope.submitted = true;

            // If form is invalid, return and let AngularJS show validation errors.
            //if (form.$invalid) {
            //  return;
            //}

            // Default values for the request.
            var config = {


                'name': $scope.name,
                'email': $scope.email,

                'comments': $scope.comments

            };
            var emails = {
                to: ["josh@technocademy.org"],
                subject: 'Help for ' + config.name,
                body: config.comments + "Contact me at:" + config.email,
                isHtml: false
            };
            console.log(config.name);
            window.plugin.email.open(emails, function () {
                console.log("email view dismissed");
            });
            console.log(config);
            // Perform JSONP request.



            $scope.name;
            $scope.email;
            $scope.subjectList = null;
            $scope.url = null;
            $scope.comments = null;
            $scope.messages = 'Your form has been sent!';
            $scope.submitted = false;



            // Track the request and show its progress to the user.

        };
    });