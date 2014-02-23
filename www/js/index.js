/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        if (!navigator.camera) {
            alert("Camera API not supported", "Error");
            return;
        }
        else {
            var options = {   
                quality: 35,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                encodingType: 0,     // 0=JPG 1=PNG
                targetWidth: 720,
                targetHeight: 1280,
                correctOrientation: true
            };
            navigator.camera.getPicture(
                function(imageData) {

        	        var $img = $('#largeImage');
        	        $img.css('display', 'block');
        	        $img.attr('src', "data:image/jpeg;base64," + imageData).stop(true,true).hide().fadeIn();

                    // show yay nay buttons
                    var $yesNoButtonContainer = $('#jsButtons');
                    $yesNoButtonContainer.removeClass('out-of-view');                   
                    
                    // Add animation class in here


                },
                function() {
                    alert('Error taking picture', 'Error');
                },
                options);
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


$( "#tweet-box-inside" ).click(function() {
//    $( "#tweet-yes" ).toggle( "fast" );
//    $( "#tweet-no" ).toggle( "fast", function (){
        if($("#bttn-tweet").css('color')=='rgb(200, 200, 200)')
        {
            $("#bttn-tweet").animate(
                {
                    fontSize: "150px",
                    color: "#00BFFF",
                    top: "-25px"
                }, 50
            );
        }
        else
        {
            $("#bttn-tweet").animate(
                {
                    fontSize: "130px",
                    color: "#C8C8C8",
                    top:"0px"
                }, 50
            );

        }
//    } );



});
