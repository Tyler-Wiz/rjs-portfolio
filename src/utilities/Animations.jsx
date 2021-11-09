export const easing = [0.6, -0.05, 0.01, 0.99];

export const Container = {
  visible: {
    transition: {
      staggerChildren: 0.3,
      easing
    }
  }
};

export const bounce = {
    hidden: { y:0 },
    visible: {
      y:[-12, -6, -4, 0],
      transition: {
        repeat:Infinity,
        repeatType: "reverse",
        easing
      }
    }
  }

  export const SlideInLeftParent = {
    hidden: { opacity: 0, x:-1000 },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        when:"beforeChildren",
        delay:1,
        staggerChildren: 1,
        staggerDirection: -1
      }
    }
  }
  
  export const SlideInLeftChild = {
    hidden: { opacity: 0, x:-100 },
    visible:{ 
      opacity: .5,
      x:0
     }
  }

  export const SlideInTop = {
    hidden: { opacity: 0, y:-100 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        delay:.5,
        easing
      }
    }
  }

  export const SlideInLeft= {
    hidden: { opacity: 0, x:-100 },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        delay:.5,
        easing
      }
    }
  }

  export const SlideInRight= {
    hidden: { opacity: 0, x:100 },
    visible: {
      opacity: 1,
      x:0,
      transition: {
        delay:.5,
        easing
      }
    }
  }

  export const SlideInBottom = {
    hidden: { opacity: 0, y:100 },
    visible: {
      opacity: 1,
      y:0,
      transition: {
        delay:.5,
        easing
      }
    }
  }
