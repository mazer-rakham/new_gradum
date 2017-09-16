TweenMax.set('.st0', {
    drawSVG: '0%'
});
TweenMax.set('.st1', {
    drawSVG: '0%'
});
TweenMax.set('.st2', {
    drawSVG: '0%'
});
TweenMax.set('.st3', {
    drawSVG: '0%'
});
TweenMax.set('.st2', {
    fill: 'transparent'
});
TweenMax.set('.st3', {
    fill: 'transparent'
});
TweenMax.set('.button-slider', {
    opacity: '0'
});

jQuery(document).ready(function () {


    var enacAtomDraw = new TimelineMax();
   
        enacAtomDraw.to('.st0', 1, {
                drawSVG: '100%'
            }, 'p1')
            .to('.st1', 1, {
                drawSVG: '100%'
            }, 'p1')
            .to('.st2', 1, {
                drawSVG: '100%'
            }, 'p1')
            .to('.st3', 1, {
                drawSVG: '100%'
            }, 'p1')
            .to('.st0', 1, {
                fill: '#CCCCCC'
            }, 'p2')
            .to('.st1', 1, {
                fill: '#000000'
            }, 'p2')
            .to('.st2', 1, {
                fill: '#808080'
            }, 'p2')
            .to('.st3', 1, {
                fill: '#FF0000'
            }, 'p2')
            .to('.button-slider', 1, {
                opacity: '1'
            }, 'p2');
            var controller = new ScrollMagic.Controller();
            var firstScene = new TimelineMax()
                                 .staggerFrom('#panel-6-1-0-0 .roll-icon-box',0.5,{opacity:0,x:-50},0.1,'s1')
                                 .from('#panel-6-1-1-0',0.5,{opacity:0, x:50},'s1');
            var firstPin = new ScrollMagic.Scene({
                triggerElement: '#pg-6-1',
                triggerHook: 0.4,
                reverse: false
             })
               .setTween(firstScene)             
               .addTo(controller);
             var secondScene = new TimelineMax()
                                  .staggerFrom('#panel-6-1-1-1 .roll-icon-box',0.5,{opacity:0,x:-50},0.1,'s1')
                                  .from('#panel-6-1-0-1',0.5,{opacity:0, x:-50},'s1');
            var secondPin = new ScrollMagic.Scene({
                triggerElement: '#pg-6-1',
                triggerHook: 0,
                reverse: false
            })
                .setTween(secondScene)                        
                .addTo(controller);
                var thirdScene = new TimelineMax()
                                    .from('#pgc-6-2-0 h4',0.5,{opacity:0, y:-50});
            var thirdPin = new ScrollMagic.Scene({
                    triggerElement: '#pgc-6-2-0',
                    triggerHook: 0.5,
                    reverse: false
                })
                    .setTween(thirdScene)                                          
                    .addTo(controller);
});