import React from "react";
import "./App.css";
import "./app/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory
} from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/effects" component={Effects} />
          <Route exact path="/diagnosis" component={Diagnosis} />
          <Route exact path="/stages" component={Stages} />
          <Route exact path="/treatment" component={Treatment} />
          <Route exact path="/benefits" component={Benefits} />
          <Route exact path="/greaterthan" component={Early} />
          <Route exact path="/greater" component={Earlya} />
          <Route exact path="/mid" component={Moderate} />
          <Route exact path="/less" component={Severe} />
          <Route exact path="/yesa" component={Yesa} />
          <Route exact path="/yesb" component={Yesb} />
          <Route exact path="/yesc" component={Yesc} />
          <Route exact path="/no" component={No} />
          <Route exact path="/stagea" component={Stagea} />
          <Route exact path="/stageb" component={Stageb} />
          <Route exact path="/stagec" component={Stagec} />
          <Route exact path="/staged" component={Staged} />
          <Route exact path="/stagee" component={Stagee} />
          <Route exact path="/stagef" component={Stagef} />
          <Route exact path="/effecta" component={Effecta} />
          <Route exact path="/effectb" component={Effectb} />
          <Route exact path="/effectc" component={Effectc} />
          <Route exact path="/effectd" component={Effectd} />
          <Route exact path="/treata" component={Treata} />
          <Route exact path="/treatb" component={Treatb} />
          <Route exact path="/treatc" component={Treatc} />
          <Route exact path="/treatd" component={Treatd} />
          <Route exact path="/treate" component={Treate} />
          <Route exact path="/benefita" component={Benefita} />
          <Route exact path="/benefitb" component={Benefitb} />
          <Route exact path="/benefitc" component={Benefitc} />
          <Route exact path="/benefitd" component={Benefitd} />
          <Route exact path="/benefite" component={Benefite} />
          <Route exact path="/benefitf" component={Benefitf} />
    </Router>
  );
}

function Home() {
  return (<div>n</div>

  );
}

