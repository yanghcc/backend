/*
* @Author: black
* @Date:   2017-09-18 18:06:52
* @Last Modified by:   black
* @Last Modified time: 2017-09-18 18:07:15
*/
<html>
<head>
    <meta charset="utf-8">
    <title>js</title>
    <script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $(window).scroll(function () {
                var a = $("#eq").offset().top;
                console.log(a);
                console.log($(window).scrollTop());
                console.log($(window).height());
                if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
                    console.log("div在可视范围");
                }
            });
        });
    </script>
</head>
<body>
<div style="width:1px;height:2000px;background-color:red"></div>
<div style="position:relative">
    <div id="eq" style=" width:100px; height:100px; background-color:Red;">1</div>
</div>
<div style="width:1px;height:2000px;background-color:green"></div>
</body>
</html>
