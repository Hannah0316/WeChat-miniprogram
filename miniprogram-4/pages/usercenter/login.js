App({
	onLaunch:function(){
Page({
	data: {
		motto: 'Welcome to (XXX)',
		intro:'(XXX), the best debating app',
    userInfo: {},
		hasUserInfo: false,
		tabbar:wx.hideTabBar({
		}),
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
	login: function(e) {
		wx.showToast({title: 'Loading', icon: 'loading', duration: 2000});
		setTimeout(function() {
			console.log(wx.switchTab({
				url:'../../pages/index/index',
				success:function(){
					console.log("called switchtab.");
				}
			}))
	 }, 2000);

				}
	
})
	}
})	

		
