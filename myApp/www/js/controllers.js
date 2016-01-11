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
            title: 'Calls and Voicemail',
            link: '/img/Explore/Internet_Email_Cell_Phone/Calls%20and%20Voicemail.pdf',
            description: 'Internet',
            id: 1
        },
        {
            title: 'Customization Options in an Email Message',
            link: '/img/Explore/Internet_Email_Cell_Phone/Customization%20Options%20in%20an%20Email%20Message.pdf',
            description: 'Internet',
            id: 2
        },
        {
            title: 'Email Additions',
            link: '/img/Explore/Internet_Email_Cell_Phone/Email%20Additions.pdf',
            description: 'Internet',
            id: 3
        },
        {
            title: 'Email Signature',
            link: '/img/Explore/Internet_Email_Cell_Phone/Email%20Signature.pdf',
            description: 'Internet',
            id: 4
        },
        {
            title: 'Gmail Chat',
            link: '/img/Explore/Internet_Email_Cell_Phone/Gmail%20Chat.pdf',
            description: 'Internet',
            id: 5
        },
        {
            title: 'Gmail Contacts',
            link: '/img/Explore/Internet_Email_Cell_Phone/Gmail%20Contacts.pdf',
            description: 'Internet',
            id: 6
        },
        {
            title: 'Google Apps',
            link: '/img/Explore/Internet_Email_Cell_Phone/Google%20Apps.pdf',
            description: 'Internet',
            id: 7
        },
        {
            title: 'Netflix',
            link: '/img/Explore/Internet_Email_Cell_Phone/Netflix.pdf',
            description: 'Internet',
            id: 8
        },
        {
            title: 'Snapfish',
            link: '/img/Explore/Internet_Email_Cell_Phone/Snapfish.pdf',
            description: 'Internet',
            id: 9
        },
        {
            title: 'Storing Passwords',
            link: '/img/Explore/Internet_Email_Cell_Phone/Storing%20Passwords.pdf',
            description: 'Internet',
            id: 10
        },
        {
            title: 'Using Drafts',
            link: '/img/Explore/Internet_Email_Cell_Phone/Using%20Drafts.pdf',
            description: 'Internet',
            id: 11
        },
        {
            title: 'YouTube',
            link: '/img/Explore/Internet_Email_Cell_Phone/YouTube.pdf',
            description: 'Internet',
            id: 12
        },
        {
            title: 'Tips April 12-18',
            link: '/img/Tips/Tips%20April%2012-18.pdf',
            description: 'Tips',
            num: 14,
            id: 14
        },
        {
            title: 'Tips April 19-25',
            link: '/img/Tips/Tips%20April%2019-25.pdf',
            description: 'Tips',
            num: 15,
            id: 15
        },
        {
            title: 'Tips April 26 - May 2',
            link: '/img/Tips/Tips%20April%2026%20-%20May%202.pdf',
            description: 'Tips',
            num: 16,
            id: 16
        },
        {
            title: 'Tips April 5-11',
            link: '/img/Tips/Tips%20April%205-11.pdf',
            description: 'Tips',
            num: 13,
            id: 17
        },
        {
            title: 'Tips February 1-7',
            link: '/img/Tips/Tips%20Feb%201-7.pdf',
            description: 'Tips',
            num: 5,
            id: 18
        },
        {
            title: 'Tips February 15-21',
            link: '/img/Tips/Tips%20Feb%2015-21.pdf',
            description: 'Tips',
            num: 7,
            id: 19
        },
        {
            title: 'Tips February 22-28',
            link: '/img/Tips/Tips%20Feb%2022-28.pdf',
            description: 'Tips',
            num: 8,
            id: 20
        },
        {
            title: 'Tips February 8-14',
            link: '/img/Tips/Tips%20Feb%208-14.pdf',
            description: 'Tips',
            num: 6,
            id: 21
        },
        {
            title: 'Tips January 11-17',
            link: '/img/Tips/Tips%20Jan%2011-17.pdf',
            description: 'Tips',
            num: 1,
            id: 22
        },
        {
            title: 'Tips January 18-24',
            link: '/img/Tips/Tips%20Jan%2018-24.pdf',
            description: 'Tips',
            num: 2,
            id: 23
        },
        {
            title: 'Tips January 25-31',
            link: '/img/Tips/Tips%20Jan%2025-31.pdf',
            description: 'Tips',
            num: 3,
            id: 24
        },
        {
            title: 'Tips January 4-10',
            link: '/img/Tips/Tips%20Jan%204-10.pdf',
            description: 'Tips',
            num: 4,
            id: 25
        },
        {
            title: 'Tips March 1-7',
            link: '/img/Tips/Tips%20Mar%201-7.pdf',
            description: 'Tips',
            num: 9,
            id: 26
        },
        {
            title: 'Tips March 8-14',
            link: '/img/Tips/Tips%20Mar%208-14.pdf',
            description: 'Tips',
            num: 10,
            id: 30
        },
        {
            title: 'Tips March 15-21',
            link: '/img/Tips/Tips%20Mar%2015-21.pdf',
            description: 'Tips',
            num: 10,
            id: 27
        },
        {
            title: 'Tips March 22-28',
            link: '/img/Tips/Tips%20Mar%2022-28.pdf',
            description: 'Tips',
            num: 11,
            id: 28
        },
        {
            title: 'Tips March 29 - April 4',
            link: '/img/Tips/Tips%20Mar%2029%20-%20April%204.pdf',
            description: 'Tips',
            num: 12,
            id: 29
        },
        {
            title: 'Tips May 10-16',
            link: '/img/Tips/Tips%20May%2010-16.pdf',
            description: 'Tips',
            num: 17,
            id: 31
        },
        {
            title: 'Tips May 17-23',
            link: '/img/Tips/Tips%20May%2017-23.pdf',
            description: 'Tips',
            num: 18,
            id: 32
        },
        {
            title: 'Tips May 3-9',
            link: '/img/Tips/Tips%20May%203-9.pdf',
            description: 'Tips',
            num: 16,
            id: 33
        },

      { title: 'Microsoft Excel', link: '/img/Explore/Microsoft_Office/Microsoft%20Excel.pdf', description: 'Microsoft', id:34},
      { title: 'Microsoft Office', link: '/img/Explore/Microsoft_Office/Microsoft%20Office.pdf', description: 'Microsoft', id:35},
      { title: 'Microsoft PowerPoint', link: '/img/Explore/Microsoft_Office/Microsoft%20PowerPoint.pdf', description: 'Microsoft', id:36},
      { title: 'Microsoft Word', link: '/img/Explore/Microsoft_Office/Microsoft%20Word.pdf', description: 'Microsoft', id:37},
      { title: 'Creating a Facebook Group', link: '/img/Explore/Social_Media/Creating%20a%20Facebook%20Group.pdf', description: 'Social Media', id:38},
      { title: 'Instagram', link: '/img/Explore/Social_Media/Instagram.pdf', description: 'Social Media', id:39},
      { title: 'Twitter', link: '/img/Explore/Social_Media/Twitter.pdf', description: 'Social Media', id:40},
      { title: 'Downloading Security Programs', link: '/img/Explore/Social_Media/Downloading%20Security%20Programs.pdf', description: 'Windows_OS', id:41},
      { title: 'iTunes on Windows Computer Part II', link: '/img/Explore/Social_Media/iTunes%20on%20Windows%20Computer%20Part%20II.pdf', description: 'Windows_OS', id:42},
      { title: 'iTunes on Windows Computer', link: '/img/Explore/Social_Media/iTunes%20on%20Windows%20Computer.pdf', description: 'Windows_OS', id:43},
      { title: 'Windows File System', link: '/img/Explore/Social_Media/Windows%20File%20System.pdf', description: 'Windows_OS', id:44},
      { title: 'Adding Pictures and Video to iPhone Messages', link: '/img/Explore/iPhone_iPad/Adding%20Pictures%20and%20Video%20to%20iPhone%20Messages.pdf', description: 'iPhone_iPad', id:45},
      { title: 'Alarms', link: '/img/Explore/iPhone_iPad/Alarms.pdf', description: 'iPhone_iPad', id:46},
      { title: 'App Store', link: '/img/Explore/iPhone_iPad/App%20Store.pdf', description: 'iPhone_iPad', id:47},
      { title: 'Apple ID', link: '/img/Explore/iPhone_iPad/Apple%20ID.pdf', description: 'iPhone_iPad', id:48},
      { title: 'Camera and Video on the iPhone and iPad', link: '/img/Explore/iPhone_iPad/Camera%20and%20Video%20on%20the%20iPhone%20and%20iPad.pdf', description: 'iPhone_iPad', id:49},
      { title: 'Camera', link: '/img/Explore/iPhone_iPad/Camera.pdf', description: 'iPhone_iPad', id:50},
      { title: 'Facebook Messenger App', link: '/img/Explore/iPhone_iPad/Facebook%20Messenger%20App.pdf', description: 'iPhone_iPad', id:51},
      { title: 'Google Translate', link: '/img/Explore/iPhone_iPad/Google%20Translate.pdf', description: 'iPhone_iPad', id:52},
      { title: 'iMovie', link: '/img/Explore/iPhone_iPad/iMovie.pdf', description: 'iPhone_iPad', id:53},
      { title: 'iPhone and iPad App Grouping', link: '/img/Explore/iPhone_iPad/iPhone%20and%20iPad%20App%20Grouping.pdf', description: 'iPhone_iPad', id:54},
      { title: 'iTunes', link: '/img/Explore/iPhone_iPad/iTunes.pdf', description: 'iPhone_iPad', id:55},
      { title: 'Mail App', link: '/img/Explore/iPhone_iPad/Mail%20App.pdf', description: 'iPhone_iPad', id:56},
      { title: 'Maps', link: '/img/Explore/iPhone_iPad/Maps.pdf', description: 'iPhone_iPad', id:57},
      { title: 'Notes', link: '/img/Explore/iPhone_iPad/Notes.pdf', description: 'iPhone_iPad', id:58},
      { title: 'Siri', link: '/img/Explore/iPhone_iPad/Siri.pdf', description: 'iPhone_iPad', id:59},
      { title: 'Amazon', link: '/img/Explore/Internet_Email_Cell_Phone/Amazon.pdf', description: 'Internet', id:60},
      { title: 'Basic Internet Uses Guide', link: '/img/Tutorials/Basic%20Internet%20Uses%20Guide.pdf', description: 'Explore', id:61},
      { title: 'Cell Phone Survival Guide', link: '/img/Tutorials/Cell%20Phone%20Survival%20Guide.pdf', description: 'Explore', id:62},
      { title: 'Creating a Facebook Account', link: '/img/Tutorials/Creating%20a%20Facebook%20Account.pdf', description: 'Explore', id:63},
      { title: 'Creating a Skype Account', link: '/img/Tutorials/Creating%20a%20Skype%20Account.pdf', description: 'Explore', id:64},
      { title: 'Creating an Email Account', link: '/img/Tutorials/Creating%20an%20Email%20Account.pdf', description: 'Explore', id:65},
      { title: 'Flickr', link: '/img/Tutorials/Flickr.pdf', description: 'Explore', id:66},
      { title: 'iMovie', link: '/img/Tutorials/iMovie.pdf', description: 'Explore', id:67},
      { title: 'Interactions in Facebook', link: '/img/Tutorials/Interactions%20in%20Facebook.pdf', description: 'Explore', id:68},
      { title: 'Making and Receiving FaceTime Calls', link: '/img/Tutorials/Making%20and%20Receiving%20FaceTime%20Calls.pdf', description: 'Explore', id:69},
      { title: 'Navigating the Windows Operating System', link: '/img/Tutorials/Navigating%20the%20Windows%20Operating%20System.pdf', description: 'Explore', id:70},
      { title: 'Sending and Receiving an Email', link: '/img/Tutorials/Sending%20and%20Receiving%20an%20Email.pdf', description: 'Explore', id:71},
      { title: 'Using iPhone and iPad', link: '/img/Tutorials/Using%20iPhone%20and%20iPad.pdf', description: 'Explore', id:72},
      { title: 'Video Conferencing through Skype', link: '/img/Tutorials/Video%20Conferencing%20through%20Skype.pdf', description: 'Explore', id:73},
      { title: 'Basic Internet Uses', link: '/img/Presentations/Basic%20Internet%20Uses.pdf', description: 'Presentations', id:74},
      { title: 'Basics of Email', link: '/img/Presentations/Basics%20of%20Email.pdf', description: 'Presentations', id:75},
      { title: 'Cell Phone Boot Camp', link: '/img/Presentations/Cell%20Phone%20Boot%20Camp.pdf', description: 'Presentations', id:76},
      { title: 'Intro to Computer', link: '/img/Presentations/Intro%20to%20Computer.pdf', description: 'Presentations', id:77},
      { title: 'iPhone and iPad', link: '/img/Presentations/iPhone%20and%20iPad.pdf', description: 'Presentations', id:78},
      { title: 'Skype and Facetime', link: '/img/Presentations/Skype%20and%20Facetime.pdf', description: 'Presentations', id:79},
      { title: 'Social Media', link: '/img/Presentations/Social%20Media.pdf', description: 'Presentations', id:80},




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
