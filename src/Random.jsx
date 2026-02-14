function Random() {

  // eslint-disable-next-line react-hooks/purity
  let number = Math.random() * 1000;

  return <h1 style={{'backgroundColor': '#646739'}}> Random number is : {number}</h1>


}

export default Random;