function FormComponent(){
  return(

    <>
    <form >
    <div>
      Id : <input type="number" /> <br /><br/>
      Name : <input type="text" /><br/><br/>
      Email : <input type="email" /> <br/><br/>
      Role :  <input type="text" /> <br/><br/>
      Salary : <input type="number" /> <br/><br/>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button><br/><br/>
    </div>
    </form>
    </>
  )
}
export default FormComponent