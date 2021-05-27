(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),o=s(30),r=s.n(o),n=(s(36),s(14)),i=s(3),h=(s(37),s(6)),u=s(7),l=s(2),d=s(9),b=s(8),j=s(4),p=s.n(j),O=s(0),m=function(){return Object(O.jsxs)("div",{className:"Header",children:[Object(O.jsx)("h1",{children:"Path-Shala"}),Object(O.jsx)("h5",{children:"An intuitive education platform"})]})},v=function(e){return Object(O.jsx)("div",{className:"Button_wrapper",children:Object(O.jsx)("button",{className:e.className,type:e.type,onClick:e.onClick,children:e.text})})},x=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={token:localStorage.getItem("savedToken"),logout:!1,user:a.props.user},a.logout=a.logout.bind(Object(l.a)(a)),a.redirectToDashboard=a.redirectToDashboard.bind(Object(l.a)(a)),a}return Object(u.a)(s,[{key:"logout",value:function(){var e=this,t="Bearer ".concat(this.state.token);p.a.post("".concat("https://path-shala.herokuapp.com","/user/logout"),this.state.user,{headers:{Authorization:t}}).then((function(t){localStorage.removeItem("savedToken"),e.setState({logout:!0})})).catch((function(e){return console.log(e)}))}},{key:"redirectToDashboard",value:function(){this.props.changeState(!0)}},{key:"render",value:function(){return this.state.logout?Object(O.jsx)(i.a,{to:"/"}):Object(O.jsxs)("div",{className:"sideBar",children:[Object(O.jsx)(m,{}),Object(O.jsx)("button",{onClick:this.redirectToDashboard,className:"profile_pic_button",children:Object(O.jsx)("img",{src:this.props.user.profilePic,width:"100",height:"100",alt:""})}),Object(O.jsx)("h1",{children:this.props.user.name}),Object(O.jsx)("h5",{children:this.props.user.email}),Object(O.jsx)(v,{className:"Button",type:"submit",text:"Log Out",onClick:this.logout})]})}}]),s}(c.a.Component),g=function(e){return Object(O.jsxs)("div",{className:"InputBox",children:[Object(O.jsx)("label",{children:e.name}),Object(O.jsx)("input",{type:"text",placeholder:e.placeholder,onChange:e.onChange})]})},C=function(e){return Object(O.jsxs)("div",{className:"popup",children:[Object(O.jsx)(g,{name:"Course Name",placeholder:"type the name of course",onChange:e.onChange}),Object(O.jsx)(v,{className:"Button",type:"submit",text:"Create",onClick:e.onClick}),Object(O.jsx)(v,{className:"Button_red",type:"submit",text:"Cancel",onClick:e.cancelClick})]})},f=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={token:localStorage.getItem("savedToken"),course:a.props.course,checked:!1,text:"subscribe",className:"Button",logout:!1,user:a.props.user},a.check=a.check.bind(Object(l.a)(a)),a.subscribeCourse=a.subscribeCourse.bind(Object(l.a)(a)),a.onClick=a.onClick.bind(Object(l.a)(a)),a}return Object(u.a)(s,[{key:"onClick",value:function(){this.props.changeCourseInfo(this.state.course)}},{key:"check",value:function(){var e=this,t=this.state.user.courses,s=!1;t.map((function(t){t.course===e.state.course._id&&(s=!0)})),s&&this.setState({text:"Unsubscribe",checked:!0,className:"Button_red"})}},{key:"subscribeCourse",value:function(){var e=this,t="Bearer ".concat(this.state.token);p.a.post("".concat("https://path-shala.herokuapp.com","/user/course"),{courseId:this.state.course._id},{headers:{Authorization:t}}).then((function(t){e.setState({text:"Unsubscribe",user:t.data.user,className:"Button_red"})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.course&&!this.state.checked&&this.check(),Object(O.jsx)("div",{className:"showbox",children:Object(O.jsxs)("div",{className:"showbox_div",onClick:this.props.onClick,children:[Object(O.jsx)("img",{src:this.props.profilePic,alt:""}),Object(O.jsx)("h3",{children:this.props.name}),"student"===this.state.user.profession&&this.state.course&&Object(O.jsx)(v,{className:this.state.className,text:this.state.text,onClick:this.subscribeCourse}),this.state.course&&Object(O.jsx)(v,{text:"Open",className:"Button",onClick:this.onClick})]})})}}]),s}(c.a.Component),k=function(e){return Object(O.jsxs)("div",{className:"popup",children:[Object(O.jsx)(g,{name:"Youtube Video Address",placeholder:"type the video address",onChange:e.onChange}),Object(O.jsx)(v,{className:"Button",type:"submit",text:"Create",onClick:e.onClick}),Object(O.jsx)(v,{className:"Button_red",type:"submit",text:"Cancel",onClick:e.cancelClick})]})},N=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={token:localStorage.getItem("savedToken"),course:a.props.course,videos:a.props.course.videos,newVideo:"",addChapterPopup:!1,id:0,videosCount:a.props.course.videos.length},a.upadateCourse=a.upadateCourse.bind(Object(l.a)(a)),a.addChapterPopup=a.addChapterPopup.bind(Object(l.a)(a)),a.onChange=a.onChange.bind(Object(l.a)(a)),a}return Object(u.a)(s,[{key:"upadateCourse",value:function(){var e=this,t="Bearer ".concat(this.state.token),s=this.state.course.videos;s=s.concat({id:this.state.videosCount++,video:this.state.newVideo}),p.a.post("".concat("https://path-shala.herokuapp.com","/course/").concat(this.state.course._id),{videos:s},{headers:{Authorization:t}}).then((function(t){e.setState({videos:s,videosCount:s.length}),e.addChapterPopup()})).catch((function(t){console.log(t),e.addChapterPopup()}))}},{key:"onChange",value:function(e){e.preventDefault(),this.setState({newVideo:e.target.value})}},{key:"addChapterPopup",value:function(){var e=!this.state.addChapterPopup;this.setState({addChapterPopup:e})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"course_box",children:[Object(O.jsxs)("div",{className:"course_box_header",children:[Object(O.jsx)("h1",{children:this.state.course.name}),this.state.course&&Object(O.jsx)(v,{className:"Button",text:"Add New Chapter",onClick:this.addChapterPopup})]}),this.state.addChapterPopup&&Object(O.jsx)(k,{onClick:this.upadateCourse,cancelClick:this.addChapterPopup,onChange:this.onChange}),Object(O.jsxs)("div",{className:"video_player",children:[this.state.videosCount&&Object(O.jsx)("div",{className:"video_wrapper",children:Object(O.jsx)("iframe",{src:this.state.videos[this.state.id].video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),!this.state.videosCount&&Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:this.state.course.coursePic}),Object(O.jsx)("h2",{children:"This Course Has Zero Chapters. Sorry !!!"})]})]}),this.state.videosCount&&Object(O.jsxs)("div",{className:"buttons_div",children:[Object(O.jsx)(v,{className:"Button_red",text:"Prev"}),Object(O.jsx)(v,{className:"Button",text:"Next"})]})]})}}]),s}(c.a.Component),_=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={logout:!1,token:localStorage.getItem("savedToken"),user_available:!1,courses_avail:!1,teachers_page:!1,courses_page:!1,CreateCoursePopUp:!1,CourseOrTeacherBoxIsNotOpened:!0,course_name:"",courses_info:[],course:{},user:{}},a.getUser=a.getUser.bind(Object(l.a)(a)),a.reditectToTeachersPage=a.reditectToTeachersPage.bind(Object(l.a)(a)),a.reditectToCoursesPage=a.reditectToCoursesPage.bind(Object(l.a)(a)),a.CreateCoursePopUp=a.CreateCoursePopUp.bind(Object(l.a)(a)),a.createCourse=a.createCourse.bind(Object(l.a)(a)),a.onChange=a.onChange.bind(Object(l.a)(a)),a.changeCourseOrTeacherBox=a.changeCourseOrTeacherBox.bind(Object(l.a)(a)),a.changeCourseInfo=a.changeCourseInfo.bind(Object(l.a)(a)),a}return Object(u.a)(s,[{key:"reditectToTeachersPage",value:function(e){e.preventDefault(),this.setState({teachers_page:!0})}},{key:"reditectToCoursesPage",value:function(e){e.preventDefault(),this.setState({courses_page:!0})}},{key:"CreateCoursePopUp",value:function(){var e=!this.state.CreateCoursePopUp;this.setState({CreateCoursePopUp:e})}},{key:"changeCourseInfo",value:function(e){this.changeCourseOrTeacherBox(!1),this.setState({course:e})}},{key:"changeCourseOrTeacherBox",value:function(e){this.setState({CourseOrTeacherBoxIsNotOpened:e})}},{key:"getCourses",value:function(){var e=this,t="Bearer ".concat(this.state.token);p.a.get("".concat("https://path-shala.herokuapp.com","/course"),{headers:{Authorization:t}}).then((function(t){console.log(t),e.setState({courses_info:t.data,courses_avail:!0})})).catch((function(e){console.log(e)}))}},{key:"getUser",value:function(){var e=this,t="Bearer ".concat(this.state.token);p.a.get("".concat("https://path-shala.herokuapp.com","/user"),{headers:{Authorization:t}}).then((function(t){e.setState({user_available:!0,user:t.data})})).catch((function(e){return console.log(e)}))}},{key:"onChange",value:function(e){e.preventDefault(),this.setState({course_name:e.target.value})}},{key:"createCourse",value:function(e){var t=this;e.preventDefault();var s="Bearer ".concat(this.state.token),a={name:this.state.course_name};p.a.post("".concat("https://path-shala.herokuapp.com","/course"),a,{headers:{Authorization:s}}).then((function(e){t.CreateCoursePopUp(),t.setState({courses_avail:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return this.state.token?this.state.teachers_page?Object(O.jsx)(i.a,{to:"/teachers"}):this.state.courses_page?Object(O.jsx)(i.a,{to:"/courses"}):(this.state.user_available||this.getUser(),this.state.courses_avail||this.getCourses(),Object(O.jsxs)("div",{className:"dashboard",children:[Object(O.jsx)("div",{className:"dashboard_sidebar",children:Object(O.jsx)(x,{user:this.state.user,changeState:this.changeCourseOrTeacherBox})}),Object(O.jsxs)("div",{className:"dashboard_taskbox",children:[this.state.CourseOrTeacherBoxIsNotOpened&&Object(O.jsx)("h1",{children:"Hey Champ !!  Let's crack it.."}),this.state.CourseOrTeacherBoxIsNotOpened&&Object(O.jsxs)("div",{className:"dashboard_courses",children:[Object(O.jsxs)("div",{className:"dashboard_courses_header",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Your Courses"})}),Object(O.jsx)("div",{children:"student"===this.state.user.profession?Object(O.jsx)(v,{className:"Button",type:"submit",text:"Explore New Courses",onClick:this.reditectToCoursesPage}):Object(O.jsx)(v,{className:"Button",type:"submit",text:"Create A New Course",onClick:this.CreateCoursePopUp})})]}),Object(O.jsx)("div",{className:"dashboard_courses_body",children:this.state.courses_info.map((function(t,s){return Object(O.jsx)(f,{name:t.name,profilePic:t.coursePic,user:e.state.user,course:t,changeCourseInfo:e.changeCourseInfo})}))})]}),this.state.CreateCoursePopUp&&this.state.CourseOrTeacherBoxIsNotOpened&&Object(O.jsx)(C,{onClick:this.createCourse,cancelClick:this.CreateCoursePopUp,onChange:this.onChange}),"student"===this.state.user.profession&&this.state.CourseOrTeacherBoxIsNotOpened&&Object(O.jsxs)("div",{className:"dashboard_teachers",children:[Object(O.jsxs)("div",{className:"dashboard_teachers_header",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Your Teachers"})}),Object(O.jsx)("div",{children:Object(O.jsx)(v,{className:"Button",type:"submit",text:"All Teachers",onClick:this.reditectToTeachersPage})})]}),Object(O.jsx)("div",{className:"dashboard_teachers_body"})]}),!1===this.state.CourseOrTeacherBoxIsNotOpened&&Object(O.jsx)(N,{course:this.state.course})]})]})):Object(O.jsx)(i.a,{to:"/"})}}]),s}(c.a.Component),y=s.p+"static/media/educationalQuoteImage.c48bc1f5.png",S=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)("div",{className:"LoginSignupBox",children:[Object(O.jsx)("div",{className:"EducationalQuote",children:Object(O.jsx)("img",{src:y,alt:"Educational Pic"})}),Object(O.jsx)(n.b,{to:"/login",children:Object(O.jsx)(v,{className:"Button",type:"button",text:"Log In"})}),Object(O.jsx)(n.b,{to:"/signup",children:Object(O.jsx)(v,{className:"Button",type:"button",text:"Sign Up"})})]})]})},P=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={email:"",password:"",redirect:null},a.updateEmail=a.updateEmail.bind(Object(l.a)(a)),a.updatePassword=a.updatePassword.bind(Object(l.a)(a)),a.onSubmit=a.onSubmit.bind(Object(l.a)(a)),a}return Object(u.a)(s,[{key:"updateEmail",value:function(e){this.setState({email:e.target.value})}},{key:"updatePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var s={email:this.state.email,password:this.state.password};p.a.post("".concat("https://path-shala.herokuapp.com","/login"),s).then((function(e){var s=e.data.token;localStorage.setItem("savedToken",s),t.setState({redirect:"/dashboard"})})).catch((function(e){console.log(e)})),this.setState({email:"",password:"",redirect:null})}},{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(i.a,{to:this.state.redirect}):Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)("form",{className:"box",onSubmit:this.onSubmit,children:[Object(O.jsx)(g,{name:"E-mail Address",placeholder:"Type your E-mail Address",onChange:this.updateEmail}),Object(O.jsx)(g,{name:"Password",placeholder:"Type your Password",onChange:this.updatePassword}),Object(O.jsx)(v,{className:"Button",type:"submit",text:"Log In"})]})]})}}]),s}(c.a.Component),T=function(e){for(var t=[],s=0;s<e.size;s++)t.push(Object(O.jsx)("option",{value:e.optionName[s],children:e.optionName[s]}));return Object(O.jsxs)("div",{className:"SelectItem",children:[Object(O.jsx)("label",{children:e.name}),Object(O.jsx)("select",{name:e.name,id:e.name,onChange:e.onChange,children:t})]})},B=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={name:"",profession:"student",email:"",password:"",redirect:null},a.changeName=a.changeName.bind(Object(l.a)(a)),a.changeProfession=a.changeProfession.bind(Object(l.a)(a)),a.changeEmail=a.changeEmail.bind(Object(l.a)(a)),a.changePassword=a.changePassword.bind(Object(l.a)(a)),a.onSubmit=a.onSubmit.bind(Object(l.a)(a)),a}return Object(u.a)(s,[{key:"changeName",value:function(e){this.setState({name:e.target.value})}},{key:"changeProfession",value:function(e){this.setState({profession:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var s={name:this.state.name,profession:this.state.profession,email:this.state.email,password:this.state.password};p.a.post("".concat("https://path-shala.herokuapp.com","/signup"),s).then((function(e){var s=e.data.token;localStorage.setItem("savedToken",s),t.setState({redirect:"/dashboard"})})).catch((function(e){return console.log(e)})),this.setState({name:"",profession:"student",email:"",password:""})}},{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(i.a,{to:this.state.redirect}):Object(O.jsxs)("div",{className:"Signup",children:[Object(O.jsx)(m,{}),Object(O.jsxs)("form",{className:"SignupBox",onSubmit:this.onSubmit,children:[Object(O.jsx)(g,{name:"Name",placeholder:"Type your Name",onChange:this.changeName}),Object(O.jsx)(T,{name:"Profession",size:"2",optionName:["student","teacher"],onChange:this.changeProfession}),Object(O.jsx)(g,{name:"E-mail Address",placeholder:"Type your E-mail address",onChange:this.changeEmail}),Object(O.jsx)(g,{name:"Set Password",placeholder:"Type your password",onChange:this.changePassword}),Object(O.jsx)(v,{className:"Button",type:"submit",text:"Create account"})]})]})}}]),s}(c.a.Component),w=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={token:localStorage.getItem("savedToken"),teachers_avail:!1,teachers:[],user:{},user_avail:!1,redirect_to_dashboard:!1},a.getAllTeachers=a.getAllTeachers.bind(Object(l.a)(a)),a.getUser=a.getUser.bind(Object(l.a)(a)),a.changeState=a.changeState.bind(Object(l.a)(a)),a}return Object(u.a)(s,[{key:"getAllTeachers",value:function(){var e=this,t="Bearer ".concat(this.state.token);p.a.get("".concat("https://path-shala.herokuapp.com","/teachers"),{headers:{Authorization:t}}).then((function(t){var s=t.data;e.setState({teachers:s,teachers_avail:!0})})).catch((function(t){e.setState({teachers_avail:!0}),console.log(t)}))}},{key:"getUser",value:function(){var e=this,t="Bearer ".concat(this.state.token);p.a.get("".concat("https://path-shala.herokuapp.com","/user"),{headers:{Authorization:t}}).then((function(t){e.setState({user:t.data,user_avail:!0})})).catch((function(t){e.setState({logout:!0}),console.log(t)}))}},{key:"changeState",value:function(e){this.setState({redirect_to_dashboard:e})}},{key:"render",value:function(){return this.state.user_avail||this.getUser(),this.state.teachers_avail||this.getAllTeachers(),this.state.redirect_to_dashboard?Object(O.jsx)(i.a,{to:"/dashboard"}):Object(O.jsxs)("div",{className:"dashboard",children:[Object(O.jsx)("div",{className:"dashboard_sidebar",children:Object(O.jsx)(x,{user:this.state.user,changeState:this.changeState})}),Object(O.jsxs)("div",{className:"dashboard_taskbox",children:[Object(O.jsx)("h1",{children:"All teachers are now listed here"}),Object(O.jsx)("div",{children:this.state.teachers.map((function(e,t){return Object(O.jsx)(f,{user:e,name:e.name,profilePic:e.profilePic})}))})]})]})}}]),s}(c.a.Component),I=function(e){Object(d.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={token:localStorage.getItem("savedToken"),courses_avail:!1,courses:[],user:{},user_avail:!1,redirect_to_dashboard:!1},a.getAllcourses=a.getAllcourses.bind(Object(l.a)(a)),a.getUser=a.getUser.bind(Object(l.a)(a)),a.changeState=a.changeState.bind(Object(l.a)(a)),a}return Object(u.a)(s,[{key:"getAllcourses",value:function(){var e=this,t="Bearer ".concat(this.state.token);p.a.get("".concat("https://path-shala.herokuapp.com","/all_courses"),{headers:{Authorization:t}}).then((function(t){var s=t.data;e.setState({courses:s,courses_avail:!0})})).catch((function(t){e.setState({courses_avail:!0}),console.log(t)}))}},{key:"getUser",value:function(){var e=this,t="Bearer ".concat(this.state.token);p.a.get("".concat("https://path-shala.herokuapp.com","/user"),{headers:{Authorization:t}}).then((function(t){e.setState({user:t.data,user_avail:!0})})).catch((function(t){e.setState({logout:!0}),console.log(t)}))}},{key:"changeState",value:function(e){this.setState({redirect_to_dashboard:e})}},{key:"render",value:function(){var e=this;return this.state.user_avail||this.getUser(),this.state.courses_avail||this.getAllcourses(),this.state.redirect_to_dashboard?Object(O.jsx)(i.a,{to:"/dashboard"}):Object(O.jsxs)("div",{className:"dashboard",children:[Object(O.jsx)("div",{className:"dashboard_sidebar",children:Object(O.jsx)(x,{user:this.state.user,changeState:this.changeState})}),Object(O.jsxs)("div",{className:"dashboard_taskbox",children:[Object(O.jsx)("h1",{children:"All courses are now listed here"}),Object(O.jsx)("div",{children:this.state.courses.map((function(t,s){return Object(O.jsx)(f,{name:t.name,profilePic:t.coursePic,course:t,user:e.state.user})}))})]})]})}}]),s}(c.a.Component);var A=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(n.a,{children:Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{exact:!0,path:"/",children:Object(O.jsx)(S,{className:"HomePage"})}),Object(O.jsx)(i.b,{exact:!0,path:"/login",children:Object(O.jsx)(P,{})}),Object(O.jsx)(i.b,{exact:!0,path:"/signup",children:Object(O.jsx)(B,{})}),Object(O.jsx)(i.b,{exact:!0,path:"/dashboard",children:Object(O.jsx)(_,{})}),Object(O.jsx)(i.b,{exact:!0,path:"/teachers",children:Object(O.jsx)(w,{})}),Object(O.jsx)(i.b,{exact:!0,path:"/courses",children:Object(O.jsx)(I,{})}),Object(O.jsx)(i.b,{path:"/",children:Object(O.jsx)(i.a,{to:"/dashboard"})})]})}),Object(O.jsx)("div",{className:"copyright",children:Object(O.jsx)("h2",{children:"\xa9 Copyright 2021 Surendra"})})]})},U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,63)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root")),U()}},[[62,1,2]]]);
//# sourceMappingURL=main.cf846d51.chunk.js.map