(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{169:function(e,t,r){e.exports=function(){"use strict";return[{locale:"kk",pluralRuleFunction:function(e,t){var r=String(e).split("."),o=Number(r[0])==e,a=o&&r[0].slice(-1);return t?6==a||9==a||o&&0==a&&0!=e?"many":"other":1==e?"one":"other"},fields:{year:{displayName:"\u0436\u044b\u043b",relative:{0:"\u0431\u0438\u044b\u043b\u0493\u044b \u0436\u044b\u043b",1:"\u043a\u0435\u043b\u0435\u0441\u0456 \u0436\u044b\u043b","-1":"\u0431\u044b\u043b\u0442\u044b\u0440\u0493\u044b \u0436\u044b\u043b"},relativeTime:{future:{one:"{0} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0436\u044b\u043b\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0436\u044b\u043b \u0431\u04b1\u0440\u044b\u043d"}}},"year-short":{displayName:"\u0436.",relative:{0:"\u0431\u0438\u044b\u043b\u0493\u044b \u0436\u044b\u043b",1:"\u043a\u0435\u043b\u0435\u0441\u0456 \u0436\u044b\u043b","-1":"\u0431\u044b\u043b\u0442\u044b\u0440\u0493\u044b \u0436\u044b\u043b"},relativeTime:{future:{one:"{0} \u0436. \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0436. \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0436. \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0436. \u0431\u04b1\u0440\u044b\u043d"}}},month:{displayName:"\u0430\u0439",relative:{0:"\u043e\u0441\u044b \u0430\u0439",1:"\u043a\u0435\u043b\u0435\u0441\u0456 \u0430\u0439","-1":"\u04e9\u0442\u043a\u0435\u043d \u0430\u0439"},relativeTime:{future:{one:"{0} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0430\u0439 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0430\u0439 \u0431\u04b1\u0440\u044b\u043d"}}},"month-short":{displayName:"\u0430\u0439",relative:{0:"\u043e\u0441\u044b \u0430\u0439",1:"\u043a\u0435\u043b\u0435\u0441\u0456 \u0430\u0439","-1":"\u04e9\u0442\u043a\u0435\u043d \u0430\u0439"},relativeTime:{future:{one:"{0} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0430\u0439\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0430\u0439 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0430\u0439 \u0431\u04b1\u0440\u044b\u043d"}}},day:{displayName:"\u043a\u04af\u043d",relative:{0:"\u0431\u04af\u0433\u0456\u043d",1:"\u0435\u0440\u0442\u0435\u04a3",2:"\u0431\u04af\u0440\u0441\u0456\u0433\u04af\u043d\u0456","-2":"\u0430\u043b\u0434\u044b\u04a3\u0433\u04af\u043d\u0456","-1":"\u043a\u0435\u0448\u0435"},relativeTime:{future:{one:"{0} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d"}}},"day-short":{displayName:"\u043a\u04af\u043d",relative:{0:"\u0431\u04af\u0433\u0456\u043d",1:"\u0435\u0440\u0442\u0435\u04a3",2:"\u0431\u04af\u0440\u0441\u0456\u0433\u04af\u043d\u0456","-2":"\u0430\u043b\u0434\u044b\u04a3\u0493\u044b \u043a\u04af\u043d\u0456","-1":"\u043a\u0435\u0448\u0435"},relativeTime:{future:{one:"{0} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u043a\u04af\u043d\u043d\u0435\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u043a\u04af\u043d \u0431\u04b1\u0440\u044b\u043d"}}},hour:{displayName:"\u0441\u0430\u0493\u0430\u0442",relative:{0:"\u043e\u0441\u044b \u0441\u0430\u0493\u0430\u0442"},relativeTime:{future:{one:"{0} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0441\u0430\u0493\u0430\u0442 \u0431\u04b1\u0440\u044b\u043d"}}},"hour-short":{displayName:"\u0441\u0430\u0493",relative:{0:"\u043e\u0441\u044b \u0441\u0430\u0493\u0430\u0442"},relativeTime:{future:{one:"{0} \u0441\u0430\u0493. \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0441\u0430\u0493. \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0441\u0430\u0493. \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0441\u0430\u0493. \u0431\u04b1\u0440\u044b\u043d"}}},minute:{displayName:"\u043c\u0438\u043d\u0443\u0442",relative:{0:"\u043e\u0441\u044b \u043c\u0438\u043d\u0443\u0442"},relativeTime:{future:{one:"{0} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u043c\u0438\u043d\u0443\u0442 \u0431\u04b1\u0440\u044b\u043d"}}},"minute-short":{displayName:"\u043c\u0438\u043d",relative:{0:"\u043e\u0441\u044b \u043c\u0438\u043d\u0443\u0442"},relativeTime:{future:{one:"{0} \u043c\u0438\u043d. \u043a\u0435\u0439\u0456\u043d",other:"{0} \u043c\u0438\u043d. \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u043c\u0438\u043d. \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u043c\u0438\u043d. \u0431\u04b1\u0440\u044b\u043d"}}},second:{displayName:"\u0441\u0435\u043a\u0443\u043d\u0434",relative:{0:"\u049b\u0430\u0437\u0456\u0440"},relativeTime:{future:{one:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0441\u0435\u043a\u0443\u043d\u0434\u0442\u0430\u043d \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0441\u0435\u043a\u0443\u043d\u0434 \u0431\u04b1\u0440\u044b\u043d"}}},"second-short":{displayName:"\u0441",relative:{0:"\u049b\u0430\u0437\u0456\u0440"},relativeTime:{future:{one:"{0} \u0441\u0435\u043a. \u043a\u0435\u0439\u0456\u043d",other:"{0} \u0441\u0435\u043a. \u043a\u0435\u0439\u0456\u043d"},past:{one:"{0} \u0441\u0435\u043a. \u0431\u04b1\u0440\u044b\u043d",other:"{0} \u0441\u0435\u043a. \u0431\u04b1\u0440\u044b\u043d"}}}}}]}()}}]);
//# sourceMappingURL=99.73502ad0.chunk.js.map