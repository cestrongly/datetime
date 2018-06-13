!(function () {
  'use strict';

  /**
   * 时间格式
   * @type {{createTime}}
   */
  window['DateTime'] = function () {
    return {
      createTime: function (dateStr) {
        var dateArr = dateStr.replace(/(\/|-|:)/g, ' ').split(' ').map(function (m) {
          return parseInt(m)
        });
        return new Date(dateArr[0], // year
          dateArr[1] - 1, // month
          dateArr[2] | 0, // day
          dateArr[3] | 0, // hour
          dateArr[4] | 0, // minute
          dateArr[5] | 0, // second
          dateArr[6] | 0); // millisecond
      }
    }
  }();

})();

