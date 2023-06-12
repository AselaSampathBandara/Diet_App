var _DietPlanType = 0;
let ignoringArray = [];
let savedData = {};
let detail = "";
let show = "breakfast";
let DietTitle = "Breakfast";
let firstName;
let lastName;
let gender;
let age = 32;
//weight
let kiloWeightId = 2;
let lbsWeightId = 0;
let kiloWeight = 60;
let lbsWeight = Math.round(kiloWeight * 2.20462);
//height
let cmHeighId = 4;
let inchesHeightId = 0;
let cmHeight = 176;
let inchesHeight = Math.round(cmHeight / 2.54);
//wst
let cmWstId = 6;
let inchesWstId = 0;
let cmWst = 38;
let inchesWst = Math.round(cmWst / 2.54);

function selectDiet() {
  document.getElementById("selectingDietType").innerHTML = `
  <div class="mt-3">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span style="padding: 6px">
                      <img
                        class="profile-picture avatar-md rounded-circle"
                        src="dist-assets/images/DietPlan/low-calorie-diet1.png"
                        alt="alt"
                        style="width: 50px; height: auto; margin-left: -15px"
                      /> </span
                    >Low Calorie Diet Meal Plans
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="card-body">
                      <p>
                        Follow these meal plans for a healthy lifestyle and
                        consult your doctor for any information or contact Dr.
                        Ananda Perera through
                        <a
                          href="http://www.247econsult.com"
                          style="color: #0a6aa1"
                          >http://www.247econsult.com</a
                        >
                      </p>
                     
                      <div style="margin-top: 10px">
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/vlcd.png"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >Very Low Calorie Diet (VLSD)</span
                          >
                          <button
                            class="btn  btn-success btn-sm m-1"
                            type="button"
                            onclick="CmdSetDietPlanType_Click(800)"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/vlcd.png"
                            alt="alt"
                          /><span class="text-15 ml-3">1600 KCAL Diet</span>
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            onclick="CmdSetDietPlanType_Click(1600)"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/vlcd.png"
                            alt="alt"
                          /><span class="text-15 ml-3">2200 KCAL Diet</span>
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            onclick="CmdSetDietPlanType_Click(2200)"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span style="padding: 6px">
                      <img
                        class="profile-picture avatar-md rounded-circle"
                        src="dist-assets/images/DietPlan/diabetic-plan1.png"
                        alt="alt"
                        style="width: 50px; height: auto; margin-left: -15px"
                      /> </span
                    >Diabetic Diet Meal Plans
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="card-body">
                      <p>
                        Follow these meal plans for a healthy lifestyle and
                        consult your doctor for any information or contact Dr.
                        Ananda Perera through
                        <a
                          href="http://www.247econsult.com"
                          style="color: #0a6aa1"
                          >http://www.247econsult.com</a
                        >
                      </p>
                      <div style="margin-top: 10px">
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/diabetic.png"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >1600 KCAL Traditional Diabetic Diet</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            onclick="CmdSetDietPlanType_Click('1600DM')"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/diabetic.png"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >2200 KCAL Traditional Diabetic Diet</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            onclick="CmdSetDietPlanType_Click('2200DM')"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/diabetic.png"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >1600 KCAL Low Biologically Available Glucose
                            40%</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/diabetic.png"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >1600 KCAL Low Biologically Available Glucose
                            20%</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/diabetic.png"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >2200 KCAL Low Biologically Available Glucose
                            40%</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span style="padding: 6px">
                      <img
                        class="profile-picture avatar-md rounded-circle"
                        src="dist-assets/images/DietPlan/mediterranean-plan1.png"
                        alt="alt"
                        style="width: 50px; height: auto; margin-left: -15px"
                      /> </span
                    >Mediterranean Meal Plans
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="card-body">
                      <p>
                        Follow these meal plans for a healthy lifestyle and
                        consult your doctor for any information or contact Dr.
                        Ananda Perera through
                        <a
                          href="http://www.247econsult.com"
                          style="color: #0a6aa1"
                          >http://www.247econsult.com</a
                        >
                      </p>

                      <div style="margin-top: 10px">
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/mediterranean.png"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >1600 KCAL Mediterranean Diet</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/mediterranean.png"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >2200 KCAL Mediterranean Diet</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span style="padding: 6px">
                      <img
                        class="profile-picture avatar-md rounded-circle"
                        src="dist-assets/images/DietPlan/mothers-to-be1.png"
                        alt="alt"
                        style="width: 50px; height: auto; margin-left: -15px"
                      /> </span
                    >Meal Plans for Mothers to be
                  </button>
                </h2>
                <div
                  id="collapsefour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="card-body">
                      <p>
                        Follow these meal plans for a healthy lifestyle and
                        consult your doctor for any information or contact Dr.
                        Ananda Perera through
                        <a
                          href="http://www.247econsult.com"
                          style="color: #0a6aa1"
                          >http://www.247econsult.com</a
                        >
                      </p>
                      <div style="margin-top: 10px">
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/mother.jpg"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >1600 KCAL Pregnancy normal weight (1-13
                            Weeks)</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            onclick="CmdSetDietPlanType_Click('1600T1')"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/mother.jpg"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >1600 KCAL Pregnancy normal weight (14-27
                            Weeks)</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            onclick="CmdSetDietPlanType_Click('1600T2')"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                        <div class="ul-widget-app__browser-list-1 mb-4">
                          <img
                            class="profile-picture avatar-md rounded-circle"
                            src="dist-assets/images/DietPlan/mother.jpg"
                            alt="alt"
                          /><span class="text-15 ml-3"
                            >1600 KCAL Pregnancy normal weight (28-40
                            Weeks)</span
                          >
                          <button
                            class="btn btn-navigate-form-step btn-success btn-sm m-1"
                            type="button"
                            onclick="CmdSetDietPlanType_Click('1600T3')"
                            step_number="3"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3 d-flex justify-content-start">
            <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="dietButtonSelect()"
            >
              Prev
            </button>
            
          </div>
  `;
}

