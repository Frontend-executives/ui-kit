"use strict";(self.webpackChunkui_kit=self.webpackChunkui_kit||[]).push([[458],{"./src/stories/Slider.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoplayMultipleSlider:function(){return AutoplayMultipleSlider},DefaultSlider:function(){return DefaultSlider},MultipleSlider:function(){return MultipleSlider},SliderWithGapAndPadding:function(){return SliderWithGapAndPadding},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Slider_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react_splide_esm=(__webpack_require__("./node_modules/@splidejs/react-splide/dist/css/splide.min.css"),__webpack_require__("./node_modules/@splidejs/react-splide/dist/js/react-splide.esm.js")),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),index_browser=__webpack_require__("./node_modules/nanoid/index.browser.js"),react=__webpack_require__("./node_modules/react/index.js"),constants=__webpack_require__("./src/utils/constants.ts"),Condition=__webpack_require__("./src/components/Condition/index.ts"),Slider_module_slider="Slider_slider__XlAwN",Slider_module_slide="Slider_slide__4cVPt",Slider_module_progressBar="Slider_progressBar__9MdbE",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Slider=function Slider(_ref){var children=_ref.children,_ref$gap=_ref.gap,gap=void 0===_ref$gap?constants.N_.spacing0:_ref$gap,_ref$isArrowsDisabled=_ref.isArrowsDisabled,isArrowsDisabled=void 0!==_ref$isArrowsDisabled&&_ref$isArrowsDisabled,_ref$isAutoPlay=_ref.isAutoPlay,isAutoPlay=void 0!==_ref$isAutoPlay&&_ref$isAutoPlay,_ref$isPaginationDisa=_ref.isPaginationDisabled,isPaginationDisabled=void 0!==_ref$isPaginationDisa&&_ref$isPaginationDisa,onClick=_ref.onClick,_ref$padding=_ref.padding,padding=void 0===_ref$padding?constants.N_.spacing0:_ref$padding,_ref$slidesPerPage=_ref.slidesPerPage,slidesPerPage=void 0===_ref$slidesPerPage?1:_ref$slidesPerPage;return(0,jsx_runtime.jsx)(react_splide_esm.tv,{"aria-labelledby":"autoplay-example-heading",className:Slider_module_slider,hasTrack:!1,options:{arrows:!isArrowsDisabled,autoplay:isAutoPlay,gap:gap,padding:padding,pagination:!isPaginationDisabled,perPage:slidesPerPage,rewind:!0,type:"loop"},children:(0,jsx_runtime.jsxs)(Condition.g,{match:Boolean(children),children:[(0,jsx_runtime.jsx)(react_splide_esm.Gj,{children:react.Children.map(children,(function(child){return(0,jsx_runtime.jsx)(react_splide_esm.jw,{className:Slider_module_slide,onClick:onClick,children:child},(0,index_browser.x0)())}))}),(0,jsx_runtime.jsx)(Condition.g,{match:isAutoPlay,children:(0,jsx_runtime.jsx)("div",{className:"splide__progress",children:(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)("splide__progress__bar",Slider_module_progressBar)})})})]})})},Slider_Slider=Slider;try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{gap:{defaultValue:{value:"0"},description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"8"},{value:"16"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"64"},{value:"80"},{value:"96"}]}},isArrowsDisabled:{defaultValue:{value:"false"},description:"",name:"isArrowsDisabled",required:!1,type:{name:"boolean"}},isAutoPlay:{defaultValue:{value:"false"},description:"",name:"isAutoPlay",required:!1,type:{name:"boolean"}},isPaginationDisabled:{defaultValue:{value:"false"},description:"",name:"isPaginationDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"VoidFunction"}},padding:{defaultValue:{value:"0"},description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:"0"},{value:"8"},{value:"16"},{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"64"},{value:"80"},{value:"96"}]}},slidesPerPage:{defaultValue:{value:"1"},description:"",name:"slidesPerPage",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/components/Slider/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}var _DefaultSlider$parame,_DefaultSlider$parame2,_DefaultSlider$parame3,_SliderWithGapAndPadd,_SliderWithGapAndPadd2,_SliderWithGapAndPadd3,_MultipleSlider$param,_MultipleSlider$param2,_MultipleSlider$param3,_AutoplayMultipleSlid,_AutoplayMultipleSlid2,_AutoplayMultipleSlid3,StoryContainer=__webpack_require__("./src/components/StoryContainer/index.ts"),sliderMock={images:{first:__webpack_require__.p+"b3764f7ff2c4a07f2338.jpg",second:__webpack_require__.p+"2d7bd0273142ca9adae6.jpg",third:__webpack_require__.p+"1706636b24a1c83063be.jpg"},text:{first:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores\n    consequuntur distinctio earum fugiat in ipsum iste magni molestias\n    nemo nesciunt quae quasi, quod rem reprehenderit sed, vel velit\n    veritatis vero.",second:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quibusdam\n    quisquam recusandae. Assumenda minima molestiae quia! Autem blanditiis\n    deleniti eos esse eveniet ex facilis in molestias rerum voluptatum.\n      Animi, quo.",third:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus\n    asperiores assumenda autem consequuntur cum eligendi error est\n    inventore laboriosam molestiae nostrum obcaecati provident repellat\n    sapiente, soluta, unde veniam! Eligendi, est?"}},Slider_stories={component:Slider_Slider,tags:["autodocs"],title:"Example/Slider"},DefaultSlider={render:function render(args){return(0,jsx_runtime.jsxs)(StoryContainer.y,{children:[(0,jsx_runtime.jsxs)(Slider_Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{children:[(0,jsx_runtime.jsx)("p",{children:sliderMock.text.first}),(0,jsx_runtime.jsx)("p",{children:sliderMock.text.second}),(0,jsx_runtime.jsx)("p",{children:sliderMock.text.third})]})),(0,jsx_runtime.jsxs)(Slider_Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{children:[(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.first,src:sliderMock.images.first,width:"100%"}),(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.second,src:sliderMock.images.second,width:"100%"}),(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.third,src:sliderMock.images.third,width:"100%"})]}))]})}},SliderWithGapAndPadding={render:function render(args){return(0,jsx_runtime.jsxs)(StoryContainer.y,{children:[(0,jsx_runtime.jsxs)(Slider_Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{gap:constants.N_.spacing4,padding:constants.N_.spacing9,children:[(0,jsx_runtime.jsx)("p",{children:sliderMock.text.first}),(0,jsx_runtime.jsx)("p",{children:sliderMock.text.second}),(0,jsx_runtime.jsx)("p",{children:sliderMock.text.third})]})),(0,jsx_runtime.jsxs)(Slider_Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{gap:constants.N_.spacing4,padding:constants.N_.spacing9,children:[(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.first,src:sliderMock.images.first,width:"100%"}),(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.second,src:sliderMock.images.second,width:"100%"}),(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.third,src:sliderMock.images.third,width:"100%"})]}))]})}},MultipleSlider={render:function render(args){return(0,jsx_runtime.jsxs)(StoryContainer.y,{children:[(0,jsx_runtime.jsxs)(Slider_Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{slidesPerPage:2,children:[(0,jsx_runtime.jsx)("p",{children:sliderMock.text.first}),(0,jsx_runtime.jsx)("p",{children:sliderMock.text.second}),(0,jsx_runtime.jsx)("p",{children:sliderMock.text.third})]})),(0,jsx_runtime.jsxs)(Slider_Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{slidesPerPage:3,children:[(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.first,src:sliderMock.images.first}),(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.second,src:sliderMock.images.second}),(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.third,src:sliderMock.images.third})]}))]})}},AutoplayMultipleSlider={render:function render(args){return(0,jsx_runtime.jsxs)(StoryContainer.y,{children:[(0,jsx_runtime.jsxs)(Slider_Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{isArrowsDisabled:!0,isAutoPlay:!0,isPaginationDisabled:!0,slidesPerPage:2,children:[(0,jsx_runtime.jsx)("p",{children:sliderMock.text.first}),(0,jsx_runtime.jsx)("p",{children:sliderMock.text.second}),(0,jsx_runtime.jsx)("p",{children:sliderMock.text.third})]})),(0,jsx_runtime.jsxs)(Slider_Slider,(0,objectSpread2.Z)((0,objectSpread2.Z)({},args),{},{isArrowsDisabled:!0,isAutoPlay:!0,isPaginationDisabled:!0,slidesPerPage:2,children:[(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.first,src:sliderMock.images.first}),(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.second,src:sliderMock.images.second}),(0,jsx_runtime.jsx)("img",{alt:sliderMock.text.third,src:sliderMock.images.third})]}))]})}};DefaultSlider.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},DefaultSlider.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_DefaultSlider$parame=DefaultSlider.parameters)||void 0===_DefaultSlider$parame?void 0:_DefaultSlider$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: args => <StoryContainer>\r\n      <Slider {...args}>\r\n        <p>{sliderMock.text.first}</p>\r\n        <p>{sliderMock.text.second}</p>\r\n        <p>{sliderMock.text.third}</p>\r\n      </Slider>\r\n      <Slider {...args}>\r\n        <img alt={sliderMock.text.first} src={sliderMock.images.first} width='100%' />\r\n        <img alt={sliderMock.text.second} src={sliderMock.images.second} width='100%' />\r\n        <img alt={sliderMock.text.third} src={sliderMock.images.third} width='100%' />\r\n      </Slider>\r\n    </StoryContainer>\n}"},null===(_DefaultSlider$parame2=DefaultSlider.parameters)||void 0===_DefaultSlider$parame2||null===(_DefaultSlider$parame3=_DefaultSlider$parame2.docs)||void 0===_DefaultSlider$parame3?void 0:_DefaultSlider$parame3.source)})}),SliderWithGapAndPadding.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},SliderWithGapAndPadding.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_SliderWithGapAndPadd=SliderWithGapAndPadding.parameters)||void 0===_SliderWithGapAndPadd?void 0:_SliderWithGapAndPadd.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: args => <StoryContainer>\r\n      <Slider {...args} gap={SPACING.spacing4} padding={SPACING.spacing9}>\r\n        <p>{sliderMock.text.first}</p>\r\n        <p>{sliderMock.text.second}</p>\r\n        <p>{sliderMock.text.third}</p>\r\n      </Slider>\r\n      <Slider {...args} gap={SPACING.spacing4} padding={SPACING.spacing9}>\r\n        <img alt={sliderMock.text.first} src={sliderMock.images.first} width='100%' />\r\n        <img alt={sliderMock.text.second} src={sliderMock.images.second} width='100%' />\r\n        <img alt={sliderMock.text.third} src={sliderMock.images.third} width='100%' />\r\n      </Slider>\r\n    </StoryContainer>\n}"},null===(_SliderWithGapAndPadd2=SliderWithGapAndPadding.parameters)||void 0===_SliderWithGapAndPadd2||null===(_SliderWithGapAndPadd3=_SliderWithGapAndPadd2.docs)||void 0===_SliderWithGapAndPadd3?void 0:_SliderWithGapAndPadd3.source)})}),MultipleSlider.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},MultipleSlider.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_MultipleSlider$param=MultipleSlider.parameters)||void 0===_MultipleSlider$param?void 0:_MultipleSlider$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: args => <StoryContainer>\r\n      <Slider {...args} slidesPerPage={2}>\r\n        <p>{sliderMock.text.first}</p>\r\n        <p>{sliderMock.text.second}</p>\r\n        <p>{sliderMock.text.third}</p>\r\n      </Slider>\r\n      <Slider {...args} slidesPerPage={3}>\r\n        <img alt={sliderMock.text.first} src={sliderMock.images.first} />\r\n        <img alt={sliderMock.text.second} src={sliderMock.images.second} />\r\n        <img alt={sliderMock.text.third} src={sliderMock.images.third} />\r\n      </Slider>\r\n    </StoryContainer>\n}"},null===(_MultipleSlider$param2=MultipleSlider.parameters)||void 0===_MultipleSlider$param2||null===(_MultipleSlider$param3=_MultipleSlider$param2.docs)||void 0===_MultipleSlider$param3?void 0:_MultipleSlider$param3.source)})}),AutoplayMultipleSlider.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},AutoplayMultipleSlider.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_AutoplayMultipleSlid=AutoplayMultipleSlider.parameters)||void 0===_AutoplayMultipleSlid?void 0:_AutoplayMultipleSlid.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: args => <StoryContainer>\r\n      <Slider {...args} isArrowsDisabled isAutoPlay isPaginationDisabled slidesPerPage={2}>\r\n        <p>{sliderMock.text.first}</p>\r\n        <p>{sliderMock.text.second}</p>\r\n        <p>{sliderMock.text.third}</p>\r\n      </Slider>\r\n      <Slider {...args} isArrowsDisabled isAutoPlay isPaginationDisabled slidesPerPage={2}>\r\n        <img alt={sliderMock.text.first} src={sliderMock.images.first} />\r\n        <img alt={sliderMock.text.second} src={sliderMock.images.second} />\r\n        <img alt={sliderMock.text.third} src={sliderMock.images.third} />\r\n      </Slider>\r\n    </StoryContainer>\n}"},null===(_AutoplayMultipleSlid2=AutoplayMultipleSlider.parameters)||void 0===_AutoplayMultipleSlid2||null===(_AutoplayMultipleSlid3=_AutoplayMultipleSlid2.docs)||void 0===_AutoplayMultipleSlid3?void 0:_AutoplayMultipleSlid3.source)})});var __namedExportsOrder=["DefaultSlider","SliderWithGapAndPadding","MultipleSlider","AutoplayMultipleSlider"]},"./src/components/Condition/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return Condition_Condition}});var react=__webpack_require__("./node_modules/react/index.js"),Condition=function Condition(_ref){var children=_ref.children;return _ref.match?(0,react.createElement)(react.Fragment,{},children):null},Condition_Condition=Condition;try{Condition.displayName="Condition",Condition.__docgenInfo={description:"",displayName:"Condition",props:{match:{defaultValue:null,description:"",name:"match",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Condition/Condition.tsx#Condition"]={docgenInfo:Condition.__docgenInfo,name:"Condition",path:"src/components/Condition/Condition.tsx#Condition"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/StoryContainer/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return StoryContainer_StoryContainer}});var StoryContainer_module_container="StoryContainer_container__R6Tue",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StoryContainer=function StoryContainer(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("div",{className:StoryContainer_module_container,children:children})},StoryContainer_StoryContainer=StoryContainer;try{StoryContainer.displayName="StoryContainer",StoryContainer.__docgenInfo={description:"",displayName:"StoryContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StoryContainer/StoryContainer.tsx#StoryContainer"]={docgenInfo:StoryContainer.__docgenInfo,name:"StoryContainer",path:"src/components/StoryContainer/StoryContainer.tsx#StoryContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/constants.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{N_:function(){return SPACING},O:function(){return ICON_SIZES},yU:function(){return THEMES},zf:function(){return SIZES}});var ICON_SIZES={l:24,m:20,s:16},THEMES={black:"black",failed:"failed",primary:"primary",success:"success",tertiary:"tertiary",warning:"warning",white:"white"},SIZES={l:"l",m:"m",s:"s"},SPACING={spacing0:0,spacing1:8,spacing2:16,spacing3:24,spacing4:32,spacing5:40,spacing6:48,spacing7:64,spacing8:80,spacing9:96}}}]);