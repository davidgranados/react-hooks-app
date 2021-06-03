export const heavyProcess = (loops) => {
  for (let i = 0; i < loops; i++) {
    console.log("Ahí vamos....");
  }

  return `${loops} iteraciones realizadas.`;
};