// function ageSelector() {
//   document.getElementById("selectingDietType").innerHTML = `
//   <div class="mt-3">
//               <div class="form-group row">
//                 <div for="age" class="text-center col-form-label name-tag"
//                   >Age in years</div>
//                   <div class="col-sm-5">
//                 <div class="d-flex gap-3" >
//                   <div class="col-2 col-md-2 p-0">
//                     <input
//                       class="increment "
//                       type="number"
//                       data-type="range"
//                       name="incrementAge"
//                       id="iAge"
//                       value="60"
//                       min="0"
//                       max="100"
//                       onchange="slidersChange(this)"

//                     />
//                     </div>
//                     <div class="col-10 col-md-10">
//                     <input
//                       type="range"
//                       class="form-range p-0"
//                       id="sAge"
//                       name="sliderAge"
//                       onchange="slidersChange(this)"
//                     />
//                     </div>
//                   </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-12 col-lg-12">
//               <div
//                     id="spinner_03"
//                     class="spinner1 rounded spinner"
//                     value="32"
//                    maxValue="150"
//                     increment="1"
//                     zero_padded="false"
//                     style="width: 100%"
//                   ></div>
//                   </div>

//               </div>

//   </div>

//           <div class="mt-3 text-right">
//           <button
//               class="btn btn-success btn-sm m-1 "
//               type="button"
//               onClick="dietButtonSelect()"
//             >
//               Prev
//             </button>
//            <button
//               class="btn btn-success btn-sm m-1 "
//               type="button"
//               onClick="weightSelector()"
//             >
//               Next
//             </button>
//               </div>

//   `;
//   setTimeout(() => {
//     setValuePicker("spinner_03");
//   }, 500);
// }

function ageSelector() {
  document.getElementById("selectingDietType").innerHTML = `
  <div class="mt-3 unitContainer">     
       
              <div class="form-group row">
                <p for="age" class=" col-form-label name-tag"
                  >Age in years</p>
                  
              <div class="col-12 col-lg-12">
              <div
                    id="spinner_01"
                    class="spinner1 rounded spinner"
                    value="32"
                   maxValue="100"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              
              </div>

  </div>
         <div class="mt-3 d-flex justify-content-between" >
          <div >
          <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="dietButtonSelect()"
            >
              Prev
            </button>
            </div>
            <div >
           <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="weightSelector()"
            >
              Next
            </button>
              </div>
              </div>
           
            
  `;
  setTimeout(() => {
    setValuePicker("spinner_01");
  }, 20);
}

