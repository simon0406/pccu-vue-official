<template>
  <div class="pb-5" style="padding-top: 16px;" >
    <div class="css__RWD2">
      <div class="MyProfile-Rectangle">
        <div class="My-Profile">
          <div class="row justify-content-left p-4">
            <h2>My profile</h2>
          </div>
        </div>
      </div>


      <div class="Personal-Rectangle2">
        <div class="row justify-content-left p-4">
            <span class="Collapse"><img src="@/assets/test3.jpg"></span>
            <span class="Personal-Profile2">Personal Profile</span>
        </div>
        <div class="FName-Rectangle" >
          <p class="First-Name">First Name</p>
          <p class="Susan">Susan</p>
        </div>
        <div class="LName-Rectangle">
          <p class="Last-Name">Last Name</p>
          <p class="Towson">Towson</p>
        </div>
        <div class="ID-Rectangle">
          <p class="Client-ID">Client ID</p>
          <p class="NC8500018">NC8500018</p>
        </div>
        <div class="Date-Rectangle">
          <p class="Date-of-Birth">Date of Birth</p>
          <p class="Date-Date">1985/03/03</p>
        </div>
        <div class="Country-Rectangle">
          <p class="Country-of-Birth">Country-of-Birth</p>
          <p class="Australian">Australian</p>
        </div>
        <div class="Nationality-Rectangle">
          <p class="Nationality">Nationality</p>
          <p class="Australian2">Australian2</p>
        </div>
        <div class="Passport-Rectangle">
          <p class="Passport-Number">Passport-Number</p>
          <p class="L6587876">L6587876</p>
        </div>
        <div class="space">
        </div>
      </div>

      <div class="Circle-Rectangle2">
        <span class="circle-one"><img src="@/assets/test3.jpg"></span>
        <span class="circle-two"><img src="@/assets/test3.jpg"></span>
        <span class="circle-three"><img src="@/assets/test3.jpg"></span>
      </div>

      <div class="Text-Rectangle">
        <span class="About-Us">About Us</span>
        <span class="Support">Support</span>
        <span class="Contact-Us">Contact Us</span>
        <span class="Privacy-Policy">Privacy Policy</span>
        <span class="Terms-Conditions">Terms & Conditions</span>   
      </div>
      <div class="Rectangle">
        <div class="Lorem-ipsum-dolor-si">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim tortor at auctor urna nunc. Aliquam purus sit amet luctus venenatis lectus magna. Convallis a cras semper auctor neque. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Curabitur vitae nunc sed velit dignissim sodales. Dolor morbi non arcu risus quis. Turpis nunc eget lorem dolor sed viverra ipsum. Condimentum lacinia quis vel eros donec ac.</p>
          <p>Quam quisque id diam vel quam. Sit amet purus gravida quis blandit. Habitant morbi tristique senectus et. Turpis nunc eget lorem dolor. Nisl purus in mollis nunc. Gravida dictum fusce ut placerat orci nulla pellentesque. Montes nascetur ridiculus mus mauris vitae. Molestie a iaculis at erat pellentesque adipiscing. Quam pellentesque nec nam aliquam sem et tortor consequat. Leo urna molestie at elementum eu facilisis. Pretium viverra suspendisse potenti nullam ac tortor. Non odio euismod lacinia at quis risus sed. At tellus at urna condimentum mattis pellentesque id nibh. Integer eget aliquet nibh praesent tristique. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Purus semper eget duis at tellus at urna condimentum mattis. Nulla pharetra diam sit amet nisl. Consequat semper viverra nam libero justo laoreet sit.
          </p>
        </div>
      </div>
      <div class="Social-Rectangle">
        <div class="Designed-by-S">
          <span>2018 © Designed by Systemweb Technology   All rights reserved.</span>
          <span class="Social-facebook"><img src="@/assets/test3.jpg"></span>
          <span class="Social-instagram"><img src="@/assets/test3.jpg"></span>
          <span class="Social-linkedin"><img src="@/assets/test3.jpg"></span>
          <span class="Social-twitter"><img src="@/assets/test3.jpg"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data: () => ({
    imageUrl: require("@/assets/temple.jpg")
  })
}
</script>

