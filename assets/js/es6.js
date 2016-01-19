/**
 * Created by bll on 16/1/14.
 */
//var it=require("./content.js");
var css=require("../css/style.css");
var $=require('jquery');
var React=require('react');
var ReactDOM=require('react-dom');
var [a, b, c] = [2, 4, 8];
console.log(a,b,c);
define('myModule',['jquery'],function($){
    if($){
        console.log($("#main").length);
        $("#main").text('asdasd');
    }else{
        alert(22222);
    }
    var ContentMode = React.createClass({
        render: function(){
            return (
                <div data-reactid="">
                    <div className="contents" data-reactid="">asdasdas</div>
                </div>
            )
        }
    });
    ReactDOM.render(
        <ContentMode/>,document.getElementById("main")
    );
});


//document.write(it);