function weightSelector() {
  document.getElementById("selectingDietType").innerHTML = `
  <div class="mt-3 unitContainer">  
   <div>
               <P>Select the unit for Weight</P>
              <div class="mt-3 d-flex justify-content-center">
             
              <button
                class="btn-primary selectunit m-1"
                onclick="getKiloWeight()"
                type="button"
                style="border:solid"
                id="kiloWeight"
              >
                Kilo
              </button>
              <button
                class="btn-primary selectunit m-1"
                onclick="getLbsWeight()"
                type="button"
                id="lbsWeight"
              >
               Lbs
              </button>
            </div>
            </div> 

  <div class="form-group row" id="weight">
  <div class="form-group row" >
               
              <div class="form-group row">
                  <div class="col-12 col-lg-12">
                  <div
                    id="spinner_02"
                    class="spinner1 rounded spinner"
                    value="${kiloWeight}"
                   maxValue="300"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>

              

           
</div>
  </div>         
          <div class="mt-3 d-flex justify-content-between">
          <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="ageSelector()"
            >
              Prev
            </button>
           <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="heightSelector()"
            >
              Next
            </button>
              </div>
           
            
  `;

  setTimeout(() => {
    setValuePicker("spinner_02");
  }, 200);
}

function getKiloWeight() {
  kiloWeightId++;
  document.getElementById("weight").innerHTML = ` <div class="form-group row">
                  <div class="col-12 col-lg-12">
                  <div
                    id="spinner_KW${kiloWeightId}"
                    class="spinner1 rounded spinner"
                    value="${kiloWeight}"
                   maxValue="200"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>`;
  setTimeout(() => {
    setValuePicker(`spinner_KW${kiloWeightId}`);
    document.getElementById("kiloWeight").style.border = "solid";
    document.getElementById("lbsWeight").style.border = "";
  }, 200);
}

function getLbsWeight() {
  lbsWeightId++;
  document.getElementById("weight").innerHTML = ` <div class="form-group row">
                  <div class="col-12 col-lg-12">
                  <div
                    id="spinner_LW${lbsWeightId}"
                    class="spinner1 rounded spinner"
                    value="${lbsWeight}"
                   maxValue="500"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>`;
  setTimeout(() => {
    setValuePicker(`spinner_LW${lbsWeightId}`);
    document.getElementById("lbsWeight").style.border = "solid";
    document.getElementById("kiloWeight").style.border = "";
  }, 200);
}

function heightSelector() {
  document.getElementById("selectingDietType").innerHTML = `
  <div class="mt-3 unitContainer">    
  <div>
               <P>Select the unit for Height</P>
              <div class="mt-3 d-flex justify-content-center">
             
              <button
                class="btn-primary selectunit m-1"
                onclick="getCmHeight()"
                type="button"
                style="border:solid"
                id="cmHeight"
              >
                Cm
              </button>
              <button
                class="btn-primary selectunit m-1"
                onclick="getInchHeight()"
                type="button"
                id="inchHeight"
              >
               Inches
              </button>
            </div>
            </div>  

            <div class="form-group row " id="height">
            <div class="form-group row">
               
                  <div class="col-12 col-lg-12">
                  <div
                    id="spinner_04"
                    class="spinner1 rounded spinner"
                    value="${cmHeight}"
                   maxValue="400"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>
              </div>

  </div>
         
          <div class="mt-3 d-flex justify-content-between">
          <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="weightSelector()"
            >
              Prev
            </button>
           <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="wstSelector()"
            >
              Next
            </button>
              </div>
            
  `;

  setTimeout(() => {
    setValuePicker("spinner_04");
  }, 200);
}

function getCmHeight() {
  cmHeighId++;
  document.getElementById("height").innerHTML = `  <div class="form-group row">
               
                  <div class="col-12 col-lg-12">
                  <div
                    id="spinner_CH${cmHeighId}"
                    class="spinner1 rounded spinner"
                    value="${cmHeight}" 
                   maxValue="500"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>`;
  setTimeout(() => {
    setValuePicker(`spinner_CH${cmHeighId}`);
    document.getElementById("cmHeight").style.border = "solid";
    document.getElementById("inchHeight").style.border = "";
  }, 200);
}

function getInchHeight() {
  inchesHeightId++;
  document.getElementById("height").innerHTML = `<div class="form-group row">
                                <div class="col-12 col-lg-12">
              <div
                    id="spinner_IH${inchesHeightId}"
                    class="spinner1 rounded spinner"
                    value="${inchesHeight}"                   
                   maxValue="300"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>`;

  setTimeout(() => {
    setValuePicker(`spinner_IH${inchesHeightId}`);
    document.getElementById("inchHeight").style.border = "solid";
    document.getElementById("cmHeight").style.border = "";
  }, 200);
}

