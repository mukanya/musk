import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_qFPXVn5AT7wWTXokadSkw");


const Result =() =>{
    return (
        <p>Your message has been successfully sent :: We will get in touch with you shortly</p>
    );
};

{/* <>
      {status?.type === 'success' && <p>"Twoja wiadomość została wysłana."</p>}
      {status?.type === 'error' && (
        <p>"Wysyłanie wiadomości nie powdioło się. Spróbuj jeszcze raz."</p>
      )}
    </>
  );
} */}

export default function Join () {
    
    const [result, showResult] = useState(false);

    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cmqg2as', 'template_4v3hnox', e.target, 'user_qFPXVn5AT7wWTXokadSkw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      showResult(true);
  }


    return (
            <Container>

                <Description>
                <h3>Student Registration Form</h3>
                    <form class="registration-form" onSubmit={sendEmail}>
                            <table align="center" ></table>
                            <tr>
                            <td column-width = "10px">First Name:</td>
                            <td><input style={{margin:'5px'}} type="text" name="First_Name" maxlength="30" placeholder ="Enter first name" required/>
                            </td>
                            </tr>

                            <tr>
                            <td>Last Name:</td>
                            <td><input style={{margin:'5px'}} type="text" name="Last_Name" maxlength="30" placeholder ="Enter last name" required/>
                            </td>
                            </tr>
                            
                            
                            <tr>
                            <td>Date of Birth:</td>
                            
                            <td>
                            <select style={{margin:'5px'}} name="Birthday_day" id="Birthday_Day">
                            <option value="-1">Day:</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            
                            <option value="31">31</option>
                            </select>
                            
                            <select id="Birthday_Month" name="Birthday_Month">
                            <option value="-1">Month:</option>
                            <option value="January">Jan</option>
                            <option value="February">Feb</option>
                            <option value="March">Mar</option>
                            <option value="April">Apr</option>
                            <option value="May">May</option>
                            <option value="June">Jun</option>
                            <option value="July">Jul</option>
                            <option value="August">Aug</option>
                            <option value="September">Sep</option>
                            <option value="October">Oct</option>
                            <option value="November">Nov</option>
                            <option value="December">Dec</option>
                            </select>
                            
                            <select name="Birthday_Year" id="Birthday_Year">
                            
                            <option value="-1">Year:</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            </select>
                            </td>
                            </tr>
                            
                            <tr>
                            <td>Email:</td>
                            <td><input style={{margin:'5px'}} type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" maxlength="50" required/></td>
                            </tr>

                            <tr>
                            <td>Mobile No:</td>
                            <td>
                            <input style={{margin:'5px'}} type="text" name="Mobile_Number" placeholder="012-323-1678" maxlength="10" required/>
                            </td>
                            </tr>
                            

                            <tr>
                            <td>Gender:</td>
                            <td>
                            Male <input style={{margin:'5px'}} type="radio" name="Gender" value="Male" />
                            Female <input style={{margin:'5px'}} type="radio" name="Gender" value="Female" />
                            </td>
                            </tr>                        
                            
                            <tr>
                            <td valign="middle">Address: </td>
                            <td><textarea style={{margin:'5px'}} name="Address" rows="4" cols="30" maxlength="100"></textarea></td>
                            </tr>

                            <tr>
                            <td style={{margin:'5px'}}>Province</td>
                            <td>
                            <select id="Province" name="Province">
                            <option value="-1">Gauteng:</option>
                            <option value="February">Western Cape</option>
                            <option value="March">Kwa-Zulu Natal</option>
                            <option value="April">Eastern Cape</option>
                            <option value="May">Free State</option>
                            <option value="June">North West</option>
                            <option value="July">Northern Cape</option>
                            <option value="August">Mpumalanga</option>
                            <option value="September">Limpopo</option>
                            </select>
                            </td>
                            </tr>
                            
                            
                            {/* <tr>
                            <td>Hobbies <br /><br /><br /></td>
                            
                            <td>
                            Drawing
                            <input type="checkbox" name="Hobby_Drawing" value="Drawing" />
                            Singing
                            <input type="checkbox" name="Hobby_Singing" value="Singing" />
                            Dancing
                            <input type="checkbox" name="Hobby_Dancing" value="Dancing" />
                            Sketching
                            <input type="checkbox" name="Hobby_Cooking" value="Cooking" />
                            <br />
                            Others
                            <input type="checkbox" name="Hobby_Other" value="Other"></input>
                            <p>
                                <input type="text" name="Other_Hobby" maxlength="30" />
                                </p>
                            </td>
                            </tr> */}
                            

                            
                            <td>I'd like to Study:</td>
                            <td></td><tr>
                            <td colspan = "2">
                            Maths
                            <input type="radio" name="Course_Maths" value="Maths"></input>
                            Physical Science
                            <input type="radio" name="Course_Physics" value="Physical Science"></input>
                            Chemistry
                            <input type="radio" name="Course_Chemistry" value="Chemistry"></input>
                            Biology
                            <input type="radio" name="Course_Biology" value="Biology"></input>
                            Programming
                            <input type="radio" name="Course_Programming" value="Programming"></input>
                            Data Science
                            <input type="radio" name="Course_Data_Science" value="Data Science"></input>
                            <p></p>
                            </td>
                            </tr>

                            <tr><td align="right">
                            {/* <input type="submit" value="Send"></input> */}
                            <input type="submit" className="btn btn-info" value="Send Message"></input></td>
                            <td align="left">
                            <input type="reset" value="Reset"></input></td></tr>
                            
                                <tr><td colspan = "2">{result ? <Result /> : null}</td></tr> 
                            
                    </form>
                    </Description>

                </Container>

    )

}


// const FormBuilder = styled.form`
//     width: 100%;
//     font-weight: bold;
//     color: #f9f9f9;
//     border-radius: 6px;
//     text-align: justify;
//     letter-spacing: 1.5px;
//     margin-top: 0px;
//     margin-bottom: 12px;
    

// }
// `

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/adrien-converse-kCrrUx7US04-unsplash.jpg");
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
    }

`;


const CTA = styled.div`
    max-width: 850px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: -30px;
    align-items: center;
`;



const Description = styled.p`
    font-size: 12px;
    letter-spacing: 3.0px;
    text-align: justify;
    line-height: 3.0;
    vertical-align: middle;

    input, textarea, select, button {
        border: 2px solid #06DD03;
        border-radius: 6px;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        vertical-align: middle;
      }

    input {
        height: 30px;
    }

    button {
        width: 100%;
        padding: 0.5rem;
    }

    td, tr {
        border: 0px solid #999;
        padding: 0.5rem;
      }

    `;
