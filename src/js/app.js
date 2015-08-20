(function(window, angular, undefined) {
  'use strict';
  angular.module('infeed', [])
    .controller('MainController', ['$scope', function($scope) {
      $scope.articles = [
        {
          title: 'FOBO',
          listingImage: '//x.cdn-expressen.se/images/38/fd/38fd8a1235504ee4aa07aff0bf8678d3/16x9/645@70.jpg',
          preamble: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.",
          body: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
          ad: true,
          expanded: false,
          authors: [
            {
                "email": "kim.malmgren@expressen.se",
                "image": {
                    "originalExtension": ".jpg",
                    "pufferPath": "/7d/3f/7d3f8429465e401ab24ed2d87e1cc8d1",
                    "self": "http://content-internal.expressen.se/image/7d3f8429-465e-401a-b24e-d2d87e1cc8d1",
                    "type": "image",
                    "versions": [
                        {
                            "height": 80,
                            "url": "http://w.cdn-expressen.se/images/7d/3f/7d3f8429465e401ab24ed2d87e1cc8d1/original.jpg",
                            "width": 60
                        }
                    ]
                },
                "isPhotographer": false,
                "name": "Kim Malmgren",
                "self": "http://content-internal.expressen.se/author/8c60eaa1-8a7b-48f4-ae8d-607b3c83cf0b",
                "type": "author"
            }
          ]
        },
        {
          title: 'FOBO 1',
          listingImage: '//x.cdn-expressen.se/images/38/fd/38fd8a1235504ee4aa07aff0bf8678d3/16x9/645@70.jpg',
          preamble: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.",
          body: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
          ad: false,
          expanded: false
        },
        {
          title: 'FOBO 2',
          listingImage: '//x.cdn-expressen.se/images/38/fd/38fd8a1235504ee4aa07aff0bf8678d3/16x9/645@70.jpg',
          preamble: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.",
          body: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
          ad: false,
          expanded: false
        },
        {
          title: 'FOBO 3',
          listingImage: '//x.cdn-expressen.se/images/38/fd/38fd8a1235504ee4aa07aff0bf8678d3/16x9/645@70.jpg',
          preamble: "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you.",
          body: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
          ad: false,
          expanded: false
        }
      ];
    }]);

}(window, angular));