function wstSelector() {
  document.getElementById("selectingDietType").innerHTML = `
  <div class="mt-3 unitContainer">    
  <div>
               <P>Select the unit for Waist</P>
              <div class="mt-3 d-flex justify-content-center">
             
              <button
                class="btn-primary selectunit m-1"
                type="button"
                onclick="getCmWst()"
                style="border:solid"
                id="cmWst"
              >
              Cm
              </button>
              <button
                class="btn-primary selectunit m-1"
                onclick="getInchWstt()"
                type="button"
                id="inchWst"
              >
                Inches
              </button>
            </div>
            </div>  

            <div class="form-group row " id="wst">
            <div class="form-group row">
                  <div class="col-12 col-lg-12">
                  <div
                    id="spinner_06"
                    class="spinner1 rounded spinner"
                    value="${cmWst}"
                   maxValue="300"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>
              </div>

  </div>
         
          <div class="mt-3 d-flex justify-content-between">
          <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="heightSelector()"
            >
              Prev
            </button>
           <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="dietConsultation()"
            >
              Next
            </button>
              </div>
           
            
  `;

  setTimeout(() => {
    setValuePicker("spinner_06");
  }, 200);
}

function getCmWst() {
  cmWstId++;
  document.getElementById("wst").innerHTML = `<div class="form-group row">
                

                  <div class="col-12 col-lg-12">
                  <div
                    id="spinner_CW${cmWstId}"
                    class="spinner1 rounded spinner"
                    value="${cmWst}"
                   maxValue="200"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>`;
  setTimeout(() => {
    setValuePicker(`spinner_CW${cmWstId}`);
    document.getElementById("cmWst").style.border = "solid";
    document.getElementById("inchWst").style.border = "";
  }, 200);
}

function getInchWstt() {
  inchesWstId++;
  document.getElementById("wst").innerHTML = ` <div class="form-group row">
                
                <div class="col-12 col-lg-12">
              <div
                    id="spinner_IW${inchesWstId}"
                    class="spinner1 rounded spinner"
                    value="${inchesWst}"
                   maxValue="100"
                    increment="1"
                    zero_padded="false"
                    style="width: 100%"
                  ></div>
                  </div>
              </div>`;
  setTimeout(() => {
    setValuePicker(`spinner_IW${inchesWstId}`);
    document.getElementById("inchWst").style.border = "solid";
    document.getElementById("cmWst").style.border = "";
  }, 200);
}

function dietConsultation() {
  let dietConsultData;

  getDietConsultation();

  document.getElementById("selectingDietType").innerHTML = `
  <div class="mt-2 unitContainer">
  <form>
  <div class="row d-flex align-items-center">
  <div class="col-1 d-flex align-items-center justify-content-end">
     <span class="ul-btn__icon" ><i class="i-Arrow-Left" onClick=""></i></span>
  </div>
  <div class="d-flex justify-content-center col-10 ">
      <select size="15"
        onchange="myFunction(this.value)" name="apart[]" class="form-select" multiple >
    <option value="Obesity Related Diseases - ORD">
          Obesity Related Diseases - ORD
        </option>
        <option value="ORD negative">ORD negative</option>
        <option value="overweight BMI 25-29.9">overweight BMI 25-29.9</option>
        <option value="obesity BMI above 30">obesity BMI above 30</option>
        <option value="ORD one or more">ORD one or more</option>
        <option value="ORD mild to moderate">ORD mild to moderate</option>
        <option value="ORD moderate weight loss responsive">
          ORD moderate weight loss responsive
        </option>
        <option value="overweight BMI above 25">overweight BMI above 25</option>
        <option value="ORD severe">ORD severe</option>
        <option value="ORD large  weight loss responsive">
          ORD large weight loss responsive
        </option>
        <option value="WC below 35 if woman">WC below 35 if woman</option>
        <option value="WC below 45 if man">WC below 45 if man</option>
        <option value="fatty hips">fatty hips</option>
        <option value="flat belly">flat belly</option>
        <option value="fatter hip than fatty belly">
          fatter hip than fatty belly
        </option>
        <option value="Lipid profile normal">Lipid profile normal</option>
    </select>
  </div>
  <div class="col-1 d-flex align-items-center " >
      <span class="ul-btn__icon"><i class="i-Arrow-Right"></i></span>
  </div>
</div>
  </form>
    <div class="row mt-2 text-center">
      <div class="col">          
        <button style="min-width: 100px; width:200px" class="btn btn-primary" type="button"  onclick="advice()">Advice</button>            
      </div>
    </div>
</div>


<div class="mt-3 d-flex justify-content-start">
           <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="wstSelector()"
            >
              Prev
            </button>
              </div>

  `;
}
let array = [];
function myFunction(value) {
  array.push(value);
  console.log(array);
}