function About() {
  return (<>
    <div>
      <h1 className="head">Areca nut/ OSMF awareness</h1>
    </div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <Link style={{backgroundColor: "#ff6666", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/aboutus">About</Link><br></br>
      <Link style={{backgroundColor: "#FFB366", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/effects">Effects of Areca nut usage</Link><br></br>
      <Link style={{backgroundColor: "#97D077", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/diagnosis">Diagnosis of OSMF</Link><br></br>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/stages">Stages and symptoms</Link><br></br>
      <Link style={{backgroundColor: "#3399FF", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/treatment">Treatment</Link><br></br>
      <Link style={{backgroundColor: "#6666FF", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/benefits">Benefits of Quitting</Link><br></br>
    </div>
  </>
  );
}

function Aboutus() {
  let history = useHistory();
  return (
    
  <div>
    <p style={{color: "red", padding: "10px", fontSize: "xx-large", textAlign: "center"}}>Areca Nut and OSMF</p>
    <p style={{color: "red", padding: "10px", fontSize: "large", textAlign: "left"}}>What is areca nut?</p>

    <img src={ require('./images/1.jpg') } style={{padding: "10px", width: "100%"}} />





    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Areca nut, commonly known as betel nut, is grown widely in various parts of India. The term “Areca” originated from the kannada term “Adike” and its roots in India dates back to the pre-Vedic period, Indus Valley Civilization.</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>The betel nut is usually chewed after wrapping it in betel leaf along with calcium hydroxide (slaked lime). Spices like clove, cardamom, catechu (kattha) are added to give it extra flavor. It has a mild stimulant effect on the body and creates a feeling of euphoria on the users. It is the fourth most psychoactive substance.</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>In many parts of India, chewing the mixture of areca nut and betel leaf is a popular cultural practice dating back to thousands of years. Its symbolism lies in its use during auspicious events like weddings. It is also an important part of Ayurvedic medicines. Its low cost and glamorization as Pan masala, Supari Mix, Betel quid by popular media have increased its everyday consumption. Its consumption is widespread, with consumers from all walks of life.</p>
    <p style={{color: "red", padding: "10px", fontSize: "large", textAlign: "left"}}>What is OSMF?</p>





    <img src={ require('./images/2.jpg') } style={{padding: "10px", width: "100%"}} />




    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Oral submucous fibrosis (OSF) is a chronic disease of the oral cavity which is characterised by the formation of bands of collagen in the cheeks and other parts of the oral cavity progressively leading to loss of mouth opening, loss of speech and other functions. It is highly prevalent in South East Asia, especially in countries like India, Bangladesh, and Pakistan. Consumption of arecanut is strongly associated with the development of OSMF.</p>
    <p style={{color: "red", padding: "10px", fontSize: "large", textAlign: "left"}}>What are the diffent types of areca nut products?</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Indegenous to different parts of India, areca nut is consumed in  different forms. It is also known by different names depending on the geography of consumption</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>PAAN</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>It is a mixture of areca nut, slaked lime, cardamom, cinnamon, coconut,

cloves, sugar and tobacco wrapped in a betel leaf.</p><img src={ require('./images/3.jpg') } style={{padding: "10px", width: "100%"}} />
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>KHAINI</p>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Consumed in Maharashtra, it is a mixture of tobacco, slaked lime and areca nut.</p><img src={ require('./images/4.jpg') } style={{padding: "10px", width: "100%"}} />
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>MANIPURI TOBACCO

</p>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>It consists of tobacco, slaked lime, finely cut areca nut, camphor and cloves.

</p><img src={ require('./images/5.jpg') } style={{padding: "10px", width: "100%"}} />
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>MAWA</p>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Mawa is a mixture of areca nut, tobacco and slaked lime wrapped in a transparent paper in the shape of a ball.</p><img src={ require('./images/6.jpg') } style={{padding: "10px", width: "100%"}} />
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>GUTKA</p>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>It is a mixture of crushed betel nut, tobacco,  and sweet or savoury flavorings.</p><img src={ require('./images/7.jpg') } style={{padding: "10px", width: "100%"}} />
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>PAAN MASALA</p>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Mix of betel leaf with lime, areca nut, clove cardamom, mint and tobacco in the form of granules.</p><img src={ require('./images/8.jpg') } style={{padding: "10px", width: "100%"}} />
<p style={{color: "red", padding: "10px", fontSize: "large", textAlign: "left"}}>Prevalence of areca nut consumption</p><img src={ require('./images/prev.jpg') } style={{padding: "10px", width: "100%"}} />
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>In India, around 30% of men and 12% of women chew some form of tobacco like paan masala, gutka. etc. (products that contain areca nut). The use of areca nut with tobacco is higher in rural areas compared to urban areas. The highest consumption of Areca Nut products is in the Northeastern parts of the country followed by Eastern states, while lowest prevalence has been recorded in  North India.  In Karnataka consumption is around 16%. 

</p>
<p style={{color: "red", padding: "10px", fontSize: "large", textAlign: "left"}}>Myths about areca nut consumption</p>

<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>The two common reasons why people start chewing areca nut are</p>
<p style={{padding: "5px 0px 0px 30px", textAlign: "justify", color: "#000", fontSize: "15px"}}>     * Relief for tooth ache</p>
<p style={{padding: "5px 0px 0px 30px", textAlign: "justify", color: "#000", fontSize: "15px"}}>     * Is a anti-depressant</p> 
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>These are not scientifically proven and hence not justifiable reasons to begin the habit.</p><br></br><br></br>
<div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br></div>
  );
}

function Effects() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#ff9933", padding: "10px", fontSize: "xx-large", textAlign: "center"}}>Effects of areca nut consumption</p>
    <p style={{color: "#ff9933", padding: "10px", fontSize: "large", textAlign: "left"}}>How will areca nut consumption affect you?</p>
    <div style={{padding:"10px", width:"100%"}}><iframe width="360" height="250" src="https://www.youtube-nocookie.com/embed/4rzii77SPT8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <p style={{color: "#ff9933", padding: "10px", fontSize: "large", textAlign: "left"}}>Effects on the oral cavity </p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Dental attrition <a href="/effecta">(?)</a></p><img src={ require('./images/9.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Oral Leukoplakia <a href="/effectb">(?)</a> </p><img src={ require('./images/10.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Dental Caries</p><img src={ require('./images/11.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Oral submucous Fibrosis</p><img src={ require('./images/12.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Periodontal disease <a href="/effectc">(?)</a></p><img src={ require('./images/13.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Lichinoid lesions <a href="/effectd">(?)</a></p><img src={ require('./images/14.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Oral cancer</p><img src={ require('./images/15.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{color: "#ff9933", padding: "10px", fontSize: "large", textAlign: "left"}}>Effects on other parts of the body</p>
    <table>
    <tr>
    <td></td>
    <td><img src={ require('./images/effects/1.jpg') } style={{padding: "10px", width: "100%"}} /></td>
    <td> <h4>Brain</h4>

 

Euphoria.

Palpitation. 

Neurotoxicity.

Schizophrenia</td>
  </tr>
  <tr>
    <td><h4> Respiratory system</h4>
Asthma</td>
    <td><img src={ require('./images/effects/2.jpg') } style={{padding: "10px", width: "100%"}} /></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><img src={ require('./images/effects/3.jpg') } style={{padding: "10px", width: "100%"}} /></td>
    <td><h4>Heart

</h4>Hypertension</td>
  </tr>
  <tr>
    <td><h4>Digestive system
</h4>Vit A and D deficiency

Hyperlipidemia

Diabetes</td>
    <td><img src={ require('./images/effects/4.png') } style={{padding: "10px", width: "100%"}} /></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><img src={ require('./images/effects/5.png') } style={{padding: "10px", width: "100%"}} /></td>
    <td><h4>Effects on blood


</h4>Anaemia</td>
  </tr>
  <tr>
    <td><h4>Reproductive system




</h4>Affects sperm counts/motility

Miscarriage

Erectile dysfunction</td>
    <td><img src={ require('./images/effects/6.jpg') } style={{padding: "10px", width: "100%"}} /></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td><img src={ require('./images/effects/7.jpg') } style={{padding: "10px", width: "100%"}} /></td>
    <td><h4>Cancer</h4>Bladder cancer

Lung cancer

Esophageal

Liver cancer

Oral cancer



</td>
  </tr>
</table><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Diagnosis() {let history = useHistory();
  return (
  <div>
     <p style={{color: "#97D077", padding: "10px", fontSize: "xx-large", textAlign: "center"}}>Diagnosis Of OSMF</p>
     <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>OSMF is notoriously known to be a pre-cancerous lesion. A pre-cancerous lesion does not mean that you have cancer. </p>

     <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>However, the chances of changes in the mouth transforming into cancer are very high, if the areca nut habit is not stopped immediately. Hence complete stoppage of the habit of areca nut chewing is important to prevent progression to cancer</p>
    <p style={{color: "#97D077", padding: "10px", fontSize: "large", textAlign: "center"}}>Early diagnosis of this condition is essential as it results in better and faster healing</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>The detection and ability to carry out a confirmation biopsy becomes difficult in advanced stages of the condition due to reduced mouth opening, thus early detection is key</p>
    <h4 style={{color: "#97D077", padding: "10px", fontSize: "large", textAlign: "left"}}>Screening Examination: </h4>
    <p style={{color: "#97D077", padding: "10px", fontSize: "large", textAlign: "left",fontStyle: "italic"}}>Who needs it?</p>
    <p style={{color: "#97D077", padding: "10px", fontSize: "medium", textAlign: "left"}}> Individuals at risk of having OSMF include</p>
    <p style={{padding: "5px 0px 0px 30px", textAlign: "justify", color: "#000", fontSize: "15px"}}>     * Those with an history of areca nut/ smokeless tobacco consumption</p>
<p style={{padding: "5px 0px 0px 30px", textAlign: "justify", color: "#000", fontSize: "15px"}}>     * Individuals  experiencing any of the symptoms mentioned earlier</p> 
<p style={{color: "#97D077", padding: "10px", fontSize: "large", textAlign: "left",fontStyle: "italic"}}>Individuals  experiencing any of the symptoms mentioned earlier</p>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}> A clinical examination is performed by a trained dental professional. A thorough intra and extraoral examination to identify signs and symptoms of OSMF will be conducted. A routine blood test may be prescribed to rule out any nutritional deficiency and to assess hemoglobin levels. </p>

 

<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}> The mouth opening will be recorded to assess the severity of the condition and to evaluate the response to treatment during later visits.</p>

 

<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}> Further tests will be prescribed based on the individual’s history and clinical symptoms. </p>
<h4 style={{color: "#97D077", padding: "10px", fontSize: "large", textAlign: "left"}}>Confirmatory tests</h4>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}> Biopsy is a procedure where a small part of the tissue is taken from the body and is tested in the laboratory for the confirmation of the suspected disease.</p>

 

<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}> A biopsy is carried out by an experienced professional. It is a very important step as it helps in planning the best suitable treatment.</p>


<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>The type of biopsy will be determined by the trained health professional based on the nature of the lesion.</p>
<h4 style={{color: "#97D077", padding: "10px", fontSize: "large", textAlign: "left"}}>What are the different types of biopsies for OSMF?</h4>

<p style={{padding: "5px 0px 0px 30px", textAlign: "justify", color: "#000", fontSize: "15px"}}>     * Punch Biopsy
</p>
<p style={{padding: "5px 0px 0px 30px", textAlign: "justify", color: "#000", fontSize: "15px"}}>     * Incisional Biopsy</p> 
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Both these types of biopsies are minimally invasive and can be carried out in the dentist’s office.</p> <br></br><br></br>

<div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Stages() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "10px", fontSize: "xx-large", textAlign: "center"}}>Stages and symptoms</p>
    <p style={{color: "#2BD9FE", padding: "10px", fontSize: "large", textAlign: "center"}}>Evalualate your clinical condition</p>
    <div style={{padding: "10px", width: "100%"}}><iframe width="360" height="250" src="https://www.youtube-nocookie.com/embed/oJ9mhS7aQUA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    <p style={{color: "#2BD9FE", padding: "10px", fontSize: "large", textAlign: "center"}}>Find out which stage you are in</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "center", color: "#000", fontSize: "15px"}}>What is your mouth opening measurement?</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
    <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/greaterthan">Greater than 35 mm</Link><br></br>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/greater">35-25 mm</Link><br></br>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/mid">25-15 mm</Link><br></br>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/less">Less thank 15 mm</Link><br></br>
      </div><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Early() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Are you experiencing these symptoms?</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Excessive salivation</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Burning sensation</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Sparse brown/black pigmentation</p><img src={ require('./images/16.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Do you have some or all of these symptoms?</p>
    <div class="btn-group mr-2" style={{padding: "17%"}}>
    <Link to="/no" class="btn mr-5" style={{backgroundColor: "#2BD9FE", width: "100px"}}>No</Link>
      <Link to="/yesa" class="btn mr-5" style={{backgroundColor: "#2BD9FE", width: "100px"}}>Yes</Link>
    </div><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Earlya() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Are you experiencing these symptoms?</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Excessive salivation</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Burning sensation</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Sparse brown/black pigmentation</p><img src={ require('./images/16.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Do you have some or all of these symptoms?</p>
    <div class="btn-group mr-2" style={{padding: "17%"}}>
    <Link to="/mid" class="btn mr-5" style={{backgroundColor: "#2BD9FE", width: "100px"}}>No</Link>
      <Link to="/yesa" class="btn mr-5" style={{backgroundColor: "#2BD9FE", width: "100px"}}>Yes</Link>
    </div><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Moderate() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Are you experiencing these symptoms?</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Sunken cheeks Loss of naso labial fold <a href="/stagea">(?)</a>
 </p><img src={ require('./images/19.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Vesicle formation <a href="/stageb">(?)</a></p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Petechiae <a href="/stagec">(?)</a></p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Burning sensation</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Dry mouth</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Loss of taste sensation</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Difficulty in whistling</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Gradual decrease in mouth opening</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Rigid oral mucosa <a href="/staged">(?)</a></p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Difficulty in blowing the cheeks</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Thinning of lips</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Hoarseness of voice</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Mild hearing loss</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Weight loss</p>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Do you have some or all of these symptoms?</p>
     <div class="btn-group mr-2" style={{padding: "17%"}}>
    <Link to="/less" class="btn mr-5" style={{backgroundColor: "#2BD9FE", width: "100px"}}>No</Link>
      <Link to="/yesb" class="btn mr-5" style={{backgroundColor: "#2BD9FE", width: "100px"}}>Yes</Link>
    </div><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Severe() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Are you experiencing these symptoms?</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Reduction in mouth opening</p><img src={ require('./images/20.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Mottled or opaque or white marble like appearance of oral mucosa</p><img src={ require('./images/22.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>De-papillation of tongue <a href="/stagee">(?)</a></p><img src={ require('./images/23.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Shrunken uvula with altered shape (inverted, hockey stick, bud like, deviated)</p><img src={ require('./images/24.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Sunken cheeks Loss of naso-labial fold <a href="/stagea">(?)</a></p><img src={ require('./images/19.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Multiple folds on cheeks when attempting wide opening of mouth</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Loss of suppleness of mucosa</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Burning sensation</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Dry mouth</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Restricted tongue movement</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Loss of taste sensation</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Unable to blow the cheek</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Inability to whistle</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Nasal intonation of voice <a href="/stagef">(?)</a></p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Thinning of lips</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Difficulty in swallowing</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Hoarseness of voice</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Severe hearing loss</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Severe weight loss</p>

    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Do you have some or all of these symptoms?</p>
     <div class="btn-group mr-2" style={{padding: "17%"}}>
    <Link to="/mid" class="btn mr-5" style={{backgroundColor: "#2BD9FE", width: "100px"}}>No</Link>
      <Link to="/yesc" class="btn mr-5" style={{backgroundColor: "#2BD9FE", width: "100px"}}>Yes</Link>
    </div><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Yesa() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" >Early stage </a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">
Your symptoms suggest that you may have Early stage OSMF. Find out your diagnosis and treatment options at this stage. We strongly recommend that you visit the nearest dentist to get a through clinical examination.
</p><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Yesb() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" >Moderate stage </a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">

    Your symptoms suggest that you may have Moderate stage OSMF. Find out your diagnosis and treatment options at this stage. We strongly recommend that you visit the nearest dentist to get a through clinical examination.
</p><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Yesc() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" >Severe stage </a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">

    Your symptoms suggest that you may have severe stage OSMF. Find out your diagnosis and treatment options at this stage. We strongly recommend that you visit the nearest dentist to get a through clinical examination.
</p><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function No() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "350px", padding: "15px", borderRadius: "30px", fontFamily: 'Playfair Display'}} class="btn btn-lg" >
If you currently chew areca nut on a regular basis but do not have any of these symptoms, the chances of you developing these symptoms in the future are HIGH if you do not quit the habit immediately.

However, if you do not have areca chewing habit, and have mouth opening more than 35 mm and none of the symptoms mentioned in the previous page, you are unlikely to develop these symptoms. </a>
      
    </div><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Treatment() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "10px", fontSize: "xx-large", textAlign: "center"}}>Treatment</p>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Quitting areca nut habit</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/treatd">Quit Now</Link><br></br>
    </div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Clinical Management</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/treata">Early</Link><br></br>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/treatb">Moderate</Link><br></br>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/treatc">Severe</Link><br></br>
      </div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Oral Physiotherapy</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <Link style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true" to="/treate">Watch a video</Link><br></br>
    </div><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Benefits() {let history = useHistory();
  return (
  <>
  <div><p style={{color: "#2BD9FE", padding: "10px", fontSize: "xx-large", textAlign: "center"}}>Benefits</p></div>
  
    <ul id="hexGrid" style={{padding:"20px"}}>
    <li class="hex">
      <div class="hexIn">
        <a class="hexLink" href="/benefita" style={{backgroundColor:"#2BD9FE"}}>
         
          <p>Confession 1            Read here  >></p>
          
        </a>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <a class="hexLink" href="/benefitb" style={{backgroundColor:"#2BD9FE"}}>
          
        <p>Confession 2            Read here  >></p>
        </a>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <a class="hexLink" href="benefitc" style={{backgroundColor:"#2BD9FE"}}>
        
        <p>Confession 3            Read here  >></p>
        </a>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <a class="hexLink" href="benefitd" style={{backgroundColor:"#2BD9FE"}}>
        
        <p>Confession 4            Read here  >></p>
        </a>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <a class="hexLink" href="/benefite" style={{backgroundColor:"#2BD9FE"}}>
         
        <p>Confession 5            Read here  >></p>
        </a>
      </div>
    </li>
    <li class="hex">
      <div class="hexIn">
        <a class="hexLink" href="benefitf" style={{backgroundColor:"#2BD9FE"}}>
          
        <p>Confession 6             Read here  >></p>
        </a>
      </div>
    </li>
     
  </ul>
  <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </>
  );
}

function Effecta() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#ff9933", padding: "30px", fontSize: "large", textAlign: "center"}}>Dental attrition </p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "left", color: "#ff9933", fontSize: "15px"}}>What is it?</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Loss of tooth structure due to tooth to tooth contact.</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "left", color: "#ff9933", fontSize: "15px"}}>Symptoms:</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Dental hypersensitivity</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Tooth discoloration</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Effectb() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#ff9933", padding: "30px", fontSize: "large", textAlign: "center"}}>Oral Leukoplakia</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Oral Leukoplakia is a thickened, white patch that can form on the insides of the cheeks, gums, tongue or bottom of the mouth. It CAN NOT be scraped off. </p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br></div>
  );
}

function Effectc() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#ff9933", padding: "30px", fontSize: "large", textAlign: "center"}}>Peridontal disease</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "left", color: "#ff9933", fontSize: "15px"}}>What is it?</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Periodontal disease is also commonly known  as gum disease. It is the infection of the gums that damages the tissues that surround the teeth. </p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "left", color: "#ff9933", fontSize: "15px"}}>Symptoms:</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Bad breath</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Swollen gums</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Bleeding gums</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Bleeding on brushing</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Loose teeth</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Gums pull away from the teeth, making the teeth look long</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Pus between teeth and gums</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>  </div>
  );
}

function Effectd() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#ff9933", padding: "30px", fontSize: "large", textAlign: "center"}}>Lichinoid lesions </p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "left", color: "#ff9933", fontSize: "15px"}}>What is it?</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>These are changes in your mouth due to reactions between the chemicals in areca nut and the inner surface of your cheeks or gums.</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "left", color: "#ff9933", fontSize: "15px"}}>Symptoms:</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* White wavy lines</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Blisters/ ulcers</p>
    <p style={{padding: "5px 10px 5px 20px", textAlign: "justify", color: "#000", fontSize: "15px"}}>* Burning sensation</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Stagea() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Normal naso-labial fold</p>
    <img src={ require('./images/32.jpg') } style={{padding: "10px", width: "100%"}} />
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Stageb() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Vesicle formation </p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>A vesicle is essentially a blister. It is usually less than 5 mm in diameter</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>  </div>
  );
}

function Stagec() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Petechiae</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Petechiae are tine purple, red or brown spots in your mouth. They are a result of bleeding under the surface layer of the skin.</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Staged() {let history = useHistory();
  return (
  <div>
   <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Rigid oral mucosa</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>This is  due to an increase in the thickness of your cheeks or your lips resulting in a progressive  inability to open the mouth  </p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Stagee() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>De-papillation of tongue </p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Baldness of the tongue characterized by smooth, glossy tongue</p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Stagef() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Nasal intonation of voice</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Speech which has a nasal tone. </p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Treata() {let history = useHistory();
  return (
    <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Early Stage</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>In the early stages of OSMF, your buccal mucosa would typically look like this: </p><img src={ require('./images/27.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "center", color: "#000", fontSize: "15px"}}>Your treatment options at this stage include: </p>
    <div class="d-flex container">
  <div class="mr-auto p-2" style={{letterSpacing:"0.05em", fontFamily:"platfair-display",background: "#2BD9FE", width:"30%", height: "35px", textAlign: "right",borderRadius: "15px 3px 3px 15px", color: "#fff"}}>Drugs</div>
  <div class="p-2" style={{letterSpacing:"0.05em", fontFamily:"platfair-display",background: "#0066cc", width:"68%", height: "35px", textAlign: "left", borderRadius: "3px 15px 15px 3px", color: "#fff"}}>What does it do in your mouth?</div>
</div>
<div class="d-flex justify-content-center" style={{padding:"20px"}}>
  <div style={{width:"30%", paddingRight:"10px", textAlign: "center", padding:"5px", letterSpacing:"0.05em", fontFamily:"platfair-display"}} className="divv">Steroids (Tablets or mouth rinse)</div>
  <div style={{width:"68%", textAlign:"center", padding:"5px", letterSpacing:"0.05em",fontFamily:"platfair-display"}} className="divv">It acts on fibroblast cells that produce collagen, the substance that makes the cheeks hard. When taken regularly at the right doses, it will stop the production of new collagen.Steroids also help relieve the burning sensation in the mouth due to its anti-inflammatory effect.</div>
</div>
<div class="d-flex justify-content-center" style={{padding:"0 20px 0 20px"}}>
  <div style={{width:"30%", paddingRight:"10px", textAlign: "center", padding:"5px", letterSpacing:"0.05em", fontFamily:"platfair-display"}} className="divv">Antioxidants</div>
  <div style={{width:"68%", textAlign:"center", padding:"5px", letterSpacing:"0.05em",fontFamily:"platfair-display"}} className="divv">It prevents cell death by reducing inflammation</div>
</div>
<div class="d-flex justify-content-center" style={{padding:"20px"}}>
  <div style={{width:"30%", paddingRight:"10px", textAlign: "center", padding:"5px", letterSpacing:"0.05em", fontFamily:"platfair-display"}} className="divv">Nutritional supplements (Iron, Vitamin supplements)</div>
  <div style={{width:"68%", textAlign:"center", padding:"5px", letterSpacing:"0.05em",fontFamily:"platfair-display"}} className="divv">They improve your body’s immunity</div>
</div>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#2BD9FE", fontSize: "15px"}}>

After treatment: </p>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Since OSMF is an irreversible condition, Early diagnosis and treatment is key. Beginning the treatment at an early stage will relieve your symptoms like burning moth,  pain etc. and stop the further progression of the disease. 

</p>
<div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>  </div>
  );
}

function Treatb() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Moderate Stage</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Before treatment, your buccal mucosa would look like this:</p><img src={ require('./images/28.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "center", color: "#000", fontSize: "15px"}}>Your treatment options at this stage include: </p>
    <div class="d-flex container">
  <div class="mr-auto p-2" style={{letterSpacing:"0.05em", fontFamily:"platfair-display",background: "#2BD9FE", width:"30%", height: "35px", textAlign: "right",borderRadius: "15px 3px 3px 15px", color: "#fff"}}>Drugs</div>
  <div class="p-2" style={{letterSpacing:"0.05em", fontFamily:"platfair-display",background: "#0066cc", width:"68%", height: "35px", textAlign: "left", borderRadius: "3px 15px 15px 3px", color: "#fff"}}>What does it do in your mouth?</div>
</div>
<div class="d-flex justify-content-center" style={{padding:"20px"}}>
  <div style={{width:"30%", paddingRight:"10px", textAlign: "center", padding:"5px", letterSpacing:"0.05em", fontFamily:"platfair-display"}} className="divv">Steroids (Tablets or mouth rinse)</div>
  <div style={{width:"68%", textAlign:"center", padding:"5px", letterSpacing:"0.05em",fontFamily:"platfair-display"}} className="divv">It acts on fibroblast cells that produce collagen, the substance that makes the cheeks hard. When taken regularly at the right doses, it will stop the production of new collagen.Steroids also help relieve the burning sensation in the mouth due to its anti-inflammatory effect.</div>
</div>
<div class="d-flex justify-content-center" style={{padding:"0 20px 0 20px"}}>
  <div style={{width:"30%", paddingRight:"10px", textAlign: "center", padding:"5px", letterSpacing:"0.05em", fontFamily:"platfair-display"}} className="divv">Enzymes</div>
  <div style={{width:"68%", textAlign:"center", padding:"5px", letterSpacing:"0.05em",fontFamily:"platfair-display"}} className="divv">Break down the existing collagen fibers and decreases the hardness in the cheeks</div>
  
</div>
 
<img src={ require('./images/29a.jpg') } style={{padding: "10px", width: "100%"}} /><img src={ require('./images/29b.jpg') } style={{padding: "10px", width: "100%"}} /><img src={ require('./images/29c.jpg') } style={{padding: "10px", width: "100%"}} />
<div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Treatc() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Severe Stage</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>In this stage, there is a thick band of collagen that has already been formed beneath your tissue that is preventing the opening of your mouth.</p><img src={ require('./images/30.jpg') } style={{padding: "10px", width: "100%"}} />
    <p style={{padding: "5px 10px 5px 10px", textAlign: "center", color: "#000", fontSize: "15px"}}>Your treatment options at this stage include: </p>
    <div style={{padding:"20px",letterSpacing:"0.05em", fontFamily:"platfair-display",background: "#2BD9FE", width:"80%", height: "100px", textAlign: "center",borderRadius:"20px", color: "#fff", fontSize: "medium", margin:"30px"}}>
The only option at this stage is the surgical removal of the collagen bands followed by physiotherapy.</div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#2BD9FE", fontSize: "15px"}}>

After treatment: </p>
<p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>You can observe a reduction in the amount of collagen following surgery. When surgery is followed up with physiotherapy, you can expect significant improvements in your mouth opening. 

 

</p><img src={ require('./images/31.jpg') } style={{padding: "10px", width: "100%"}} />
<div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Treatd() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Quitting areca nut habit</p>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}> Quitting areca nut habit is the first step in the treatment of OSMF.</p>

    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>For assistance with quitting areca nut, contact national helpline: 011-22901701 </p>
 
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}}>Or visit: <a href="https://www.nhp.gov.in/quit-tobacco">https://www.nhp.gov.in/quit-tobacco</a></p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Treate() {let history = useHistory();
  return (
  <div>
    <p style={{color: "#2BD9FE", padding: "30px", fontSize: "large", textAlign: "center"}}>Oral Physiotherapy</p>
    <iframe width="360" height="250" src="https://www.youtube-nocookie.com/embed/bF4p3rUMANs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}

function Benefita() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" > Lilly Mendonca</a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">
    I had a very bad addiction to areca nuts. I couldn’t end my day without consuming it. During one of the visits to my dentist, he advised me to stop consuming areca nut to prevent deteriorating my oral health. So, I decided to follow her advice and to stop eating areca nuts. During the first 6 months, it was very difficult to control the craving, as I suffered from insomnia, aggressive behavior towards everyone, I used to be always frustrated and irritated by others. But slowly and steadily, I was able to control my addiction and I stopped consuming areca nuts and I advise others to do the same for your own health benefit.    
</p><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Benefitb() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" > Sundari Poojary</a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">
    When I was diagnosed with mouth ulcers, my dentist instructed me to stop consuming areca nuts and gave me information about the bad effects of it. First few months of the anti-areca nut phase was troublesome, as food felt tasteless, had no appetite, and could not sleep for over 6 months. But my strong will to not consume the areca nut won the race and now I don’t feel like eating it even though it is kept right in front of me.
</p><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Benefitc() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" > Dulcin Dsouza</a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">
    I have been eating areca nut for many years due to peer pressure. Due to which I started having severe ache in my tooth. Dentist explained to me the bad effects of eating areca nut and advised me to stop the intake of areca nut as my teeth had turned into a bad condition which had to be replaced with the new set of artificial teeth. Though it was very difficult in the beginning, I could control myself for over a month. Craving to eat the areca nut increased every day, for which after a month, I could not control it. I started eating it occasionally for over 2-3 months to suppress my craving. Once that phase passed, I stopped eating the areca nut completely.
</p><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Benefitd() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" > Unknown</a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">
    For the first time, when I had a severe toothache approx. 30 years ago, that’s when my husband and family members recommend me to eat areca nut along with betel leaves to ease the tooth pain. Over the years, the shape of my teeth and the pain worsened, so I went to the dentist, he asked me to stop eating areca nut due to my poor oral hygiene. The advice struck my mind, which made me want to control my craving to consume areca nut. It almost took 2 years to completely stop eating areca nut.
</p><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Benefite() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" > Unknown</a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">
    As I had a sleepless night due to severe toothache, my elder sister recommended eating areca nut along with betel leaves as she claimed it would soothe the pain. Never know, when it turned out to be a bad addiction. After a couple of years passed, the ache in my tooth increased tremendously, so I visited a nearby dentist, that’s when he advised me to stop consuming areca nut as my teeth were in really bad shape. I had really tough times in the beginning. But I replaced the areca nut with peanuts/other edible products. Now, the pain in my tooth has subsidized. 
</p><div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br>
  </div>
  );
}

function Benefitf() {let history = useHistory();
  return (
  <div>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}>
      <a style={{backgroundColor: "#2BD9FE", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg" > Unknown</a>
      
    </div>
    <p style={{padding: "5px 10px 5px 10px", textAlign: "justify", color: "#000", fontSize: "15px"}} className="divi">
    I was around 20 years of age when I was introduced to the areca nut, my colleagues used to eat it while we were working. Which made me want to try due to the peer pressure. Slowly, I got addicted to it without even realizing it. As my children grew, my addiction also grew simultaneously, I couldn’t even </p>
    <div class="btn-group-vertical container d-flex justify-content-center" style={{paddingTop: "50px", alignItems: "center"}}><button onClick={() => history.goBack()}  style={{backgroundColor: "#E8E8E8", height: "60px", padding: "15px", borderRadius: "10px", fontFamily: 'Playfair Display'}} class="btn btn-lg active" role="button" aria-pressed="true"> Go Back</button> </div><br></br><br></br> </div>
  );
}
