// console.log("Age picker called");
var scrollerOptions = {
  mouseWheel: true,
  snap: "li",
  momentum: true,
  bounce: true,
};

function setValuePicker(id) {
  // $.fn.hasAttr = function (name) {

  //   return this.attr(name) !== undefined;
  // };

  $(`#${id}`).each(function (index) {
    $(this).html("<div><ul></ul></div>");
    // shadow options
    if ($(this).hasClass("shadow")) {
      $(this).append('<div class="spinner_shadow inner_shadow"></div>');
    } else if ($(this).hasClass("shadow_flat")) {
      $(this).append('<div class="spinner_shadow inner_shadow_flat"></div>');
    }
    var unit = "";
    // unit options
    if ($(this).hasAttr("unit")) {
      $(this).append("<sup>" + $(this).attr("unit") + "</sup>");
    }

    // tap up/down regions
    $(this).append(
      '<div class="tap_area value_up"><div class="arrow up"></div></div><div class="tap_area value_down"><div class="arrow down"></div></div>'
    );

    // min/max LI list
    var numLIs = "";
    var label;
    var max = parseInt($(`#${id}`).attr("maxValue")); // default
    console.log(max);
    var zeros = true;
    var increment = 1.0;
    var startingValue = 30.0;
    if ($(this).attr("zero_padded") == "false") zeros = false;
    if ($(this).hasAttr("increment")) {
      increment = $(this).attr("increment");
      increment = Number(increment);
    }
    if ($(this).hasAttr("max")) max = parseInt($(this).attr("max")); // alert(i + '.) ' + $(this).hasAttr('max'));
    var i = 0;
    for (i = startingValue; i < max + 1; i += increment) {
      var iValue = String(i);
      if ($(this).hasAttr("noOfDecimals")) {
        noOfDecimals = $(this).attr("noOfDecimals");
        iValue = String(i.toFixed(noOfDecimals));
      }
      // if (String(iValue).indexOf(".5", 0) > -1) {
      //   var iParts = iValue.split("_");
      //   iValue = iParts[0] + "<sup>." + iParts[1] + "</sup>";
      // } else {
      //   iValue = iValue + "<sup></sup>";
      // }
      iValue = iValue + "<sup></sup>";
      if (!zeros || i > 99) {
        label = "<span>" + iValue + "</span>";
      } else if (i < 1) {
        label = "<span>000</span><span></span>";
      } else {
        if (i < 10) {
          label = "<span>00</span><span>" + iValue + "</span>";
        } else if (i < 100) {
          label = "<span>0</span><span>" + iValue + "</span>";
        }
        // in first condition above
      }
      numLIs += "<li>" + label + "</li>";
    }
    $("ul", $(this)).append(numLIs);
    if (increment < 1) {
      $("ul", $(this)).addClass("decimals");
    }
  });

  // setup iScrolls and events
  $(`#${id}`)
    .bind("mouseup touchstart", function () {
      $(".focused").removeClass("focused");
      $(this).addClass("focused");
    })
    .each(function (index) {
      var spinScroll = undefined;
      spinScroll = new IScroll(this, scrollerOptions);
      // when spinner scrolling ends, refresh its value attribute using currentPage.pageY
      spinScroll.on("scrollEnd", function () {
        updateSpinnerValue(this);
      });

      // start spinner at position based on value attribute on .spinner
      var startingValue = 1;
      if ($(`#${id}`).eq(index).attr("value"))
        startingValue = $(`#${id}`).eq(index).attr("value");
      spinScroll.goToPage(0, pick[`${id}`] ? pick[`${id}`] : startingValue, 0);

      document.getElementById($(this).attr("id")).IScrollInstance = spinScroll;
    }); // .spinners each

  var hammertime = $(".tap_area").hammer();

  /*      $('.tap_area').each(function() {
   */
  // on elements in the toucharea, with a stopPropagation
  hammertime
    .on("tap", $(this), function (ev) {
      var spinnerScroller = getIScrollInstanceByElementID(
        $(this).parent().attr("id")
      );
      //var liHeight = $(spinnerScroller).find('li').height();
      var valueUp = 1;
      if ($(this).hasClass("value_down")) valueUp = -1;
      var newPage = parseInt(spinnerScroller.currentPage.pageY) + valueUp;
      refreshSpinnerPosition(spinnerScroller, 0, newPage, 1);
      /*e.stopPropagation();          
            ev.stopPropagation();*/
    })
    .on("doubletap", $(this), function (ev) {
      /*var spinnerScroller = getIScrollInstanceByElementID($(this).parent().attr('id'));            
            //var liHeight = $(spinnerScroller).find('li').height();
            var valueUp = 10;
            if($(this).hasClass('value_down')) valueUp = -10;
            var newPage = parseInt(spinnerScroller.currentPage.pageY)+valueUp;
            refreshSpinnerPosition(spinnerScroller,0,newPage,1);
            /*e.stopPropagation();          
            ev.stopPropagation();*/
    });
}