function advice() {
  getAdvice();

  document.getElementById("selectingDietType").innerHTML = `
  <div class="text-center mt-2 unitContainer">
    
    <div class="row mt-2 text-center">
      <div class="col">          
        <button style="min-width: 100px; width:200px" class="btn btn-primary" type="button"  onclick="">Save</button>            
      </div>
    </div>
</div>


        <div class="mt-3 d-flex justify-content-start">
           <button
              class="btn btn-success btn-sm m-1 "
              type="button"
              onClick="dietConsultation()"
            >
              Prev
            </button>
        </div>

  `;
}

function slidersChange(e) {
  if (e.name === "fname") {
    document.getElementById("fname").value = e.value;
    firstName = e.value;
    console.log(firstName);
  }
  if (e.name === "lname") {
    document.getElementById("lname").value = e.value;
    lastName = e.value;
    console.log(lastName);
  }

  if (e.name === "gender") {
    if (e.id === "male") {
      gender = "male";
    } else {
      gender = "female";
    }
    console.log(gender);
  }
}

function dietButtonSelect() {
  document.getElementById("selectingDietType").innerHTML = `
  <label class="mt-2">Please Select the Required Diet Type</label>
            <div class="mt-3 text-center">
              <button
                class="btn-primary selectType m-1"
                type="button"
                onclick="ageSelector()"
              >
                Prescribed Diet
              </button>
              <button
                class="btn-primary selectType m-1"
                onclick="selectDiet()"
                type="button"
              >
                Selected Diet
              </button>
            </div>

            <div class="mt-3 d-flex flex-row-start">
              <button
                class="btn btn-success btn-sm m-1 btn-navigate-form-step"
                type="button"
                step_number="1"
                onClick="navigateToFormStep(1)"
              >
                Prev
              </button>
            </div>`;
}

