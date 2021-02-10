import gsap from 'gsap';

const home_animation = (e, active) => {
    let repositories = e.target.parentNode.querySelectorAll('.home-content__repos-holder');
 
    if(repositories){
        gsap.set(repositories, { autoAlpha: 0, yPercent: -20, xPercent: -20 })
        
        let tl = gsap.timeline({paused: true});
        tl.to( repositories, { stagger: .3, autoAlpha: 1, yPercent: 0, xPercent: 0, ease: 'power1.In' });
        if(active){
            tl.play();
        }else{
            tl.timeScale(2).reverse();
        }
    }
  
}

export default home_animation;