<style lang="scss" >
.css__RWD2{
  width:100%;
  padding:0px 2rem;
  .MyProfile-Rectangle {
    height: 120px;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
  }
  .My-Profile {
    height: 120px;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    padding-left:24px;
  }
  .Personal-Rectangle2 {
    height: 797px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-top:16px;
  }
  .Personal-Profile2 {
    height: 24px;
    font-family: InterUI;
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.06;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 6px;
    padding-top:4px;
  }

  .First-Name {
    height: 35px;
    opacity: 0.5;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
    padding-top:20px;
  }
  .Susan {
    height: 21px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
  }
  .Last-Name {
    height: 35px;
    opacity: 0.5;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
    padding-top:20px;
  }
  .Towson {
    height: 21px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
    
  }
  .Client-ID {
    height: 35px;
    opacity: 0.5;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
    padding-top:20px;
  }
  .NC8500018 {
    height: 21px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left:48px;
  }
  .Date-of-Birth {
    height: 35px;
    opacity: 0.5;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
    padding-top:20px;
  }
  .Date-Date{
    height: 21px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
  }
  .Country-of-Birth {
    height: 35px;
    opacity: 0.5;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
    padding-top:20px;
  }
  .Australian {
    height: 21px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
  }
  .Nationality {
    height: 35px;
    opacity: 0.5;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
    padding-top:20px;
  }
  .Australian2 {
    height: 21px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
  }
  .Passport-Number {
    height: 35px;
    opacity: 0.5;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.14;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
    padding-top:20px;
  }
  .L6587876 {
    height: 21px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.07;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 48px;
  }


  .Rectangle {
    height: 200px;
    margin:10px auto 0px auto;
  }
  .Text-Rectangle {
    height: 35px;  
    margin:10px auto 0px auto;
  }
  .Social-Rectangle {  
    margin:30px auto 0px auto;
    position: relative;
  }
  .Lorem-ipsum-dolor-si {
    font-family: InterUI;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: justify;
    color: #414042;
  }
  .About-Us {
    height: 24px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 24px;
    margin-top:24px;
  }
  .Support {
    height: 24px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 95px;
    margin-top:24px;
  }
  .Contact-Us {
    height: 24px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 95px;
    margin-top:24px;
  }
  .Privacy-Policy {
    height: 24px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 95px;
    margin-top:24px;
  }
  .Terms-Conditions {
    height: 24px;
    font-family: InterUI;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
    margin-left: 95px;
    margin-top:24px;
  }
  .Designed-by-S {
    font-family: InterUI;
    font-size: 12px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height:22px;
    letter-spacing: normal;
    color: var(--charcoal-grey);
  }
  .Collapse {
    height: 24px;
    margin-left:10px;
  }
  .Path {
    height: 7.9px;
    background-color: #414042;  
  }
  .Social-facebook {
    height: 20px;
    font-family: simple-line-icons;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
  }
  .Social-instagram {
    height: 20px;
    font-family: simple-line-icons;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
  }
  .Social-linkedin {
    height: 20px;
    font-family: simple-line-icons;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
  }
  .Social-twitter {
    height: 20px;
    font-family: simple-line-icons;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--charcoal-grey);
  }

  @media (min-width: 500px) {
    .MyProfile-Rectangle {
      max-height: 378px;
      .My-Profile{
        max-height: 378px;
      }
    }
    
    .Personal-Rectangle2 {
      max-height: 780px;
      .FName-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
        
      }
      .LName-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .ID-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Date-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Country-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Nationality-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Passport-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .space {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
    }
    .Circle-Rectangle2 {
      height: 35px;  
      margin:88px auto 0px auto;
      position: relative;
      .circle-one {
        height: 24px;
        position: absolute;
        left:5px;
        z-index: 2;
      }
      .circle-two {
        height: 24px;
        position: absolute;
        z-index: 1;
        left:20px;
      }
      .circle-three {
        height: 24px;
        position: absolute;
        z-index: 0;
        left:35px;
      }
    }
    .Rectangle {
      max-height: 378px;
    }
    
    .Text-Rectangle{
      max-height: 200px;
      .About-Us{
        margin-left:8px;
      }
      .Support{
        margin-left:21px;
      }
      .Contact-Us{
        margin-left:21px;
      }
      .Privacy-Policy{
        margin-left:21px;
      }
      .Terms-Conditions{
        margin-left:21px;
      }
    }
    .Social-Rectangle{
      height: 35px;  
      .Designed-by-S{
        height: 24px;
        margin-top:100px;
        position: relative;
      }
      .Social-facebook{
        position: absolute;right:90px;
      }
      .Social-instagram{
        position: absolute;right:60px;
      }
      .Social-linkedin{
        position: absolute;right:30px;
      }
      .Social-twitter{
        position: absolute;right:0px;
      }
      .Lorem-ipsum-dolor-si{
      max-height: 378px;
      margin:33px 0px 0px 5px;
      }
    }
  }
  @media (min-width: 768px) {
    .MyProfile-Rectangle {
      max-height: 500px;
      .My-Profile{
        max-height: 500px;
      }
    }
    
    .Personal-Rectangle2 {
      max-height: 780px;
      .FName-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
        
      }
      .LName-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .ID-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Date-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Country-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Nationality-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Passport-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .space {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
    }
    .Circle-Rectangle2 {
      height: 35px;  
      margin:88px auto 0px auto;
      position: relative;
      .circle-one {
        height: 24px;
        position: absolute;
        left:5px;
        z-index: 2;
      }
      .circle-two {
        height: 24px;
        position: absolute;
        z-index: 1;
        left:20px;
      }
      .circle-three {
        height: 24px;
        position: absolute;
        z-index: 0;
        left:35px;
      }
    }
    .Rectangle {
      max-height: 500px;
    }
    
    .Text-Rectangle{
      max-height: 500px;
      text-align:justify;
      .About-Us{
        text-align:justify;
      }
      .Support{
        text-align:justify;
      }
      .Contact-Us{
        text-align:justify;
      }
      .Privacy-Policy{
        text-align:justify;
      }
      .Terms-Conditions{
        text-align:justify;
      }
    }
    .Social-Rectangle{
      height: 35px;
      .Lorem-ipsum-dolor-si{
      max-height: 500px;
      margin:33px 0px 0px 5px;
      }  
      .Designed-by-S{
        margin-top:32px;
        position: relative;
      }
      .Social-facebook{
        position: absolute;right:90px;
      }
      .Social-instagram{
        position: absolute;right:60px;
      }
      .Social-linkedin{
        position: absolute;right:30px;
      }
      .Social-twitter{
        position: absolute;right:0px;
      }
    } 
  }
  @media (min-width: 992px) {
    .MyProfile-Rectangle {
        max-height: 700px;
        .My-Profile{
          max-height: 700px;
      }
    }
    .Personal-Rectangle2 {
        max-height: 780px;
        .FName-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
        
      }
      .LName-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .ID-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Date-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Country-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Nationality-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Passport-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .space {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
    }
    .Rectangle {
        max-height: 700px;
    }
    .Circle-Rectangle2 {
      height: 35px;  
      margin:88px auto 0px auto;
      position: relative;
      .circle-one {
        height: 24px;
        position: absolute;
        left:15px;
        z-index: 2;
      }
      .circle-two {
        height: 24px;
        position: absolute;
        z-index: 1;
        left:30px;
      }
      .circle-three {
        height: 24px;
        position: absolute;
        z-index: 0;
        left:45px;
      }
    }
    
    .Text-Rectangle{
          max-height: 200px;
          text-align:justify;
        .About-Us{
          text-align:justify;
        }
        .Support{
          text-align:justify;
        }
        .Contact-Us{
          text-align:justify;
        }
        .Privacy-Policy{
          text-align:justify;
        }
        .Terms-Conditions{
          text-align:justify;
        }
      }
    .Social-Rectangle{
      .Lorem-ipsum-dolor-si{
        max-height: 700px;
        margin:33px 0px 0px 24px;
      }
      .Designed-by-S{
        margin-top:32px;
        position:relative;
      }
      .Social-facebook{
        position: absolute;right:90px;
      }
      .Social-instagram{
        position: absolute;right:60px;
      }
      .Social-linkedin{
        position: absolute;right:30px;
      }
      .Social-twitter{
        position: absolute;right:0px;
      }
    }
  }
}
</style>