function setContent(dietPlan) {
  let title = dietPlan.Diet_Plan_Name;
  let dietPlanObject = {
    breakfast: "",
    morningSnack: "",
    lunch: "",
    eveningSnack: "",
    dinner: "",
  };

  dietPlan.Breakfast.map((item) => {
    dietPlanObject.breakfast += `<li>${
      item
        .replace(/[^a-zA-Z0-9 ]/g, " ")
        .charAt(0)
        .toUpperCase() + item.replace(/[^a-zA-Z0-9 ]/g, " ").slice(1)
    }</li>`;
  });

  dietPlan.Morning_Snacks.map((item) => {
    dietPlanObject.morningSnack += `<li>${
      item
        .replace(/[^a-zA-Z0-9 ]/g, " ")
        .charAt(0)
        .toUpperCase() + item.replace(/[^a-zA-Z0-9 ]/g, " ").slice(1)
    }</li>`;
  });

  dietPlan.Lunch.map((item) => {
    dietPlanObject.lunch += `<li>${
      item
        .replace(/[^a-zA-Z0-9 ]/g, " ")
        .charAt(0)
        .toUpperCase() + item.replace(/[^a-zA-Z0-9 ]/g, " ").slice(1)
    }</li>`;
  });

  dietPlan.Evening_Snacks.map((item) => {
    dietPlanObject.eveningSnack += `<li>${
      item
        .replace(/[^a-zA-Z0-9 ]/g, " ")
        .charAt(0)
        .toUpperCase() + item.replace(/[^a-zA-Z0-9 ]/g, " ").slice(1)
    }</li>`;
  });

  dietPlan.Dinner.map((item) => {
    dietPlanObject.dinner += `<li>${
      item
        .replace(/[^a-zA-Z0-9 ]/g, " ")
        .charAt(0)
        .toUpperCase() + item.replace(/[^a-zA-Z0-9 ]/g, " ").slice(1)
    }</li>`;
  });

  detail = dietPlanObject[show];

  document.getElementById("content").innerHTML = `
          <div id="DietPlan">
      <div class="card">      
            <div style="margin-right: 10px">
              <h3 class="ul-widget__head-title p-2" id="DietPlanHeading">${title}</h3> 
        </div>
      </div>

      <div class="row g-2" style="margin-top: 2px" >
        <div class="col-sm-6 col-md-2">
          <div class="row g-0">
            <div class="col ">
              <button
                class="btn-icon text-center"
                type="button"
                id="breakfastbtn"
                onclick="showDietDetails('breakfast')"
              >
                <span class="btn-label">Breakfast</span>
              </button>
            </div>

             <div class="col ">
              <button
                class="btn-icon text-center"
                type="button"
                id="morningSnackbtn"
                onclick="showDietDetails('morningSnack')"
              >
              <span class="btn-label">Morning Snack</span>
              </button>
            </div>

            <div class="col">
              <button
                class="btn-icon"
                type="button"
                id="lunchbtn"
                onclick="showDietDetails('lunch')"
              >
                <span class="btn-label">Lunch</span>
              </button>
            </div>

             <div class="col ">
              <button
                class="btn-icon"
                type="button"
                id="eveningSnackbtn"
                onclick="showDietDetails('eveningSnack')"
              >
                <span class="btn-label">Evening Snack</span>
              </button>
            </div>

            <div class="col">
              <button
                class="btn-icon text-center"
                type="button"
                id="dinnerbtn"
                onclick="showDietDetails('dinner')"
              >
                <span class="btn-label">Dinner</span>
              </button>
            </div>

          </div>

        
        </div>

        <div class="col-sm-6 col-md-10 ">
          <div class="card ">
            <div class="dietholder">
              <div class="row">
                <div class="col-sm-6 col-md-8">
                  
                   <div class=" p-2 " >
                                <div >
                                    <div class="ul-widget__head v-margin">
                                        <div class="ul-widget__head-label">
                                            <h3 class="ul-widget__head-title"><i class="i-Receipt-3"></i>&nbsp;${DietTitle}</h3>
                                        </div>
                                    </div>
                                    <div class="ul-widget__body">

                                        <ul class="ul-widget1" id="DietPlanBreakfast"> ${detail}</ul>
                                    </div>
                                </div>
                            </div>
                 
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="p-3">
                  <div class="row text-center">
                    <div class="col">
                    <img
                        src="dist-assets/images/DietPlan/Meal-Type/breakfast.jpg"
                        alt="alt"
                        style="width: 100px; height: 100px"
                      /> 
                    </div>
                  </div>

                  <div class="row mt-2 text-center">
                  <div class="col">
                   
                      <button style="min-width: 100px" class="btn btn-primary" type="button" id="800Button" onclick="ShowDietPlan();"><span class="ul-btn__icon"><i class="i-Refresh"></i></span><span class="ul-btn__text">&nbsp;Change</span></button>
                    
                    </div>
                  </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                            
`;

  document.getElementById("end").innerHTML = `
          <div>
      <div style="margin-right: 10px" >
        
          <h3 class="ul-widget__head-title" id="DietPlanHeading">${title}</h3>
        </div>
      
    </div>

    <div
      class="card"
      style="
        margin-top: 10px;
        background-image: url('dist-assets/images/DietPlan/Meal-Type/breakfast.jpg');
        background-repeat: no-repeat;
        background-size: 100px;
        background-position: right;
        background-position-y: bottom;
      "
    >
      <div >
        <div class="ul-widget__head v-margin">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title">
              <i class="i-Receipt-3"></i>&nbsp;Breakfast
            </h3>
          </div>
        </div>
        <div class="ul-widget__body">
          <ul class="ul-widget1" id="DietPlanBreakfast">
            ${dietPlanObject.breakfast}
          </ul>
        </div>
      </div>
    </div>
    <div
      class="card"
      style="
        margin-top: 10px;
        background-image: url('dist-assets/images/DietPlan/Meal-Type/morningSnack.jpg');
        background-repeat: no-repeat;
        background-size: 100px;
        background-position: right;
        background-position-y: bottom;
      "
    >
      <div>
        <div class="ul-widget__head v-margin">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title">
              <i class="i-Receipt-3"></i>&nbsp;Morning Snacks
            </h3>
          </div>
        </div>
        <div class="ul-widget__body">
          <ul class="ul-widget1" id="DietPlanMorningSnacks">
            ${dietPlanObject.morningSnack}
          </ul>
        </div>
      </div>
    </div>

    <div
      class="card"
      style="
        margin-top: 10px;
        background-image: url('dist-assets/images/DietPlan/Meal-Type/Lunch.jpg');
        background-repeat: no-repeat;
        background-size: 100px;
        background-position: right;
        background-position-y: bottom;
      "
    >
      <div>
        <div class="ul-widget__head v-margin">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title">
              <i class="i-Receipt-3"></i>&nbsp;Lunch
            </h3>
          </div>
        </div>
        <div class="ul-widget__body">
          <ul class="ul-widget1" id="DietPlanLunch">
            ${dietPlanObject.lunch}
          </ul>
        </div>
      </div>
    </div>

    <div
      class="card"
      style="
        margin-top: 10px;
        background-image: url('dist-assets/images/DietPlan/Meal-Type/Eve-snak.jpg');
        background-repeat: no-repeat;
        background-size: 100px;
        background-position: right;
        background-position-y: bottom;
      "
    >
      <div>
        <div class="ul-widget__head v-margin">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title">
              <i class="i-Receipt-3"></i>&nbsp;Evening Snacks
            </h3>
          </div>
        </div>
        <div class="ul-widget__body">
          <ul class="ul-widget1" id="DietEveningSnacks">
            ${dietPlanObject.eveningSnack}
          </ul>
        </div>
      </div>
    </div>

    <div
      class="card"
      style="
        margin-top: 10px;
        background-image: url('dist-assets/images/DietPlan/Meal-Type/Dinner.jpg');
        background-repeat: no-repeat;
        background-size: 100px;
        background-position: right;
        background-position-y: bottom;
      "
    >
      <div>
        <div class="ul-widget__head v-margin">
          <div class="ul-widget__head-label">
            <h3 class="ul-widget__head-title">
              <i class="i-Receipt-3"></i>&nbsp;Dinner
            </h3>
          </div>
        </div>
        <div class="ul-widget__body">
          <ul class="ul-widget1" id="DietPlanDinner">
            ${dietPlanObject.dinner}
          </ul>
        </div>
      </div>
    </div>
                            
`;
}