// let age = 35;

// document.getElementById("spinner_01").innerHTML = age;

$(document).ready(function () {
  $.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined;
  };

  $(".spinner").each(function (index) {
    $(this).html("<div><ul></ul></div>");
    // shadow options
    if ($(this).hasClass("shadow")) {
      $(this).append('<div class="spinner_shadow inner_shadow"></div>');
    } else if ($(this).hasClass("shadow_flat")) {
      $(this).append('<div class="spinner_shadow inner_shadow_flat"></div>');
    }
    var unit = "";
    // unit options
    if ($(this).hasAttr("unit")) {
      $(this).append("<sup>" + $(this).attr("unit") + "</sup>");
    }

    // tap up/down regions
    $(this).append(
      '<div class="tap_area value_up"><div class="arrow up"></div></div><div class="tap_area value_down"><div class="arrow down"></div></div>'
    );

    // min/max LI list
    var numLIs = "";
    var label;
    var max = 100; // default
    // var min = 1; // default
    var zeros = true;
    var increment = 1.0;
    var startingValue = 0.0;
    if ($(this).attr("zero_padded") == "false") zeros = false;
    if ($(this).hasAttr("increment")) {
      increment = $(this).attr("increment");
      increment = Number(increment);
    }
    if ($(this).hasAttr("max")) max = parseInt($(this).attr("max")); // alert(i + '.) ' + $(this).hasAttr('max'));
    var i = 0;

    // if ($(this).hasAttr("min")) min = parseInt($(this).attr("min")); // alert(i + '.) ' + $(this).hasAttr('max'));
    // var i = 0;

    // for (i = startingValue; i < max + 1; i += increment) {
    for (i = startingValue; i < max + 1; i += increment) {
      var iValue = String(i);
      if (String(iValue).indexOf(".5", 0) > -1) {
        var iParts = iValue.split(".");
        iValue = iParts[0] + "<sup>." + iParts[1] + "</sup>";
      } else {
        iValue = iValue + "<sup></sup>";
      }

      if (!zeros || i > 99) {
        label = "<span>" + iValue + "</span>";
      } else if (i < 1) {
        label = "<span>000</span><span></span>";
      } else {
        if (i < 10) {
          label = "<span>00</span><span>" + iValue + "</span>";
        } else if (i < 100) {
          label = "<span>0</span><span>" + iValue + "</span>";
        }
        // in first condition above
      }
      numLIs += "<li>" + label + "</li>";
    }
    $("ul", $(this)).append(numLIs);
    if (increment < 1) {
      $("ul", $(this)).addClass("decimals");
    }
  });

  // setup iScrolls and events
  $(".spinner")
    .bind("mouseup touchstart", function () {
      $(".focused").removeClass("focused");
      $(this).addClass("focused");
    })
    .each(function (index) {
      var spinScroll = undefined;
      spinScroll = new IScroll(this, scrollerOptions);
      // when spinner scrolling ends, refresh its value attribute using currentPage.pageY
      spinScroll.on("scrollEnd", function () {
        updateSpinnerValue(this);
      });

      // start spinner at position based on value attribute on .spinner
      var startingValue = 1;
      if ($(".spinner").eq(index).attr("value"))
        startingValue = $(".spinner").eq(index).attr("value");
      spinScroll.goToPage(0, startingValue, 1);

      document.getElementById($(this).attr("id")).IScrollInstance = spinScroll;
    }); // .spinners each

  var hammertime = $(".tap_area").hammer();

  /*      $('.tap_area').each(function() {
   */
  // on elements in the toucharea, with a stopPropagation
  hammertime
    .on("tap", $(this), function (ev) {
      var spinnerScroller = getIScrollInstanceByElementID(
        $(this).parent().attr("id")
      );
      //var liHeight = $(spinnerScroller).find('li').height();
      var valueUp = 1;
      if ($(this).hasClass("value_down")) valueUp = -1;
      var newPage = parseInt(spinnerScroller.currentPage.pageY) + valueUp;
      refreshSpinnerPosition(spinnerScroller, 0, newPage, 1);
      /*e.stopPropagation();          
            ev.stopPropagation();*/
    })
    .on("doubletap", $(this), function (ev) {
      /*var spinnerScroller = getIScrollInstanceByElementID($(this).parent().attr('id'));            
            //var liHeight = $(spinnerScroller).find('li').height();
            var valueUp = 10;
            if($(this).hasClass('value_down')) valueUp = -10;
            var newPage = parseInt(spinnerScroller.currentPage.pageY)+valueUp;
            refreshSpinnerPosition(spinnerScroller,0,newPage,1);
            /*e.stopPropagation();          
            ev.stopPropagation();*/
    });
  // document.getElementById("step-2").classList.add("d-none");
  // document.getElementById("step-2").style.visibility = "unset";
}); // doc ready

