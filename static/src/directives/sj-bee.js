(function () {

    function sjBee (document, window, interval) {
        function myLink(scope, element, attr) {
            var startX = 0, startY = 0, x = 0, y = 0;

            var w = Math.max(window.innerWidth || 0);
            var h = Math.max(window.innerHeight || 0);

            var timeoutId;

            var direction = {x : 1, y : 1};
           // var position = {x : 0, y : 0}


            element.css({
                position: 'absolute',
                //border: '1px solid red',
                //backgroundColor: 'lightgrey',
                cursor: 'pointer',
                top: y + 'px',
                left: x + 'px'
            });

            element.on('mousedown', function(event) {
                // Prevent default dragging of selected content
                interval.cancel(timeoutId);
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                document.on('mousemove', mousemove);
                document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                document.off('mousemove', mousemove);
                document.off('mouseup', mouseup);
                moveBee();
            }

            function stepBee () {
                if(x === w) direction.x = -1;
                if(y === h) direction.y = -1;
                if(x === 0) direction.x = 1;
                if(y === 0) direction.y = 1;

                x += direction.x;
                y += direction.y;
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            element.on('$destroy', function() {
                interval.cancel(timeoutId);
            });

            function moveBee () {
                timeoutId = interval(function () {
                    stepBee();
                }, 10);
            }

            moveBee();
        }

        return {
            link: myLink
        }
    }


    angular.module('myModule')
        .directive('sjBee', ['$document', '$window', '$interval', sjBee])
}());