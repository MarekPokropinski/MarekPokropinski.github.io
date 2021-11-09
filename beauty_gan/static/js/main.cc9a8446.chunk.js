(this["webpackJsonpbeautygan-app"]=this["webpackJsonpbeautygan-app"]||[]).push([[0],{262:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=262},323:function(e,t,n){},325:function(e,t,n){},330:function(e,t){},331:function(e,t){},339:function(e,t){},348:function(e,t){},349:function(e,t){},350:function(e,t){},351:function(e,t){},359:function(e,t){},361:function(e,t,n){"use strict";n.r(t);var a=n(130),r=n.n(a),i=n(264),o=n.n(i),s=(n(323),n(3)),c=n(1),u=n.n(c),d=n(8),l=n(2),h=n(5),f=n(43),p=n(10),v=n(11),m=(n(325),n(70)),M=(n(204),n(67)),x=n(86),w=window.cv,y=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isModelLoaded:!1,filename:"",fileData:""},a.videoCapture=null,a.videoOutputCanvasContext=null,a.srcMat=null,a.dstMat=null,a.resizedSrcMat=null,a.rotatedMat=null,a.processVideo=a.processVideo.bind(Object(f.a)(a)),a.runModel=a.runModel.bind(Object(f.a)(a)),a.videoSize=null,a.model=null,a.cameraVideo=null,a.refImageTensor=null,a}return Object(h.a)(n,[{key:"loadModels",value:function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.f("/tfjs_model/model.json");case 2:return this.model=e.sent,e.next=5,M.c.ssdMobilenetv1.loadFromUri("/models");case 5:return e.next=7,M.c.tinyFaceDetector.loadFromUri("/models");case 7:return e.next=9,M.c.faceLandmark68Net.loadFromUri("/models");case 9:return e.next=11,m.f("/tfjs_model/model.json");case 11:this.model=e.sent,console.log("loaded tf models"),this.setState({isModelLoaded:!0});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadModels()}},{key:"detectFace",value:function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,r,i,o,s,c,d,l,h,f,p,v;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=82,new M.a(110,102),235,e.next=5,M.b(t).withFaceLandmarks();case 5:if(a=e.sent){e.next=8;break}throw Error();case 8:return r=a.landmarks,i=r.getMouth(),o=r.getLeftEye().reduce((function(e,t){return new M.a(e.x+t.x,e.y+t.y)})),s=r.getRightEye().reduce((function(e,t){return new M.a(e.x+t.x,e.y+t.y)})),c=i.reduce((function(e,t){return new M.a(e.x+t.x,e.y+t.y)})),o=new M.a(o.x/6,o.y/6),s=new M.a(s.x/6,s.y/6),c=new M.a(c.x/i.length,c.y/i.length),d=new M.a(s.x-o.x,s.y-o.y),l=180*Math.atan2(d.y,d.x)/Math.PI,h=new M.a((s.x+o.x)/2,(s.y+o.y)/2),f=new M.a(c.x-h.x,c.y-h.y),p=n/Math.sqrt(Math.pow(d.x,2)+Math.pow(d.y,2)),v=86/Math.sqrt(Math.pow(f.x,2)+Math.pow(f.y,2)),e.abrupt("return",{angle:l,eyeCenter:h,scaleX:p,scaleY:v});case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupCameraVideo",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,r=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.getElementById("cameraVideoWrapper"),null!==(t=document.createElement("video"))){e.next=5;break}return console.error("Couldn't create video element"),e.abrupt("return");case 5:return this.videoSize=[1920,1080],t.setAttribute("playsinline",""),t.setAttribute("autoplay",""),t.setAttribute("muted",""),t.setAttribute("width","".concat(this.videoSize[0],"px")),t.setAttribute("height","".concat(this.videoSize[1],"px")),"user",n={audio:!1,video:{facingMode:"user"}},e.next=15,navigator.mediaDevices.getUserMedia(n);case 15:a=e.sent,t.srcObject=a,this.videoCapture=new w.VideoCapture(t),this.cameraVideo=t,setTimeout((function(){return r.processVideo()}),1e3);case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"processVideo",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,r,i,o,c,d,l,h,f,p,v,m,x,y,g,b,j,C,O,z,S,k,I,F,V,D;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Date.now(),n=15,a=Object(s.a)(this.videoSize,2),r=a[0],i=a[1],null===this.videoOutputCanvasContext&&(o=document.getElementById("videoOutput"),this.videoOutputCanvasContext=o.getContext("2d"),this.srcMat=new w.Mat(i,r,w.CV_8UC4),this.srcMatC3=new w.Mat(i,r,w.CV_8UC3),this.dstMat=new w.Mat,this.resizedSrcMat=new w.Mat,this.rotatedMat=new w.Mat),this.videoCapture.read(this.srcMat),w.cvtColor(this.srcMat,this.srcMatC3,w.COLOR_RGBA2RGB),e.prev=6,e.next=9,this.detectFace(this.cameraVideo);case 9:c=e.sent,e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(6),d=1e3/n-(Date.now()-t),setTimeout(this.processVideo,d),e.abrupt("return");case 17:return h=(l=c).angle,f=l.eyeCenter,p=l.scaleX,v=l.scaleY,m=w.getRotationMatrix2D(new w.Point(f.x,f.y),h,1),w.warpAffine(this.srcMatC3,this.rotatedMat,m,new w.Size(1920,1080)),w.resize(this.rotatedMat,this.resizedSrcMat,new w.Size(0,0),p,v),x=new M.a(f.x*p,f.y*v),y=new M.a(x.x-165/1.41,x.y-102/1.41),g=null,e.prev=24,g=this.resizedSrcMat.roi(new w.Rect(Math.floor(y.x),Math.floor(y.y),256,256)),b=g.clone(),e.next=29,this.runModel(b.data);case 29:for(j=e.sent,b.delete(),C=0;C<256;C++)for(O=0;O<256;O++)for(z=0;z<3;z++)S=(C+Math.floor(y.y))*this.resizedSrcMat.cols*this.resizedSrcMat.channels()+(O+Math.floor(y.x))*this.resizedSrcMat.channels()+z,k=256*C*3+3*O+z,(I=Math.min(255-O,C,255-C,C))>10?this.resizedSrcMat.data[S]=j[k]:(F=I/10,this.resizedSrcMat.data[S]=F*j[k]+(1-F)*this.resizedSrcMat.data[S]);w.resize(this.resizedSrcMat,this.resizedSrcMat,new w.Size(0,0),1/p,1/v),V=w.getRotationMatrix2D(new w.Point(f.x,f.y),-h,1),w.warpAffine(this.resizedSrcMat,this.resizedSrcMat,V,new w.Size(1920,1080)),w.imshow("videoOutput",this.resizedSrcMat),e.next=41;break;case 38:e.prev=38,e.t1=e.catch(24),console.error(e.t1);case 41:null!==g&&g.delete(),D=1e3/n-(Date.now()-t),setTimeout(this.processVideo,D);case 44:case"end":return e.stop()}}),e,this,[[6,12],[24,38]])})));return function(){return e.apply(this,arguments)}}()},{key:"runModel",value:function(e){var t=m.i(e,[1,256,256,3],"float32"),n=m.d(m.b(t,"float32"),255),a=this.model.predict([n,this.refImageTensor]),r=m.h(a[0],[256,256,3]),i=m.g(r,255);return m.b(i,"int32").data()}},{key:"handleFileLoad",value:function(e){var t=this,n=new FileReader,a=document.createElement("canvas");a.setAttribute("width","1000"),a.setAttribute("height","1000");var r=a.getContext("2d");n.onload=function(){var e=document.getElementById("refImage");e.onload=function(){r.drawImage(e,0,0);var n=r.getImageData(0,0,e.width,e.height).data.filter((function(e,t){return t%4!=3}));null!==t.refImageTensor&&m.c(t.refImageTensor);var a=m.i(n,[1,e.width,e.height,3]);t.refImageTensor=m.e.resizeBilinear(m.d(a,255),[256,256]),m.a.toPixels(m.h(t.refImageTensor,[256,256,3]),document.getElementById("targetMakeupCanvas")),m.c(a)},e.src=n.result},n.readAsDataURL(e[0])}},{key:"render",value:function(){var e=this;return this.state.isModelLoaded?Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{id:"cameraVideoWrapper"}),Object(x.jsx)("button",{onClick:function(){return e.setupCameraVideo()},children:"start video"}),Object(x.jsx)("canvas",{id:"videoOutput"}),Object(x.jsx)("img",{id:"refImage",style:{border:"1px"},hidden:!0}),Object(x.jsx)("canvas",{id:"targetMakeupCanvas",width:256,height:256}),Object(x.jsx)("input",{type:"file",id:"myFile",value:"",onChange:function(t){return e.handleFileLoad(t.target.files)}})]}):Object(x.jsx)("div",{children:"Downloading model. Please wait."})}}]),n}(r.a.Component),g=y,b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,362)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),b()}},[[361,1,2]]]);
//# sourceMappingURL=main.cc9a8446.chunk.js.map