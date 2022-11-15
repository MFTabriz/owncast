(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2532],{18957:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-federation",function(){return __webpack_require__(37990)}])},80894:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Q:function(){return TAG_COLOR},Y:function(){return EditValueArray}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(84485),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(20550),_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40117),_FormStatusIndicator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39664);let{Title}=antd__WEBPACK_IMPORTED_MODULE_4__.Z,TAG_COLOR="#5a67d8",EditValueArray=param=>{let{title,description,placeholder,maxLength,values,handleDeleteIndex,handleCreateString,submitStatus,continuousStatusMessage}=param,[newStringInput,setNewStringInput]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),handleInputChange=param=>{let{value}=param;setNewStringInput(value)},handleSubmitNewString=()=>{let newString=newStringInput.trim();handleCreateString(newString),setNewStringInput("")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"edit-string-array-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,{level:3,className:"section-title",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"description",children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"edit-current-strings",children:null==values?void 0:values.map((tag,index)=>{let handleClose=()=>{handleDeleteIndex(index)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{closable:!0,onClose:handleClose,color:TAG_COLOR,children:tag},"tag-".concat(tag,"-").concat(index))})}),continuousStatusMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"continuous-status-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormStatusIndicator__WEBPACK_IMPORTED_MODULE_3__.E,{status:continuousStatusMessage})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"add-new-string-section",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__.nv,{fieldName:"string-input",value:newStringInput,onChange:handleInputChange,onPressEnter:handleSubmitNewString,maxLength:maxLength,placeholder:placeholder,status:submitStatus})})]})};EditValueArray.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},73706:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ToggleSwitch}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(94594),_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41983),_FormStatusIndicator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39664),_utils_config_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(90745),_utils_server_status_context__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(99519);let ToggleSwitch=param=>{let{apiPath,checked,reversed=!1,configPath="",disabled=!1,fieldName,label,tip,useSubmit,onChange}=param,[submitStatus,setSubmitStatus]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),resetTimer=null,serverStatusData=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_server_status_context__WEBPACK_IMPORTED_MODULE_5__.aC),{setFieldInConfigState}=serverStatusData||{},resetStates=()=>{setSubmitStatus(null),clearTimeout(resetTimer),resetTimer=null},handleChange=async isChecked=>{if(useSubmit){setSubmitStatus((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.Jk));let isCheckedSend=reversed?!isChecked:isChecked;await (0,_utils_config_constants__WEBPACK_IMPORTED_MODULE_4__.Si)({apiPath,data:{value:isCheckedSend},onSuccess(){setFieldInConfigState({fieldName,value:isCheckedSend,path:configPath}),setSubmitStatus((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.zv))},onError(message){setSubmitStatus((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.Un,"There was an error: ".concat(message)))}}),resetTimer=setTimeout(resetStates,_utils_config_constants__WEBPACK_IMPORTED_MODULE_4__.sI)}onChange&&onChange(isChecked)},loading=null!==submitStatus&&submitStatus.type===_utils_input_statuses__WEBPACK_IMPORTED_MODULE_2__.Jk;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"label-side",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"formfield-label",children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"input-side",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"input-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__.Z,{className:"switch field-".concat(fieldName),loading:loading,onChange:handleChange,defaultChecked:checked,checked:checked,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:disabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FormStatusIndicator__WEBPACK_IMPORTED_MODULE_3__.E,{status:submitStatus})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"field-tip",children:tip})]})]})};ToggleSwitch.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},37990:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(85402),antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(71577),antd__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(84485),antd__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(14670),antd__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(25968),antd__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(6226),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),prop_types__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(45697),prop_types__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__),_components_config_TextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40117),_components_config_TextFieldWithSubmit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10135),_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(73706),_components_config_EditValueArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(80894),_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(90745),_utils_server_status_context__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(99519),_utils_input_statuses__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(41983);let FederationInfoModal=param=>{let{cancelPressed,okPressed}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__.Z,{width:"70%",title:"Enable Social Features",visible:!0,onCancel:cancelPressed,footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Z,{onClick:cancelPressed,children:"Do not enable"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__.Z,{type:"primary",onClick:okPressed,children:"Enable Social Features"})]}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z.Title,{level:3,children:"How do Owncast's social features work?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_11__.Z.Paragraph,{children:["Owncast's social features are accomplished by having your server join The"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",rel:"noopener noreferrer",target:"_blank",children:"Fediverse"}),", a decentralized, open, collection of independent servers, like yours."]}),"Please"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"read more"})," ","about these features, the details behind them, and how they work.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z.Paragraph,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z.Title,{level:3,children:"What do you need to know?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"These features are brand new. Given the variability of interfacing with the rest of the world, bugs are possible. Please report anything that you think isn't working quite right."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"You must always host your Owncast server with SSL using a https url."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"You should not change your server name URL or social username once people begin following you, as your server will be seen as a completely different user on the Fediverse, and the old user will disappear."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{children:["Turning on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{children:"Private mode"})," will allow you to manually approve each follower and limit the visibility of your posts to followers only."]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__.Z.Title,{level:3,children:"Learn more about The Fediverse"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_11__.Z.Paragraph,{children:["If these concepts are new you should discover more about what this functionality has to offer. Visit"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"our documentation"})," ","to be pointed at some resources that will help get you started on The Fediverse."]})]})};FederationInfoModal.propTypes={cancelPressed:prop_types__WEBPACK_IMPORTED_MODULE_12___default().func.isRequired,okPressed:prop_types__WEBPACK_IMPORTED_MODULE_12___default().func.isRequired};let ConfigFederation=()=>{let{Title}=antd__WEBPACK_IMPORTED_MODULE_11__.Z,[formDataValues,setFormDataValues]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),[isInfoModalOpen,setIsInfoModalOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),serverStatusData=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_server_status_context__WEBPACK_IMPORTED_MODULE_7__.aC),{serverConfig,setFieldInConfigState}=serverStatusData||{},[blockedDomainSaveState,setBlockedDomainSaveState]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),{federation,yp,instanceDetails}=serverConfig,{enabled,isPrivate,username,goLiveMessage,showEngagement,blockedDomains}=federation,{instanceUrl}=yp,{nsfw}=instanceDetails,handleFieldChange=param=>{let{fieldName,value}=param;setFormDataValues({...formDataValues,[fieldName]:value})},handleEnabledSwitchChange=value=>{value?setIsInfoModalOpen(!0):setFormDataValues({...formDataValues,enabled:!1})},handleSubmitInstanceUrl=()=>{let hasInstanceUrl=""!==formDataValues.instanceUrl,isInstanceUrlSecure=formDataValues.instanceUrl.startsWith("https://");hasInstanceUrl&&isInstanceUrlSecure||((0,_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.Si)({apiPath:_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.Kl.apiPath,data:{value:!1}}),setFormDataValues({...formDataValues,enabled:!1}))};function resetBlockedDomainsSaveState(){setBlockedDomainSaveState(null)}function saveBlockedDomains(){try{(0,_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.Si)({apiPath:_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.pE,data:{value:formDataValues.blockedDomains},onSuccess(){setFieldInConfigState({fieldName:"forbiddenUsernames",value:formDataValues.forbiddenUsernames}),setBlockedDomainSaveState(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_8__.zv),setTimeout(resetBlockedDomainsSaveState,_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.sI)},onError(message){setBlockedDomainSaveState((0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_8__.kg)(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_8__.Un,message)),setTimeout(resetBlockedDomainsSaveState,_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.sI)}})}catch(e){console.error(e),setBlockedDomainSaveState(_utils_input_statuses__WEBPACK_IMPORTED_MODULE_8__.Un)}}if((0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setFormDataValues({enabled,isPrivate,username,goLiveMessage,showEngagement,blockedDomains,nsfw,instanceUrl:yp.instanceUrl})},[serverConfig,yp]),!formDataValues)return null;let hasInstanceUrl=""!==instanceUrl,isInstanceUrlSecure=instanceUrl.startsWith("https://"),configurationWarning=!isInstanceUrlSecure&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_TextFieldWithSubmit__WEBPACK_IMPORTED_MODULE_3__.$7,{fieldName:"instanceUrl",..._utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.yi,value:formDataValues.instanceUrl,initialValue:yp.instanceUrl,type:_components_config_TextField__WEBPACK_IMPORTED_MODULE_2__.xA,onChange:handleFieldChange,onSubmit:handleSubmitInstanceUrl,required:!0})]}),invalidPortWarning=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__.Z,{message:"Only Owncast instances available on the default SSL port 443 support this feature.",type:"warning",showIcon:!0}),hasInvalidPort=instanceUrl&&""!==new URL(instanceUrl).port&&"443"!==new URL(instanceUrl).port;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,{children:"Configure Social Features"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Owncast provides the ability for people to follow and engage with your instance. It's a great way to promote alerting, sharing and engagement of your stream."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Once enabled you'll alert your followers when you go live as well as gain the ability to compose custom posts to share any information you like."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"Read more about the specifics of these social features."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_14__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_15__.Z,{span:15,className:"form-module",style:{marginRight:"15px"},children:[configurationWarning,hasInvalidPort&&invalidPortWarning,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__.Z,{fieldName:"enabled",onChange:handleEnabledSwitchChange,..._utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.Kl,checked:formDataValues.enabled,disabled:hasInvalidPort||!hasInstanceUrl||!isInstanceUrlSecure}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__.Z,{fieldName:"isPrivate",..._utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.LC,checked:formDataValues.isPrivate,disabled:!enabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__.Z,{fieldName:"nsfw",useSubmit:!0,..._utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.B_,checked:formDataValues.nsfw,disabled:hasInvalidPort||!hasInstanceUrl}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_TextFieldWithSubmit__WEBPACK_IMPORTED_MODULE_3__.$7,{required:!0,fieldName:"username",type:_components_config_TextField__WEBPACK_IMPORTED_MODULE_2__.Kx,..._utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.Xc,value:formDataValues.username,initialValue:username,onChange:handleFieldChange,disabled:!enabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_TextFieldWithSubmit__WEBPACK_IMPORTED_MODULE_3__.$7,{fieldName:"goLiveMessage",..._utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.BF,type:_components_config_TextField__WEBPACK_IMPORTED_MODULE_2__.Sk,value:formDataValues.goLiveMessage,initialValue:goLiveMessage,onChange:handleFieldChange,disabled:!enabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_ToggleSwitch__WEBPACK_IMPORTED_MODULE_4__.Z,{fieldName:"showEngagement",..._utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.FE,checked:formDataValues.showEngagement,disabled:!enabled})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_15__.Z,{span:8,className:"form-module",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_config_EditValueArray__WEBPACK_IMPORTED_MODULE_5__.Y,{title:_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.dR.label,placeholder:_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.dR.placeholder,description:_utils_config_constants__WEBPACK_IMPORTED_MODULE_6__.dR.tip,values:formDataValues.blockedDomains,handleDeleteIndex:function(index){formDataValues.blockedDomains.splice(index,1),saveBlockedDomains()},handleCreateString:function(domain){let newDomain;try{let u=new URL(domain);newDomain=u.host}catch(_){newDomain=domain}formDataValues.blockedDomains.push(newDomain),handleFieldChange({fieldName:"blockedDomains",value:formDataValues.blockedDomains}),saveBlockedDomains()},submitStatus:(0,_utils_input_statuses__WEBPACK_IMPORTED_MODULE_8__.kg)(blockedDomainSaveState)})})]}),isInfoModalOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FederationInfoModal,{cancelPressed:function(){setIsInfoModalOpen(!1),setFormDataValues({...formDataValues,enabled:!1})},okPressed:function(){setIsInfoModalOpen(!1),setFormDataValues({...formDataValues,enabled:!0})}})]})};__webpack_exports__.default=ConfigFederation}},function(__webpack_require__){__webpack_require__.O(0,[1829,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=18957)}),_N_E=__webpack_require__.O()}]);