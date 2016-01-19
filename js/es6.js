/**
 * Created by bll on 16/1/14.
 */
//var it=require("./content.js");
var css=require("../css/style.css");
var $=require('jquery');
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);
define('myModule',['jquery'],function($){
    //if($){
    //    console.log($("#main").length);
    //    $("#main").text('asdasd');
    //}else{
    //    alert(22222);
    //}
    var ContentMode = React.createClass({
        render: function(){
            return (
                <div className="ContentMode">
                    <div class="contents">asdasdaasdasdasds</div>
                </div>
            )
        }
    });
    ReactDOM.render(
        <ContentMode/>,document.getElementById("main")
    );
});


//document.write(it);