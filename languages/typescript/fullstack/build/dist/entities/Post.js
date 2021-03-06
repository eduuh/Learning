var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
var Post = /** @class */ (function () {
    function Post(title) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.title = title;
    }
    __decorate([
        PrimaryKey()
    ], Post.prototype, "id", void 0);
    __decorate([
        Property()
    ], Post.prototype, "createdAt", void 0);
    __decorate([
        Property({ onUpdate: function () { return new Date(); } })
    ], Post.prototype, "updatedAt", void 0);
    __decorate([
        Property()
    ], Post.prototype, "title", void 0);
    Post = __decorate([
        Entity()
    ], Post);
    return Post;
}());
export { Post };
//# sourceMappingURL=Post.js.map