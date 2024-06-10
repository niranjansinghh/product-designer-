const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;
function circleMotion() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        this.clearTimeout(timeout);
        xscale = gsap.utilis.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utilis.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout =this.setTimeout(function(){
            
                document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;  
            
        },100);
    });
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    });

}

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: -1,
            stagger: .2

        })
        .from("#herofooter", {
            y: -10,
            ease: Expo.easeInOut,
            opacity: 0,
            duration: 1.5,
            delay: -1,


        })
}



circleMotion();
circleMouseFollower();
firstPageAnim();
