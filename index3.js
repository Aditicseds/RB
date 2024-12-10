module.exports = ({
  name,
  email,
  phone,
  linkedin,
  github,
  skills,
  edu1_school,
  edu1_year,
  edu1_qualification,
  edu1_desc,
  edu2_school,
  edu2_year,
  edu2_qualification,
  edu2_desc,
  exp1_org,
  exp1_pos,
  exp1_desc,
  exp1_dur,
  exp2_org,
  exp2_pos,
  exp2_desc,
  exp2_dur,
  proj1_title,
  proj1_link,
  proj1_desc,
  proj2_title,
  proj2_link,
  proj2_desc,
  extra_1,
  extra_2,
}) => {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
        <style>
          html { zoom: 0.55; }
          .rule { border-bottom: 1px solid black; width:80%; }
          .mobile { margin-top:-10px; }
          .email { margin-bottom: 0; }
          body { font-family: 'Amazing', sans-serif; color: #8bc34a; } /* Changed font to Amazing and text color to light green */
          h1, h3 { color: #8bc34a; } /* Light Green for headings */
          .lead { font-size: 1.1rem; color: #555; }
          .bg-light { background-color: #e8f5e9 !important; } /* Light green background */
        </style>
      </head>
      <body>
        <div class="col-lg-8 mx-auto">
          <br/><br/>
          <div class="row text-center">
            <div class="col-lg-6">
              <h1><b>{{name}}</b></h1>
              <p class="lead email"><strong>Email:</strong> {{email}}</p>
              <p class="lead"><strong>Contact:</strong> (+91){{phone}}</p>
              <p class="lead"><strong>LinkedIn:</strong> {{linkedin}}</p>
              <p class="lead"><strong>Github:</strong> {{github}}</p>
            </div>    
          </div>
          <hr/>
          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Skills</b></h3>
          </div>
          <div class="col-lg-8 row mx-auto">
            <p class="lead">{{skills}}</p>
          </div>

          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Education</b></h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>{{edu1_school}}</b> ({{edu1_qualification}}, {{edu1_year}})</p>
            <p class="mt-0">{{edu1_desc}}</p>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>{{edu2_school}}</b> ({{edu2_qualification}}, {{edu2_year}})</p>
            <p class="mt-0">{{edu2_desc}}</p>
          </div>
           
          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Experience</b></h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>{{exp1_org}}, {{exp1_pos}}</b> ({{exp1_dur}})</p>
            <p class="mt-0">{{exp1_desc}}</p>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>{{exp2_org}}, {{exp2_pos}}</b> ({{exp2_dur}})</p>
            <p class="mt-0">{{exp2_desc}}</p>
          </div>
          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Projects</b></h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>{{proj1_title}}</b>({{proj1_link}})</p>
            <p class="mt-0">{{proj1_desc}}</p>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="lead"><b>{{proj2_title}}</b> ({{proj2_link}})</p>
            <p class="mt-0">{{proj2_desc}}</p>
          </div>
          
          <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Extra-Curriculars/Activities</b></h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <ul>
              <li><p class="lead"><b>Languages: </b>{{extra_1}} </p></li>
              <li><p class="lead"><b>Hobbies: </b>{{extra_2}} </p></li>
            </ul>
          </div>
        </body>
      </html>
  `;
};
