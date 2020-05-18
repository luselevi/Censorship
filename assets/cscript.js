$(document).ready(function() {
    document.getElementById('headerspacing').style.padding = document.getElementById('header_ul').clientHeight + "px 0px 0px 0px";
});

function closeSubsriptionBox() {
    document.getElementById('subscriptionbox').remove();
}

function greetSubscriber() {
    alert("Thanks for Subscribing\nSee you in your inbox");
    document.getElementById('subscriptionbox').remove();
}