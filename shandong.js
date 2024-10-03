//导入地图
import shandong from "../../../../../assets/get/shandongData.json";
......

async getLeftBar() {
      let nc = document.getElementById("barChart");
      var myChart = this.echarts.init(nc);
      this.echarts.registerMap("山东", shandong);
      var cityMap = {
        济南市: jinan,
        青岛市: qingdao,
        烟台市: yantai,
        潍坊市: weifang,
        菏泽市: heze,
        日照市: rizhao,
        威海市: weihai,
        枣庄市: zaozhuang,
        临沂市: linyi,
        滨州市: bingzhou,
        东营市: dongying,
        淄博市: zibo,
        泰安市: taian,
        聊城市: liaocheng,
        济宁市: jining,
        德州市: dezhou,
      };
      var sdGeoCoordMap = {
        济南市: [117.000923, 36.675807],
        青岛市: [120.355173, 36.082982],
        烟台市: [121.391382, 37.539297],
        潍坊市: [119.107078, 36.70925],
        菏泽市: [115.469381, 35.246531],
        日照市: [119.461208, 35.428588],
        威海市: [122.116394, 37.509691],
        枣庄市: [117.557964, 34.856424],
        临沂市: [118.326443, 35.065282],
        滨州市: [118.016974, 37.383542],
        东营市: [118.66471, 37.434564],
        淄博市: [118.047648, 36.814939],
        泰安市: [117.129063, 36.194968],
        聊城市: [115.980367, 36.456013],
        济宁市: [116.587245, 35.415393],
        德州市: [116.307428, 37.453968],
      };
      var sdDatas = [
        {
          name1: "济南市",
          name: "济南市供电局",
          value: [117.050923, 36.678807, 0.5],
        },
        {
          name1: "济南市",
          name: "济南市供电局23",
          value: [117.053923, 36.638807, 3.5],
        },
        {
          name1: "济南市",
          name: "济南市随便吧",
          value: [117.653923, 37.038807, 11],
        },
        {
          name1: "青岛市",
          name: "青岛市供电局",
          value: [120.385173, 36.042982, 7.5],
        },
      ];
      var jinandata = [
        {
          name: "东莞市供电局",
          value: [117.000623, 36.672807, 0.5],
        },
        {
          name: "东莞东城供电分局",
          value: [117.001923, 36.685807, 1],
        },
        {
          name: "广东电网东莞南城供电局",
          value: [117.002923, 36.675207, 1],
        },
        {
          name: "沙田供电分局",
          value: [117.007923, 36.675107, 0.1],
        },
        {
          name: "广东电网(松山湖)",
          value: [117.040923, 36.625807, 0.4],
        },
        {
          name: "东莞供电局万江供电局",
          value: [117.100923, 36.695807, 1],
        },
        {
          name: "广东电网公司石龙供电分局",
          value: [117.003923, 36.673807, 1.4],
        },
        {
          name: "广东电网东莞虎门供电局",
          value: [117.002913, 36.676607, 0.7],
        },
        {
          name: "广东电网公司中堂供电公司",
          value: [117.01123, 36.633807, 0.1],
        },
        {
          name: "望牛墩供电公司",
          value: [117.000333, 36.675557, 0.5],
        },
        {
          name: "东莞供电局石碣供电局",
          value: [117.000233, 36.674307, 2],
        },
        {
          name: "高埗供电分局",
          value: [117.445923, 36.874507, 0.9],
        },
        {
          name: "东莞市麻涌供电公司",
          value: [117.003423, 36.678807, 2],
        },
        {
          name: "东莞市长安供电公司",
          value: [117.000444, 36.675444, 2],
        },
        {
          name: "东莞市道滘供电公司",
          value: [117.110923, 36.635807, 0.4],
        },
        {
          name: "东莞市洪梅供电公司",
          value: [117.0334923, 36.673434, 0.6],
        },
        {
          name: "东莞市厚街供电公司",
          value: [117.003423, 36.634807, 2],
        },
        {
          name: "东莞市寮步供电公司",
          value: [117.047923, 36.674807, 2],
        },
        {
          name: "大岭山供电公司",
          value: [117.046923, 36.635807, 0.1],
        },
        {
          name: "广东电网大朗供电分公司",
          value: [117.150923, 36.715807, 0.9],
        },
        {
          name: "黄江供电分局",
          value: [117.003453, 36.672307, 0.5],
        },
        {
          name: "东莞供电局樟木头供电局",
          value: [117.099923, 36.699807, 2],
        },
        {
          name: "东莞市清溪供电公司",
          value: [117.089923, 36.689807, 2],
        },
        {
          name: "东莞供电局谢岗分局",
          value: [117.029923, 36.629807, 2],
        },
        {
          name: "东莞市凤岗镇雁田供电所",
          value: [117.004443, 36.673337, 0.4],
        },
        {
          name: "东莞常平供电分局",
          value: [117.004373, 36.6787857, 0.6],
        },
        {
          name: "东莞桥头供电分局",
          value: [117.003413, 36.623407, 2],
        },
        {
          name: "东莞电网横沥供电分局",
          value: [117.00032343, 36.6342807, 0.8],
        },
        {
          name: "广东电网公司东莞东坑供电分局",
          value: [117.0087653, 36.67467807, 0.2],
        },
        {
          name: "塘厦供电局",
          value: [117.045673, 36.6567307, 2],
        },
        {
          name: "企石供电局",
          value: [117.003633, 36.6755427, 0.7],
        },
        {
          name: "石排供电公司",
          value: [117.0456923, 36.645807, 0.1],
        },
        {
          name: "茶山供电分局",
          value: [117.003453, 36.6345807, 0.2],
        },
      ];
      var qingdaodata = [
        {
          name: "东莞市供电局",
          value: [120.345173, 36.0842982, 0.5],
        },
      ];
      var yantaidata = [
        {
          name: "东莞市供电局",
          value: [121.393382, 37.53497, 0.5],
        },
      ];
      var weifangdata = [
        {
          name: "东莞市供电局",
          value: [119.107078, 36.70925, 0.5],
        },
      ];
      var hezedata = [
        {
          name: "东莞市供电局",
          value: [115.489381, 35.286531, 0.5],
        },
      ];
      var rizhaodata = [
        {
          name: "东莞市供电局",
          value: [119.491208, 35.499588, 0.5],
        },
      ];
      var weihaidata = [
        {
          name: "东莞市供电局",
          value: [122.1199394, 37.599691, 0.5],
        },
      ];
      var zaozhuangdata = [
        {
          name: "东莞市供电局",
          value: [117.597964, 34.896424, 0.5],
        },
      ];
      var linyidata = [
        {
          name: "东莞市供电局",
          value: [118.386443, 35.085282, 0.5],
        },
      ];
      var bingzhoudata = [
        {
          name: "东莞市供电局",
          value: [118.016974, 37.383542, 0.5],
        },
      ];
      var dongyingdata = [
        {
          name: "东莞市供电局",
          value: [118.016974, 37.383542, 0.5],
        },
      ];
      var zibodata = [
        {
          name: "东莞市供电局",
          value: [118.016974, 37.383542, 0.5],
        },
      ];
      var taiandata = [
        {
          name: "东莞市供电局",
          value: [118.016974, 37.383542, 0.5],
        },
      ];
      var liaochengdata = [
        {
          name: "东莞市供电局",
          value: [118.016974, 37.383542, 0.5],
        },
      ];
      var jiningdata = [
        {
          name: "东莞市供电局",
          value: [118.016974, 37.383542, 0.5],
        },
      ];
      var dezhoudata = [
        {
          name: "东莞市供电局",
          value: [118.016974, 37.383542, 0.5],
        },
      ];

      var that = this;

      var opt = {
        bgColor: "#013954", // 画布背景色
        mapName: "山东", // 地图名
        goDown: true, // 是否下钻
        // 下钻回调
        callback: async function (name, option, instance) {
          console.log(name, option, instance);
          if (name == "山东") {
            this.ifShow = true;
            option.series[0].data = converntData(data_tmp);
            option.series[1].data = data_tmp;
            myChart.setOption(option, true);
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "济南市") {
            that.ifShow = false;
            that.cityName = "济南市";
            that.cityCode = "370100";
            await that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "济南市", "370100");
            setTimeout(() => {
              option.series[0] = {
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                  //涟漪特效
                  period: 8, //动画时间，值越小速度越快
                  brushType: "fill", //波纹绘制方式 stroke, fill
                  scale: 0, //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                  normal: {
                    show: false,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) {
                      //圆环显示文字
                      return params.data.name;
                    },
                    fontSize: 19,
                  },
                  emphasis: {
                    show: true,
                  },
                },
                itemStyle: {
                  normal: {
                    show: false,
                    color: "#f00",
                  },
                },
                data: that.dataArr,
              };
            }, 600);
            option.series[1].data = that.cityFactoryData;
            option.series[2].data = that.cityFactoryData;
            console.log("option.series:");
            console.log(option.series);
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 600);
          } else if (name == "青岛市") {
            that.ifShow = false;
            that.cityName = "青岛市";
            that.cityCode = "370200";
            await that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "青岛市", "370200");
            setTimeout(() => {
              option.series[0] = {
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                  //涟漪特效
                  period: 8, //动画时间，值越小速度越快
                  brushType: "fill", //波纹绘制方式 stroke, fill
                  scale: 0, //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                  normal: {
                    show: false,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) {
                      //圆环显示文字
                      return params.data.name;
                    },
                    fontSize: 19,
                  },
                  emphasis: {
                    show: true,
                  },
                },
                itemStyle: {
                  normal: {
                    show: false,
                    color: "#f00",
                  },
                },
                data: that.dataArr,
              };
            }, 600);
            option.series[1].data = that.cityFactoryData;
            option.series[2].data = that.cityFactoryData;
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 600);
          } else if (name == "烟台市") {
            that.ifShow = false;
            that.cityName = "烟台市";
            that.cityCode = "370600";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "烟台市", "370600");
            option.series[0].data = convertData1(yantaidata);
            option.series[1].data = yantaidata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "潍坊市") {
            that.ifShow = false;
            that.cityName = "潍坊市";
            that.cityCode = "370700";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "潍坊市", "370700");
            option.series[0].data = convertData1(weifangdata);
            option.series[1].data = weifangdata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "菏泽市") {
            that.ifShow = false;
            that.cityName = "菏泽市";
            that.cityCode = "371700";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "菏泽市", "371700");
            option.series[0].data = convertData1(hezedata);
            option.series[1].data = hezedata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "日照市") {
            that.ifShow = false;
            that.cityName = "日照市";
            that.cityCode = "371100";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "日照市", "371100");
            option.series[0].data = convertData1(rizhaodata);
            option.series[1].data = rizhaodata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "威海市") {
            that.ifShow = false;
            that.cityName = "威海市";
            that.cityCode = "371000";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "威海市", "371000");
            option.series[0].data = convertData1(weihaidata);
            option.series[1].data = weihaidata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "枣庄市") {
            that.ifShow = false;
            that.cityName = "枣庄市";
            that.cityCode = "370400";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "枣庄市", "370400");
            option.series[0].data = convertData1(zaozhuangdata);
            option.series[1].data = zaozhuangdata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "临沂市") {
            that.ifShow = false;
            that.cityName = "临沂市";
            that.cityCode = "371300";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "临沂市", "371300");
            option.series[0].data = convertData1(linyidata);
            option.series[1].data = linyidata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "滨州市") {
            that.ifShow = false;
            that.cityName = "滨州市";
            that.cityCode = "371600";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "滨州市", "371600");
            option.series[0].data = convertData1(bingzhoudata);
            option.series[1].data = bingzhoudata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "东营市") {
            that.ifShow = false;
            that.cityName = "东营市";
            that.cityCode = "370500";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "东营市", "370500");
            option.series[0].data = convertData1(dongyingdata);
            option.series[1].data = dongyingdata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "淄博市") {
            that.ifShow = false;
            that.cityName = "淄博市";
            that.cityCode = "370300";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "淄博市", "370300");
            option.series[0].data = convertData1(zibodata);
            option.series[1].data = zibodata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "泰安市") {
            that.ifShow = false;
            that.cityName = "泰安市";
            that.cityCode = "370900";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "泰安市", "370900");
            option.series[0].data = convertData1(taiandata);
            option.series[1].data = taiandata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "聊城市") {
            that.ifShow = false;
            that.cityName = "聊城市";
            that.cityCode = "371500";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "聊城市", "371500");
            option.series[0].data = convertData1(liaochengdata);
            option.series[1].data = liaochengdata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "济宁市") {
            that.ifShow = false;
            that.cityName = "济宁市";
            that.cityCode = "370800";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "济宁市", "370800");
            option.series[0].data = convertData1(jiningdata);
            option.series[1].data = jiningdata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          } else if (name == "德州市") {
            that.ifShow = false;
            that.cityName = "德州市";
            that.cityCode = "371400";
            that.getLonLat();
            that.getSixData();
            that.$emit("changeArea", "德州市", "371400");
            option.series[0].data = convertData1(dezhoudata);
            option.series[1].data = dezhoudata;
            option.series[2].data = [];
            myChart.setOption(option, true); // 赋值后初始化
            setTimeout(() => {
              // 定时后启动飞线
              myChart.setOption(option, true);
            }, 500);
          }
        },
        // 数据展示
        data: [],
      };

      var defaultOpt = {
        mapName: "china", // 地图展示
        goDown: true, // 是否下钻
        bgColor: "#013954", // 画布背景色
        activeArea: [], // 区域高亮,同echarts配置项
        data: [],
        // 下钻回调(点击的地图名、实例对象option、实例对象)
        callback: function () {},
        // callback: function (name, option, instance) {},
      };
      var opt1 = "";
      if (opt) {
        opt1 = $.extend(defaultOpt, opt);
      }

      // 层级索引
      var name = [opt1.mapName];
      var idx = 0;
      var pos = {
        //层级位置
        leftPlus: 55,
        leftCur: 50,
        left: 10,
        top: 10,
      };

      var line = [
        //箭头
        [0, 0],
        [8, 11],
        [0, 22],
      ];

      // 头部导航style样式
      var style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: "#eee",
        lineColor: "rgba(147, 235, 248, .8)",
      };

      var handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function (i, o, n) {
          console.log(i);
          console.log(o);
          console.log(n);
          var breadcrumb = this.createBreadcrumb(n);

          var j = name.indexOf(n);
          var l = o.graphic.length;
          if (j < 0) {
            console.log("jinru1");
            o.graphic.push(breadcrumb);
            o.series = series;
            o.graphic[0].children[0].shape.x2 = 195;
            o.graphic[0].children[1].shape.x2 = 195;
            if (o.graphic.length > 2) {
              for (var x = 0; x < opt1.data.length; x++) {
                if (n === opt1.data[x].name + "市") {
                  o.series[0].data = handleEvents.initSeriesData(
                    opt1.data[x].data
                  );
                  break;
                } else o.series[0].data = [];
              }
            }
            name.push(n);
            idx++;
          } else {
            console.log("jinru2", j);
            o.graphic.splice(j + 2, l);
            if (o.graphic.length <= 2) {
              o.graphic[0].children[0].shape.x2 = 85;
              o.graphic[0].children[1].shape.x2 = 85;
              o.series[0].data = handleEvents.initSeriesData(data_tmp);
              o.series[0].symbol = zuanshi;
              o.series[0].symbolSize = 30;
              o.series[2].data = handleEvents.initSeriesData(data_tmp);
            }
            name.splice(j + 1, l);
            idx = j;
            pos.leftCur -= pos.leftPlus * (l - j - 1);
          }

          o.geo.map = n;
          o.geo.zoom = 1;
          i.clear();
          i.setOption(o);
          this.zoomAnimation();
          opt1.callback(n, o, i);
        },

        createBreadcrumb: function (name) {
          var cityToPinyin = {
            济南市: "jinan",
            青岛市: "qingdao",
            烟台市: "yantai",
            潍坊市: "weifang",
            菏泽市: "heze",
            日照市: "rizhao",
            威海市: "weihai",
            枣庄市: "zaozhuang",
            临沂市: "linyi",
            滨州市: "bingzhou",
            东营市: "dongying",
            淄博市: "zibo",
            泰安市: "taian",
            聊城市: "liaocheng",
            济宁市: "jining",
            德州市: "dezhou",
          };
          var breadcrumb = {
            type: "group",
            id: name,
            left: pos.leftCur + pos.leftPlus,
            top: pos.top + 3,
            children: [
              {
                type: "polyline",
                left: -90,
                top: -5,
                shape: {
                  points: line,
                },
                style: {
                  stroke: "#fff",
                  key: name,
                },
                onclick: function () {
                  var name = this.style.key;
                  handleEvents.resetOption(myChart, option, name);
                },
              },
              {
                type: "text",
                left: -68,
                top: "middle",
                style: {
                  text: name,
                  textAlign: "center",
                  fill: style.textColor,
                  font: style.font,
                },
                onclick: function () {
                  var name = this.style.text;
                  handleEvents.resetOption(myChart, option, name);
                },
              },
              {
                type: "text",
                left: -68,
                top: 10,
                style: {
                  name: name,
                  text: cityToPinyin[name]
                    ? cityToPinyin[name].toUpperCase()
                    : "",
                  textAlign: "center",
                  fill: style.textColor,
                  font: '12px "Microsoft YaHei", sans-serif',
                },
                onclick: function () {
                  // console.log(this.style);
                  var name = this.style.name;
                  handleEvents.resetOption(myChart, option, name);
                },
              },
            ],
          };

          pos.leftCur += pos.leftPlus;

          return breadcrumb;
        },

        // 设置effectscatter
        initSeriesData: function (data) {
          console.log(data, "22222222222");
          var temp = [];
          for (var i = 0; i < data.length; i++) {
            var geoCoord = sdGeoCoordMap[data[i].name];
            if (geoCoord) {
              temp.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value, data[i].level),
              });
            }
          }
          return temp;
        },

        zoomAnimation: function () {
          var count = null;
          var zoom = function (per) {
            if (!count) count = per;
            count = count + per;
            // console.log(per,count);
            myChart.setOption({
              geo: {
                zoom: count,
              },
            });
            if (count < 1)
              window.requestAnimationFrame(function () {
                zoom(0.2);
              });
          };
          window.requestAnimationFrame(function () {
            zoom(0.2);
          });
        },
      };

      var iconYellow =
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAAAXNSR0IArs4c6QAAA/tJREFUSEu9lm9olWUYxn/Xc3a21Wzm3I7NxFaUWFpJCfVFyKQIRiHI+kOOnRlIoEJ9ibAP+cGIIqgP0R8ozsnsD1gIfTAIEjMMoiiKSimliWl1dubENWfb3ueKczbNuc1zbND78X2v5/nd93Nfz/3eosrHxc7rIXVfjCwLgSZbpwW/YO+mpecTac9oNVupkujvY9nF6Vq9hLkbmE5/RGKzmnPbK+13QaD7sh1OlEdcWmmj0neJ7fz51yNasmN4Ov20wNFidnWwPgBS1cDOauwP1ZLvkPBU66YEuu/hBY61PwCzLwo2LrbZlMrkXq4amBSyOUnZ/wIrr5H7pZE2zX3n5Pl7TMrQRzqaXN/wO6j2PwPL9fQGNedfqQgcLXQ/EMT7M4GVk4Rdasm1VwQmxewzsjbPFAgcCy25KysDe7tfF6yfOdBDoSU/6TpNrmEx+6qtR/83YFLoekoKW2cMtA+FTP7aikfqQnaFpb0zBdpsS2VyXZWBWwje2H0I0zYTqOx2ZfK7KgJLgqTQtUEKU3aKKoP4Sc25pVO1t6lb29fr075q+FvQkioB58ocnbTXZLZ9XHVrKwndu2655X2Yi+o4Nm+lMrlp2+LUGTpbT2F4Pqm6x202Vp2l+E2J1yF6iMkxXfH24AVr6BOdVzNSswTcWv67lXuU7re9qjLU/TbPB+n4mNYmhiKpuJ+5bT9LW+J4ywMXOmYRZq3CzCu9jNAQ8K02NxK0ANNUGViG9ANHjH4EvgowlqF1gvrRT9W4rU/2pjqKA2tAsxCnYvTtQt0T//I+iXUcTXlVisBh8HWgxrOB2UOGXEB7EbOxh6mp3SkXu2/D3EwqHCXx5cZn5pLPDO+F8pCUP1iyeFLsfkLmWSCMn9rnSrRGrbleG1HouiYJujOFHjKsHKsIWezDoEXE2CP3Zu8FtWJ/VIoI6R7LT6aa889NdYzuy95FpDOaA6F38IXp5hf3ZR9z1IvgPRqpbSc9shY0KPd2LoeaW5CLmJuMngYGhF4bcXw33ZL/brr55PyAyln2Z5cSeXDM3WqU2ErpekUtRByUvT7N8eHVRM3BSkzsQlpxzmZFyd/EyMEQOArqBw8lUUrJddE0hcB8RxYhLQNa/q0jXwjeQKSJHkKDO8vW96/Zehq4A2nhuEsXCZegiycYoTqrDggORHtfkPaXl0QXqBnZXZpxJlx8965tRXU3oLiQSHpMy9wgZ7CaCFwGbrCpHzfEaZtThoGyi3EhSCXXQvAoCcdIp/ZrzpuHz8Q6TafpSFGsyxBrM4Q4B0JjCUTwJUTVTEg0KCEmp5EGQScxJwjDBb4/+odWTh7/K476k42xJcCXaXrmibbBEWlHUt1Jj6n+AZCptJsxJ5j+AAAAAElFTkSuQmCC";
      var iconGreen =
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAABBRJREFUSEutlk1slFUUhp/3fvNNSy0EEigErUKQFpiWQBqEdjAQJCZGNoo/MTGu1IVGFxqNBBoTo/Fno240MTG40WiMbogLoyjGdrCoGGGmlNqYgsivqMhPW2bmHnNpIdBOmSnlbu8557nn3Pfce8QEVou1xFUMpMDdKLz3+EM76elGFCcQBlVivMqaFkfY88BG0NRRPv8Cnwi90aG9v1cS7+pQQ2lS7aAtQHz1gDYIbOpU7q1y4PGhw8APQI+UC3Llvr3ZqdwzV/MZF9pmTZsFL08MOGxt8ERG2XfH8y0JXWmLF0ZEWUHyWqDAGUex4XvtO1LKvyS0zVLvCT12jcCRbO31jHIvVAY1ojRNJ4AZk4ECBzqVnVcRdKU1Lk0Q/zpJ4AX3AoP1Xeo7NDrWmPK2WtMGB9uuB7SIrf5Buc6y0LQ13Qt8dj2ght2RUe6bstA2S60T2n49oMCKTmV/qgC6tA6KR4UqeiLHO5xBfoi/p/+sw+fKQoNB2poyQOtksjVse0a59RWpNxi1Wuohhz6aJPS+jHIltVG6hMO9Gu5i2bWADXZnyK5A+IozDYarbMnKCNcBJCYILnh8eqe6d03o7b1onLbmdrCXJga11zrJbR4vyxBrTHnbbEEd1CxwcBMUZxh6FLSiMrD9CO59sIKw4+fh4CBR3x7tOXu5/yVoizXMrCZuE25OMDCQYfWChcA95T9xCsC3gt8M+oVODcfx3nC9xxno6lPf0KVMb7PG+TFxeBQiw4oG6wXrgLrKMrzSyjAvlBX2qYdjDifwpxPYth3qPqOlNvuGWuoecBB7Cj3CvQgKwHDOI4a+Nmw3qE/Yw0IPXo4w2Cp4x7BbQM1gt4NWj/zFRY9/UnDUEc0Gf6RDuW1qtUXNEXFrEfY7bHYYsgzrd/B0B7kvRgsibal2Q1sERcGmDmXfHl2N5XbrrBqSzxl6VuivYwzePIeqjeBq8wx8rLQ1NorkGo/9CX6WcFvBej3u8Z3a+12p8rZYS81UTvod6g/D2JjVYnNrqpjxlNArwH+DnG+oJr476MJz6kOtNRJDpO6PcGG0/Mdj7YLmkfL2gr402OXQvjx2qIvsicuzX2vzqs8Sz42IGyO0yCAtuDOMqoYFPb7qsP3gqkM1QyIX1LvamsOUcBdQG05j+A2gNcCU0kKyIVABLAGqGkdsfxh87lD38L4/2EHuqzCYX2qZJbYkOQ2WO1jsiJLgY48aBPMN5ghmgoVq1I6Agm+Y7AfAThsKQ/cJLlyTeh06PNwydipP4Zdd6um9eLgxj0Mo9zka6xMk68HXCaYL50YpVoaPHC705hXLQ174kx476nEHupQ9Ntqm/J9puGXMm1bFtFrIT0mgpEHsiKLz+IIgH6GhIYrnBtDpbnWfKdfb/wMbfnzyL5QtcAAAAABJRU5ErkJggg==";
      var iconBlue =
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAA+xJREFUSEutl39oVmUUxz/nuXdb79Q2aq5WYiVk6sCtzfd9paSECorQSFCL0T8RBBL0T0RR0EiQiug/C4Igoj+MyLKQov4wq6HvfWfmrImRziBMTSP3o+X77n2+ca8ydG1777bOf/e555zPOc8953nONWYgK3vUnKnlLsStODJ4zuHoG8rQ099qpbSuLI1ixwEtr/FsBR4Cwok2grMm3hyt47W+Nhup5rMqNBtpizneMFFXzZngmDk2FDqtbzrdaaH5SM9jbKsGu/y94C88a6O8HZrKbkpovqj7BF8YuJlAY13B8eF62vpbbXgy28mhexTmF9CfFMwsRbAtytoLqaHZSBuc8dEseYmZ4HxQpmXfHTY60c+kmeZ69b6JrrlAY1sv1hdz9lkqaL6oo8DSuUIRLxdy9lJa6BAwf85QeLuQtSdTQXNFjRjUzxUqeCfK2hOpoPmijgO3/A/QV6OsPZcWugPYPGeoZ1OUtw9TQbORNjnjgzlC/w4vcH3PGovr4wqZtGU6e1UTws+Im2cLlvFWtMq2pD4cYsVspM3OiLd5NjJcCrjtYIednBE0Vs4XtQtYPwvqU4WsbZ/KbupbRrJVvSwNYC9wXWqw6PHw6Mg8Tk91sf8Hmt+vRaphqSosdlCLYxHiGSCTAvyr4HUTJQnvHGfKxsBohqOXBzAObT+oxrox7kbjWYUylhksA1qBG6pCjRMSJw2OIn4Cksr1UHIhUaHD+uPnBJor6FoZ6+LMJC5grDFjI9BQFXRRYWySMSZe+06ed80uTR0BfYVO238RekAPW4WFHo45WIfxdLwukmh34dlXCThi4moHnxgsviyYT4eG6aptJKwps8KMvMH9iHswAow+Mx5RhdVADZ5dtvKQ5mUu0CXH8Ogon9fXcQajLM/GKG+7J2ba2auWwLMdow14L9rNVrrNT9TLFrXExE4z2mR0eXEkEFln/GB0y+Ue4DEZtSb24vjaoAXYIc8r0806U2397d9oYV09j0u8GN9WPuBexmhw0CQl/pODoNXBnQaqOBY58SxwVeJUDMj4FvgRzwkL+N17hl1IyY9hMuYF0OTFTeZYbiIPdIx/Y7ET+Jj41jLOFQaSz3NRcgXF25U1w5mjWZ4HMdrH4SkrKonT8CZ+EXxp4nBSscYpK/NVPL5c0afte9QYzqc9gCWI0DsCizOI20U042hALEBJ1PEcXBb8E7eGGYPynDU4JeOEiWTolvhjLOTw950cA9N4y0xMYu0ehecbuLG2RIuMJhmNAWR0qcWmSbqMMUiFP4HTwG+F1TY4Ub/qhD9u0C23YiP1defIuPrk16ImHMOPZihpkHLlGkbS/s/8C8bqdUvZhIl6AAAAAElFTkSuQmCC";
      var iconRed =
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAjxJREFUOE+N1EFIVFEUxvH/90bHTCOMDKnJSGgRZoQQSlBRBEFEFDW0qUUlwgwthWrTXLFtq3AMCRKKFrp2I1S0CJHEiIKIAosaDLGyzGbyOe/EKELWjM+7eYtz7o+Pe+67osQyF49CbRuencZUD0wCQ9h8t1zvVKl9KlYw1xaD6CBid5H6JNIJXe8eKbb3P9CcK4PJEURzqRTAFBY0yt0upF62ioCJc0j3VsCWSjeVSneEg52JflB8FeA7pdI7wkGXGEZqDQctp1RPZTjYmXwEHAoFjWm5dM1qwBTgQkEYVCp9PBx0yTrEW6B6RdQ4KpceCgULDeaSlxG3SoJGv1z6bOg9NHdpA1TUE2ETeUsh7SuyKYPZVbBPRDRBPvtBri+31LdwD80lqyF/AM+LEWg7sibQVqARiPyDfsQsA7xHNgreNJp/RbD5mZwLZO3t5WwpO4NsPaaLwN5VDGSp5TfQh2wMnzfq6nki60ruxGw/RivoAvATbAC8x4gxgtkMqjqI+U/xvQrKvW1AM56dwnQYyCI6MHxmZh7IXKIBjyMEakEUEmYxBoCH5HlNZG6CXPksa7KGX7WeqDUgWjBOAi3ALxRcWfgGX+7LQHQmjoHFIHIerDCIoq9QkaPIYsFdPL3Azw+rq/fl4lDi8QhNG/eAGgms8H/uAsWQ1YDWAWuB+YUU8H3xtbFxPJ5jZPD9Ud24M16wliUx5zyYqsPzawlUg1SFBZXgRZHyEMyBcsh+IO8rZfZZ13q+/Z38D+uF1si3KyZZAAAAAElFTkSuQmCC";
      var mapTextBack =
        "image://data:image/png;base64,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";
      var zuanshi =
        "image://data:image/png;base64,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";

      var convertData = function (data) {
        data.forEach((item) => {
          item.symbol =
            item.value[2] < 1
              ? iconYellow
              : item.value[2] < 6 && item.value[2] >= 1
              ? iconGreen
              : iconBlue;
          item.symbolSize = 20;
        });
        return data;
      };

      var convertData1 = function (data) {
        data.forEach((item) => {
          item.symbol = iconYellow;
          item.symbolSize = 20;
        });
        return data;
      };
      var symbolFunc = function (data) {
        var iconColor;
        data.forEach((item) => {
          iconColor =
            item.coalAvaDay < 7
              ? iconRed
              : item.coalAvaDay > 14
              ? iconGreen
              : iconYellow;
        });
        return iconColor;
      };

      var data_tmp = [
        { name: "济南市", value: 24 },
        { name: "青岛市", value: 48 },
        { name: "烟台市", value: 48 },
        { name: "潍坊市", value: 61 },
        { name: "菏泽市", value: 22 },
        { name: "日照市", value: 18 },
        { name: "威海市", value: 35 },
        { name: "枣庄市", value: 20 },
        { name: "临沂市", value: 52 },
        { name: "滨州市", value: 88 },
        { name: "东营市", value: 30 },
        { name: "淄博市", value: 30 },
        { name: "泰安市", value: 36 },
        { name: "聊城市", value: 46 },
        { name: "济宁市", value: 56 },
        { name: "德州市", value: 28 },
      ];

      var converntData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = sdGeoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };

      var series = [];
      [["济南市", data_tmp]].forEach(function (item, i) {
        series.push(
          // 下面圆点
          {
            symbol: zuanshi,
            symbolSize: 30,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false, //是否显示地名
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "#fff",
              },
            },
            name: "light",
            type: "scatter",
            coordinateSystem: "geo",
            data: converntData(
              data_tmp
                .sort(function (a, b) {
                  return b.value - a.value;
                })
                .slice(0, 20)
            ),
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
          },
          {
            type: "map",
            map: "china",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#FFFFFF",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: false,
            data: data_tmp,
          },
          // 黄圈圈
          {
            name: "Top 5",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: mapTextBack,
            symbolSize: [70, 30],
            symbolOffset: [0, -33],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  fontFamily: "Adobe Heiti Std",
                  fontWeight: "bold",
                  color: "#FFFFFF",
                },
                formatter(value) {
                  if (value.length > 2) {
                    return "值是：" + value.data.value[2];
                  } else {
                    return value.data.name;
                  }
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#dfae10", //标志颜色
              },
            },
            data: converntData(
              data_tmp
                .sort(function (a, b) {
                  return b.value - a.value;
                })
                .slice(0, 20)
            ), // 流量最大的前
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            zlevel: 1,
          }
        );
      });

      console.log("series");
      console.log(series);

      var that = this;
      var option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0)",
          formatter: function (item) {
            console.log(item, "item!!!!");
            if (item.componentSubType === "lines") {
              var tipHtml1 = "";
              tipHtml1 =
                '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' +
                item.data.name +
                "</div>" +
                '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                '<span style="font-size:18px;font-weight:bold;">' +
                "在运机组数：" +
                item.data.value +
                " " +
                "</span>" +
                "</div>" +
                "</div>";
              return tipHtml1;
            } else if (item.componentSubType === "effectScatter") {
              var tipHtml2 = "";
              tipHtml2 =
                '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' +
                item.data.name +
                "</div>" +
                '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                '<span style="font-size:18px;font-weight:bold;">' +
                "在运机组数：" +
                item.data.value[2] +
                " " +
                "</span>" +
                "</div>" +
                "</div>";
              return tipHtml2;
            } else if (item.componentSubType === "scatter") {
              var tipHtml3 = "";
              tipHtml3 =
                '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' +
                item.data.name +
                "</div>" +
                '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                '<span style="font-size:18px;font-weight:bold;">' +
                "在运机组数：" +
                item.data.value[2] +
                " " +
                "</span>" +
                "</div>" +
                "</div>";
              return tipHtml3;
            }
          },
        },
        backgroundColor: "rgb(0,0,0,0)", //背景色透明
        graphic: [
          {
            type: "group",
            left: pos.left,
            top: pos.top - 4,
            children: [
              {
                type: "line",
                left: 0,
                top: -20,
                shape: {
                  x1: 0,
                  y1: 0,
                  x2: 85,
                  y2: 0,
                },
                style: {
                  stroke: style.lineColor,
                },
              },
              {
                type: "line",
                left: 0,
                top: 20,
                shape: {
                  x1: 0,
                  y1: 0,
                  x2: 85,
                  y2: 0,
                },
                style: {
                  stroke: style.lineColor,
                },
              },
            ],
          },
          {
            id: name[idx],
            type: "group",
            left: pos.left + 2,
            top: pos.top,
            children: [
              {
                type: "polyline",
                left: 90,
                top: -12,
                shape: {
                  points: line,
                },
                style: {
                  stroke: "transparent",
                  key: name[0],
                },
                onclick: function () {
                  var name = this.style.key;
                  handleEvents.resetOption(myChart, option, name);
                },
              },
              {
                type: "text",
                left: 0,
                top: "middle",
                style: {
                  text: name[0] === "山东" ? "山东省" : name[0],
                  textAlign: "center",
                  fill: style.textColor,
                  font: style.font,
                },

                onclick: function () {
                  that.ifShow = true;
                  that.$emit("changeArea", "山东省");
                  handleEvents.resetOption(myChart, option, "山东");
                },
              },
              {
                type: "text",
                left: 0,
                top: 10,
                style: {
                  text: "SHANDONG",
                  textAlign: "center",
                  fill: style.textColor,
                  font: '12px "Microsoft YaHei", sans-serif',
                },
                onclick: function () {
                  that.ifShow = true;
                  that.$emit("changeArea", "山东省");
                  handleEvents.resetOption(myChart, option, "山东");
                },
              },
            ],
          },
        ],
        // 暂时先注释
        // visualMap: {
        //   //图例值控制
        //   min: 0,
        //   max: 1,
        //   calculable: true,
        //   show: false,
        //   color: ["#f44336", "#fc9700", "#ffde00", "#ffde00", "#00eaff"],
        //   textStyle: {
        //     color: "#fff",
        //   },
        // },
        geo: {
          map: "山东",
          layoutCenter: ["55%", "50%"],
          layoutSize: "135%",
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            emphasis: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          roam: true, //是否允许缩放
          mapLocation: {
            width: "110%",
            height: "97%",
          },

          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
              shadowColor: "rgba(128, 217, 248, 1)",
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10,
            },
            emphasis: {
              itemStyle: {
                areaColor: "#FFD181",
                borderColor: "#404a59",
                borderWidth: 1,
              },
            },
          },
        },
        series: series,
      };
      myChart.setOption(option);
      myChart.on("click", function (params) {
        var _self = this;
        if (cityMap[params.name]) {
          var url = cityMap[params.name];
          echarts.registerMap(params.name, url);
          handleEvents.resetOption(_self, option, params.name);
        }
      });
    }
