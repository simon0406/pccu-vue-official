<template>
  <div class="pb-5" style="padding-top: 16px;" >
    <div class="css__RWD3">
      <div class="MyProfile-Rectangle">
        <div class="My-Profile">
          <div class="row justify-content-left p-4">
            <h2>My profile</h2>
          </div>
        </div>
      </div>


      <div class="Contact-Rectangle3">
        <div class="row justify-content-left p-4">
            <span class="Collapse"><img src="@/assets/test3.jpg"></span>
            <span class="Contact-Datails3">Contact Datails</span>
        </div>
        <div class="Email-Rectangle" >
          <p class="Email">Email</p>
          <p class="susan_towsonoutlook">susan_towson@outlook.com</p>
        </div>
        <div class="PhoneContact-Rectangle">
          <p class="Telephone-Contact">Telephone(Contact)</p>
          <p class="Number-Contact">(852)98889888</p>
        </div>
        <div class="PhoneHome-Rectangle">
          <p class="Telephone-Home">Telephone(Home)</p>
          <p class="Number-Home">(857)27888888</p>
        </div>
        <div class="Address1-Rectangle">
          <p class="Address-1">Address-1</p>
          <p class="F-Sunshin">Flat A,12/F Sunshine Mansion</p>
        </div>
        <div class="Address2-Rectangle">
          <p class="Address-2">Country-of-Birth</p>
          <p class="-Ocean-Road-Quarr">62 Ocean Road, Quarry Bay</p>
        </div>
        <div class="Town-Rectangle">
          <p class="City">Town/City</p>
          <p class="Hong-Kong">Hong Kong</p>
        </div>
        <div class="PostCode-Rectangle">
          <p class="Post-Code">Post Code</p>
          <p class="Number-PostCode">0000</p>
        </div>
        <div class="Country-Rectangle">
          <p class="Country">Country</p>
          <p class="China">China</p>
        </div>
        <div class="space3">
        </div>
      </div>
        
      <div class="Circle-Rectangle3">
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

<style lang="scss" scoped>
.css__RWD3{
  width:100%;
  padding:0px 2rem;
  .MyProfile-Rectangle {
    height: 120px;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    margin:auto;
  }
  .My-Profile {
    height: 120px;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.13);
    background-color: #ffffff;
    padding-left:24px;
  }
  .Contact-Rectangle3 {
    height: 894px;
    border-radius: 4px;
    box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin:16px auto 0px auto;
  }

  //Contact-Rectangle內容移至RWD

  .Contact-Datails3 {
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
  .Email {
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
  .susan_towsonoutlook {
    height: 56px;
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
  .Telephone-Contact {
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
  .Number-Contact{
    height: 56px;
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
  .Telephone-Home {
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
  .Number-Home{
    height: 56px;
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
  .Address-1 {
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
  .F-Sunshin {
    height: 56px;
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
  .Address-2 {
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
  .-Ocean-Road-Quarr {
    height: 56px;
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
  .City {
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
  .Hong-Kong {
    height: 56px;
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
  .Post-Code {
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
  .Number-PostCode{
    height: 56px;
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
  .Country {
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
  .China {
    height: 56px;
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
    height: 253px;
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
    margin-left: 91px;
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
    margin-left: 91px;
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
    margin-left: 91px;
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
    margin-left: 91px;
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
    margin-left:653px;
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
    .Contact-Rectangle3 {
      max-height: 894px;
      .Email-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PhoneContact-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PhoneHome-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Address1-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Address2-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Town-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PostCode-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Country-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .space3 {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
    }
    .Circle-Rectangle3 {
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
        position:relative;
      }
      .Lorem-ipsum-dolor-si{
      max-height: 378px;
      margin:33px 0px 0px 5px;
      }
      .Social-facebook{
        position: absolute;
        right:90px;
      }
      .Social-instagram{
        position: absolute;
        right:60px;
      }
      .Social-linkedin{
        position: absolute;
        right:30px;
      }
      .Social-twitter{
        position: absolute;
        right:0px;
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
    .Contact-Rectangle3 {
      max-height: 894px;
      .Email-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PhoneContact-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PhoneHome-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Address1-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Address2-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Town-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PostCode-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Country-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .space3 {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
    }
    .Circle-Rectangle3 {
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
    .Lorem-ipsum-dolor-si{
      max-height: 500px;
      margin:33px 0px 0px 5px;
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
        height: 24px;
        position: relative;
      }
      .Social-facebook{
        position: absolute;
        right:90px;
      }
      .Social-instagram{
        position: absolute;
        right:60px;
      }
      .Social-linkedin{
        position: absolute;
        right:30px;
      }
      .Social-twitter{
        margin-left:20px;
        position: absolute;
        right:0px;
      }
    } 
  }
  @media (min-width: 992px) {
    .MyProfile-Rectangle {
        max-height: 700px;
    }
    .My-Profile{
        max-height: 700px;
    }
    .Contact-Rectangle3 {
        max-height: 894px;
        .Email-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PhoneContact-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PhoneHome-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Address1-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Address2-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Town-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .PostCode-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .Country-Rectangle {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
      .space3 {
        height: 88px;
        box-shadow: inset 0 1px 0 0 #ecedef;
      }
    }
    .Rectangle {
        max-height: 700px;
    }
    .Circle-Rectangle3 {
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
        max-height: 700px;
      .About-Us{
        margin-left:24px;
      }
      .Support{
        margin-left:91px;
      }
      .Contact-Us{
        margin-left:91px;
      }
      .Privacy-Policy{
        margin-left:91px;
      }
      .Terms-Conditions{
        margin-left:91px;
      }
    }
    .Social-Rectangle{
      height: 35px;  
      .Lorem-ipsum-dolor-si{
        max-height: 700px;
        margin:33px 0px 0px 24px;
      }
      .Designed-by-S{
        height: 24px;
        position:relative;
      }
      .Social-facebook{
        position: absolute;
        right:90px;
      }
      .Social-instagram{
        position: absolute;
        right:60px;
      }
      .Social-linkedin{
        position: absolute;
        right:30px;
      }
      .Social-twitter{
        position: absolute;
        right:0px;
      }
    }
  }
}
</style>