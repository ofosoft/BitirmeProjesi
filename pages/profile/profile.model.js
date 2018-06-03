var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());
export { UserModel };
var ProfilePostModel = (function () {
    function ProfilePostModel() {
        this.likes = 0;
        this.comments = 0;
        this.liked = false;
    }
    return ProfilePostModel;
}());
export { ProfilePostModel };
var ProfileModel = (function () {
    function ProfileModel() {
        this.user = new UserModel();
        this.following = [];
        this.followers = [];
        this.posts = [];
    }
    return ProfileModel;
}());
export { ProfileModel };
//# sourceMappingURL=profile.model.js.map