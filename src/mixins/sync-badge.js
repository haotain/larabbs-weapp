export default {
  async onShow() {
    this.updateUnreadCont()
  },
  watch: {
    unreadCount: function() {
      this.updateUnreadCont()
    }
  },
  methods: {
    updateUnreadCont() {
      if (this.unreadCount) {
        wx.setTabBarBadge({
          index: 1,
          text: this.unreadCount.toString()
        })
      } else {
        wx.removeTabBarBadge({
          index: 1,
        })
      }
    }
  }
}