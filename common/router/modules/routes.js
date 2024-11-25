const routes = [
	{
	 path: "/pages/login/login",
	 name: 'login',
		 meta: {
			 title: '登录',
		 },
	},
	{
		path: "/pages/login/loginOauth2",
		name: 'oauth2Login',
		meta: {
			title: 'oauth2登录',
		},
	},
	{
		path: "/pages/login/agreement",
		name: 'agreement',
		meta: {
			title: '协议',
		},
	},
	{
		path: "/pages/homepage/index",
		name: 'homepage',
		meta: {
			title: '主页',
		},
	},
	{
		path: "/pages/login/register",
		name: 'register',
		meta: {
			title: '注册',
		},
	},
	{
		path: "/pages/appointment/index",
		name: 'appointment',
		meta: {
			title: '预 约',
		},
	},
	{
		path: "/pages/appointment/dangerous/index",
		name: 'dangerous',
		meta: {
			title: '危险品出入预约',
		},
	},
	{
		path: "/pages/appointment/dangerousSuccess/index",
		name: 'dangerousSuccess',
		meta: {
			title: '危险品出入预约成功',
		},
	},
	{
		path: "/pages/appointment/drivingRoute/index",
		name: 'drivingRoute',
		meta: {
			title: '查看行驶路线图',
		},
	},
	{
		path: "/pages/appointment/bindingDetails/index",
		name: 'bindingDetails',
		meta: {
			title: '查看绑定定位卡',
		},
	},
	{
		path: "/pages/appointment/normal/index",
		name: 'normal',
		meta: {
			title: '正常出入预约',
		},
	},
	{
		path: "/pages/appointment/normalSuccess/index",
		name: 'normalSuccess',
		meta: {
			title: '正常出入预约成功',
		},
	},
	{
		path: "/pages/applicationRecord/index",
		name: 'applicationRecord',
		meta: {
			title: '申请记录',
		},
	},
	{
		path: "/pages/noteDetails/index",
		name: 'noteDetails',
		meta: {
			title: '申请单详情',
		},
	},
	{
		path: "/pages/bindingRecord/index",
		name: 'bindingRecord',
		meta: {
			title: '定位卡绑定记录',
		},
	},
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/index/index',
      name: 'index',
        meta: {
	        title: '主页',
	    },
    },
	{
	    //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
	  path: '/pages/home/home',
	  //aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
	  name: 'home',
	    meta: {
	        title: '首页',
	    },
	},
    {
	    path: '/pages/user/people',
        name: 'people',
        meta: {
	        title: '个人中心',
	    },
	},
	{
	    path: '/pages/user/userdetail',
	    name: 'userdetail',
	    meta: {
	        title: '个人详情',
	    },
	},
	{
	    path: '/pages/user/useredit',
	    name: 'useredit',
	    meta: {
	        title: '个人编辑',
	    },
	},
	{
	    path: '/pages/user/userexit',
	    name: 'userexit',
	    meta: {
	        title: '退出',
	    },
	},
	{
	    path: '/pages/user/location',
	    name: 'location',
	    meta: {
	        title: '定位',
	    },
	},
	{
	    path: '/pages/common/exit',
	    name: 'exit',
	    meta: {
	        title: '退出',
	    },
	},
	{
	    path: '/pages/common/success',
	    name: 'success',
	    meta: {
	        title: 'success',
	    },
	},{
	  path: '/pages/addressbook/address-book',
	  name: 'addressBook',
	    meta: {
	        title: 'addressBook',
	    },
	},
	{
	  path: '/pages/addressbook/level-address-book',
	  name: 'levelAddressBook',
	    meta: {
	        title: 'levelAddressBook',
	    },
	},
	{
	  path: '/pages/addressbook/member',
	  name: 'member',
	    meta: {
	        title: 'member',
	    },
	},
	{
	  path: '/pages/addressbook/address-detail',
	  name: 'addressDetail',
	    meta: {
	        title: 'addressDetail',
	    },
	},
	{
	    path: '/pages/annotation/index',
	    name: 'annotation',
	    meta: {
	        title: '通知公告',
	    },
	},
	{
	    path: '/pages/annotation/annotationList',
	    name: 'annotationList',
	    meta: {
	        title: '通知公告',
	    },
	},
	{
	    path: '/pages/annotation/annotationDetail',
	    name: 'annotationDetail',
	    meta: {
	        title: '通知详情',
	    },
	},
	{
	    path: '/pages/common/helloWorld',
	    name: 'helloWorld',
	    meta: {
	        title: 'helloWorld',
	    },
	},
	{
	    path: '/pages/component/card',
	    name: 'card',
	    meta: {
	        title: 'card',
	    },
	},
]
export default routes