var EasemobWidget = EasemobWidget || {};
EasemobWidget.api = {

    //get channel 相关信息
    getTo: function ( tenantId ) {
        return $.ajax({
			url: '/v1/webimplugin/targetChannels'
			, data: {
				tenantId: tenantId
			}
			, cache: true 
		}).then(function ( r ) { return r; });
    }

    //get 上下班状态
    , getStatus: function ( tenantId ) {
        return $.ajax({
			url: '/v1/webimplugin/timeOffDuty'
			, data: {
				tenantId: tenantId
			}
			, cache: false
		}).then(function ( r ) { return r; });
    }


    , getTheme: function ( tenantId ) {
        return $.ajax({
			url:'/v1/webimplugin/theme/options'
			, data: {
				tenantId: tenantId
			}
			, cache: false
		}).then(function ( r ) { return r; });
    }

    //get 广告语
    , getWord: function ( tenantId ) {
        return $.ajax({
			url: '/v1/webimplugin/notice/options'
			, data: {
				tenantId: tenantId
			}
			, cache: false
		}).then(function ( r ) { return r; });
    }

    , getPwd: function ( obj, tenantId ) {
		return $.ajax({
			url: '/v1/webimplugin/visitors/password'
			, data: {
				userId: obj.user,
				tenantId: tenantId
			}
			, cache: false
		}).then(function ( r ) { return r; });
    }

    , getGroup: function ( obj, tenantId ) {
        return $.ajax({
			url: ['/v1/webimplugin/visitors/',
				obj.user,
				'/ChatGroupId?tenantId=' + tenantId + '&techChannelInfo=',
				encodeURIComponent(obj.orgName + '#' + obj.appName + '#' + obj.to)].join('')
			, cache: false
		}).then(function ( r ) { return r; });
    }


    , getHistory: function ( from, size, chatGroupId, tenantId ) {
        return $.ajax({
			url: '/v1/webimplugin/visitors/msgHistory'
			, data:{
				fromSeqId: from 
				, size: size 
				, chatGroupId: chatGroupId || -1
				, tenantId: tenantId
			}
			, cache: false
		}).then(function ( r ) { return r; });
    }

    , getUser: function ( obj, tenantId ) {
        return $.ajax({
			url: '/v1/webimplugin/visitors?tenantId=' + tenantId
			, contentType: 'application/json'
			, type: 'post'
			, data: JSON.stringify({
				orgName: obj.orgName
				, appName: obj.appName
				, imServiceNumber: obj.to
				, tenantId: tenantId
			})
		}).then(function ( r ) { return r; });
    }


    , getSession: function ( user, obj ) {
        return $.ajax({
			url: '/v1/webimplugin/visitors/' + user + '/CurrentServiceSession?techChannelInfo=' + obj.orgName + '%23' + obj.appName + '%23' + obj.to + '&tenantId=' + obj.json.tenantId
			, contentType: 'application/json'
		}).then(function ( r ) { return r; });
    }


    , getSystemGreeting: function ( obj ) {
        return $.ajax({
			url: '/v1/webimplugin/welcome?tenantId=' + obj.json.tenantId
			, contentType: 'application/json'
		}).then(function ( r ) { return r; });
    }


    , getRobertGreeting: function ( obj ) {
        return $.ajax({
			url: '/v1/Tenants/' + obj.json.tenantId + '/robots/visitor/greetings?tenantId=' + obj.json.tenantId
			, contentType: 'application/json'
		}).then(function ( r ) { return r; });
    }

	, sendVisitorInfo: function ( tenantId, visitorId, referrer ) {
        return $.ajax({
			url: '/v1/webimplugin/tenants/' + tenantId + '/visitors/' + visitorId + '/attributes?tenantId=' + tenantId
			, type: 'post'
			, contentType: 'application/json'
			, data: JSON.stringify({ referer: referrer || location.href })
		}).then(function ( r ) { return r; });
    }
};
