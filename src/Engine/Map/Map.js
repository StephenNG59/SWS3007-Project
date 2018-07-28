"use scrict";

function Map(mapFile, eventFile) {
    var mapJson = gEngine.ResourceMap.retrieveAsset(mapFile);
    this.mWidth = Number(mapJson["width"]);
    this.mHeight = Number(mapJson["height"]);
    this.mData = mapJson["data"];
    this.mContent = mapJson["content"];
    this.mBorn = mapJson["born"];
    this.mEvents = gEngine.ResourceMap.retrieveAsset(eventFile);

    this.mViewWidth = 970;
    this.mViewHeight = 600;

    this.mPixelArray = new Array();
    this.mItems = [];
    // this.mEventBuffer = null;
}

Map.prototype.addItems = function () {
    var mapInfo = this.mData;
    var i;
    for (i = 0; i < mapInfo.length; ++i) {
        var tmp = new Renderable();
        var tmpCenter = this.pixelCenter(i);
        tmp.getXform().setPosition(tmpCenter[0], tmpCenter[1]);
        switch (Math.floor(mapInfo[i] / 100)) {
            case 1:
            if (Math.floor(mapInfo[i] % 100 / 10))
                tmp.setColor([0.6, 0.8, 0.2, 1]);
            else
                tmp.setColor([0.8, 0.8, 0.8, 1]);
            this.mItems.push(tmp);
            break;
            case 2:
            if (Math.floor(mapInfo[i] % 100 / 10)) {
                tmp.setColor([1, 1, 0.2, 1]);
                this.mItems.push(tmp);
            }
            break;
        }
    }
}
