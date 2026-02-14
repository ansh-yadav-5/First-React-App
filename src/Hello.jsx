function Hello() {

  let myName = 'Ansh'
  let fullName = () => {
    return 'Ansh Yadav'
  }
  return <h3>
    Hello this is future speaking.My name is {myName}, My fullName is {fullName()}
  </h3>
}

export default Hello;