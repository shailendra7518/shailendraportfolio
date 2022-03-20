import { Container ,Form,Button} from "react-bootstrap";
import '../contact/Contact.css'
export function Contact() {
  return (
  <Container className="main_div">
    <div  className="form_div">
     
        <form className="form"
        id="contactform"
        action="https://formsubmit.io/send/shailendraftp0001@gmail.com"
        method="POST"
      >
        <h1>Get in touch</h1>
        <h4 htmlFor="">Name</h4>
     
        <input name="name" type="text" id="name" placeholder="Enter Name" />
        <br />
        <h4 htmlFor="">Email</h4>
       
        <input name="email" type="email" id="email" placeholder="Enter Email" />
        <br />
        <h4 htmlFor="">Massage</h4>
     
        <textarea name="comment" id="comment" rows="3" placeholder="Massage"></textarea>
        <br />
        <input className="but" value="Send" type="submit" />
      </form> 

      </div>


      <div  className="form_div">
     <form className="form_1" action="">

     
        <h2>Email</h2>
        <h4>shailendraftp0001@gmail.com</h4>
        <h2>Mobile</h2>
        <h4>7518034435</h4>
        </form>
   </div>




    </Container>
      
    
  
     
  );
}
