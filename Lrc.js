/**
 * Created by plter on 6/24/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * 创建一个Lrc对象
     * @param lrcString {String} 同步歌词字符串
     * @constructor
     */
    function Lrc(lrcString) {//创建Lrc对象

        //歌词数据保存在此对象中,方便获取
        this.data = {};//动态创建对象

        //把歌词分割成行数组
        var lines = lrcString.split("\n");
        //alert(lines);
        (function (self) {
            lines.forEach(function (line) {
                var startIndex = -1;
                startIndex = line.indexOf("[");//查找 [
                if (startIndex != -1) {
                    var minStr = line.substr(startIndex + 1, 2);
                    var min = parseInt(minStr);
                     //console.log(min);
                    var secStr = line.substr(startIndex + 4, 2);
                    var sec = parseInt(secStr);
                     //console.log(sec);
                    self.data[min * 60 + sec] = line.substr(startIndex + 10);
                }
            });
        })(this);

        //console.log(this.data);
    }

    Lrc.prototype.getContent = function (timeTag) {
        return this.data[timeTag];
       
    };
    ucai.Lrc = Lrc;
})();