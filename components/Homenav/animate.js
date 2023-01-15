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
    hidden :{
      y:160,
      opacity:1
  },
  visible :{
      y:0,      
      opacity:1,

  }
  }

export const liVariant = {
    hidden :{
    },
    visible :{
        transition: {
           when: "beforeChildren", 
           staggerChildren: 0.2,
       },
    }
}
