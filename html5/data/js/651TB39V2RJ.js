﻿window.globalProvideData('slide', '{"title":"cocokan pernyataan berikut yang paling tepat!","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":11,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide11","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"651TB39V2RJ","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"6T75IGqQ1V4.5ozGeQs4TTK.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6T75IGqQ1V4.6PCXPEwAsC0.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6T75IGqQ1V4.5UmCKdjKGEA.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6T75IGqQ1V4.5ZfM5mbS2j5.$DragConnectData","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.68uFnOmQ9PY"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5nr2OmaQtdl.InvalidPromptSlide"}}]}]},"ReviewInt_6T75IGqQ1V4":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.6FsD3U7VuZp"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.5ozGeQs4TTK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.60pFWqx8yex"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.6PCXPEwAsC0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.5s6bzAkgzr5"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.5UmCKdjKGEA"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.6CuNiaN91nb"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.5ZfM5mbS2j5"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"68uFnOmQ9PY.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6T75IGqQ1V4","typea":"var","valueb":"65PIoSynt9d","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65PIoSynt9d.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6T75IGqQ1V4"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65PIoSynt9d.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6T75IGqQ1V4"}]}]}]},"ReviewIntCorrectIncorrect_6T75IGqQ1V4":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"6T75IGqQ1V4.6FsD3U7VuZp"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6T75IGqQ1V4.5ozGeQs4TTK"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6T75IGqQ1V4.60pFWqx8yex"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6T75IGqQ1V4.6PCXPEwAsC0"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6T75IGqQ1V4.5s6bzAkgzr5"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6T75IGqQ1V4.5UmCKdjKGEA"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6T75IGqQ1V4.6CuNiaN91nb"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6T75IGqQ1V4.5ZfM5mbS2j5"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_6T75IGqQ1V4":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6T75IGqQ1V4"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6T75IGqQ1V4":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.6FsD3U7VuZp"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.5ozGeQs4TTK"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.60pFWqx8yex"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.6PCXPEwAsC0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.5s6bzAkgzr5"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.5UmCKdjKGEA"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.6CuNiaN91nb"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T75IGqQ1V4.5ZfM5mbS2j5"},"enabled":{"type":"boolean","value":false}}]},"6T75IGqQ1V4_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"68uFnOmQ9PY.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.65PIoSynt9d.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6T75IGqQ1V4"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"68uFnOmQ9PY.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"68uFnOmQ9PY.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6T75IGqQ1V4"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_651TB39V2RJ":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6Fm1cnUUEe6"}}]},"NavigationRestrictionPreviousSlide_651TB39V2RJ":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5nr2OmaQtdl","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5nr2OmaQtdl","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6T75IGqQ1V4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6T75IGqQ1V4"}],"elseActions":[{"kind":"exe_actiongroup","id":"6T75IGqQ1V4_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6T75IGqQ1V4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6T75IGqQ1V4","typea":"var","valueb":"65PIoSynt9d","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.65PIoSynt9d"},"completed_slide_ref":{"type":"string","value":"_player.6lIic2DUoKy.6Fm1cnUUEe6"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6T75IGqQ1V4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6T75IGqQ1V4","typea":"var","valueb":"65PIoSynt9d","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.65PIoSynt9d"},"completed_slide_ref":{"type":"string","value":"_player.6lIic2DUoKy.6Fm1cnUUEe6"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_651TB39V2RJ"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_651TB39V2RJ"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6doqVBlcx29"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6GnLyoaMktF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"64Fe6AV7Ian"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6IWi1AFIiOZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4.6FsD3U7VuZp"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4.5ozGeQs4TTK"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4.60pFWqx8yex"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4.6PCXPEwAsC0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4.5s6bzAkgzr5"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4.5UmCKdjKGEA"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4.6CuNiaN91nb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4.5ZfM5mbS2j5"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T75IGqQ1V4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5mSXoeKZ46R"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":160,"id":"01","url":"story_content/5w4WajaU7tV_80_DX2560_DY2560.jpg","type":"normal","altText":"2.jpg","width":1920,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":360,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1280,"bottom":720,"altText":"2.jpg","pngfb":false,"pr":{"l":"Lib","i":296}},"html5data":{"xPos":0,"yPos":0,"width":1280,"height":720,"strokewidth":0}},"width":1280,"height":720,"resume":true,"useHandCursor":true,"id":"6doqVBlcx29"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":864,"yPos":7,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":144,"rotateYPos":20.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":289,"bottom":42,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":301}},"html5data":{"xPos":-2,"yPos":-2,"width":291,"height":44,"strokewidth":1}},"width":288,"height":41,"resume":true,"useHandCursor":true,"id":"6GnLyoaMktF"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":161,"id":"01","url":"story_content/6Kal8tTflTW_80_DX132_DY132.swf","type":"normal","altText":"png-transparent-computer-icons-button-login-image-file-formats-logo-monochrome-removebg-preview.png","width":132,"height":132,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":864,"yPos":8,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":20.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":41,"bottom":40,"altText":"png-transparent-computer-icons-button-login-image-file-formats-logo-monochrome-removebg-preview.png","pngfb":false,"pr":{"l":"Lib","i":302}},"html5data":{"xPos":0,"yPos":0,"width":41,"height":40,"strokewidth":0}},"width":41,"height":40,"resume":true,"useHandCursor":true,"id":"64Fe6AV7Ian"},{"kind":"textinput","bindto":"_player.NAMA","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"%NAMA%","fontsize":33,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":920,"yPos":8,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":108,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"linkId":"","type":"vartext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":196,"height":32,"device":true,"valign":"top","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<p style=\'text-align:center;direction: ltr; padding-left: 0px\'><span style=\\"font-family: \'Open Sans\'; font-size:32px; color:#000000;line-height:43.578125px;\\">^%^NAMA^%^</span></p>"},"html5data":{"xPos":0,"yPos":0,"width":216,"height":32,"strokewidth":0}},"width":216,"height":32,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":216,"bottom":32,"altText":"%_player.NAMA%","pngfb":false,"pr":{"l":"Lib","i":303}}},"id":"6IWi1AFIiOZ","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.NAMA","operator":"set","value":{"type":"property","value":"$Text"}}]}]},{"kind":"scrollarea","contentwidth":872,"contentheight":262,"objects":[{"kind":"droparea","style":"matching","reviewdata":4,"shapemaskId":"","xPos":16,"yPos":196,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":214,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5ZfM5mbS2j5_-888243985","type":"acctext","altText":"Harimau","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":398,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Harimau","style":{"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.222}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":7,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":126,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":375}}},"html5data":{"xPos":0,"yPos":0,"width":428,"height":50,"strokewidth":0}},"width":428,"height":50,"resume":true,"useHandCursor":true,"id":"5ZfM5mbS2j5"},{"kind":"shufflegroup","objects":[{"kind":"dragitem","style":"matching","connectdata":"choices.choice_5bxnAWQaJhH","reviewdata":4,"shapemaskId":"","xPos":460,"yPos":196,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":214,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6CuNiaN91nb_-1573552305","type":"acctext","altText":"Ekosistem hutan","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":398,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Ekosistem hutan","style":{"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.222}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":15,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":241,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":376}}},"html5data":{"xPos":0,"yPos":0,"width":428,"height":50,"strokewidth":0}},"width":428,"height":50,"resume":true,"useHandCursor":true,"id":"6CuNiaN91nb"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_5Zaz8ayLCtc","reviewdata":3,"shapemaskId":"","xPos":460,"yPos":132,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":214,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5s6bzAkgzr5_-1445485436","type":"acctext","altText":"Ekosistem sungai","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":398,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Ekosistem sungai","style":{"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.222}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":16,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":250,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":377}}},"html5data":{"xPos":0,"yPos":0,"width":428,"height":50,"strokewidth":0}},"width":428,"height":50,"resume":true,"useHandCursor":true,"id":"5s6bzAkgzr5"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6AqqApYdA0S","reviewdata":2,"shapemaskId":"","xPos":460,"yPos":68,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":214,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_60pFWqx8yex_343723548","type":"acctext","altText":"Ekosistem sawah","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":398,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Ekosistem sawah","style":{"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.222}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":15,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":247,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":378}}},"html5data":{"xPos":0,"yPos":0,"width":428,"height":50,"strokewidth":0}},"width":428,"height":50,"resume":true,"useHandCursor":true,"id":"60pFWqx8yex"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6NCXA62EhAK","reviewdata":1,"shapemaskId":"","xPos":460,"yPos":4,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":214,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6FsD3U7VuZp_392677143","type":"acctext","altText":"Ekosistem laut","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":398,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Ekosistem laut","style":{"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.222}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":14,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":213,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":379}}},"html5data":{"xPos":0,"yPos":0,"width":428,"height":50,"strokewidth":0}},"width":428,"height":50,"resume":true,"useHandCursor":true,"id":"6FsD3U7VuZp"}],"shuffle":true,"depth":2,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":true,"useHandCursor":true,"id":""},{"kind":"droparea","style":"matching","reviewdata":3,"shapemaskId":"","xPos":16,"yPos":132,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":214,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5UmCKdjKGEA_1268328211","type":"acctext","altText":"Buaya","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":398,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Buaya","style":{"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.222}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":92,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":380}}},"html5data":{"xPos":0,"yPos":0,"width":428,"height":50,"strokewidth":0}},"width":428,"height":50,"resume":true,"useHandCursor":true,"id":"5UmCKdjKGEA"},{"kind":"droparea","style":"matching","reviewdata":2,"shapemaskId":"","xPos":16,"yPos":68,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":214,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6PCXPEwAsC0_1255885640","type":"acctext","altText":"Belalang","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":398,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Belalang","style":{"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.222}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":8,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":124,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":381}}},"html5data":{"xPos":0,"yPos":0,"width":428,"height":50,"strokewidth":0}},"width":428,"height":50,"resume":true,"useHandCursor":true,"id":"6PCXPEwAsC0"},{"kind":"droparea","style":"matching","reviewdata":1,"shapemaskId":"","xPos":16,"yPos":4,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":214,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5ozGeQs4TTK_-133344219","type":"acctext","altText":"ubur-ubur","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":398,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"ubur-ubur","style":{"foregroundColor":"#000000","linkColor":"#000000","fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.222}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":9,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":148,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":382}}},"html5data":{"xPos":0,"yPos":0,"width":428,"height":50,"strokewidth":0}},"width":428,"height":50,"resume":true,"useHandCursor":true,"id":"5ozGeQs4TTK"}],"shapemaskId":"","xPos":272,"yPos":288,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":460,"rotateYPos":132,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":920,"height":264,"strokewidth":0}},"width":920,"height":264,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":920,"bottom":264,"altText":"Matching Drag and Drop","pngfb":false,"pr":{"l":"Lib","i":374}}},"id":"6T75IGqQ1V4"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5mSXoeKZ46R_1258325264","id":"01","linkId":"txt__default_5mSXoeKZ46R","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":828,"height":120,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"cocokan pernyataan berikut yang paling tepat!","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":46.871,"descent":12.847,"leading":0,"underlinePosition":-3.297,"underlineThickness":2.184,"xHeight":23.468}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":45,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":838,"bottom":125,"pngfb":false,"pr":{"l":"Lib","i":373}}}],"shapemaskId":"","xPos":256,"yPos":128,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":424,"rotateYPos":65,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":848,"bottom":130,"altText":"cocokan pernyataan berikut yang paling tepat!","pngfb":false,"pr":{"l":"Lib","i":372}},"html5data":{"xPos":0,"yPos":0,"width":848,"height":130,"strokewidth":0}},"width":848,"height":130,"resume":true,"useHandCursor":true,"id":"5mSXoeKZ46R"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6T75IGqQ1V4_CorrectReview","id":"01","linkId":"6T75IGqQ1V4_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":244}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":18,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":243}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6T75IGqQ1V4_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6T75IGqQ1V4_IncorrectReview","id":"01","linkId":"6T75IGqQ1V4_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":242}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":19,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":241}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6T75IGqQ1V4_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');