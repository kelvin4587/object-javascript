AdFrame.Frame = AdFrame.Class({
    app: null,
    scope: null,
    top: null,
    controllerProvider:null,
    menu: null,
    content: null,
    dataSource: null,
    getContent: function () {
        return this.content;
    },
    getDataSource: function () {
        return this.dataSource;
    },
    getApp : function(){
        return this.app;
    },
    getControllerProvider : function(){
        return this.controllerProvider;
    },
    initialize: function () {
        this.dataSource = new AdFrame.DataSource();
        this.dataSource.setParent(this);
    },
    load: function () {
        
        this.initView();
    },
    initView: function () {

    }
});