function getIScrollInstanceByElementID(spinnerElementID) {
  return (spinnerScroller =
    document.getElementById(spinnerElementID).IScrollInstance);
}

function refreshSpinnerPosition(spinner, x, y, a) {
  console.log("Spinner is " + spinner);
  spinner.goToPage(x, y, a);
  updateSpinnerValue(spinner);
}

let pick = {};

function updateSpinnerValue(spinner) {
  var y = spinner.currentPage.pageY;
  var selectedValue = $(spinner.wrapper).find("li").eq(y).text();
  $(spinner.wrapper).attr("value", parseInt(selectedValue));
  console.log(
    "hi" +
      "updateSpinnerValue(): Spinner[" +
      $(spinner.wrapper).attr("id") +
      "].value = [" +
      parseInt(selectedValue) +
      "]"
  );

  pick[$(spinner.wrapper).attr("id")] = selectedValue;

  if ($(spinner.wrapper).attr("id") === "spinner_01") {
    age = pick.spinner_01;
  }
}

function getNumberFromKeyCode(kc) {
  var n = "?";
  kc = kc.toString();
  switch (kc) {
    case "48":
    case "96":
      n = "0";
      break;
    case "49":
    case "97":
      n = "1";
      break;
    case "50":
    case "98":
      n = "2";
      break;
    case "51":
    case "99":
      n = "3";
      break;
    case "52":
    case "100":
      n = "4";
      break;
    case "53":
    case "101":
      n = "5";
      break;
    case "54":
    case "102":
      n = "6";
      break;
    case "55":
    case "103":
      n = "7";
      break;
    case "56":
    case "104":
      n = "8";
      break;
    case "57":
    case "105":
      n = "9";
      break;
  }

  return n;
}

$.holdReady(true);
$.getScript(
  "https://rawgithub.com/cubiq/iscroll/master/build/iscroll.js",
  function () {
    $.getScript(
      "https://rawgithub.com/EightMedia/hammer.js/v1.0.5/dist/jquery.hammer.min.js",
      function () {
        $.holdReady(false);
      }
    );
  }
);
