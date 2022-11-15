"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7466],{77466:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){let serverStatusRefreshPoll;__webpack_require__.d(__webpack_exports__,{me:function(){return ClientConfigStore},FI:function(){return accessTokenAtom},Q:function(){return appStateAtom},L4:function(){return chatAuthenticatedAtom},j$:function(){return chatMessagesAtom},ZA:function(){return chatVisibleToggleAtom},g1:function(){return clientConfigStateAtom},g8:function(){return clockSkewAtom},db:function(){return currentUserAtom},ap:function(){return fatalErrorStateAtom},di:function(){return isChatAvailableSelector},pT:function(){return isChatVisibleSelector},hz:function(){return isMobileAtom},YW:function(){return isOnlineSelector},We:function(){return isVideoPlayingAtom},RI:function(){return serverStatusState},pH:function(){return visibleChatMessagesSelector},Gt:function(){return websocketServiceAtom}});var AppStateEvent,AppStateEvent1,react=__webpack_require__(67294),es=__webpack_require__(4480),useMachine=__webpack_require__(23917),client_config_service=class{static async getConfig(){let response=await fetch("/api/config"),status=await response.json();return status}},apis=__webpack_require__(64777),chat_service=class{static async getChatHistory(accessToken){let response=await (0,apis.$l)("".concat("/api/chat","?accessToken=").concat(accessToken));return response}static async registerUser(username){let options={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:username})},response=await (0,apis.$l)("/api/chat/register",options);return response}},socket_events=__webpack_require__(91951);class WebsocketService{createAndConnect(host){let url=new URL(host);url.protocol="https:"===window.location.protocol?"wss:":"ws:",url.pathname="/ws",url.port="3000"===window.location.port?"8080":window.location.port,url.searchParams.append("accessToken",this.accessToken),console.debug("connecting to ",url.toString());let ws=new WebSocket(url.toString());ws.onopen=this.onOpen.bind(this),ws.onerror=this.onError.bind(this),ws.onmessage=this.onMessage.bind(this),this.websocket=ws}onOpen(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer)}onError(e){console.error("Chat has been disconnected and is likely not working for you. It's possible you were removed from chat. If this is a server configuration issue, visit troubleshooting steps to resolve. https://owncast.online/docs/troubleshooting/#chat-is-disabled: ".concat("Socket error: ".concat(e))),this.websocket.close(),this.isShutdown||this.scheduleReconnect()}scheduleReconnect(){this.websocketReconnectTimer&&clearTimeout(this.websocketReconnectTimer),this.backOff*=2,this.websocketReconnectTimer=setTimeout(this.createAndConnect,5e3+Math.min(this.backOff,1e4))}shutdown(){this.isShutdown=!0,this.websocket.close()}onMessage(e){let socketEvent;let messages=e.data.split("\n");for(let i=0;i<messages.length;i++){try{socketEvent=JSON.parse(messages[i]),this.handleMessage&&this.handleMessage(socketEvent)}catch(err){console.error(err,err.data);return}if(!socketEvent.type){console.error("No type provided",socketEvent);return}if(socketEvent.type===socket_events.C.PING){this.sendPong();return}}}isConnected(){var ref,ref1;return(null===(ref=this.websocket)||void 0===ref?void 0:ref.readyState)===(null===(ref1=this.websocket)||void 0===ref1?void 0:ref1.OPEN)}send(socketEvent){socketEvent.type&&socket_events.C[socketEvent.type]||console.warn('Outbound message: Unknown socket message type: "'.concat(socketEvent.type,'" sent.'));let messageJSON=JSON.stringify(socketEvent);this.websocket.send(messageJSON)}sendPong(){let pong={type:socket_events.C.PONG};this.send(pong)}constructor(accessToken,path,host){this.isShutdown=!1,this.backOff=1e3,this.accessToken=accessToken,this.path=path,this.websocketReconnectTimer=null,this.isShutdown=!1,this.createAndConnect=this.createAndConnect.bind(this),this.shutdown=this.shutdown.bind(this),this.createAndConnect(host)}}var Machine=__webpack_require__(4723);(AppStateEvent=AppStateEvent1||(AppStateEvent1={})).Loading="LOADING",AppStateEvent.Loaded="LOADED",AppStateEvent.Online="ONLINE",AppStateEvent.Offline="OFFLINE",AppStateEvent.NeedsRegister="NEEDS_REGISTER",AppStateEvent.Fail="FAIL";let appStateModel=(0,Machine.C)({id:"appState",initial:"loading",predictableActionArguments:!0,states:{loading:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!0},on:{NEEDS_REGISTER:{target:"loading"},LOADED:{target:"ready"},FAIL:{target:"serverFailure"}}},ready:{initial:"offline",states:{online:{meta:{chatAvailable:!0,chatLoading:!1,videoAvailable:!0,appLoading:!1},on:{OFFLINE:{target:"goodbye"}}},offline:{meta:{chatAvailable:!1,chatLoading:!1,videoAvailable:!1,appLoading:!1},on:{ONLINE:{target:"online"}}},goodbye:{on:{ONLINE:{target:"online"}},meta:{chatAvailable:!0,chatLoading:!1,videoAvailable:!1,appLoading:!1},after:{3e5:{target:"offline"}}}}},serverFailure:{type:"final"},userfailure:{type:"final"}}});var localStorage1=__webpack_require__(72581),helpers=__webpack_require__(77278),connected_client_info_handler=function(message,setChatAuthenticated,setCurrentUser){let{user}=message,{id,displayName,displayColor,scopes,authenticated}=user;setChatAuthenticated(authenticated),setCurrentUser({id:id.toString(),displayName,displayColor,isModerator:null==scopes?void 0:scopes.includes("MODERATOR")})},status_service=class{static async getStatus(){let response=await fetch("/api/status"),status=await response.json();return status}},eventhandlers_handleNameChangeEvent=function(message,messages,setChatMessages){let updatedMessages=[...messages,message];setChatMessages(updatedMessages)};es.zl.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=!1;let ACCESS_TOKEN_KEY="accessToken",serverStatusState=(0,es.cn)({key:"serverStatusState",default:{online:!1,viewerCount:0,serverTime:new Date}}),clientConfigStateAtom=(0,es.cn)({key:"clientConfigState",default:{name:"",summary:"",offlineMessage:"",logo:"",tags:[],version:"",nsfw:!1,extraPageContent:"",socialHandles:[],chatDisabled:!1,externalActions:[],customStyles:"",appearanceVariables:new Map,maxSocketPayloadSize:0,federation:{enabled:!1,account:"",followerCount:0},notifications:{browser:{enabled:!1,publicKey:""}},authentication:{indieAuthEnabled:!1}}}),accessTokenAtom=(0,es.cn)({key:"accessTokenAtom",default:null}),currentUserAtom=(0,es.cn)({key:"currentUserAtom",default:null}),chatMessagesAtom=(0,es.cn)({key:"chatMessages",default:[]}),chatAuthenticatedAtom=(0,es.cn)({key:"chatAuthenticatedAtom",default:!1}),websocketServiceAtom=(0,es.cn)({key:"websocketServiceAtom",default:null,dangerouslyAllowMutability:!0}),appStateAtom=(0,es.cn)({key:"appState",default:{chatAvailable:!1,chatLoading:!0,videoAvailable:!1,appLoading:!0}}),isMobileAtom=(0,es.cn)({key:"isMobileAtom",default:void 0}),chatVisibleToggleAtom=(0,es.cn)({key:"chatVisibilityToggleAtom",default:!0}),isVideoPlayingAtom=(0,es.cn)({key:"isVideoPlayingAtom",default:!1}),fatalErrorStateAtom=(0,es.cn)({key:"fatalErrorStateAtom",default:null}),clockSkewAtom=(0,es.cn)({key:"clockSkewAtom",default:0}),removedMessageIdsAtom=(0,es.cn)({key:"removedMessageIds",default:[]}),isChatVisibleSelector=(0,es.nZ)({key:"isChatVisibleSelector",get(param){let{get}=param,state=get(appStateAtom),userVisibleToggle=get(chatVisibleToggleAtom),accessToken=get(accessTokenAtom);return accessToken&&state.chatAvailable&&userVisibleToggle}}),isChatAvailableSelector=(0,es.nZ)({key:"isChatAvailableSelector",get(param){let{get}=param,state=get(appStateAtom),accessToken=get(accessTokenAtom);return accessToken&&state.chatAvailable}}),isOnlineSelector=(0,es.nZ)({key:"isOnlineSelector",get(param){let{get}=param,state=get(appStateAtom),isVideoPlaying=get(isVideoPlayingAtom);return state.videoAvailable||isVideoPlaying}}),visibleChatMessagesSelector=(0,es.nZ)({key:"visibleChatMessagesSelector",get(param){let{get}=param,messages=get(chatMessagesAtom),removedIds=get(removedMessageIdsAtom);return messages.filter(message=>!removedIds.includes(message.id))}}),ClientConfigStore=()=>{let ws;let[appState,appStateSend,appStateService]=(0,useMachine.e)(appStateModel),[currentUser,setCurrentUser]=(0,es.FV)(currentUserAtom),setChatAuthenticated=(0,es.Zl)(chatAuthenticatedAtom),[clientConfig,setClientConfig]=(0,es.FV)(clientConfigStateAtom),[serverStatus,setServerStatus]=(0,es.FV)(serverStatusState),setClockSkew=(0,es.Zl)(clockSkewAtom),[chatMessages,setChatMessages]=(0,es.FV)(chatMessagesAtom),[accessToken,setAccessToken]=(0,es.FV)(accessTokenAtom),setAppState=(0,es.Zl)(appStateAtom),setGlobalFatalErrorMessage=(0,es.Zl)(fatalErrorStateAtom),setWebsocketService=(0,es.Zl)(websocketServiceAtom),[hiddenMessageIds,setHiddenMessageIds]=(0,es.FV)(removedMessageIdsAtom),[,setHasLoadedStatus]=(0,react.useState)(!1),[hasLoadedConfig,setHasLoadedConfig]=(0,react.useState)(!1),setGlobalFatalError=(title,message)=>{setGlobalFatalErrorMessage({title,message})},sendEvent=event=>{appStateSend({type:event})},handleStatusChange=status=>{if(appState.matches("loading")){sendEvent(AppStateEvent1.Loaded);return}status.online&&appState.matches("ready.offline")?sendEvent(AppStateEvent1.Online):status.online||appState.matches("ready.offline")||sendEvent(AppStateEvent1.Offline)},updateClientConfig=async()=>{try{let config=await client_config_service.getConfig();setClientConfig(config),setGlobalFatalErrorMessage(null),setHasLoadedConfig(!0)}catch(error){setGlobalFatalError("Unable to reach Owncast server","Owncast cannot launch. Please make sure the Owncast server is running."),console.error("ClientConfigService -> getConfig() ERROR: \n".concat(error))}},updateServerStatus=async()=>{try{let status=await status_service.getStatus();setServerStatus(status),setHasLoadedStatus(!0);let{serverTime}=status,clockSkew=new Date(serverTime).getTime()-Date.now();setClockSkew(clockSkew),setGlobalFatalErrorMessage(null)}catch(error){sendEvent(AppStateEvent1.Fail),setGlobalFatalError("Unable to reach Owncast server","Owncast cannot launch. Please make sure the Owncast server is running."),console.error("serverStatusState -> getStatus() ERROR: \n".concat(error))}},handleUserRegistration=async optionalDisplayName=>{let savedAccessToken=(0,localStorage1.$o)(ACCESS_TOKEN_KEY);if(savedAccessToken){setAccessToken(savedAccessToken);return}try{sendEvent(AppStateEvent1.NeedsRegister);let response=await chat_service.registerUser(optionalDisplayName),{accessToken:newAccessToken,displayName:newDisplayName,displayColor}=response;if(!newAccessToken)return;setCurrentUser({...currentUser,displayName:newDisplayName,displayColor}),setAccessToken(newAccessToken),(0,localStorage1.qQ)(ACCESS_TOKEN_KEY,newAccessToken)}catch(e){sendEvent(AppStateEvent1.Fail),console.error("ChatService -> registerUser() ERROR: \n".concat(e))}},resetAndReAuth=()=>{(0,localStorage1.qQ)(ACCESS_TOKEN_KEY,""),setAccessToken(null),handleUserRegistration()},handleMessageVisibilityChange=message=>{let{ids,visible}=message;if(visible){let updatedIds=hiddenMessageIds.filter(id=>!ids.includes(id));setHiddenMessageIds(updatedIds)}else{let updatedIds1=[...hiddenMessageIds,...ids];setHiddenMessageIds(updatedIds1)}},handleMessage=message=>{switch(message.type){case socket_events.C.ERROR_NEEDS_REGISTRATION:resetAndReAuth();break;case socket_events.C.CONNECTED_USER_INFO:connected_client_info_handler(message,setChatAuthenticated,setCurrentUser),setChatMessages(currentState=>[...currentState,message]);break;case socket_events.C.CHAT:setChatMessages(currentState=>[...currentState,message]);break;case socket_events.C.NAME_CHANGE:eventhandlers_handleNameChangeEvent(message,chatMessages,setChatMessages);break;case socket_events.C.USER_JOINED:setChatMessages(currentState=>[...currentState,message]);break;case socket_events.C.SYSTEM:setChatMessages(currentState=>[...currentState,message]);break;case socket_events.C.CHAT_ACTION:setChatMessages(currentState=>[...currentState,message]);break;case socket_events.C.VISIBILITY_UPDATE:handleMessageVisibilityChange(message);break;default:console.error("Unknown socket message type: ",message.type)}},getChatHistory=async()=>{try{let messages=await chat_service.getChatHistory(accessToken);setChatMessages(currentState=>[...currentState,...messages])}catch(error){console.error("ChatService -> getChatHistory() ERROR: \n".concat(error))}},startChat=async()=>{try{let{socketHostOverride}=clientConfig,host=socketHostOverride||window.location.toString();(ws=new WebsocketService(accessToken,"/ws",host)).handleMessage=handleMessage,setWebsocketService(ws)}catch(error){console.error("ChatService -> startChat() ERROR: \n".concat(error))}},handleChatNotification=()=>{};return(0,react.useEffect)(()=>{try{if(window.configHydration){let config=JSON.parse(window.configHydration);setClientConfig(config),setHasLoadedConfig(!0)}}catch(e){console.error("Error parsing config hydration",e)}try{if(window.statusHydration){let status=JSON.parse(window.statusHydration);setServerStatus(status),setHasLoadedStatus(!0)}}catch(e1){console.error("error parsing status hydration",e1)}},[]),(0,react.useEffect)(()=>{handleStatusChange(serverStatus)},[serverStatus]),(0,react.useEffect)(()=>{!clientConfig.chatDisabled&&accessToken&&hasLoadedConfig&&startChat()},[hasLoadedConfig,accessToken]),(0,react.useEffect)(()=>{handleChatNotification()},[chatMessages]),(0,react.useEffect)(()=>(updateClientConfig(),handleUserRegistration(),updateServerStatus(),clearInterval(serverStatusRefreshPoll),serverStatusRefreshPoll=setInterval(()=>{updateServerStatus()},5e3),()=>{clearInterval(serverStatusRefreshPoll)}),[]),(0,react.useEffect)(()=>{accessToken&&getChatHistory()},[accessToken]),(0,react.useEffect)(()=>{appStateService.onTransition(state=>{let metadata=(0,helpers.YR)(state.meta);setAppState(metadata)})},[]),null}},91951:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var MessageType,MessageType1;__webpack_require__.d(__webpack_exports__,{C:function(){return MessageType}}),(MessageType1=MessageType||(MessageType={})).CHAT="CHAT",MessageType1.PING="PING",MessageType1.NAME_CHANGE="NAME_CHANGE",MessageType1.COLOR_CHANGE="COLOR_CHANGE",MessageType1.PONG="PONG",MessageType1.SYSTEM="SYSTEM",MessageType1.USER_JOINED="USER_JOINED",MessageType1.CHAT_ACTION="CHAT_ACTION",MessageType1.FEDIVERSE_ENGAGEMENT_FOLLOW="FEDIVERSE_ENGAGEMENT_FOLLOW",MessageType1.FEDIVERSE_ENGAGEMENT_LIKE="FEDIVERSE_ENGAGEMENT_LIKE",MessageType1.FEDIVERSE_ENGAGEMENT_REPOST="FEDIVERSE_ENGAGEMENT_REPOST",MessageType1.CONNECTED_USER_INFO="CONNECTED_USER_INFO",MessageType1.ERROR_USER_DISABLED="ERROR_USER_DISABLED",MessageType1.ERROR_NEEDS_REGISTRATION="ERROR_NEEDS_REGISTRATION",MessageType1.ERROR_MAX_CONNECTIONS_EXCEEDED="ERROR_MAX_CONNECTIONS_EXCEEDED",MessageType1.VISIBILITY_UPDATE="VISIBILITY-UPDATE"},77278:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function getDiffInDaysFromNow(timestamp){let time="string"==typeof timestamp?new Date(timestamp):timestamp;return(new Date-time)/864e5}function mergeMeta(meta){return Object.keys(meta).reduce((acc,key)=>{let value=meta[key];return Object.assign(acc,value),acc},{})}__webpack_require__.d(__webpack_exports__,{Xb:function(){return getDiffInDaysFromNow},YR:function(){return mergeMeta}})},72581:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$o:function(){return getLocalStorage},dA:function(){return LOCAL_STORAGE_KEYS},qQ:function(){return setLocalStorage}});let LOCAL_STORAGE_KEYS={username:"username",hasDisplayedNotificationModal:"HAS_DISPLAYED_NOTIFICATION_MODAL",userVisitCount:"USER_VISIT_COUNT"};function getLocalStorage(key){try{return localStorage.getItem(key)}catch(e){}return null}function setLocalStorage(key,value){try{return""!==value&&null!==value?localStorage.setItem(key,value):localStorage.removeItem(key),!0}catch(e){}return!1}}}]);