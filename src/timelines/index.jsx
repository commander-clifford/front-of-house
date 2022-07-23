import { gsap, Power2 } from 'gsap';

/**

Animated Router Transitions (ART)

https://css-tricks.com/animating-between-views-in-react/
GSAP Cheat Sheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf
GSAP Docs https://greensock.com/docs/
example of similar transition https://codesandbox.io/s/mqy3mmznn
another example https://stackblitz.com/edit/react-transition-group-gsap-test?file=src%2FRoutes.jsx
trouble shooting https://greensock.com/forums/topic/27321-transitions-not-working-with-react-router-dom-gsap-and-react-transition-group/
https://reactcommunity.org/react-transition-group/with-react-router/

*/

const DURATION = 0.4;
const STAGGER = 0.08;
const SCALETO = 0.98;
const DRIFTIN = "60px";
const DRIFTOUT = "-60px";
const ROTATIONIN = 0;
const ROTATIONOUT = -0;
const HEADERHEIGHT = 20; // TODO get actual header.outterHeight
const EASE = Power2.easeInOut;

/* ENTER ANIMATION TIMELINES */

/* Enter: Slide in from Left */
const enterSlideInFromLeftTimeline = (node) => {
  const staggerInElements = node.querySelectorAll('.art__stagger-in');
  const timeline = gsap.timeline({ 
    paused: true,
    defaults: {
      duration: DURATION,
      stagger: STAGGER,
      ease: EASE
    }
  });
  timeline
  .from( node, {
    autoAlpha: 0,
    delay: DURATION,
  })
  .from( staggerInElements, {
    stagger: STAGGER,
    autoAlpha: 0,
    scale: SCALETO,
    x: DRIFTIN,
    rotationY: ROTATIONIN,
    clearProps: "opacity",
  }, "<")
  return timeline;
}

/* Enter: Slide in from Right */
const enterSlideInFromRightTimeline = (node) => {
  const timeline = gsap.timeline({ 
    paused: true,
    defaults: {
      duration: DURATION,
      stagger: STAGGER,
      ease: EASE
    }
  });
  const staggerInElements = node.querySelectorAll('.art__stagger-in');
  timeline
  .from( node, {
    autoAlpha: 0,
    delay: DURATION,
  })
  .from( staggerInElements, {
    stagger: STAGGER,
    duration: DURATION,
    autoAlpha: 0,
    scale: SCALETO,
    x: DRIFTOUT,
    rotationY: ROTATIONOUT,
  }, "<")
  return timeline;
}

/* EXIT ANIMATION TIMELINES */

/* Exit: Slide out to Left */
const exitSlideOutToLeftTimeline = (node) => {
  const timeline = gsap.timeline({ 
    paused: true,
    defaults: {
      duration: DURATION,
      stagger: STAGGER,
      ease: EASE
    }
  });
  const staggerOutElements = node.querySelectorAll('.art__stagger-out');
  const staggerOutColumnElements = node.querySelectorAll('.art__stagger-out--columns');
  timeline
  .set(node, {
    // set position to take this node out of natural flow to prevent flash
    position: 'absolute',
    top: HEADERHEIGHT, // TODO: match height of header
    left: 0, // must match relative padding
    right: 0, // must match relative padding
    zIndex: 0,
  })
  .to(staggerOutElements, {
    stagger: STAGGER,
    autoAlpha: 0,
    scale: SCALETO,
    x: DRIFTOUT,
    rotationY: ROTATIONOUT,
  }, )
  .to(staggerOutColumnElements, {
    stagger: STAGGER,
    autoAlpha: 0,
    scale: SCALETO,
    x: DRIFTOUT,
    rotationY: ROTATIONOUT,
  },'<')
  .to( node, {
    autoAlpha: 0,
  })
  return timeline;
}

/* Exit: Slide out to right */
const exitSlideOutToRightTimeline = (node) => {
  const timeline = gsap.timeline({ 
    paused: true,
    defaults: {
      duration: DURATION,
      stagger: STAGGER,
      ease: EASE
    }
  });
  const staggerOutElements = node.querySelectorAll('.art__stagger-out');
  timeline
  .set(node,{
    // set position to take this node out of natural flow to prevent flash
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0, // must match app padding
    right: 0, // must match app padding
    zIndex: 0,
  })
  .to(staggerOutElements, {
    duration: DURATION,
    stagger: STAGGER,
    autoAlpha: 0,
    scale: SCALETO,
    x: DRIFTIN,
    rotationY: ROTATIONIN,
  },"<")
  .to( node, {
    duration: DURATION,
    autoAlpha: 0,
  },"<")
  return timeline;
}

/* EXPORT TIMELINES */

/* ENTER */
export const enter = (node, pathname, prevPathname) => {
  
  let timeline;
  
  console.log('compare',pathname,'to',prevPathname);
  
  // TODO: pathname === prevPathname ? route must be back : Do reverse animation
  if(pathname !== prevPathname){
    console.log('they do not match: go forward');
    timeline = enterSlideInFromLeftTimeline(node); // do it forwards
  } else {
    console.log('they do match: go backward');
    timeline = enterSlideInFromRightTimeline(node); // do it backwards
  }
  
  window.loadPromise = new Promise(resolve => {
    window.addEventListener("DOMContentLoaded", timeline.play())
  });
  
}

/* EXIT */
export const exit = (node, pathname, prevPathname) => {
  
  let timeline;
  
  // TODO: pathname === prevPathname ? route must be back : Do reverse animation
  if(pathname !== prevPathname){
    timeline = exitSlideOutToLeftTimeline(node); // do it forwards
  } else {
    timeline = exitSlideOutToRightTimeline(node); // do it backwards
  }
  
  window.loadPromise = new Promise(resolve => {
    window.addEventListener("DOMContentLoaded", timeline.play())
  });
  
}