function ShowDietPlan() {
  CmdSetDietPlanType(_DietPlanType);
}

function showDietDetails(snack) {
  console.log("clicked");
  switch (snack) {
    case "breakfast":
      show = "breakfast";
      DietTitle = "Breakfast";
      setContent(savedData);
      ignoringArray = ["Morning_Snacks", "Lunch", "Evening_Snacks", "Dinner"];
      break;
    case "morningSnack":
      show = "morningSnack";
      DietTitle = "Morning Snack";
      setContent(savedData);
      ignoringArray = ["Breakfast", "Lunch", "Evening_Snacks", "Dinner"];
      break;
    case "lunch":
      show = "lunch";
      DietTitle = "Lunch";
      setContent(savedData);
      ignoringArray = [
        "Breakfast",
        "Morning_Snacks",
        "Evening_Snacks",
        "Dinner",
      ];
      break;
    case "eveningSnack":
      show = "eveningSnack";
      DietTitle = "Evening Snack";
      setContent(savedData);
      ignoringArray = ["Breakfast", "Morning_Snacks", "Lunch", "Dinner"];
      break;
    case "dinner":
      show = "dinner";
      DietTitle = "Dinner";
      setContent(savedData);
      ignoringArray = [
        "Breakfast",
        "Morning_Snacks",
        "Lunch",
        "Evening_Snacks",
      ];
      break;
    default:
    // code block
  }
}

function CmdSetDietPlanType_Click(value) {
  _DietPlanType = value;
  ignoringArray = [];
  CmdSetDietPlanType(value);
}

function apiData(data) {
  ignoringArray.map((item) => {
    delete data[item];
  });
  savedData = {
    ...savedData,
    ...data,
  };
  // console.log(data);
  setContent(savedData);
}

//save the file
window.jsPDF = window.jspdf.jsPDF;

// Convert HTML content to PDF
function Convert_HTML_To_PDF() {
  var element = document.getElementById("end");

  html2pdf(element, {
    margin: [50, 10, 10, 10],
    filename: "DietType.pdf",
    image: {
      type: "png",
      quality: 0.99,
    },
    html2canvas: {
      // dpi: 192,
      letterRendering: true,
      useCORS: true,
    },
    jsPDF: {
      unit: "pt",
      format: "a4",
      orientation: "portrait",
    },
  });
}
