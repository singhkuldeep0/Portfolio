export const textMotion = {
    rest: {
      x: 4,
      transition: {
        type: "spring",
        damping:40,
        stiffness:400,
      }
    },
    hover: {
      x: -55.9,
      transition: {
        type: "spring",
        damping:40,
        stiffness:400,
      }
    }
  };
  
export const slashMotion = {
    rest: { 
      rotate:-360 , 
      transition: {
        type: "spring",
        damping:50,
        stiffness:200,
      }
    },
    hover: {
      rotate:360,
      transition: {
        type: "spring",
        damping:50,
        stiffness:400,
      }
    }
  };
  

  export const limotion = {
  rest:{
    scale:1
  },
  hover:{
    scale:1.2,
    transition: {
      type: "spring",
      damping:50,
      stiffness:400,
    }
  }
  }