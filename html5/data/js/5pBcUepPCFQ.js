﻿window.globalProvideData('slide', '{"title":"Hewan yang peran dalam ekosistem sebagai konsumen tingkat I disebut Predator.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":8,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide8","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5pBcUepPCFQ","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6WdPrljBFsF.6I2V9129Cpn.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6WdPrljBFsF.6g7XMWTlrHd.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6QjXtjyae8Y"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5nr2OmaQtdl.InvalidPromptSlide"}}]}]},"ReviewInt_6WdPrljBFsF":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6WdPrljBFsF.6I2V9129Cpn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6WdPrljBFsF.6g7XMWTlrHd"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6QjXtjyae8Y.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WdPrljBFsF_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WdPrljBFsF_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6WdPrljBFsF","typea":"var","valueb":"65PIoSynt9d","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65PIoSynt9d.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6WdPrljBFsF"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65PIoSynt9d.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6WdPrljBFsF"}]}]}]},"ReviewIntCorrectIncorrect_6WdPrljBFsF":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6WdPrljBFsF.6I2V9129Cpn"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6WdPrljBFsF.6g7XMWTlrHd.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WdPrljBFsF.6g7XMWTlrHd"}}]},{"kind":"adjustvar","variable":"6WdPrljBFsF.6g7XMWTlrHd._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6WdPrljBFsF.6g7XMWTlrHd._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"6WdPrljBFsF.6g7XMWTlrHd._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"6WdPrljBFsF.6g7XMWTlrHd.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"6WdPrljBFsF.6g7XMWTlrHd"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6WdPrljBFsF":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6WdPrljBFsF"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6WdPrljBFsF":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"6WdPrljBFsF.6I2V9129Cpn.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"6WdPrljBFsF.6g7XMWTlrHd.ActGrpSetDisabledState"}]},"6WdPrljBFsF_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6QjXtjyae8Y.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.65PIoSynt9d.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6WdPrljBFsF"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6QjXtjyae8Y.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6QjXtjyae8Y.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6WdPrljBFsF"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5pBcUepPCFQ":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6k7UHahJayU"}}]},"NavigationRestrictionPreviousSlide_5pBcUepPCFQ":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5nr2OmaQtdl","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5nr2OmaQtdl","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6WdPrljBFsF","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6WdPrljBFsF"}],"elseActions":[{"kind":"exe_actiongroup","id":"6WdPrljBFsF_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6WdPrljBFsF","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6WdPrljBFsF","typea":"var","valueb":"65PIoSynt9d","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.65PIoSynt9d"},"completed_slide_ref":{"type":"string","value":"_player.6lIic2DUoKy.6Fm1cnUUEe6"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6WdPrljBFsF","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6WdPrljBFsF","typea":"var","valueb":"65PIoSynt9d","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.65PIoSynt9d"},"completed_slide_ref":{"type":"string","value":"_player.6lIic2DUoKy.6Fm1cnUUEe6"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5pBcUepPCFQ"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5pBcUepPCFQ"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6OKPXNYN2sU"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6pv6HfBzmMH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6kO6hhPXLpp"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rJGUKw2wTr"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WdPrljBFsF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WdPrljBFsF.6g7XMWTlrHd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WdPrljBFsF.6I2V9129Cpn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6OaMTVtDM0w"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":160,"id":"01","url":"story_content/5w4WajaU7tV_80_DX2560_DY2560.jpg","type":"normal","altText":"2.jpg","width":1920,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":360,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1280,"bottom":720,"altText":"2.jpg","pngfb":false,"pr":{"l":"Lib","i":296}},"html5data":{"xPos":0,"yPos":0,"width":1280,"height":720,"strokewidth":0}},"width":1280,"height":720,"resume":true,"useHandCursor":true,"id":"6OKPXNYN2sU"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":864,"yPos":7,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":144,"rotateYPos":20.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":289,"bottom":42,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":301}},"html5data":{"xPos":-2,"yPos":-2,"width":291,"height":44,"strokewidth":1}},"width":288,"height":41,"resume":true,"useHandCursor":true,"id":"6pv6HfBzmMH"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":161,"id":"01","url":"story_content/6Kal8tTflTW_80_DX132_DY132.swf","type":"normal","altText":"png-transparent-computer-icons-button-login-image-file-formats-logo-monochrome-removebg-preview.png","width":132,"height":132,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":864,"yPos":8,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":20.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":41,"bottom":40,"altText":"png-transparent-computer-icons-button-login-image-file-formats-logo-monochrome-removebg-preview.png","pngfb":false,"pr":{"l":"Lib","i":302}},"html5data":{"xPos":0,"yPos":0,"width":41,"height":40,"strokewidth":0}},"width":41,"height":40,"resume":true,"useHandCursor":true,"id":"6kO6hhPXLpp"},{"kind":"textinput","bindto":"_player.NAMA","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"%NAMA%","fontsize":33,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":920,"yPos":8,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":108,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"linkId":"","type":"vartext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":196,"height":32,"device":true,"valign":"top","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\'text-align:center;direction: ltr; padding-left: 0px\'><span style=\\"font-family: \'Open Sans\'; font-size:32px; color:#000000;line-height:43.578125px;\\">^%^NAMA^%^</span></p>"},"html5data":{"xPos":0,"yPos":0,"width":216,"height":32,"strokewidth":0}},"width":216,"height":32,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":216,"bottom":32,"altText":"%_player.NAMA%","pngfb":false,"pr":{"l":"Lib","i":303}}},"id":"5rJGUKw2wTr","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.NAMA","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"scrollarea","contentwidth":416,"contentheight":236,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5fL3al9TG1J_1579844039","id":"01","linkId":"txt__default_6g7XMWTlrHd","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":329,"height":66,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Salah","style":{"fontSize":36,"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":51.305,"descent":14.063,"leading":0,"underlinePosition":-3.609,"underlineThickness":2.391,"xHeight":25.688}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":165,"bottom":78,"pngfb":false,"pr":{"l":"Lib","i":339}}}],"shapemaskId":"","xPos":24,"yPos":146,"tabIndex":7,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":196,"rotateYPos":45,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":335}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":335}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":360}},"html5data":{"xPos":-9,"yPos":-1,"width":401,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":360}},"html5data":{"xPos":-9,"yPos":-1,"width":401,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":335}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":336}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":336}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":361}},"html5data":{"xPos":-9,"yPos":-1,"width":401,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":361}},"html5data":{"xPos":-9,"yPos":-1,"width":401,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":336}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":337}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":337}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":337}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":338}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":338}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":392,"bottom":90,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":338}},"html5data":{"xPos":-1,"yPos":-1,"width":393,"height":91,"strokewidth":3}}}],"width":392,"height":90,"resume":true,"useHandCursor":true,"id":"6g7XMWTlrHd","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6I2V9129Cpn.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6I2V9129Cpn._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6I2V9129Cpn"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5chhHH1wSKV_1238535946","id":"01","linkId":"txt__default_6I2V9129Cpn","type":"acctext","xPos":10,"yPos":5,"xAccOffset":43,"yAccOffset":12,"width":257,"height":66,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Benar","style":{"fontSize":36,"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":51.305,"descent":14.063,"leading":0,"underlinePosition":-3.609,"underlineThickness":2.391,"xHeight":25.688}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":177,"bottom":78,"pngfb":false,"pr":{"l":"Lib","i":346}}}],"shapemaskId":"","xPos":24,"yPos":56,"tabIndex":6,"tabEnabled":true,"radioGroup":"True/False","xOffset":0,"yOffset":0,"rotateXPos":160,"rotateYPos":45,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":340}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":340}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":340}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":342}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":342}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":342}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":344}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":344}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":344}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":345}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":345}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":320,"bottom":90,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":345}},"html5data":{"xPos":-1,"yPos":-1,"width":321,"height":91,"strokewidth":3}}}],"width":320,"height":90,"resume":true,"useHandCursor":true,"id":"6I2V9129Cpn","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6g7XMWTlrHd.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6g7XMWTlrHd._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6g7XMWTlrHd"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":432,"yPos":272,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":196,"rotateYPos":132,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":392,"height":264,"strokewidth":0}},"width":416,"height":264,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":416,"bottom":264,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":334}}},"id":"6WdPrljBFsF"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6OaMTVtDM0w_619033657","id":"01","linkId":"txt__default_6OaMTVtDM0w","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":980,"height":120,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Hewan yang peran dalam ekosistem sebagai konsumen tingkat I disebut Predator.","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":46.871,"descent":12.847,"leading":0,"underlinePosition":-3.297,"underlineThickness":2.184,"xHeight":23.468}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":77,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":931,"bottom":125,"pngfb":false,"pr":{"l":"Lib","i":363}}}],"shapemaskId":"","xPos":240,"yPos":152,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":65,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1000,"bottom":130,"altText":"Hewan yang peran dalam ekosistem sebagai konsumen tingkat I disebut Predator.","pngfb":false,"pr":{"l":"Lib","i":362}},"html5data":{"xPos":0,"yPos":0,"width":1000,"height":130,"strokewidth":0}},"width":1000,"height":130,"resume":true,"useHandCursor":true,"id":"6OaMTVtDM0w"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6WdPrljBFsF_CorrectReview","id":"01","linkId":"6WdPrljBFsF_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":244}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":243}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6WdPrljBFsF_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6WdPrljBFsF_IncorrectReview","id":"01","linkId":"6WdPrljBFsF_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":242}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":241}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6WdPrljBFsF_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');